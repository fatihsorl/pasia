'use client';

import { Music, Phone, Mail, MapPin, Instagram, Facebook, Youtube } from 'lucide-react';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="gradient-primary border-t border-detail">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="max-w-6xl mx-auto">
                    {/* Main Footer Content */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                        {/* Logo and Description */}
                        <div className="lg:col-span-2">
                            <div className="flex items-center space-x-2 mb-4">
                                <div className="w-10 h-10 gradient-accent rounded-full flex items-center justify-center">
                                    <Music className="w-6 h-6 text-white" />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-xl font-bold text-primary">Pasia</span>
                                    <span className="text-xs text-secondary">Sanat Akademisi</span>
                                </div>
                            </div>
                            <p className="text-primary/80 leading-relaxed mb-6 max-w-md">
                                İstanbul'da müzik sevgisini paylaşan bir akademi olarak,
                                her yaştan öğrencimize kaliteli müzik eğitimi sunuyoruz.
                            </p>

                            {/* Social Media */}
                            <div className="flex space-x-4">
                                <a
                                    href="https://www.instagram.com/pasiasanatakademi/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 glass-modern hover:bg-accent rounded-full flex items-center justify-center transition-all duration-200 hover-glow"
                                >
                                    <Instagram className="w-5 h-5 text-primary hover:text-primary" />
                                </a>
                                <a
                                    href="#"
                                    className="w-10 h-10 glass-modern hover:bg-secondary rounded-full flex items-center justify-center transition-all duration-200 hover-glow"
                                >
                                    <Facebook className="w-5 h-5 text-primary hover:text-primary" />
                                </a>
                                <a
                                    href="#"
                                    className="w-10 h-10 glass-modern hover:bg-accent rounded-full flex items-center justify-center transition-all duration-200 hover-glow"
                                >
                                    <Youtube className="w-5 h-5 text-primary hover:text-primary" />
                                </a>
                            </div>
                        </div>

                        {/* Quick Links */}
                        <div>
                            <h3 className="text-lg font-semibold mb-4 text-primary">Hızlı Linkler</h3>
                            <ul className="space-y-2">
                                <li>
                                    <a href="#home" className="text-primary/80 hover:text-accent transition-colors duration-200">
                                        Ana Sayfa
                                    </a>
                                </li>
                                <li>
                                    <a href="#about" className="text-primary/80 hover:text-accent transition-colors duration-200">
                                        Hakkımızda
                                    </a>
                                </li>
                                <li>
                                    <a href="#courses" className="text-primary/80 hover:text-accent transition-colors duration-200">
                                        Eğitimlerimiz
                                    </a>
                                </li>
                                <li>
                                    <a href="#gallery" className="text-primary/80 hover:text-accent transition-colors duration-200">
                                        Galeri
                                    </a>
                                </li>
                                <li>
                                    <a href="#contact" className="text-primary/80 hover:text-accent transition-colors duration-200">
                                        İletişim
                                    </a>
                                </li>
                            </ul>
                        </div>

                        {/* Contact Info */}
                        <div>
                            <h3 className="text-lg font-semibold mb-4 text-primary">İletişim</h3>
                            <div className="space-y-3">
                                <div className="flex items-center gap-3">
                                    <Phone className="w-4 h-4 text-accent" />
                                    <a href="tel:+905015962716" className="text-primary/80 hover:text-accent transition-colors duration-200">
                                        0501 596 2716
                                    </a>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Mail className="w-4 h-4 text-accent" />
                                    <a href="mailto:info@pasiasanatakademi.com" className="text-primary/80 hover:text-accent transition-colors duration-200">
                                        info@pasiasanatakademi.com
                                    </a>
                                </div>
                                <div className="flex items-start gap-3">
                                    <MapPin className="w-4 h-4 text-accent mt-1" />
                                    <span className="text-primary/80 text-sm">
                                        Kısıklı mah. Yusuf kemal sk. No:4<br />
                                        İstanbul, Turkey
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Bar */}
                    <div className="border-t border-detail pt-8">
                        <div className="flex flex-col md:flex-row justify-between items-center">
                            <p className="text-primary/60 text-sm mb-4 md:mb-0">
                                © {currentYear} Pasia Sanat Akademisi. Tüm hakları saklıdır.
                            </p>
                            <div className="flex space-x-6 text-sm">
                                <a href="#" className="text-primary/60 hover:text-accent transition-colors duration-200">
                                    Gizlilik Politikası
                                </a>
                                <a href="#" className="text-primary/60 hover:text-accent transition-colors duration-200">
                                    Kullanım Şartları
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer; 