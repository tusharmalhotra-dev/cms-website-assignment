import express from 'express'
import payload from 'payload'
import dotenv from 'dotenv'
import { MongoMemoryServer } from 'mongodb-memory-server'
import cors from 'cors'

dotenv.config()

const app = express()

// Add comprehensive error handling
process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason)
})

process.on('uncaughtException', (error) => {
  console.error('Uncaught Exception:', error)
  process.exit(1)
})

// Add CORS middleware for frontend communication
app.use(cors({
  origin: process.env.NODE_ENV === 'production' 
    ? [process.env.FRONTEND_URL] 
    : ['http://localhost:3000', 'http://localhost:3001'], // Next.js frontend + admin
  credentials: true,
}))

// Add basic middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Redirect root to admin
app.get('/', (_, res) => {
  res.redirect('/admin')
})

// Health check endpoint
app.get('/health', (_, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() })
})

const start = async () => {
  try {
    let mongoUri: string

    if (process.env.NODE_ENV === 'production') {
      // Use provided database URI in production
      mongoUri = process.env.DATABASE_URI!
      if (!mongoUri) {
        throw new Error('DATABASE_URI is required in production')
      }
    } else {
      // Use in-memory MongoDB for development
      const mongod = await MongoMemoryServer.create()
      mongoUri = mongod.getUri()
      console.log(`In-memory MongoDB started at: ${mongoUri}`)
    }

    // Initialize Payload
    await payload.init({
      secret: process.env.PAYLOAD_SECRET || 'your-secret-key-here-12345',
      express: app,
      onInit: async () => {
        payload.logger.info(`Payload Admin URL: ${payload.getAdminURL()}`)
      },
    })

    const PORT = process.env.PORT || 3002

    const server = app.listen(PORT, async () => {
      payload.logger.info(`PayloadCMS Server listening on port ${PORT}`)
      payload.logger.info(`Admin Panel: http://localhost:${PORT}/admin`)
      console.log('🚀 Server is ready and stable!')
    })

    // Handle server errors
    server.on('error', (error) => {
      console.error('Server error:', error)
    })

    // Graceful shutdown
    process.on('SIGTERM', () => {
      console.log('SIGTERM received, shutting down gracefully')
      server.close(() => {
        console.log('Server closed')
        if (process.env.NODE_ENV !== 'production') {
          MongoMemoryServer.create().then(mongod => mongod.stop())
        }
        process.exit(0)
      })
    })

    process.on('SIGINT', () => {
      console.log('SIGINT received, shutting down gracefully')
      server.close(() => {
        console.log('Server closed')
        if (process.env.NODE_ENV !== 'production') {
          MongoMemoryServer.create().then(mongod => mongod.stop())
        }
        process.exit(0)
      })
    })

  } catch (error) {
    console.error('Failed to start server:', error)
    process.exit(1)
  }
}

start().catch((error) => {
  console.error('Critical startup error:', error)
  process.exit(1)
})
