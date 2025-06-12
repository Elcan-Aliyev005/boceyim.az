"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MatrixRain } from "@/components/matrix-rain"
import { TextGenerateEffect } from "@/components/ui/text-generate-effect"
import { Terminal, Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from "lucide-react"
import { motion } from "framer-motion"
import { useState } from "react"

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
      setFormState({
        name: "",
        email: "",
        subject: "",
        message: "",
      })

      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false)
      }, 5000)
    }, 1500)
  }

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
                  Bizimlə Əlaqə
                </Badge>
                <TextGenerateEffect
                  words="Rəqəmsal Əməkdaşlığa Başlayın"
                  className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-200 to-blue-200 bg-clip-text text-transparent"
                />
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Layihənizi müzakirə etmək, texniki məsləhət almaq və ya sadəcə salam demək üçün bizimlə əlaqə saxlayın
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-20 bg-black">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="grid lg:grid-cols-2 gap-12">
              <motion.div
                className="space-y-8"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div>
                  <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    Bizimlə Əlaqə Saxlayın
                  </h2>
                  <p className="text-lg text-gray-400 leading-relaxed">
                    Layihəniz və ya texnoloji ehtiyaclarınız haqqında məlumat verin. Komandamız ən qısa zamanda sizinlə
                    əlaqə saxlayacaq.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="h-6 w-6 text-cyan-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">Email</h3>
                      <p className="text-gray-400">info@softmagic.az</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="h-6 w-6 text-cyan-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">Telefon</h3>
                      <p className="text-gray-400">+994 12 345 67 89</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="h-6 w-6 text-cyan-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-1">Ünvan</h3>
                      <p className="text-gray-400">Bakı şəhəri, Nərimanov rayonu</p>
                      <p className="text-gray-400">Tech Plaza, 5-ci mərtəbə</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-white">Bizi izləyin</h3>
                  <div className="flex space-x-4">
                    <a
                      href="#"
                      className="w-10 h-10 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full flex items-center justify-center text-cyan-400 hover:text-white hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500 transition-all"
                    >
                      <Github className="h-5 w-5" />
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full flex items-center justify-center text-cyan-400 hover:text-white hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500 transition-all"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full flex items-center justify-center text-cyan-400 hover:text-white hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-500 transition-all"
                    >
                      <Twitter className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gray-900/50 border-gray-800 hover:border-cyan-500/50 transition-all duration-300 shadow-2xl shadow-cyan-500/5">
                  <CardContent className="p-6">
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label htmlFor="name" className="text-sm font-medium text-gray-300">
                            Ad Soyad
                          </label>
                          <Input
                            id="name"
                            name="name"
                            value={formState.name}
                            onChange={handleChange}
                            placeholder="Ad Soyad"
                            required
                            className="bg-gray-800/50 border-gray-700 focus:border-cyan-500 text-white placeholder:text-gray-500"
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="email" className="text-sm font-medium text-gray-300">
                            Email
                          </label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formState.email}
                            onChange={handleChange}
                            placeholder="sizin@email.com"
                            required
                            className="bg-gray-800/50 border-gray-700 focus:border-cyan-500 text-white placeholder:text-gray-500"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="subject" className="text-sm font-medium text-gray-300">
                          Mövzu
                        </label>
                        <Input
                          id="subject"
                          name="subject"
                          value={formState.subject}
                          onChange={handleChange}
                          placeholder="Müraciətinizin mövzusu"
                          required
                          className="bg-gray-800/50 border-gray-700 focus:border-cyan-500 text-white placeholder:text-gray-500"
                        />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium text-gray-300">
                          Mesaj
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formState.message}
                          onChange={handleChange}
                          placeholder="Mesajınızı daxil edin..."
                          required
                          rows={6}
                          className="bg-gray-800/50 border-gray-700 focus:border-cyan-500 text-white placeholder:text-gray-500 resize-none"
                        />
                      </div>

                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white border-0"
                      >
                        {isSubmitting ? (
                          <span className="flex items-center">
                            <svg
                              className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              ></circle>
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              ></path>
                            </svg>
                            Göndərilir...
                          </span>
                        ) : (
                          <span className="flex items-center">
                            <Send className="mr-2 h-4 w-4" />
                            Göndər
                          </span>
                        )}
                      </Button>

                      {isSubmitted && (
                        <div className="p-4 bg-green-500/20 border border-green-500/50 rounded-md text-green-400 text-center">
                          Mesajınız uğurla göndərildi! Tezliklə sizinlə əlaqə saxlayacağıq.
                        </div>
                      )}
                    </form>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Bizi Tapın
              </h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                Ofisimiz Bakının mərkəzində, Tech Plaza biznes mərkəzində yerləşir
              </p>
            </div>
            <div className="relative rounded-xl overflow-hidden border border-gray-800 shadow-2xl shadow-cyan-500/5">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5"></div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48626.41270766757!2d49.8151224!3d40.3948945!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307d6bd6211cf9%3A0x343f6b5e7ae56c6b!2zQmFrxLEsIEF6yZlyYmF5Y2Fu!5e0!3m2!1saz!2s!4v1654789542873!5m2!1saz!2s"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="relative z-10"
              ></iframe>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-black">
          <div className="container mx-auto px-4 lg:px-6">
            <div className="text-center mb-12">
              <Badge className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-400 border-cyan-500/30 mb-4">
                FAQ
              </Badge>
              <h2 className="text-3xl lg:text-4xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Tez-tez Verilən Suallar
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                Müştərilərimizin ən çox verdiyi suallar və cavablar
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {[
                {
                  question: "Layihənin qiyməti necə hesablanır?",
                  answer:
                    "Layihənin qiyməti texniki tələblər, mürəkkəblik və zaman çərçivəsinə əsasən hesablanır. Hər layihə üçün fərdi qiymət təklifi hazırlayırıq.",
                },
                {
                  question: "Layihənin müddəti nə qədərdir?",
                  answer:
                    "Layihənin müddəti onun mürəkkəbliyindən asılıdır. Kiçik layihələr 2-4 həftə, orta layihələr 1-3 ay, böyük layihələr isə 3-6 ay çəkə bilər.",
                },
                {
                  question: "Hansı texnologiyalardan istifadə edirsiniz?",
                  answer:
                    "Biz ən müasir texnologiyalardan istifadə edirik: React, Next.js, Node.js, Python, AWS, Azure, Blockchain, AI və ML texnologiyaları.",
                },
                {
                  question: "Layihə başladıqdan sonra dəyişikliklər edə bilərəmmi?",
                  answer:
                    "Bəli, Agile metodologiyası ilə işlədiyimiz üçün layihə prosesində dəyişikliklər etmək mümkündür. Lakin böyük dəyişikliklər əlavə vaxt və büdcə tələb edə bilər.",
                },
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  className="space-y-2"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-xl font-semibold text-cyan-400">{faq.question}</h3>
                  <p className="text-gray-400">{faq.answer}</p>
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
              <h2 className="text-3xl lg:text-4xl font-bold text-white">Rəqəmsal Gələcəyinizi Bizimlə Qurun</h2>
              <p className="text-xl text-blue-100">
                Texnologiya sahəsində lider olmaq üçün indi bizimlə əlaqə saxlayın
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="secondary" className="text-lg px-8 bg-white text-gray-900 hover:bg-gray-100">
                  Layihə Başlat
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 border-white text-white hover:bg-white hover:text-gray-900"
                >
                  Xidmətləri Kəşf Et
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 py-12">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                  <Terminal className="h-6 w-6 text-white" />
                </div>
                <span className="font-bold text-2xl bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  SoftMagic
                </span>
              </div>
              <p className="text-gray-400">Rəqəmsal gələcəyin arxitekti</p>
              <p className="text-sm text-gray-500">softmagic.az</p>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-cyan-400">Səhifələr</h3>
              <div className="space-y-2">
                <Link href="/" className="block text-gray-400 hover:text-cyan-400 transition-colors">
                  Ana Səhifə
                </Link>
                <Link href="/about" className="block text-gray-400 hover:text-cyan-400 transition-colors">
                  Haqqımızda
                </Link>
                <Link href="/services" className="block text-gray-400 hover:text-cyan-400 transition-colors">
                  Xidmətlərimiz
                </Link>
                <Link href="/contact" className="block text-gray-400 hover:text-cyan-400 transition-colors">
                  Əlaqə
                </Link>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-cyan-400">Xidmətlər</h3>
              <div className="space-y-2">
                <div className="text-gray-400">Mobil Tətbiqlər</div>
                <div className="text-gray-400">Web Development</div>
                <div className="text-gray-400">CRM Sistemləri</div>
                <div className="text-gray-400">E-commerce</div>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-cyan-400">Əlaqə</h3>
              <div className="space-y-2 text-gray-400">
                <div>info@softmagic.az</div>
                <div>+994 12 345 67 89</div>
                <div>Bakı, Azərbaycan</div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
            <p>&copy; 2024 SoftMagic. Bütün hüquqlar qorunur.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
