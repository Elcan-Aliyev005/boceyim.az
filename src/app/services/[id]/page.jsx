// "use client"

// import Link from "next/link"
// import { Button } from "@/components/ui/button"
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
// import { Badge } from "@/components/ui/badge"
// import { MatrixRain } from "@/components/matrix-rain"
// import { ArrowLeft, Check, Clock, Users, Award, Terminal, Smartphone, Globe, Database } from "lucide-react"
// import Image from "next/image"
// import { notFound } from "next/navigation"
// import { motion } from "framer-motion"
// // Import MobileMenu komponentini əlavə edin
// import { MobileMenu } from "@/components/mobile-menu"

// const servicesData = {
//     1: {
//         title: "Mobil Tətbiq Xidməti",
//         description: "iOS və Android üçün yüksək performanslı native və cross-platform tətbiqlər",
//         icon: <Smartphone className="h-12 w-12" />,
//         price: "2000 AZN-dən",
//         duration: "6-12 həftə",
//         color: "from-cyan-500 to-blue-500",
//         image: "/placeholder.svg?height=400&width=600",
//         overview:
//             "Biznesiniz üçün cutting-edge mobil tətbiqlər hazırlayırıq. Native performans və cross-platform effektivlik birləşdirərək istifadəçi təcrübəsini maksimuma çatdırırıq.",
//         features: [
//             "Native iOS/Android Development (Swift, Kotlin)",
//             "Cross-platform həllər (React Native, Flutter)",
//             "Advanced UI/UX Design & Prototyping",
//             "App Store Optimization (ASO)",
//             "Push Notifications & Real-time Messaging",
//             "Offline Functionality & Data Sync",
//             "Biometric Authentication (Face ID, Touch ID)",
//             "AR/VR Integration",
//             "Machine Learning Integration",
//             "Cloud Backend Integration (Firebase, AWS)",
//             "Payment Gateway Integration",
//             "Analytics & Crash Reporting",
//         ],
//         process: [
//             "Tələblərin analizi və texniki spesifikasiya",
//             "UI/UX dizayn və interaktiv prototip",
//             "Arxitektura planlaşdırması və tech stack seçimi",
//             "Agile development və iterativ inkişaf",
//             "Comprehensive testing (Unit, Integration, UI)",
//             "App Store deployment və post-launch support",
//         ],
//         portfolio: [
//             {
//                 title: "FinTech Tətbiqi",
//                 description: "Blockchain əsaslı ödəniş sistemi və crypto wallet",
//                 image: "/placeholder.svg?height=200&width=300",
//             },
//             {
//                 title: "IoT Smart Home",
//                 description: "Ağıllı ev idarəetməsi və automation tətbiqi",
//                 image: "/placeholder.svg?height=200&width=300",
//             },
//             {
//                 title: "AI Fitness Coach",
//                 description: "Machine learning əsaslı şəxsi məşqçi tətbiqi",
//                 image: "/placeholder.svg?height=200&width=300",
//             },
//         ],
//         packages: [
//             {
//                 name: "Startup",
//                 price: "2000 AZN",
//                 features: ["Sadə tətbiq (5-8 ekran)", "Bir platform", "Əsas funksionallıq", "3 ay dəstək", "Basic Analytics"],
//             },
//             {
//                 name: "Business",
//                 price: "4000 AZN",
//                 features: [
//                     "Orta mürəkkəblik (12-20 ekran)",
//                     "İki platform (iOS + Android)",
//                     "API Integration",
//                     "Push Notifications",
//                     "6 ay dəstək",
//                     "Advanced Analytics",
//                 ],
//                 popular: true,
//             },
//             {
//                 name: "Enterprise",
//                 price: "8000 AZN",
//                 features: [
//                     "Mürəkkəb tətbiq (25+ ekran)",
//                     "AI/ML Integration",
//                     "Custom Backend",
//                     "Admin Dashboard",
//                     "1 il dəstək",
//                     "White-label Solution",
//                 ],
//             },
//         ],
//     },
//     2: {
//         title: "Web Sayt İnkişafı",
//         description: "Müasir, responsive və yüksək performanslı web həlləri",
//         icon: <Globe className="h-12 w-12" />,
//         price: "1500 AZN-dən",
//         duration: "4-8 həftə",
//         color: "from-green-500 to-emerald-500",
//         image: "/placeholder.svg?height=400&width=600",
//         overview:
//             "Next-generation web həlləri ilə rəqəmsal mövcudluğunuzu gücləndirik. JAMstack arxitekturası və serverless texnologiyalarla maksimum performans təmin edirik.",
//         features: [
//             "React/Next.js Development",
//             "Full-Stack Solutions (Node.js, Python)",
//             "Progressive Web Apps (PWA)",
//             "Advanced SEO & Performance Optimization",
//             "Headless CMS Integration",
//             "E-commerce Integration",
//             "Real-time Features (WebSocket, Server-Sent Events)",
//             "API Development & Integration",
//             "Database Design & Optimization",
//             "Cloud Deployment (Vercel, AWS, Azure)",
//             "Security Implementation (HTTPS, CSRF, XSS Protection)",
//             "Analytics & Monitoring Integration",
//         ],
//         process: [
//             "Biznes tələbləri və target audience analizi",
//             "Information architecture və wireframing",
//             "Visual design və brand identity",
//             "Frontend və backend development",
//             "Performance optimization və SEO",
//             "Testing, deployment və maintenance",
//         ],
//         portfolio: [
//             {
//                 title: "SaaS Dashboard",
//                 description: "Real-time analytics və data visualization platforması",
//                 image: "/placeholder.svg?height=200&width=300",
//             },
//             {
//                 title: "E-learning Platform",
//                 description: "Interactive kurslar və video streaming sistemi",
//                 image: "/placeholder.svg?height=200&width=300",
//             },
//             {
//                 title: "Corporate Website",
//                 description: "Multilingual korporativ sayt və CMS",
//                 image: "/placeholder.svg?height=200&width=300",
//             },
//         ],
//         packages: [
//             {
//                 name: "Landing",
//                 price: "1500 AZN",
//                 features: ["Landing page", "Responsive design", "SEO optimization", "Contact forms", "3 ay dəstək"],
//             },
//             {
//                 name: "Business",
//                 price: "3000 AZN",
//                 features: [
//                     "Multi-page website",
//                     "CMS Integration",
//                     "E-commerce ready",
//                     "Advanced SEO",
//                     "6 ay dəstək",
//                     "Analytics Integration",
//                 ],
//                 popular: true,
//             },
//             {
//                 name: "Enterprise",
//                 price: "6000 AZN",
//                 features: [
//                     "Custom web application",
//                     "Advanced functionality",
//                     "API Development",
//                     "Database integration",
//                     "1 il dəstək",
//                     "Performance monitoring",
//                 ],
//             },
//         ],
//     },
//     3: {
//         title: "CRM Sistemləri",
//         description: "Müştəri əlaqələrinin idarə edilməsi və biznes proseslərinin avtomatlaşdırılması",
//         icon: <Database className="h-12 w-12" />,
//         price: "3000 AZN-dən",
//         duration: "8-16 həftə",
//         color: "from-purple-500 to-pink-500",
//         image: "/placeholder.svg?height=400&width=600",
//         overview:
//             "AI-powered CRM həlləri ilə müştəri əlaqələrinizi optimallaşdırın. Machine learning alqoritmləri və automation ilə satış proseslərinizi sürətləndirin.",
//         features: [
//             "Custom CRM Development",
//             "Lead Management & Scoring",
//             "Sales Pipeline Automation",
//             "Customer Journey Mapping",
//             "AI-powered Analytics & Insights",
//             "Email Marketing Automation",
//             "Social Media Integration",
//             "Mobile CRM Applications",
//             "Third-party Integrations (Salesforce, HubSpot)",
//             "Advanced Reporting & Dashboards",
//             "Workflow Automation",
//             "Multi-tenant Architecture",
//         ],
//         process: [
//             "Biznes proseslərinin analizi və mapping",
//             "CRM strategiyası və feature planning",
//             "Database design və system architecture",
//             "Custom development və integration",
//             "User training və change management",
//             "Ongoing optimization və support",
//         ],
//         portfolio: [
//             {
//                 title: "Real Estate CRM",
//                 description: "Property management və lead tracking sistemi",
//                 image: "/placeholder.svg?height=200&width=300",
//             },
//             {
//                 title: "Healthcare CRM",
//                 description: "Patient management və appointment scheduling",
//                 image: "/placeholder.svg?height=200&width=300",
//             },
//             {
//                 title: "E-commerce CRM",
//                 description: "Customer lifecycle və retention management",
//                 image: "/placeholder.svg?height=200&width=300",
//             },
//         ],
//         packages: [
//             {
//                 name: "Starter",
//                 price: "3000 AZN",
//                 features: ["Basic CRM features", "Contact management", "Sales pipeline", "Reporting", "6 ay dəstək"],
//             },
//             {
//                 name: "Professional",
//                 price: "6000 AZN",
//                 features: [
//                     "Advanced CRM features",
//                     "Marketing automation",
//                     "Third-party integrations",
//                     "Mobile app",
//                     "1 il dəstək",
//                     "Custom workflows",
//                 ],
//                 popular: true,
//             },
//             {
//                 name: "Enterprise",
//                 price: "12000 AZN",
//                 features: [
//                     "Full-featured CRM suite",
//                     "AI-powered insights",
//                     "Custom integrations",
//                     "Multi-tenant support",
//                     "2 il dəstək",
//                     "Dedicated support",
//                 ],
//             },
//         ],
//     },
// }

// export default function ServiceDetailPage({ params }) {
//     const service = servicesData[params.id]

//     if (!service) {
//         notFound()
//     }

//     return (
//         <div className="flex flex-col min-h-screen bg-black text-white overflow-hidden">
//             <MatrixRain />


//             <main className="flex-1">
//                 {/* Breadcrumb */}
//                 <section className="py-4 bg-gray-900/50">
//                     <div className="container mx-auto px-4 lg:px-6">
//                         <div className="flex items-center space-x-2 text-sm">
//                             <Link href="/" className="text-gray-400 hover:text-cyan-400 transition-colors">
//                                 Ana Səhifə
//                             </Link>
//                             <span className="text-gray-600">/</span>
//                             <Link href="/services" className="text-gray-400 hover:text-cyan-400 transition-colors">
//                                 Xidmətlərimiz
//                             </Link>
//                             <span className="text-gray-600">/</span>
//                             <span className="text-cyan-400">{service.title}</span>
//                         </div>
//                     </div>
//                 </section>

//                 {/* Hero Section */}
//                 <section className="py-12 bg-gradient-to-br from-black via-gray-900 to-black">
//                     <div className="container mx-auto px-4 lg:px-6">
//                         <div className="grid lg:grid-cols-2 gap-12 items-center">
//                             <motion.div
//                                 className="space-y-6"
//                                 initial={{ opacity: 0, x: -50 }}
//                                 animate={{ opacity: 1, x: 0 }}
//                                 transition={{ duration: 0.8 }}
//                             >
//                                 <Link href="/services" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors">
//                                     <ArrowLeft className="h-4 w-4 mr-2" />
//                                     Xidmətlərə qayıt
//                                 </Link>
//                                 <div className="space-y-4">
//                                     <div className={`w-20 h-20 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center text-white`}>
//                                         {service.icon}
//                                     </div>
//                                     <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
//                                         {service.title}
//                                     </h1>
//                                     <p className="text-xl text-gray-300">{service.description}</p>
//                                     <p className="text-lg text-gray-400 leading-relaxed">{service.overview}</p>
//                                 </div>
//                                 <div className="flex flex-wrap gap-4 items-center">
//                                     <div className="flex items-center space-x-2">
//                                         <Clock className="h-5 w-5 text-cyan-400" />
//                                         <span className="text-gray-300">{service.duration}</span>
//                                     </div>
//                                     <div className="flex items-center space-x-2">
//                                         <Award className="h-5 w-5 text-cyan-400" />
//                                         <span className="text-gray-300">Enterprise Grade</span>
//                                     </div>
//                                     <div className="flex items-center space-x-2">
//                                         <Users className="h-5 w-5 text-cyan-400" />
//                                         <span className="text-gray-300">Expert Team</span>
//                                     </div>
//                                 </div>
//                                 <div className="flex flex-col sm:flex-row gap-4">
//                                     <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white border-0 text-lg px-8">
//                                         Layihə Başlat
//                                     </Button>
//                                     <Button size="lg" variant="outline" className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 text-lg px-8">
//                                         Pulsuz Konsultasiya
//                                     </Button>
//                                 </div>
//                             </motion.div>
//                             <motion.div
//                                 initial={{ opacity: 0, x: 50 }}
//                                 animate={{ opacity: 1, x: 0 }}
//                                 transition={{ duration: 0.8, delay: 0.2 }}
//                             >
//                                 <div className="relative">
//                                     <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl blur-3xl"></div>
//                                     <Image
//                                         src={service.image || "/placeholder.svg"}
//                                         alt={service.title}
//                                         width={600}
//                                         height={400}
//                                         className="rounded-2xl shadow-2xl relative z-10 border border-cyan-500/20"
//                                     />
//                                 </div>
//                             </motion.div>
//                         </div>
//                     </div>
//                 </section>

//                 {/* Features Section */}
//                 <section className="py-20 bg-black">
//                     <div className="container mx-auto px-4 lg:px-6">
//                         <div className="text-center mb-12">
//                             <Badge className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-400 border-cyan-500/30 mb-4">
//                                 Texniki Spesifikasiyalar
//                             </Badge>
//                             <h2 className="text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
//                                 Nə Daxildir?
//                             </h2>
//                             <p className="text-xl text-gray-400 max-w-2xl mx-auto">
//                                 Bu xidmətdə sizin üçün hazırladığımız cutting-edge həllər
//                             </p>
//                         </div>
//                         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
//                             {service.features.map((feature, index) => (
//                                 <motion.div
//                                     key={index}
//                                     className="flex items-start space-x-3 bg-gray-900/50 p-6 rounded-lg border border-gray-800 hover:border-cyan-500/50 transition-all duration-300 group"
//                                     initial={{ opacity: 0, y: 20 }}
//                                     whileInView={{ opacity: 1, y: 0 }}
//                                     transition={{ duration: 0.5, delay: index * 0.05 }}
//                                     viewport={{ once: true }}
//                                 >
//                                     <div className="w-6 h-6 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
//                                         <Check className="h-4 w-4 text-white" />
//                                     </div>
//                                     <span className="text-gray-300 group-hover:text-white transition-colors">{feature}</span>
//                                 </motion.div>
//                             ))}
//                         </div>
//                     </div>
//                 </section>

//                 {/* Process Section */}
//                 <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900">
//                     <div className="container mx-auto px-4 lg:px-6">
//                         <div className="text-center mb-12">
//                             <Badge className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-400 border-cyan-500/30 mb-4">
//                                 Development Pipeline
//                             </Badge>
//                             <h2 className="text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
//                                 İş Prosesi
//                             </h2>
//                             <p className="text-xl text-gray-400 max-w-2xl mx-auto">
//                                 Agile metodologiya ilə layihənizi necə həyata keçiririk
//                             </p>
//                         </div>
//                         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//                             {service.process.map((step, index) => (
//                                 <motion.div
//                                     key={index}
//                                     className="text-center group"
//                                     initial={{ opacity: 0, y: 20 }}
//                                     whileInView={{ opacity: 1, y: 0 }}
//                                     transition={{ duration: 0.5, delay: index * 0.1 }}
//                                     viewport={{ once: true }}
//                                 >
//                                     <div className="relative mb-6">
//                                         <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto group-hover:scale-110 transition-transform">
//                                             {index + 1}
//                                         </div>
//                                         <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
//                                     </div>
//                                     <h3 className="text-lg font-semibold mb-2 text-cyan-400">Phase {index + 1}</h3>
//                                     <p className="text-gray-400">{step}</p>
//                                 </motion.div>
//                             ))}
//                         </div>
//                     </div>
//                 </section>

//                 {/* Packages Section */}
//                 <section className="py-20 bg-black">
//                     <div className="container mx-auto px-4 lg:px-6">
//                         <div className="text-center mb-12">
//                             <Badge className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-400 border-cyan-500/30 mb-4">
//                                 Qiymət Paketləri
//                             </Badge>
//                             <h2 className="text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
//                                 Sizə Uyğun Paketi Seçin
//                             </h2>
//                             <p className="text-xl text-gray-400 max-w-2xl mx-auto">
//                                 Ehtiyacınıza və büdcənizə uyğun həll tapın
//                             </p>
//                         </div>
//                         <div className="grid md:grid-cols-3 gap-8">
//                             {service.packages.map((pkg, index) => (
//                                 <motion.div
//                                     key={index}
//                                     initial={{ opacity: 0, y: 20 }}
//                                     whileInView={{ opacity: 1, y: 0 }}
//                                     transition={{ duration: 0.5, delay: index * 0.1 }}
//                                     viewport={{ once: true }}
//                                 >
//                                     <Card
//                                         className={`relative bg-gray-900/50 border-gray-800 hover:border-cyan-500/50 transition-all duration-300 group hover:shadow-2xl hover:shadow-cyan-500/10 h-full ${pkg.popular ? "ring-2 ring-cyan-500/50 scale-105" : ""
//                                             }`}
//                                     >
//                                         {pkg.popular && (
//                                             <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white">
//                                                 Ən Populyar
//                                             </Badge>
//                                         )}
//                                         <CardHeader className="text-center">
//                                             <CardTitle className="text-2xl text-white group-hover:text-cyan-400 transition-colors">
//                                                 {pkg.name}
//                                             </CardTitle>
//                                             <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mt-4">
//                                                 {pkg.price}
//                                             </div>
//                                         </CardHeader>
//                                         <CardContent className="space-y-4">
//                                             <div className="space-y-3">
//                                                 {pkg.features.map((feature, featureIndex) => (
//                                                     <div key={featureIndex} className="flex items-center space-x-2">
//                                                         <Check className="h-4 w-4 text-cyan-400 flex-shrink-0" />
//                                                         <span className="text-sm text-gray-300">{feature}</span>
//                                                     </div>
//                                                 ))}
//                                             </div>
//                                             <Button className="w-full mt-6 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white border-0">
//                                                 Bu Paketi Seç
//                                             </Button>
//                                         </CardContent>
//                                     </Card>
//                                 </motion.div>
//                             ))}
//                         </div>
//                     </div>
//                 </section>

//                 {/* Portfolio Section */}
//                 <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900">
//                     <div className="container mx-auto px-4 lg:px-6">
//                         <div className="text-center mb-12">
//                             <Badge className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-400 border-cyan-500/30 mb-4">
//                                 Case Studies
//                             </Badge>
//                             <h2 className="text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
//                                 Portfel Nümunələri
//                             </h2>
//                             <p className="text-xl text-gray-400 max-w-2xl mx-auto">
//                                 Bu sahədə həyata keçirdiyimiz uğurlu layihələr
//                             </p>
//                         </div>
//                         <div className="grid md:grid-cols-3 gap-8">
//                             {service.portfolio.map((item, index) => (
//                                 <motion.div
//                                     key={index}
//                                     initial={{ opacity: 0, y: 20 }}
//                                     whileInView={{ opacity: 1, y: 0 }}
//                                     transition={{ duration: 0.5, delay: index * 0.1 }}
//                                     viewport={{ once: true }}
//                                 >
//                                     <Card className="bg-gray-900/50 border-gray-800 hover:border-cyan-500/50 transition-all duration-300 group hover:shadow-2xl hover:shadow-cyan-500/10">
//                                         <div className="aspect-video relative overflow-hidden rounded-t-lg">
//                                             <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10"></div>
//                                             <Image
//                                                 src={item.image || "/placeholder.svg"}
//                                                 alt={item.title}
//                                                 width={300}
//                                                 height={200}
//                                                 className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
//                                             />
//                                         </div>
//                                         <CardHeader>
//                                             <CardTitle className="text-lg text-white group-hover:text-cyan-400 transition-colors">
//                                                 {item.title}
//                                             </CardTitle>
//                                             <CardDescription className="text-gray-400">
//                                                 {item.description}
//                                             </CardDescription>
//                                         </CardHeader>
//                                     </Card>
//                                 </motion.div>
//                             ))}
//                         </div>
//                     </div>
//                 </section>

//                 {/* CTA Section */}
//                 <section className="py-20 bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 relative overflow-hidden">
//                     <div className="absolute inset-0 bg-black/20"></div>
//                     <div className="container mx-auto px-4 lg:px-6 text-center relative z-10">
//                         <motion.div
//                             className="max-w-3xl mx-auto space-y-8"
//                             initial={{ opacity: 0, y: 20 }}
//                             whileInView={{ opacity: 1, y: 0 }}
//                             transition={{ duration: 0.8 }}
//                             viewport={{ once: true }}
//                         >
//                             <h2 className="text-3xl lg:text-4xl font-bold text-white">
//                                 Layihənizi Başlamağa Hazırsınız?
//                             </h2>
//                             <p className="text-xl text-blue-100">
//                                 Pulsuz texniki konsultasiya alın və layihənizin scope-unu müəyyən edək
//                             </p>
//                             <div className="flex flex-col sm:flex-row gap-4 justify-center">
//                                 <Link href="/contact">
//                                     <Button size="lg" variant="secondary" className="text-lg px-8 bg-white text-gray-900 hover:bg-gray-100">
//                                         İndi Başlayın
//                                     </Button>
//                                 </Link>
//                                 <Button
//                                     size="lg"
//                                     variant="outline"
//                                     className="text-lg px-8 border-white text-white hover:bg-white hover:text-gray-900"
//                                 >
//                                     Daha Çox Məlumat
//                                 </Button>
//                             </div>
//                         </motion.div>
//                     </div>
//                 </section>
//             </main>
//         </div>

//     )}



"use client"

import { use } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MatrixRain } from "@/components/matrix-rain"
import { ArrowLeft, Check, Clock, Users, Award, Smartphone, Globe, Database } from "lucide-react"
import Image from "next/image"
import { notFound } from "next/navigation"
import { motion } from "framer-motion"
import { MobileMenu } from "@/components/mobile-menu"

const servicesData = {
    1: {
        title: "Mobil Tətbiq Xidməti",
        description: "iOS və Android üçün yüksək performanslı native və cross-platform tətbiqlər",
        icon: <Smartphone className="h-12 w-12" />,
        price: "2000 AZN-dən",
        duration: "6-12 həftə",
        color: "from-cyan-500 to-blue-500",
        image: "/placeholder.svg?height=400&width=600",
        overview:
            "Biznesiniz üçün cutting-edge mobil tətbiqlər hazırlayırıq. Native performans və cross-platform effektivlik birləşdirərək istifadəçi təcrübəsini maksimuma çatdırırıq.",
        features: [
            "Native iOS/Android Development (Swift, Kotlin)",
            "Cross-platform həllər (React Native, Flutter)",
            "Advanced UI/UX Design & Prototyping",
            "App Store Optimization (ASO)",
            "Push Notifications & Real-time Messaging",
            "Offline Functionality & Data Sync",
            "Biometric Authentication (Face ID, Touch ID)",
            "AR/VR Integration",
            "Machine Learning Integration",
            "Cloud Backend Integration (Firebase, AWS)",
            "Payment Gateway Integration",
            "Analytics & Crash Reporting",
        ],
        process: [
            "Tələblərin analizi və texniki spesifikasiya",
            "UI/UX dizayn və interaktiv prototip",
            "Arxitektura planlaşdırması və tech stack seçimi",
            "Agile development və iterativ inkişaf",
            "Comprehensive testing (Unit, Integration, UI)",
            "App Store deployment və post-launch support",
        ],
        portfolio: [
            {
                title: "FinTech Tətbiqi",
                description: "Blockchain əsaslı ödəniş sistemi və crypto wallet",
                image: "/placeholder.svg?height=200&width=300",
            },
            {
                title: "IoT Smart Home",
                description: "Ağıllı ev idarəetməsi və automation tətbiqi",
                image: "/placeholder.svg?height=200&width=300",
            },
            {
                title: "AI Fitness Coach",
                description: "Machine learning əsaslı şəxsi məşqçi tətbiqi",
                image: "/placeholder.svg?height=200&width=300",
            },
        ],
        packages: [
            {
                name: "Startup",
                price: "2000 AZN",
                features: ["Sadə tətbiq (5-8 ekran)", "Bir platform", "Əsas funksionallıq", "3 ay dəstək", "Basic Analytics"],
            },
            {
                name: "Business",
                price: "4000 AZN",
                features: [
                    "Orta mürəkkəblik (12-20 ekran)",
                    "İki platform (iOS + Android)",
                    "API Integration",
                    "Push Notifications",
                    "6 ay dəstək",
                    "Advanced Analytics",
                ],
                popular: true,
            },
            {
                name: "Enterprise",
                price: "8000 AZN",
                features: [
                    "Mürəkkəb tətbiq (25+ ekran)",
                    "AI/ML Integration",
                    "Custom Backend",
                    "Admin Dashboard",
                    "1 il dəstək",
                    "White-label Solution",
                ],
            },
        ],
    },
    2: {
        title: "Web Sayt İnkişafı",
        description: "Müasir, responsive və yüksək performanslı web həlləri",
        icon: <Globe className="h-12 w-12" />,
        price: "1500 AZN-dən",
        duration: "4-8 həftə",
        color: "from-green-500 to-emerald-500",
        image: "/placeholder.svg?height=400&width=600",
        overview:
            "Next-generation web həlləri ilə rəqəmsal mövcudluğunuzu gücləndirik. JAMstack arxitekturası və serverless texnologiyalarla maksimum performans təmin edirik.",
        features: [
            "React/Next.js Development",
            "Full-Stack Solutions (Node.js, Python)",
            "Progressive Web Apps (PWA)",
            "Advanced SEO & Performance Optimization",
            "Headless CMS Integration",
            "E-commerce Integration",
            "Real-time Features (WebSocket, Server-Sent Events)",
            "API Development & Integration",
            "Database Design & Optimization",
            "Cloud Deployment (Vercel, AWS, Azure)",
            "Security Implementation (HTTPS, CSRF, XSS Protection)",
            "Analytics & Monitoring Integration",
        ],
        process: [
            "Biznes tələbləri və target audience analizi",
            "Information architecture və wireframing",
            "Visual design və brand identity",
            "Frontend və backend development",
            "Performance optimization və SEO",
            "Testing, deployment və maintenance",
        ],
        portfolio: [
            {
                title: "SaaS Dashboard",
                description: "Real-time analytics və data visualization platforması",
                image: "/placeholder.svg?height=200&width=300",
            },
            {
                title: "E-learning Platform",
                description: "Interactive kurslar və video streaming sistemi",
                image: "/placeholder.svg?height=200&width=300",
            },
            {
                title: "Corporate Website",
                description: "Multilingual korporativ sayt və CMS",
                image: "/placeholder.svg?height=200&width=300",
            },
        ],
        packages: [
            {
                name: "Landing",
                price: "1500 AZN",
                features: ["Landing page", "Responsive design", "SEO optimization", "Contact forms", "3 ay dəstək"],
            },
            {
                name: "Business",
                price: "3000 AZN",
                features: [
                    "Multi-page website",
                    "CMS Integration",
                    "E-commerce ready",
                    "Advanced SEO",
                    "6 ay dəstək",
                    "Analytics Integration",
                ],
                popular: true,
            },
            {
                name: "Enterprise",
                price: "6000 AZN",
                features: [
                    "Custom web application",
                    "Advanced functionality",
                    "API Development",
                    "Database integration",
                    "1 il dəstək",
                    "Performance monitoring",
                ],
            },
        ],
    },
    3: {
        title: "CRM Sistemləri",
        description: "Müştəri əlaqələrinin idarə edilməsi və biznes proseslərinin avtomatlaşdırılması",
        icon: <Database className="h-12 w-12" />,
        price: "3000 AZN-dən",
        duration: "8-16 həftə",
        color: "from-purple-500 to-pink-500",
        image: "/placeholder.svg?height=400&width=600",
        overview:
            "AI-powered CRM həlləri ilə müştəri əlaqələrinizi optimallaşdırın. Machine learning alqoritmləri və automation ilə satış proseslərinizi sürətləndirin.",
        features: [
            "Custom CRM Development",
            "Lead Management & Scoring",
            "Sales Pipeline Automation",
            "Customer Journey Mapping",
            "AI-powered Analytics & Insights",
            "Email Marketing Automation",
            "Social Media Integration",
            "Mobile CRM Applications",
            "Third-party Integrations (Salesforce, HubSpot)",
            "Advanced Reporting & Dashboards",
            "Workflow Automation",
            "Multi-tenant Architecture",
        ],
        process: [
            "Biznes proseslərinin analizi və mapping",
            "CRM strategiyası və feature planning",
            "Database design və system architecture",
            "Custom development və integration",
            "User training və change management",
            "Ongoing optimization və support",
        ],
        portfolio: [
            {
                title: "Real Estate CRM",
                description: "Property management və lead tracking sistemi",
                image: "/placeholder.svg?height=200&width=300",
            },
            {
                title: "Healthcare CRM",
                description: "Patient management və appointment scheduling",
                image: "/placeholder.svg?height=200&width=300",
            },
            {
                title: "E-commerce CRM",
                description: "Customer lifecycle və retention management",
                image: "/placeholder.svg?height=200&width=300",
            },
        ],
        packages: [
            {
                name: "Starter",
                price: "3000 AZN",
                features: ["Basic CRM features", "Contact management", "Sales pipeline", "Reporting", "6 ay dəstək"],
            },
            {
                name: "Professional",
                price: "6000 AZN",
                features: [
                    "Advanced CRM features",
                    "Marketing automation",
                    "Third-party integrations",
                    "Mobile app",
                    "1 il dəstək",
                    "Custom workflows",
                ],
                popular: true,
            },
            {
                name: "Enterprise",
                price: "12000 AZN",
                features: [
                    "Full-featured CRM suite",
                    "AI-powered insights",
                    "Custom integrations",
                    "Multi-tenant support",
                    "2 il dəstək",
                    "Dedicated support",
                ],
            },
        ],
    },
}

export default function ServiceDetailPage({ params }) {
  const { id } = use(params) // ✅ Yeni düzgün sintaksis
  const service = servicesData[id]

  if (!service) {
    notFound()
  }

  return (
    <div className="flex flex-col min-h-screen bg-black text-white overflow-hidden">
      <MatrixRain />

      <main className="flex-1">
         {/* Breadcrumb */}
                 <section className="py-4 bg-gray-900/50">
                     <div className="container mx-auto px-4 lg:px-6">
                         <div className="flex items-center space-x-2 text-sm">
                             <Link href="/" className="text-gray-400 hover:text-cyan-400 transition-colors">
                                 Ana Səhifə
                             </Link>
                             <span className="text-gray-600">/</span>
                             <Link href="/services" className="text-gray-400 hover:text-cyan-400 transition-colors">
                                 Xidmətlərimiz
                             </Link>
                             <span className="text-gray-600">/</span>
                             <span className="text-cyan-400">{service.title}</span>
                         </div>
                     </div>
                 </section>

                 {/* Hero Section */}
                 <section className="py-12 bg-gradient-to-br from-black via-gray-900 to-black">
                     <div className="container mx-auto px-4 lg:px-6">
                         <div className="grid lg:grid-cols-2 gap-12 items-center">
                             <motion.div
                                className="space-y-6"
                                initial={{ opacity: 0, x: -50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                            >
                                <Link href="/services" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors">
                                    <ArrowLeft className="h-4 w-4 mr-2" />
                                    Xidmətlərə qayıt
                                </Link>
                                <div className="space-y-4">
                                    <div className={`w-20 h-20 rounded-xl bg-gradient-to-r ${service.color} flex items-center justify-center text-white`}>
                                        {service.icon}
                                    </div>
                                    <h1 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                                        {service.title}
                                    </h1>
                                    <p className="text-xl text-gray-300">{service.description}</p>
                                    <p className="text-lg text-gray-400 leading-relaxed">{service.overview}</p>
                                </div>
                                <div className="flex flex-wrap gap-4 items-center">
                                    <div className="flex items-center space-x-2">
                                        <Clock className="h-5 w-5 text-cyan-400" />
                                        <span className="text-gray-300">{service.duration}</span>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <Award className="h-5 w-5 text-cyan-400" />
                                        <span className="text-gray-300">Enterprise Grade</span>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <Users className="h-5 w-5 text-cyan-400" />
                                        <span className="text-gray-300">Expert Team</span>
                                    </div>
                                </div>
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white border-0 text-lg px-8">
                                        Layihə Başlat
                                    </Button>
                                    <Button size="lg" variant="outline" className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 text-lg px-8">
                                        Pulsuz Konsultasiya
                                    </Button>
                                </div>
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                            >
                                <div className="relative">
                                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl blur-3xl"></div>
                                    <Image
                                        src={service.image || "/placeholder.svg"}
                                        alt={service.title}
                                        width={600}
                                        height={400}
                                        className="rounded-2xl shadow-2xl relative z-10 border border-cyan-500/20"
                                    />
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </section>

                {/* Features Section */}
                <section className="py-20 bg-black">
                    <div className="container mx-auto px-4 lg:px-6">
                        <div className="text-center mb-12">
                            <Badge className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-400 border-cyan-500/30 mb-4">
                                Texniki Spesifikasiyalar
                            </Badge>
                            <h2 className="text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                                Nə Daxildir?
                            </h2>
                            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                                Bu xidmətdə sizin üçün hazırladığımız cutting-edge həllər
                            </p>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {service.features.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    className="flex items-start space-x-3 bg-gray-900/50 p-6 rounded-lg border border-gray-800 hover:border-cyan-500/50 transition-all duration-300 group"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.05 }}
                                    viewport={{ once: true }}
                                >
                                    <div className="w-6 h-6 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <Check className="h-4 w-4 text-white" />
                                    </div>
                                    <span className="text-gray-300 group-hover:text-white transition-colors">{feature}</span>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Process Section */}
                <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900">
                    <div className="container mx-auto px-4 lg:px-6">
                        <div className="text-center mb-12">
                            <Badge className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-400 border-cyan-500/30 mb-4">
                                Development Pipeline
                            </Badge>
                            <h2 className="text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                                İş Prosesi
                            </h2>
                            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                                Agile metodologiya ilə layihənizi necə həyata keçiririk
                            </p>
                        </div>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {service.process.map((step, index) => (
                                <motion.div
                                    key={index}
                                    className="text-center group"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    <div className="relative mb-6">
                                        <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center text-white text-xl font-bold mx-auto group-hover:scale-110 transition-transform">
                                            {index + 1}
                                        </div>
                                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                    </div>
                                    <h3 className="text-lg font-semibold mb-2 text-cyan-400">Phase {index + 1}</h3>
                                    <p className="text-gray-400">{step}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Packages Section */}
                <section className="py-20 bg-black">
                    <div className="container mx-auto px-4 lg:px-6">
                        <div className="text-center mb-12">
                            <Badge className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-400 border-cyan-500/30 mb-4">
                                Qiymət Paketləri
                            </Badge>
                            <h2 className="text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                                Sizə Uyğun Paketi Seçin
                            </h2>
                            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                                Ehtiyacınıza və büdcənizə uyğun həll tapın
                            </p>
                        </div>
                        <div className="grid md:grid-cols-3 gap-8">
                            {service.packages.map((pkg, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    <Card
                                        className={`relative bg-gray-900/50 border-gray-800 hover:border-cyan-500/50 transition-all duration-300 group hover:shadow-2xl hover:shadow-cyan-500/10 h-full ${pkg.popular ? "ring-2 ring-cyan-500/50 scale-105" : ""
                                            }`}
                                    >
                                        {pkg.popular && (
                                            <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white">
                                                Ən Populyar
                                            </Badge>
                                        )}
                                        <CardHeader className="text-center">
                                            <CardTitle className="text-2xl text-white group-hover:text-cyan-400 transition-colors">
                                                {pkg.name}
                                            </CardTitle>
                                            <div className="text-4xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mt-4">
                                                {pkg.price}
                                            </div>
                                        </CardHeader>
                                        <CardContent className="space-y-4">
                                            <div className="space-y-3">
                                                {pkg.features.map((feature, featureIndex) => (
                                                    <div key={featureIndex} className="flex items-center space-x-2">
                                                        <Check className="h-4 w-4 text-cyan-400 flex-shrink-0" />
                                                        <span className="text-sm text-gray-300">{feature}</span>
                                                    </div>
                                                ))}
                                            </div>
                                            <Button className="w-full mt-6 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white border-0">
                                                Bu Paketi Seç
                                            </Button>
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Portfolio Section */}
                <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900">
                    <div className="container mx-auto px-4 lg:px-6">
                        <div className="text-center mb-12">
                            <Badge className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-400 border-cyan-500/30 mb-4">
                                Case Studies
                            </Badge>
                            <h2 className="text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                                Portfel Nümunələri
                            </h2>
                            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                                Bu sahədə həyata keçirdiyimiz uğurlu layihələr
                            </p>
                        </div>
                        <div className="grid md:grid-cols-3 gap-8">
                            {service.portfolio.map((item, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    viewport={{ once: true }}
                                >
                                    <Card className="bg-gray-900/50 border-gray-800 hover:border-cyan-500/50 transition-all duration-300 group hover:shadow-2xl hover:shadow-cyan-500/10">
                                        <div className="aspect-video relative overflow-hidden rounded-t-lg">
                                            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-blue-500/10"></div>
                                            <Image
                                                src={item.image || "/placeholder.svg"}
                                                alt={item.title}
                                                width={300}
                                                height={200}
                                                className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                                            />
                                        </div>
                                        <CardHeader>
                                            <CardTitle className="text-lg text-white group-hover:text-cyan-400 transition-colors">
                                                {item.title}
                                            </CardTitle>
                                            <CardDescription className="text-gray-400">
                                                {item.description}
                                            </CardDescription>
                                        </CardHeader>
                                    </Card>
                                </motion.div>
                            ))}
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
                            <h2 className="text-3xl lg:text-4xl font-bold text-white">
                                Layihənizi Başlamağa Hazırsınız?
                            </h2>
                            <p className="text-xl text-blue-100">
                                Pulsuz texniki konsultasiya alın və layihənizin scope-unu müəyyən edək
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link href="/contact">
                                    <Button size="lg" variant="secondary" className="text-lg px-8 bg-white text-gray-900 hover:bg-gray-100">
                                        İndi Başlayın
                                    </Button>
                                </Link>
                                <Button
                                    size="lg"
                                    variant="outline"
                                    className="text-lg px-8 border-white text-white hover:bg-white hover:text-gray-900"
                                >
                                    Daha Çox Məlumat
                                </Button>
                            </div>
                        </motion.div>
                    </div>
                </section>
      </main>
    </div>
  )
}
