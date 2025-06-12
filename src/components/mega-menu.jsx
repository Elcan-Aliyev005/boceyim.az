"use client"

import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Smartphone, Globe, Database, Phone, ShoppingCart, Brain, ArrowRight, Zap } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export function MegaMenu({ isOpen, onClose }) {
  const services = [
    {
      id: 1,
      title: "Mobil Tətbiq Xidməti",
      description: "iOS və Android üçün yüksək performanslı mobil tətbiqlər",
      icon: <Smartphone className="h-6 w-6" />,
      color: "from-cyan-500 to-blue-500",
      price: "2000 AZN-dən",
      features: ["Native Development", "Cross-Platform", "UI/UX Design"],
      popular: true,
    },
    {
      id: 2,
      title: "Web Sayt İnkişafı",
      description: "Müasir, responsive və yüksək performanslı web həlləri",
      icon: <Globe className="h-6 w-6" />,
      color: "from-green-500 to-emerald-500",
      price: "1500 AZN-dən",
      features: ["React/Next.js", "Full-Stack", "SEO Optimized"],
      popular: false,
    },
    {
      id: 3,
      title: "CRM Sistemləri",
      description: "Müştəri əlaqələrinin idarə edilməsi və avtomatlaşdırma",
      icon: <Database className="h-6 w-6" />,
      color: "from-purple-500 to-pink-500",
      price: "3000 AZN-dən",
      features: ["Custom CRM", "Integration", "Analytics"],
      popular: false,
    },
    {
      id: 4,
      title: "Call Center Həlləri",
      description: "AI-powered zəng mərkəzi və müştəri xidmətləri",
      icon: <Phone className="h-6 w-6" />,
      color: "from-orange-500 to-red-500",
      price: "2500 AZN-dən",
      features: ["VoIP Integration", "AI Assistant", "Real-time Analytics"],
      popular: false,
    },
    {
      id: 5,
      title: "E-commerce Platformaları",
      description: "Güclü və scalable onlayn ticarət həlləri",
      icon: <ShoppingCart className="h-6 w-6" />,
      color: "from-indigo-500 to-purple-500",
      price: "2800 AZN-dən",
      features: ["Payment Gateway", "Inventory Management", "Multi-vendor"],
      popular: false,
    },
    {
      id: 6,
      title: "AI & Machine Learning",
      description: "Süni intellekt və maşın öyrənməsi həlləri",
      icon: <Brain className="h-6 w-6" />,
      color: "from-pink-500 to-rose-500",
      price: "4000 AZN-dən",
      features: ["Custom AI Solutions", "ML Models", "Data Analytics"],
      popular: false,
    },
  ]

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="absolute top-full left-0 right-0 bg-black/95 backdrop-blur-xl border-t border-cyan-400/20 shadow-2xl shadow-cyan-400/10 z-50"
          onMouseLeave={onClose}
        >
          <div className="container mx-auto px-4 lg:px-6 py-8">
            <div className="mb-6">
              <div className="flex items-center space-x-2 mb-2">
                <Badge className="bg-cyan-400/20 text-cyan-400 border-cyan-400/50 font-mono">
                  <Zap className="h-3 w-3 mr-1" />
                  DIGITAL_ARSENAL.EXE
                </Badge>
              </div>
              <h3 className="text-2xl font-bold text-cyan-400 font-mono mb-2">Xidmətlərimiz</h3>
              <p className="text-gray-400 font-mono text-sm">Biznesinizi gələcəyə hazırlayan texnoloji həllər</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  <Link href={`/services/${service.id}`}>
                    <Card className="bg-gray-900/50 border-gray-800 hover:border-cyan-400/50 transition-all duration-300 group hover:shadow-lg hover:shadow-cyan-400/10 cursor-pointer h-full">
                      {service.popular && (
                        <Badge className="absolute -top-2 -right-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-xs">
                          Populyar
                        </Badge>
                      )}
                      <CardHeader className="pb-3">
                        <div className="flex items-start space-x-3">
                          <div
                            className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center text-white group-hover:scale-110 transition-transform`}
                          >
                            {service.icon}
                          </div>
                          <div className="flex-1 min-w-0">
                            <CardTitle className="text-white group-hover:text-cyan-400 transition-colors font-mono text-sm leading-tight">
                              {service.title}
                            </CardTitle>
                            <div className="text-cyan-400 font-mono text-xs mt-1">{service.price}</div>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <CardDescription className="text-gray-400 text-xs mb-3 line-clamp-2">
                          {service.description}
                        </CardDescription>
                        <div className="flex flex-wrap gap-1">
                          {service.features.slice(0, 2).map((feature, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs border-gray-700 text-gray-400">
                              {feature}
                            </Badge>
                          ))}
                          {service.features.length > 2 && (
                            <Badge variant="outline" className="text-xs border-gray-700 text-gray-400">
                              +{service.features.length - 2}
                            </Badge>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>

            <div className="border-t border-gray-800 pt-6">
              <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
                <div className="text-center sm:text-left">
                  <p className="text-gray-400 font-mono text-sm">
                    Bütün xidmətlərimizi kəşf edin və layihənizi başlayın
                  </p>
                </div>
                <div className="flex space-x-4">
                  <Link href="/services">
                    <Button
                      variant="outline"
                      className="border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 font-mono"
                    >
                      Bütün Xidmətlər
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/contact">
                    <Button className="bg-cyan-400 text-black hover:bg-cyan-300 font-mono">Layihə Başlat</Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
