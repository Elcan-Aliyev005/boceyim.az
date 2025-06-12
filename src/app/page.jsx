"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal"
import { MatrixRain } from "@/components/matrix-rain"
import { MegaMenu } from "@/components/mega-menu"
import {
  ArrowRight,
  Code,
  Shield,
  Zap,
  Terminal,
  Database,
  Globe,
  Smartphone,
  ShoppingCart,
  Phone,
  CheckCircle,
  Play,
  Lock,
  Cpu,
  Eye,
} from "lucide-react"
import Image from "next/image"
import { motion, useAnimation } from "framer-motion"
import { useEffect, useState } from "react"
import { MobileMenu } from "@/components/mobile-menu"

export default function HomePage() {
  const [mounted, setMounted] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)


  useEffect(() => {
    setMounted(true)

    // Auto-slide effect
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const heroSlides = [
    {
      title: "SYSTEM BREACH INITIATED",
      subtitle: "Accessing Mainframe...",
      description: "Rəqəmsal dünyada dominantlıq qurmaq üçün ən güclü alətlərdən istifadə edirik",
      cta: "HACK THE SYSTEM",
      code: "$ sudo access --target=business --mode=transform",
      image: "/images.jpeg",
      status: "ONLINE",
    },
    {
      title: "NEURAL NETWORK ACTIVE",
      subtitle: "AI Systems Engaged...",
      description: "Süni intellekt və maşın öyrənməsi ilə gələcəyin texnologiyalarını bugün təqdim edirik",
      cta: "DEPLOY AI",
      code: "$ ai.deploy() && ml.optimize(performance)",
      image: "/images.jpeg",
      status: "PROCESSING",
    },
    {
      title: "QUANTUM ENCRYPTION",
      subtitle: "Maximum Security Protocol...",
      description: "Kiberməkan təhlükəsizliyi və blockchain texnologiyaları ilə məlumatlarınızı qoruyuruq",
      cta: "SECURE NETWORK",
      code: "$ quantum.encrypt() --level=maximum",
      image: "/images.jpeg",
      status: "SECURED",
    },
  ]

  const services = [
    {
      id: 1,
      title: "Mobil Tətbiq Xidməti",
      description: "iOS və Android üçün yüksək performanslı mobil tətbiqlər",
      icon: <Smartphone className="h-8 w-8" />,
      color: "from-cyan-500 to-blue-500",
      features: ["Native Development", "Cross-Platform", "UI/UX Design"],
    },
    {
      id: 2,
      title: "Web Sayt İnkişafı",
      description: "Müasir və responsive web həlləri",
      icon: <Globe className="h-8 w-8" />,
      color: "from-green-500 to-emerald-500",
      features: ["React/Next.js", "Full-Stack", "SEO Optimized"],
    },
    {
      id: 3,
      title: "CRM Sistemləri",
      description: "Müştəri əlaqələrinin idarə edilməsi",
      icon: <Database className="h-8 w-8" />,
      color: "from-purple-500 to-pink-500",
      features: ["Custom CRM", "Integration", "Analytics"],
    },
    {
      id: 4,
      title: "Call Center Həlləri",
      description: "Avtomatlaşdırılmış zəng mərkəzi sistemləri",
      icon: <Phone className="h-8 w-8" />,
      color: "from-orange-500 to-red-500",
      features: ["VoIP Integration", "AI Assistant", "Real-time Analytics"],
    },
    {
      id: 5,
      title: "E-commerce Platformaları",
      description: "Güclü onlayn ticarət həlləri",
      icon: <ShoppingCart className="h-8 w-8" />,
      color: "from-indigo-500 to-purple-500",
      features: ["Payment Gateway", "Inventory Management", "Multi-vendor"],
    },
  ]

  const stickyContent = [
    {
      title: "Kiberməkan Təhlükəsizliyi",
      description:
        "Ən son şifrələmə texnologiyaları və təhlükəsizlik protokolları ilə məlumatlarınızı qoruyuruq. Penetration testing və vulnerability assessment xidmətlərimizlə sistemlərinizi gücləndirik.",
      content: (
        <div className="h-full w-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white">
          <Shield className="h-20 w-20" />
        </div>
      ),
    },
    {
      title: "AI və Machine Learning",
      description:
        "Süni intellekt və maşın öyrənməsi alqoritmləri ilə biznes proseslərinizi avtomatlaşdırın. Predictive analytics və data mining ilə gələcəyi proqnozlaşdırın.",
      content: (
        <div className="h-full w-full bg-gradient-to-br from-pink-500 to-violet-600 flex items-center justify-center text-white">
          <Terminal className="h-20 w-20" />
        </div>
      ),
    },
    {
      title: "Cloud Computing",
      description:
        "AWS, Azure və Google Cloud platformalarında scalable və cost-effective həllər. Microservices arxitekturası və containerization ilə performansı maksimuma çatdırın.",
      content: (
        <div className="h-full w-full bg-gradient-to-br from-orange-500 to-yellow-600 flex items-center justify-center text-white">
          <Database className="h-20 w-20" />
        </div>
      ),
    },
  ]

  const stats = [
    { number: "1337+", label: "Systems Hacked", icon: <Code className="h-6 w-6" /> },
    { number: "99.9%", label: "Uptime", icon: <Zap className="h-6 w-6" /> },
    { number: "24/7", label: "Monitoring", icon: <Eye className="h-6 w-6" /> },
    { number: "∞", label: "Possibilities", icon: <Cpu className="h-6 w-6" /> },
  ]

  if (!mounted) {
    return null
  }

  return (
    <div className="flex flex-col min-h-screen bg-black text-white overflow-hidden">
      <MatrixRain />

      {/* Header */}
      {/* <header className="border-b border-cyan-400/20 bg-black/90 backdrop-blur-sm sticky top-0 z-50 relative">
        <div className="container mx-auto px-4 lg:px-6 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center shadow-lg shadow-cyan-400/50">
              <Terminal className="h-6 w-6 text-black" />
            </div>
            <span className="font-bold text-2xl font-mono text-cyan-400">SoftMagic</span>
            <span className="text-xs text-cyan-400/60 font-mono">.az</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-sm font-medium text-cyan-400 hover:text-cyan-300 transition-colors font-mono"
            >
              root@home:~$
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium text-gray-300 hover:text-cyan-400 transition-colors font-mono"
            >
              ./about
            </Link>
            <div
              className="relative"
              onMouseEnter={() => setIsMegaMenuOpen(true)}
              onMouseLeave={() => setIsMegaMenuOpen(false)}
            >
              <Link
                href="/services"
                className="text-sm font-medium text-gray-300 hover:text-cyan-400 transition-colors font-mono"
              >
                ./services
              </Link>
            </div>
            <Link
              href="/contact"
              className="text-sm font-medium text-gray-300 hover:text-cyan-400 transition-colors font-mono"
            >
              ./contact
            </Link>
            <Button className="bg-cyan-400 text-black hover:bg-cyan-300 font-mono shadow-lg shadow-cyan-400/30">
              <Terminal className="h-4 w-4 mr-2" />
              EXECUTE
            </Button>
          </nav>
          <MobileMenu />
        </div>

        <MegaMenu isOpen={isMegaMenuOpen} onClose={() => setIsMegaMenuOpen(false)} />
      </header> */}

      <main className="flex-1">
        {/* Hero Section - Completely Redesigned */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Animated Background Grid */}
          <div className="absolute inset-0 opacity-20">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `
                linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
              `,
                backgroundSize: "50px 50px",
                animation: "grid-move 20s linear infinite",
              }}
            ></div>
          </div>

          {/* Glitch Effects */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-2 h-32 bg-cyan-400 opacity-30 animate-pulse"></div>
            <div className="absolute bottom-1/3 right-1/3 w-1 h-24 bg-blue-400 opacity-40 animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 right-1/4 w-3 h-16 bg-red-400 opacity-20 animate-pulse delay-2000"></div>
          </div>

          <div className="container mx-auto px-4 lg:px-6 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
              {/* Left Side - Content */}
              <motion.div
                className="space-y-8"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                {/* Status Bar */}
                <motion.div
                  className="flex items-center space-x-4 font-mono text-sm"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
                    <span className="text-cyan-400">STATUS: {heroSlides[currentSlide].status}</span>
                  </div>
                  <div className="text-gray-500">|</div>
                  <div className="text-blue-400">SECURITY: MAXIMUM</div>
                  <div className="text-gray-500">|</div>
                  <div className="text-yellow-400">UPTIME: 99.9%</div>
                </motion.div>

                {/* Main Title */}
                <div className="space-y-4">
                  <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                  >
                    <Badge className="bg-cyan-400/20 text-cyan-400 border-cyan-400/50 font-mono mb-4">
                      <Lock className="h-3 w-3 mr-1" />
                      {heroSlides[currentSlide].subtitle}
                    </Badge>

                    <h1 className="text-5xl lg:text-7xl font-bold font-mono leading-tight">
                      <span
                        className="text-cyan-400 drop-shadow-lg"
                        // style={{
                        //   textShadow: "0 0 10px #00ffff, 0 0 20px #00ffff, 0 0 30px #00ffff",
                        // }}
                      >
                        {heroSlides[currentSlide].title.split(" ")[0]}
                      </span>
                      <br />
                      <span className="text-white">{heroSlides[currentSlide].title.split(" ").slice(1).join(" ")}</span>
                    </h1>
                  </motion.div>

                  <motion.p
                    className="text-xl text-gray-300 max-w-lg leading-relaxed font-mono"
                    key={`desc-${currentSlide}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    {heroSlides[currentSlide].description}
                  </motion.p>
                </div>

                {/* Terminal Command */}
                <motion.div
                  className="bg-black/80 border border-cyan-400/30 rounded-lg p-4 font-mono text-sm"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                >
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-gray-400 ml-2">terminal</span>
                  </div>
                  <div className="text-cyan-400">
                    <span className="text-blue-400">root@softmagic:~$</span> {heroSlides[currentSlide].code}
                    <span className="animate-pulse">|</span>
                  </div>
                </motion.div>

                {/* Action Buttons */}
                <motion.div
                  className="flex flex-col sm:flex-row gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  <Button
                    size="lg"
                    className="bg-cyan-400 text-black hover:bg-cyan-300 font-mono text-lg px-8 shadow-lg shadow-cyan-400/30 border-2 border-cyan-400"
                  >
                    <Terminal className="mr-2 h-5 w-5" />
                    {heroSlides[currentSlide].cta}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 font-mono text-lg px-8"
                  >
                    <Play className="mr-2 h-5 w-5" />
                    WATCH DEMO
                  </Button>
                </motion.div>

                {/* Metrics */}
                <motion.div
                  className="flex items-center space-x-8 pt-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1 }}
                >
                  <div className="text-center">
                    <div className="text-2xl font-bold text-cyan-400 font-mono">1337+</div>
                    <div className="text-xs text-gray-400 font-mono">SYSTEMS</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-400 font-mono">99.9%</div>
                    <div className="text-xs text-gray-400 font-mono">SUCCESS</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-yellow-400 font-mono">24/7</div>
                    <div className="text-xs text-gray-400 font-mono">ACTIVE</div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Right Side - Visual */}
              <motion.div
                className="relative"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
              >
                <div className="relative">
                  {/* Holographic Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-2xl blur-3xl animate-pulse"></div>

                  {/* Main Display */}
                  <div className="relative bg-black/80 border-2 border-cyan-400/50 rounded-2xl p-8 backdrop-blur-sm">
                    {/* Screen Header */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      </div>
                      <div className="text-cyan-400 font-mono text-sm">SOFTMAGIC_OS v2.0</div>
                    </div>

                    {/* Animated Code Display */}
                    <div className="space-y-2 font-mono text-sm">
                      <div className="text-gray-500">// Initializing quantum systems...</div>
                      <div className="text-blue-400">const magic = new SoftMagic();</div>
                      <div className="text-cyan-400">magic.deploy({`{`}</div>
                      <div className="text-white ml-4">target: 'business',</div>
                      <div className="text-white ml-4">mode: 'transform',</div>
                      <div className="text-white ml-4">security: 'maximum'</div>
                      <div className="text-cyan-400">{`}`});</div>
                      <div className="text-yellow-400 animate-pulse">{"> System ready. Awaiting commands..."}</div>
                    </div>

                    {/* System Stats */}
                    <div className="mt-8 grid grid-cols-2 gap-4">
                      <div className="bg-cyan-400/10 border border-cyan-400/30 rounded p-3">
                        <div className="text-cyan-400 font-mono text-xs">CPU USAGE</div>
                        <div className="text-2xl font-bold text-cyan-400 font-mono">87%</div>
                      </div>
                      <div className="bg-blue-400/10 border border-blue-400/30 rounded p-3">
                        <div className="text-blue-400 font-mono text-xs">MEMORY</div>
                        <div className="text-2xl font-bold text-blue-400 font-mono">12GB</div>
                      </div>
                      <div className="bg-yellow-400/10 border border-yellow-400/30 rounded p-3">
                        <div className="text-yellow-400 font-mono text-xs">NETWORK</div>
                        <div className="text-2xl font-bold text-yellow-400 font-mono">1Gb/s</div>
                      </div>
                      <div className="bg-red-400/10 border border-red-400/30 rounded p-3">
                        <div className="text-red-400 font-mono text-xs">THREATS</div>
                        <div className="text-2xl font-bold text-red-400 font-mono">0</div>
                      </div>
                    </div>
                  </div>

                  {/* Floating Elements */}
                  <motion.div
                    className="absolute -top-4 -right-4 w-8 h-8 bg-cyan-400 rounded-full"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                    }}
                  />
                  <motion.div
                    className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-400 rounded-full"
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.3, 0.8, 0.3],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Number.POSITIVE_INFINITY,
                      ease: "easeInOut",
                      delay: 1,
                    }}
                  />
                </div>
              </motion.div>
            </div>

            {/* Slide Indicators */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {heroSlides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentSlide ? "bg-cyan-400" : "bg-gray-600"
                  }`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-gradient-to-r from-gray-900 via-black to-gray-900 border-y border-cyan-400/20">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-full text-cyan-400 group-hover:scale-110 transition-transform border border-cyan-400/30">
                      {stat.icon}
                    </div>
                  </div>
                  <div
                    className="text-3xl lg:text-4xl font-bold text-cyan-400 mb-2 font-mono"
                    style={{
                      textShadow: "0 0 10px #00ffff",
                    }}
                  >
                    {stat.number}
                  </div>
                  <div className="text-gray-400 font-mono text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Preview */}
        <section className="py-20 bg-black">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Badge className="bg-cyan-400/20 text-cyan-400 border-cyan-400/50 mb-4 font-mono">
                  <Database className="h-3 w-3 mr-1" />
                  ARSENAL.EXE
                </Badge>
                <h2
                  className="text-3xl lg:text-5xl font-bold mb-4 font-mono text-cyan-400"
                  style={{
                    textShadow: "0 0 20px #00ffff",
                  }}
                >
                  DIGITAL WEAPONS
                </h2>
                <p className="text-xl text-gray-400 max-w-3xl mx-auto font-mono">
                  Ən müasir texnologiyalar və innovativ yanaşmalarla biznesinizi gələcəyə hazırlayırıq
                </p>
              </motion.div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-gray-900/50 border-cyan-400/20 hover:border-cyan-400/50 transition-all duration-300 group hover:shadow-2xl hover:shadow-cyan-400/10">
                    <CardHeader>
                      <div
                        className={`w-16 h-16 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform shadow-lg`}
                      >
                        {service.icon}
                      </div>
                      <CardTitle className="text-white group-hover:text-cyan-400 transition-colors font-mono">
                        {service.title}
                      </CardTitle>
                      <CardDescription className="text-gray-400 font-mono text-sm">
                        {service.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2 mb-6">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <Zap className="h-3 w-3 text-cyan-400" />
                            <span className="text-sm text-gray-300 font-mono">{feature}</span>
                          </div>
                        ))}
                      </div>
                      <Link href={`/services/${service.id}`}>
                        <Button
                          variant="outline"
                          className="w-full border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 group-hover:border-cyan-400 font-mono"
                        >
                          <Terminal className="h-4 w-4 mr-2" />
                          ACCESS
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link href="/services">
                <Button
                  size="lg"
                  className="bg-cyan-400 text-black hover:bg-cyan-300 font-mono shadow-lg shadow-cyan-400/30"
                >
                  <Database className="mr-2 h-5 w-5" />
                  FULL ARSENAL
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Sticky Scroll Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="text-center mb-16">
              <Badge className="bg-cyan-400/20 text-cyan-400 border-cyan-400/50 mb-4 font-mono">TECH_STACK.JSON</Badge>
              <h2
                className="text-3xl lg:text-5xl font-bold mb-4 text-cyan-400 font-mono"
                style={{
                  textShadow: "0 0 20px #00ffff",
                }}
              >
                FUTURE PROTOCOLS
              </h2>
            </div>
            <StickyScroll content={stickyContent} />
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-blue-400/20 rounded-2xl blur-3xl"></div>
                  <Image
                    src="/services-image.png"
                    alt="Xidmətlərimiz"
                    width={600}
                    height={500}
                    className="rounded-2xl shadow-2xl relative z-10 border border-cyan-400/20"
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
                  <Badge className="bg-cyan-400/20 text-cyan-400 border-cyan-400/50 mb-4 font-mono">
                    WHY_SOFTMAGIC.EXE
                  </Badge>
                  <h2
                    className="text-3xl lg:text-4xl font-bold mb-4 text-cyan-400 font-mono"
                    style={{
                      textShadow: "0 0 15px #00ffff",
                    }}
                  >
                    DIGITAL SUPREMACY
                  </h2>
                  <p className="text-lg text-gray-400 font-mono">
                    İllər boyu qazandığımız təcrübə və ən son texnologiyalarla biznesinizi zirvəyə çatdırırıq
                  </p>
                </div>
                <div className="space-y-4">
                  {[
                    "Cutting-edge texnologiyalar",
                    "24/7 texniki dəstək və monitoring",
                    "Agile development metodologiyası",
                    "Scalable və secure həllər",
                    "AI-powered automation",
                    "Blockchain integration",
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center space-x-3"
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="w-6 h-6 bg-cyan-400 rounded-full flex items-center justify-center shadow-lg shadow-cyan-400/50">
                        <CheckCircle className="h-4 w-4 text-black" />
                      </div>
                      <span className="text-lg text-gray-300 font-mono">{item}</span>
                    </motion.div>
                  ))}
                </div>
                <Link href="/about">
                  <Button
                    size="lg"
                    className="bg-cyan-400 text-black hover:bg-cyan-300 font-mono shadow-lg shadow-cyan-400/30"
                  >
                    LEARN_MORE.EXE
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="container mx-auto px-4 lg:px-6 text-center relative z-10">
            <motion.div
              className="max-w-4xl mx-auto space-y-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-5xl font-bold text-white font-mono">READY TO HACK THE FUTURE?</h2>
              <p className="text-xl text-cyan-100 max-w-2xl mx-auto font-mono">
                Rəqəmsal transformasiyanızı başlayın və rəqiblərinizi geridə buraxın
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  variant="secondary"
                  className="text-lg px-8 bg-white text-gray-900 hover:bg-gray-100 font-mono"
                >
                  INITIATE_PROJECT.EXE
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 border-white text-white hover:bg-white hover:text-gray-900 font-mono"
                >
                  VIEW_PORTFOLIO.BAT
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      

      <style jsx>{`
        @keyframes grid-move {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }
      `}</style>
    </div>
  )
}
