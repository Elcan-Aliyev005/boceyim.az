"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MatrixRain } from "@/components/matrix-rain"
import { TextGenerateEffect } from "@/components/ui/text-generate-effect"
import { Users, Award, ArrowRight, Terminal, Code, Shield, Zap, Brain, Rocket } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion"
// Import MobileMenu komponentini əlavə edin
import { MobileMenu } from "@/components/mobile-menu"

export default function AboutPage() {
  const team = [
    {
      name: "Gənci Yusifov",
      role: "CEO & Founder",
      image: "/placeholder.svg?height=300&width=300",
      description: "15+ il IT sahəsində, blockchain və AI mütəxəssisi",
      skills: ["Blockchain", "AI/ML", "Strategy"],
    },
    {
      name: "Elcan Əliyev",
      role: "Fullstack and Android Developer",
      image: "/placeholder.svg?height=300&width=300",
      description: "Full-stack developer və android uzmanı",
      skills: ["System Design", "DevOps", "Security"],
    },
    {
      name: "Əsgər Əliyev",
      role: "Fullstack and Mobile developer",
      image: "/placeholder.svg?height=300&width=300",
      description: "Frontend və mobile development uzmanı",
      skills: ["React/Next.js", "Mobile", "UI/UX"],
    },
  ]

  const values = [
    {
      icon: <Brain className="h-8 w-8 text-cyan-400" />,
      title: "İnnovasiya",
      description: "Ən son texnologiyalar və yaradıcı həllərlə gələcəyi formalaşdırırıq",
      color: "from-cyan-500 to-blue-500",
    },
    {
      icon: <Shield className="h-8 w-8 text-green-400" />,
      title: "Təhlükəsizlik",
      description: "Kiberməkan təhlükəsizliyi və məlumat qorunması prioritetimizdir",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: <Zap className="h-8 w-8 text-yellow-400" />,
      title: "Performans",
      description: "Yüksək performans və optimal həllər təqdim edirik",
      color: "from-yellow-500 to-orange-500",
    },
    {
      icon: <Rocket className="h-8 w-8 text-purple-400" />,
      title: "Sürət",
      description: "Agile metodologiya ilə sürətli və keyfiyyətli çatdırılma",
      color: "from-purple-500 to-pink-500",
    },
  ]

  const timeline = [
    {
      year: "2020",
      title: "Quruluş",
      description: "SoftMagic-in təməli qoyuldu və ilk layihələr başladı",
    },
    {
      year: "2021",
      title: "Genişlənmə",
      description: "Komanda böyüdü və yeni texnologiyalar əlavə edildi",
    },
    {
      year: "2022",
      title: "AI İnteqrasiyası",
      description: "Süni intellekt və maşın öyrənməsi xidmətləri başladı",
    },
    {
      year: "2023",
      title: "Blockchain Həlləri",
      description: "Blockchain və Web3 texnologiyaları portfelə əlavə edildi",
    },
    {
      year: "2024",
      title: "Quantum Computing",
      description: "Quantum computing tədqiqatları və pilot layihələr",
    },
  ]

  return (
    <div className="flex flex-col min-h-screen bg-black text-white overflow-hidden">
      <MatrixRain />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5"></div>
          <div className="container mx-auto px-4 lg:px-6 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
                <Badge className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-400 border-cyan-500/30 mb-6">
                  Haqqımızda
                </Badge>
                <TextGenerateEffect
                  words="Rəqəmsal Gələcəyin Arxitektləri"
                  className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-200 to-blue-200 bg-clip-text text-transparent"
                />
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  2020-ci ildən bəri Azərbaycanda rəqəmsal transformasiya sahəsində fəaliyyət göstəririk. Missiyamız -
                  ən müasir texnologiyalarla biznesləri gələcəyə hazırlamaqdır.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20 bg-black">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Badge className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-400 border-cyan-500/30">
                  Bizim Hekayəmiz
                </Badge>
                <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Kiberməkandan Gerçəkliyə
                </h2>
                <div className="space-y-4 text-lg text-gray-300">
                  <p>
                    SoftMagic 2020-ci ildə bir neçə gənc hacker və developer-in birgə səyi ilə yaradılmışdır. Əsas
                    məqsədimiz Azərbaycan bizneslərinə ən müasir rəqəmsal həllər təqdim etmək idi.
                  </p>
                  <p>
                    Bu gün 50+ müştərimiz var və 500+ layihə həyata keçirmişik. Komandamız AI, blockchain, quantum
                    computing və kiberməkan təhlükəsizliyi sahələrində davamlı inkişaf edir.
                  </p>
                  <p>
                    Biz sadəcə kod yazan şirkət deyil - rəqəmsal gələcəyin arxitektləriyik və müştərilərimizin
                    uzunmüddətli texnoloji tərəfdaşıyıq.
                  </p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl blur-3xl"></div>
                  <Image
                    src="/placeholder.svg?height=500&width=600"
                    alt="Our Story"
                    width={600}
                    height={500}
                    className="rounded-2xl shadow-2xl relative z-10 border border-cyan-500/20"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Badge className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-400 border-cyan-500/30 mb-4">
                  Dəyərlərimiz
                </Badge>
                <h2 className="text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Kodumuzun DNA-sı
                </h2>
                <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                  Bu dəyərlər bizim hər bir kod sətirində və qərarımızda əks olunur
                </p>
              </motion.div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-gray-900/50 border-gray-800 hover:border-cyan-500/50 transition-all duration-300 group hover:shadow-2xl hover:shadow-cyan-500/10 h-full">
                    <CardHeader className="text-center">
                      <div
                        className={`w-16 h-16 rounded-lg bg-gradient-to-r ${value.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}
                      >
                        {value.icon}
                      </div>
                      <CardTitle className="text-white group-hover:text-cyan-400 transition-colors">
                        {value.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-gray-400 text-center">{value.description}</CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-20 bg-black">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="text-center mb-16">
              <Badge className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-400 border-cyan-500/30 mb-4">
                Tariximiz
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Rəqəmsal Evolusiya
              </h2>
            </div>
            <div className="max-w-4xl mx-auto">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-8 mb-12 last:mb-0"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
                      {item.year}
                    </div>
                  </div>
                  <div className="flex-1 pb-8 border-l border-gray-800 pl-8 ml-8">
                    <h3 className="text-xl font-semibold text-cyan-400 mb-2">{item.title}</h3>
                    <p className="text-gray-300">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="text-center mb-16">
              <Badge className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-400 border-cyan-500/30 mb-4">
                Komandamız
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Rəqəmsal Gladiatorlar
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">Elite hacker və developer komandamız</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-gray-900/50 border-gray-800 hover:border-cyan-500/50 transition-all duration-300 group hover:shadow-2xl hover:shadow-cyan-500/10">
                    <CardHeader className="text-center">
                      <div className="relative mx-auto mb-4">
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-xl"></div>
                        <Image
                          src={member.image || "/placeholder.svg"}
                          alt={member.name}
                          width={200}
                          height={200}
                          className="rounded-full mx-auto relative z-10 border-2 border-cyan-500/30"
                        />
                      </div>
                      <CardTitle className="text-white group-hover:text-cyan-400 transition-colors">
                        {member.name}
                      </CardTitle>
                      <CardDescription className="text-cyan-400 font-medium">{member.role}</CardDescription>
                    </CardHeader>
                    <CardContent className="text-center space-y-4">
                      <p className="text-gray-400">{member.description}</p>
                      <div className="flex flex-wrap gap-2 justify-center">
                        {member.skills.map((skill, skillIndex) => (
                          <Badge
                            key={skillIndex}
                            className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-400 border-cyan-500/30"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-gradient-to-r from-cyan-600 via-blue-600 to-purple-600 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="container mx-auto px-4 lg:px-6 relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-white">Rəqəmlərlə Nailiyyətlərimiz</h2>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { number: "500+", label: "Layihə", icon: <Code className="h-6 w-6" /> },
                { number: "50+", label: "Məmnun Müştəri", icon: <Users className="h-6 w-6" /> },
                { number: "4+", label: "İl Təcrübə", icon: <Award className="h-6 w-6" /> },
                { number: "99.9%", label: "Uptime", icon: <Shield className="h-6 w-6" /> },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-white/20 rounded-full text-white">{stat.icon}</div>
                  </div>
                  <div className="text-4xl lg:text-5xl font-bold mb-2 text-white">{stat.number}</div>
                  <div className="text-blue-100">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-black">
          <div className="container mx-auto px-4 lg:px-6 text-center">
            <motion.div
              className="max-w-3xl mx-auto space-y-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Bizimlə Rəqəmsal Gələcəyə Addım Atın
              </h2>
              <p className="text-xl text-gray-400">
                Layihənizi müzakirə etmək və pulsuz konsultasiya almaq üçün bizimlə əlaqə saxlayın
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white border-0 text-lg px-8"
                  >
                    Əlaqə Saxlayın
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="/services">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 text-lg px-8"
                  >
                    Xidmətlərimiz
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

     
    </div>
  )
}
