"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Terminal } from "lucide-react"

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false)

  // Close menu when screen size changes to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false)
      }
    }

    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  return (
    <div className="md:hidden">
      <Button variant="ghost" size="icon" onClick={() => setIsOpen(true)} className="text-gray-300 hover:text-cyan-400">
        <Menu className="h-6 w-6" />
        <span className="sr-only">Open menu</span>
      </Button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
              onClick={() => setIsOpen(false)}
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 20 }}
              className="fixed right-0 top-0 bottom-0 w-4/5 max-w-sm bg-gray-900 border-l border-gray-800 z-50 overflow-y-auto"
            >
              <div className="p-6 space-y-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                      <Terminal className="h-6 w-6 text-white" />
                    </div>
                    <span className="font-bold text-2xl bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                      SoftMagic
                    </span>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsOpen(false)}
                    className="text-gray-300 hover:text-cyan-400"
                  >
                    <X className="h-6 w-6" />
                    <span className="sr-only">Close menu</span>
                  </Button>
                </div>

                <div className="space-y-4 pt-6 border-t border-gray-800">
                  <Link
                    href="/"
                    className="block py-3 text-lg font-medium text-gray-300 hover:text-cyan-400 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Ana Səhifə
                  </Link>
                  <Link
                    href="/about"
                    className="block py-3 text-lg font-medium text-gray-300 hover:text-cyan-400 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Haqqımızda
                  </Link>
                  <Link
                    href="/services"
                    className="block py-3 text-lg font-medium text-gray-300 hover:text-cyan-400 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Xidmətlərimiz
                  </Link>
                  <Link
                    href="/contact"
                    className="block py-3 text-lg font-medium text-gray-300 hover:text-cyan-400 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Əlaqə
                  </Link>
                </div>

                <div className="pt-6">
                  <Button
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white border-0"
                    onClick={() => setIsOpen(false)}
                  >
                    Layihə Başlat
                  </Button>
                </div>

                <div className="pt-6 border-t border-gray-800">
                  <div className="text-sm text-gray-500">
                    <p>info@softmagic.az</p>
                    <p className="mt-1">+994 12 345 67 89</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  )
}
