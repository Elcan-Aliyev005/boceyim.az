"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MatrixRain } from "@/components/matrix-rain"
import { TextGenerateEffect } from "@/components/ui/text-generate-effect"
import {
  ArrowRight,
  Check,
  Star,
  Terminal,
  Smartphone,
  Globe,
  Database,
  Phone,
  ShoppingCart,
  Brain,
  Shield,
  Zap,
  Code,
} from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"
// Import MobileMenu komponentini əlavə edin
import { MobileMenu } from "@/components/mobile-menu"

export default function ServicesPage() {
  const services = [
    {
      id: 1,
      title: "Mobil Tətbiq Xidməti",
      description: "iOS və Android üçün yüksək performanslı native və cross-platform tətbiqlər",
      icon: <Smartphone className="h-8 w-8" />,
      color: "from-cyan-500 to-blue-500",
      features: [
        "Native iOS/Android Development",
        "React Native & Flutter",
        "UI/UX Design & Prototyping",
        "App Store Optimization",
        "Push Notifications",
        "Offline Functionality",
        "Real-time Synchronization",
        "Biometric Authentication",
      ],
      price: "2000 AZN-dən",
      popular: true,
    },
    {
      id: 2,
      title: "Web Sayt İnkişafı",
      description: "Müasir, responsive və yüksək performanslı web həlləri",
      icon: <Globe className="h-8 w-8" />,
      color: "from-green-500 to-emerald-500",
      features: [
        "React/Next.js Development",
        "Full-Stack Solutions",
        "Progressive Web Apps (PWA)",
        "SEO Optimization",
        "Performance Optimization",
        "Responsive Design",
        "CMS Integration",
        "API Development",
      ],
      price: "1500 AZN-dən",
      popular: false,
    },
    {
      id: 3,
      title: "CRM Sistemləri",
      description: "Müştəri əlaqələrinin idarə edilməsi və biznes proseslərinin avtomatlaşdırılması",
      icon: <Database className="h-8 w-8" />,
      color: "from-purple-500 to-pink-500",
      features: [
        "Custom CRM Development",
        "Lead Management",
        "Sales Pipeline Automation",
        "Customer Analytics",
        "Integration with Third-party Tools",
        "Mobile CRM Apps",
        "Reporting & Dashboards",
        "Workflow Automation",
      ],
      price: "3000 AZN-dən",
      popular: false,
    },
    {
      id: 4,
      title: "Call Center Həlləri",
      description: "AI-powered zəng mərkəzi və müştəri xidmətləri avtomatlaşdırılması",
      icon: <Phone className="h-8 w-8" />,
      color: "from-orange-500 to-red-500",
      features: [
        "VoIP Integration",
        "AI Voice Assistant",
        "Call Recording & Analytics",
        "Queue Management",
        "CRM Integration",
        "Real-time Monitoring",
        "Automatic Call Distribution",
        "Performance Metrics",
      ],
      price: "2500 AZN-dən",
      popular: false,
    },
    {
      id: 5,
      title: "E-commerce Platformaları",
      description: "Güclü və scalable onlayn ticarət həlləri",
      icon: <ShoppingCart className="h-8 w-8" />,
      color: "from-indigo-500 to-purple-500",
      features: [
        "Custom E-commerce Development",
        "Payment Gateway Integration",
        "Inventory Management",
        "Multi-vendor Support",
        "Mobile Commerce",
        "SEO & Marketing Tools",
        "Analytics & Reporting",
        "Security & Compliance",
      ],
      price: "2800 AZN-dən",
      popular: false,
    },
    {
      id: 6,
      title: "AI & Machine Learning",
      description: "Süni intellekt və maşın öyrənməsi həlləri",
      icon: <Brain className="h-8 w-8" />,
      color: "from-pink-500 to-rose-500",
      features: [
        "Custom AI Solutions",
        "Machine Learning Models",
        "Natural Language Processing",
        "Computer Vision",
        "Predictive Analytics",
        "Chatbot Development",
        "Data Mining",
        "AI Integration",
      ],
      price: "4000 AZN-dən",
      popular: false,
    },
  ]

  return (
    <div className="flex flex-col min-h-screen bg-black text-white overflow-hidden">
      <MatrixRain />

      {/* Header */}
      

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5"></div>
          <div className="container mx-auto px-4 lg:px-6 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                <Badge className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-400 border-cyan-500/30 mb-6">
                  Xidmətlərimiz
                </Badge>
                <TextGenerateEffect
                  words="Rəqəmsal Arsenalımız"
                  className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-200 to-blue-200 bg-clip-text text-transparent"
                />
                
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Ən müasir texnologiyalar və innovativ yanaşmalarla biznesinizi kiberməkanda dominant etməyə
                  hazırlayırıq. Hər bir həll unikal və scalable-dır.
                </p>
                <div className="flex items-center justify-center space-x-2">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="text-gray-400">5.0/5 müştəri qiymətləndirməsi</span>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-black">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card
                    className={`relative bg-gray-900/50 border-gray-800 hover:border-cyan-500/50 transition-all duration-300 group hover:shadow-2xl hover:shadow-cyan-500/10 h-full ${
                      service.popular ? "ring-2 ring-cyan-500/50" : ""
                    }`}
                  >
                    {service.popular && (
                      <Badge className="absolute -top-3 left-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white">
                        Ən Populyar
                      </Badge>
                    )}
                    <CardHeader>
                      <div
                        className={`w-16 h-16 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform`}
                      >
                        {service.icon}
                      </div>
                      <CardTitle className="text-xl text-white group-hover:text-cyan-400 transition-colors">
                        {service.title}
                      </CardTitle>
                      <CardDescription className="text-gray-400">{service.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="space-y-3">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center space-x-2">
                            <Check className="h-4 w-4 text-cyan-400 flex-shrink-0" />
                            <span className="text-sm text-gray-300">{feature}</span>
                          </div>
                        ))}
                      </div>
                      <div className="border-t border-gray-800 pt-4">
                        <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-4">
                          {service.price}
                        </div>
                        <Link href={`/services/${service.id}`}>
                          <Button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white border-0">
                            Ətraflı Məlumat
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="text-center mb-16">
              <Badge className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-400 border-cyan-500/30 mb-4">
                İş Prosesimiz
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Hacker Metodologiyası
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Hər layihəni sistemli və strategik şəkildə həyata keçiririk
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Reconnaissance",
                  description: "Biznes ehtiyaclarını dərin analiz edirik və texniki tələbləri müəyyən edirik",
                  icon: <Shield className="h-6 w-6" />,
                },
                {
                  step: "02",
                  title: "Architecture",
                  description: "Scalable və secure sistem arxitekturasını dizayn edirik",
                  icon: <Code className="h-6 w-6" />,
                },
                {
                  step: "03",
                  title: "Development",
                  description: "Agile metodologiya ilə iterativ inkişaf prosesi həyata keçiririk",
                  icon: <Zap className="h-6 w-6" />,
                },
                {
                  step: "04",
                  title: "Deployment",
                  description: "CI/CD pipeline ilə avtomatlaşdırılmış deployment və monitoring",
                  icon: <Terminal className="h-6 w-6" />,
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="text-center group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="relative mb-6">
                    <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto group-hover:scale-110 transition-transform">
                      {item.step}
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </div>
                  <div className="flex justify-center mb-4">
                    <div className="p-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg text-cyan-400">
                      {item.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-cyan-400">{item.title}</h3>
                  <p className="text-gray-400">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-black">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl blur-3xl"></div>
                  <Image
                    src="/services-image.png"
                    alt="Xidmətlərimiz"
                    width={600}
                    height={500}
                    className="rounded-2xl shadow-2xl relative z-10 border border-cyan-500/20"
                  />
                </div>
              </motion.div>
              <motion.div
                className="space-y-8"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div>
                  <Badge className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-400 border-cyan-500/30 mb-4">
                    Niyə SoftMagic?
                  </Badge>
                  <h2 className="text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    Elite Texnoloji Üstünlük
                  </h2>
                  <p className="text-lg text-gray-400">
                    Hacker mentaliteti və enterprise keyfiyyəti birləşdirərək rəqiblərinizi geridə buraxan həllər
                    yaradırıq
                  </p>
                </div>
                <div className="space-y-4">
                  {[
                    "Cutting-edge texnologiyalar (AI, Blockchain, Quantum)",
                    "24/7 real-time monitoring və dəstək",
                    "Penetration testing və security audit",
                    "Scalable cloud-native arxitektura",
                    "DevSecOps və CI/CD automation",
                    "99.9% uptime zəmanəti",
                    "Agile development və rapid deployment",
                    "Post-launch optimization və maintenance",
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center space-x-3"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="w-6 h-6 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center">
                        <Check className="h-4 w-4 text-white" />
                      </div>
                      <span className="text-gray-300">{item}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="container mx-auto px-4 lg:px-6 text-center relative z-10">
            <motion.div
              className="max-w-3xl mx-auto space-y-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-white">Rəqəmsal Dominantlığa Hazırsınız?</h2>
              <p className="text-xl text-blue-100">
                Pulsuz konsultasiya alın və layihənizin texniki analizi üçün bizimlə əlaqə saxlayın
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button
                    size="lg"
                    variant="secondary"
                    className="text-lg px-8 bg-white text-gray-900 hover:bg-gray-100"
                  >
                    Pulsuz Konsultasiya
                  </Button>
                </Link>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 border-white text-white hover:bg-white hover:text-gray-900"
                >
                  Portfeli İncələ
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>


    </div>
  )
}
