import express from 'express'
import payload from 'payload'
import dotenv from 'dotenv'
import { MongoMemoryServer } from 'mongodb-memory-server'
import cors from 'cors'

dotenv.config()

const app = express()

process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason)
})

process.on('uncaughtException', (error) => {
  console.error('Uncaught Exception:', error)
  process.exit(1)
})

app.use(cors({
  origin: process.env.NODE_ENV === 'production' 
    ? [process.env.FRONTEND_URL || 'https://your-frontend.vercel.app'] 
    : ['http://localhost:3000', 'http://localhost:3001'],
  credentials: true,
}))

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (_, res) => {
  res.redirect('/admin')
})

app.get('/health', (_, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() })
})

const start = async () => {
  try {
    let mongod: MongoMemoryServer | null = null

    // Only start in-memory MongoDB for development
    if (process.env.NODE_ENV !== 'production' && !process.env.DATABASE_URI) {
      mongod = await MongoMemoryServer.create()
      const mongoUri = mongod.getUri()
      process.env.DATABASE_URI = mongoUri
      console.log(`In-memory MongoDB started at: ${mongoUri}`)
    } else if (process.env.NODE_ENV === 'production') {
      console.log('Using production database from DATABASE_URI')
    }

    // PayloadCMS will handle the database connection using the config
    await payload.init({
      secret: process.env.PAYLOAD_SECRET || 'your-secret-key-here-12345',
      express: app,
      onInit: async () => {
        payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`)
      },
    })

    const PORT = process.env.PORT || 3002

    const server = app.listen(PORT, () => {
      payload.logger.info(`PayloadCMS Server listening on port ${PORT}`)
      console.log('🚀 Server is ready and stable!')
    })

    server.on('error', (error) => {
      console.error('Server error:', error)
      process.exit(1)
    })

    const gracefulShutdown = () => {
      console.log('Shutting down gracefully...')
      server.close(async () => {
        console.log('Server closed')
        if (mongod) {
          await mongod.stop()
          console.log('In-memory database stopped')
        }
        process.exit(0)
      })
    }

    process.on('SIGTERM', gracefulShutdown)
    process.on('SIGINT', gracefulShutdown)

  } catch (error) {
    console.error('Failed to start server:', error)
    process.exit(1)
  }
}

start().catch((error) => {
  console.error('Critical startup error:', error)
  process.exit(1)
})
