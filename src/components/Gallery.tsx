'use client';

import { Camera, Users, Music, Award, ChevronLeft, ChevronRight } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

const Gallery = () => {
    const galleryImages = [
        {
            url: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            title: 'Piyano Dersleri',
            description: 'Öğrencilerimizin piyano dersi anları'
        },
        {
            url: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            title: 'Müzik Stüdyosu',
            description: 'Modern kayıt stüdyomuz'
        },
        {
            url: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            title: 'Gitar Eğitimi',
            description: 'Gitar dersleri ve teknik çalışmalar'
        },
        {
            url: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            title: 'Keman Dersleri',
            description: 'Klasik keman eğitimi'
        },
        {
            url: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            title: 'Grup Çalışmaları',
            description: 'Birlikte müzik yapmanın keyfi'
        },
        {
            url: 'https://images.unsplash.com/photo-1507838153414-b4b713384a76?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            title: 'Konser Salonu',
            description: 'Öğrenci konserlerimiz'
        }
    ];

    const galleryCategories = [
        {
            title: "Piyano Dersleri",
            description: "Öğrencilerimizin piyano dersi anları",
            icon: <Music className="w-8 h-8" />,
        },
        {
            title: "Grup Çalışmaları",
            description: "Birlikte müzik yapmanın keyfi",
            icon: <Users className="w-8 h-8" />,
        },
        {
            title: "Konserler",
            description: "Öğrenci konserlerinden kareler",
            icon: <Award className="w-8 h-8" />,
        },
        {
            title: "Akademi Ortamı",
            description: "Modern ve konforlu eğitim alanlarımız",
            icon: <Camera className="w-8 h-8" />,
        }
    ];

    return (
        <section id="gallery" className="py-20 gradient-primary">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                            <span className="text-accent">
                                Akademi Galerisi
                            </span>
                        </h2>
                        <p className="text-xl text-primary/80 max-w-3xl mx-auto leading-relaxed">
                            Akademimizden ve öğrencilerimizin başarılarından kareler
                        </p>
                    </div>

                    {/* Main Swiper Gallery */}
                    <div className="mb-16">
                        <Swiper
                            modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
                            spaceBetween={30}
                            slidesPerView={1}
                            centeredSlides={true}
                            autoplay={{
                                delay: 4000,
                                disableOnInteraction: false,
                            }}
                            effect="coverflow"
                            coverflowEffect={{
                                rotate: 50,
                                stretch: 0,
                                depth: 100,
                                modifier: 1,
                                slideShadows: true,
                            }}
                            pagination={{
                                clickable: true,
                                dynamicBullets: true,
                            }}
                            navigation={{
                                prevEl: '.swiper-button-prev-custom',
                                nextEl: '.swiper-button-next-custom',
                            }}
                            breakpoints={{
                                640: {
                                    slidesPerView: 1.5,
                                },
                                768: {
                                    slidesPerView: 2,
                                },
                            }}
                            className="gallery-swiper"
                        >
                            {galleryImages.map((image, index) => (
                                <SwiperSlide key={index}>
                                    <div className="relative group cursor-pointer">
                                        <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl hover-glow">
                                            <img
                                                src={image.url}
                                                alt={image.title}
                                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                            <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                                <h3 className="text-xl font-bold mb-2">{image.title}</h3>
                                                <p className="text-gray-300">{image.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>

                        {/* Custom Navigation Buttons */}
                        <div className="flex justify-center mt-8 space-x-4">
                            <button className="swiper-button-prev-custom glass-modern rounded-full p-3 text-primary hover:text-accent hover:bg-accent/10 transition-all duration-300">
                                <ChevronLeft className="w-6 h-6" />
                            </button>
                            <button className="swiper-button-next-custom glass-modern rounded-full p-3 text-primary hover:text-accent hover:bg-accent/10 transition-all duration-300">
                                <ChevronRight className="w-6 h-6" />
                            </button>
                        </div>
                    </div>

                    {/* Category Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
                        {galleryCategories.map((item, index) => (
                            <div key={index} className="group cursor-pointer">
                                <div className="card-modern rounded-2xl p-6">
                                    <div className="w-16 h-16 gradient-accent rounded-2xl flex items-center justify-center mx-auto mb-4 text-primary shadow-lg group-hover:scale-110 transition-transform duration-300">
                                        {item.icon}
                                    </div>
                                    <h3 className="text-lg font-semibold mb-2 text-primary text-center">{item.title}</h3>
                                    <p className="text-primary/80 text-center text-sm">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Instagram Integration */}
                    <div className="text-center card-modern rounded-3xl p-8 md:p-12 hover-glow">
                        <div className="max-w-2xl mx-auto">
                            <h3 className="text-3xl font-bold text-primary mb-4">
                                <span className="text-accent">
                                    Daha Fazla Fotoğraf İçin
                                </span>
                            </h3>
                            <p className="text-xl text-primary/80 mb-8">
                                Instagram hesabımızı takip ederek güncel fotoğraflarımızı ve videolarımızı görebilirsiniz
                            </p>
                            <a
                                href="https://www.instagram.com/pasiasanatakademi/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-3 bg-accent hover:bg-[#b59c7a] text-primary px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover-glow"
                            >
                                <Camera className="w-6 h-6" />
                                Instagram'da Takip Et
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            <style jsx global>{`
                .gallery-swiper .swiper-pagination-bullet {
                    background: var(--accent);
                    opacity: 0.5;
                }
                .gallery-swiper .swiper-pagination-bullet-active {
                    background: var(--accent);
                    opacity: 1;
                }
            `}</style>
        </section>
    );
};

export default Gallery; 