'use client';

import { useEffect, useState } from 'react';

const Hero = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const backgrounds = [
        'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
        'https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
        'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
        'https://images.unsplash.com/photo-1507838153414-b4b713384a76?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
        'https://images.unsplash.com/photo-1525201548942-d8732f6617a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
        'https://images.unsplash.com/photo-1516834474-48c0abc2a902?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
        'https://images.unsplash.com/photo-1545558014-8692077e9b5c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
        'https://images.unsplash.com/photo-1471478331149-c72f17e33c73?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
        'https://images.unsplash.com/photo-1519683109079-d5f539e1542f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80',
        'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80'
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) =>
                (prevIndex + 1) % backgrounds.length
            );
        }, 4500);

        return () => clearInterval(interval);
    }, [backgrounds.length]);

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Images */}
            {backgrounds.map((bg, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ${index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                        }`}
                >
                    <img
                        src={bg}
                        alt={`Background ${index + 1}`}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/60"></div>
                </div>
            ))}

            {/* Content */}
            <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
                    <span className="text-accent">Müziğin</span> Büyülü Dünyasına <br />
                    <span className="text-primary">Hoş Geldiniz</span>
                </h1>
                <p className="text-xl md:text-2xl mb-8 leading-relaxed text-white/90">
                    İstanbul&apos;un kalbinde, müzik sevgisini paylaşan bir akademi
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                        href="/hakkimizda"
                        className="btn-primary px-8 py-4 text-lg font-medium rounded-full transition-all duration-300 hover:scale-105"
                    >
                        Akademimizi Keşfedin
                    </a>
                    <a
                        href="/egitimlerimiz"
                        className="btn-secondary px-8 py-4 text-lg font-medium rounded-full transition-all duration-300 hover:scale-105"
                    >
                        Eğitimlerimizi İnceleyin
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero; 