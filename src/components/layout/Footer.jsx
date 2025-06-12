import React from 'react'

function Footer() {
    return (
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
    )
}

export default Footer