'use client';

import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const menuItems = [
        { name: 'Ana Sayfa', href: '/' },
        { name: 'Hakkımızda', href: '/hakkimizda' },
        { name: 'Eğitimlerimiz', href: '/egitimlerimiz' },
        { name: 'Galeri', href: '/galeri' },
        { name: 'İletişim', href: '/iletisim' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
            ? 'glass-modern border-b border-detail'
            : 'bg-transparent'
            }`}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <Link href="/" className="flex items-center space-x-3">
                        <div className="relative group">
                            <div className="w-12 h-12 rounded-full overflow-hidden shadow-lg transition-transform duration-300 group-hover:scale-105">
                                <Image
                                    src="/images/pasia.jpg"
                                    alt="Pasia Sanat Akademisi Logo"
                                    width={48}
                                    height={48}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-lg md:text-xl font-bold text-primary">
                                Pasia
                            </span>
                            <span className="text-xs md:text-sm text-secondary font-medium">Sanat Akademisi</span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex space-x-1">
                        {menuItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="relative px-6 py-3 text-primary hover:text-accent transition-all duration-300 font-medium group"
                            >
                                <span className="relative z-10">{item.name}</span>
                                <div className="absolute inset-0 glass-accent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </Link>
                        ))}
                    </nav>

                    {/* CTA Section */}
                    <div className="hidden md:flex items-center space-x-4">
                        <a
                            href="tel:+905015962716"
                            className="flex items-center space-x-2 text-primary/70 hover:text-accent transition-colors duration-300"
                        >
                            <Phone className="w-4 h-4" />
                            <span className="text-sm font-medium">0501 596 2716</span>
                        </a>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-primary hover:text-accent transition-colors duration-200 p-2 rounded-lg glass-modern"
                        >
                            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMenuOpen && (
                    <div className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 glass-modern rounded-2xl mt-2 border border-detail">
                            {menuItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="block px-4 py-3 text-primary hover:text-accent hover:bg-accent/10 transition-all duration-200 font-medium rounded-xl"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            ))}

                            <div className="mt-4 pt-4 border-t border-detail">
                                <a
                                    href="tel:+905015962716"
                                    className="flex items-center justify-center space-x-2 text-primary/70 hover:text-accent transition-colors duration-300"
                                >
                                    <Phone className="w-4 h-4" />
                                    <span>0501 596 2716</span>
                                </a>

                            </div>
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
};

export default Header; 