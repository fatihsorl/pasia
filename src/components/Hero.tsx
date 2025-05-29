'use client';

import { useState, useEffect } from 'react';
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
    const [currentBg, setCurrentBg] = useState(0);

    const backgrounds = [
        'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80', // Piano
        'https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80', // Music studio
        'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80', // Guitar
        'https://images.unsplash.com/photo-1507838153414-b4b713384a76?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80', // Orchestra
        'https://images.unsplash.com/photo-1516280440614-37939bbacd81?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80', // Band performance
        'https://images.unsplash.com/photo-1571330735066-03aaa9429d89?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80', // Violin
        'https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80', // Saxophone
        'https://images.unsplash.com/photo-1519892300165-cb5542fb47c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80', // Piano keys close-up
        'https://images.unsplash.com/photo-1535016120720-40c646be5580?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80', // Music recording studio
        'https://images.unsplash.com/photo-1565035010268-a3816f98589a?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80', // Drums
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentBg((prev) => (prev + 1) % backgrounds.length);
        }, 4000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Images */}
            {backgrounds.map((bg, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-2000 ${index === currentBg ? 'opacity-100' : 'opacity-0'
                        }`}
                    style={{
                        backgroundImage: `url(${bg})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />
            ))}

            {/* Modern Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/80"></div>

            {/* Content */}
            <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center mb-10 md:mb-0">
                <div className="max-w-5xl mx-auto">
                    {/* Modern Badge */}
                    <div className="mb-8">
                        <span className=" hidden md:inline-block px-6 py-3 glass-modern rounded-full text-primary font-medium border border-detail">
                            ✨ İstanbul'un En Modern Müzik Akademisi
                        </span>
                    </div>

                    {/* Modern Typography */}
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight mt-30 md:mt-0">
                        <span className="text-primary">
                            Müziğin
                        </span>
                        <br />
                        <span className="text-accent">
                            Büyülü Dünyası
                        </span>
                        <br />
                        <span className="text-primary">Sizi Bekliyor</span>
                    </h1>

                    <p className="text-xl md:text-2xl mb-12 text-primary/80 max-w-4xl mx-auto leading-relaxed">
                        Pasia Sanat Akademisi'nde profesyonel eğitmenlerimizle birlikte müzik yolculuğunuza başlayın.
                        <span className="text-accent font-semibold"> Piyano, keman, gitar</span> ve daha fazlası...
                    </p>


                    {/* Modern Stats */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                        <div className="card-modern rounded-2xl p-6 hover-glow">
                            <div className="text-4xl md:text-5xl font-bold mb-2 text-accent">500+</div>
                            <div className="text-primary/80 font-medium">Mutlu Öğrenci</div>
                        </div>
                        <div className="card-modern rounded-2xl p-6 hover-glow">
                            <div className="text-4xl md:text-5xl font-bold mb-2 text-secondary">15+</div>
                            <div className="text-primary/80 font-medium">Yıl Deneyim</div>
                        </div>
                        <div className="card-modern rounded-2xl p-6 hover-glow">
                            <div className="text-4xl md:text-5xl font-bold mb-2 text-accent">10+</div>
                            <div className="text-primary/80 font-medium">Enstrüman</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero; 