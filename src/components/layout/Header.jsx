"use client"
import React, { useState } from 'react'
import { MegaMenu } from '../mega-menu'
import { MobileMenu } from '../mobile-menu'
import Link from 'next/link'
import { Button } from '../ui/button'
import { Phone, Terminal } from 'lucide-react'


function Header() {
    const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false)
    return (

        <header className="border-b border-cyan-400/20 bg-black/90 backdrop-blur-sm sticky top-0 z-50 relative">
            <div className="container mx-auto px-4 lg:px-6 h-16 flex items-center justify-between">
                <Link href="/" className="flex items-center space-x-2">
                    <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center shadow-lg shadow-cyan-400/50">
                        <Terminal className="h-6 w-6 text-black" />
                    </div>
                    <span className="font-bold text-2xl font-mono text-cyan-400">SoftMagic</span>
                </Link>
                <nav className="hidden md:flex items-center space-x-8">
                    <Link
                        href="/"
                        className="text-md font-medium text-cyan-400 hover:text-cyan-300 transition-colors font-mono"
                    >
                        Ana səhifə
                    </Link>
                    <Link
                        href="/about"
                        className="text-md font-medium text-gray-300 hover:text-cyan-400 transition-colors font-mono"
                    >
                        Haqqımızda
                    </Link>
                    <div
                        className="relative"
                        onMouseEnter={() => setIsMegaMenuOpen(true)}
                        onMouseLeave={() => setIsMegaMenuOpen(false)}
                    >
                        <Link
                            href="/services"
                            className="text-md font-medium text-gray-300 hover:text-cyan-400 transition-colors font-mono"
                        >
                            Xidmətlərimiz
                        </Link>
                    </div>
                    <Link
                        href="/contact"
                        className="text-md"
                    >
                        <Button className="bg-cyan-400 text-black hover:bg-cyan-300 text-md  font-mono ">
                            Əlaqə
                        </Button>

                    </Link>

                </nav>
                <MobileMenu />
            </div>

            <MegaMenu isOpen={isMegaMenuOpen} onClose={() => setIsMegaMenuOpen(false)} />
        </header>


    )
}

export default Header