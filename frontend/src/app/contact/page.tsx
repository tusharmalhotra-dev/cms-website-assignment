import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { ContactForm } from '@/components/forms/ContactForm'
import { Mail, Phone, MapPin, Clock } from 'lucide-react'

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Header />
      
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-secondary-900 mb-6">
                Get in Touch
              </h1>
              <p className="text-xl text-secondary-600 max-w-3xl mx-auto">
                Ready to transform your business? Contact us today and let's discuss 
                how our AI-powered solutions can boost your productivity.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-1">
                <div className="bg-primary-600 rounded-2xl p-8 text-white">
                  <h2 className="text-2xl font-bold mb-8">Contact Information</h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <Mail className="w-6 h-6 mt-1 text-primary-200" />
                      <div>
                        <div className="font-semibold">Email</div>
                        <div className="text-primary-100">hello@techflow.com</div>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <Phone className="w-6 h-6 mt-1 text-primary-200" />
                      <div>
                        <div className="font-semibold">Phone</div>
                        <div className="text-primary-100">+1 (555) 123-4567</div>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <MapPin className="w-6 h-6 mt-1 text-primary-200" />
                      <div>
                        <div className="font-semibold">Address</div>
                        <div className="text-primary-100">
                          123 Innovation Street<br />
                          San Francisco, CA 94105
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <Clock className="w-6 h-6 mt-1 text-primary-200" />
                      <div>
                        <div className="font-semibold">Business Hours</div>
                        <div className="text-primary-100">
                          Mon - Fri: 9:00 AM - 6:00 PM PST<br />
                          Sat - Sun: Closed
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-2">
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-secondary-200">
                  <h2 className="text-2xl font-bold text-secondary-900 mb-6">
                    Send us a Message
                  </h2>
                  <ContactForm />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}