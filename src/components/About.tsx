'use client';

import { Award, Users, Clock, Heart, Sparkles } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

const About = () => {
    const features = [
        {
            icon: <Award className="w-8 h-8" />,
            title: "Profesyonel Eğitim",
            description: "Alanında uzman eğitmenlerimizle kaliteli müzik eğitimi",
        },
        {
            icon: <Users className="w-8 h-8" />,
            title: "Bireysel İlgi",
            description: "Her öğrenciye özel yaklaşım ve kişiselleştirilmiş program",
        },
        {
            icon: <Clock className="w-8 h-8" />,
            title: "Esnek Saatler",
            description: "Size uygun zaman dilimlerinde ders programları",
        },
        {
            icon: <Heart className="w-8 h-8" />,
            title: "Tutkulu Yaklaşım",
            description: "Müziğe olan sevgimizi öğrencilerimizle paylaşıyoruz",
        }
    ];

    const aboutImages = [
        {
            url: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            title: 'Piyano Dersleri',
            description: 'Akademimizin piyano eğitim sınıfı'
        },
        {
            url: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            title: 'Müzik Stüdyosu',
            description: 'Modern kayıt ve çalışma stüdyomuz'
        },
        {
            url: 'https://images.unsplash.com/photo-1514320291840-2e0a9bf2a9ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            title: 'Enstrüman Çalışması',
            description: 'Bireysel ders ortamımız'
        },
        {
            url: 'https://images.unsplash.com/photo-1507838153414-b4b713384a76?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
            title: 'Akademi Ortamı',
            description: 'Eğitim salonlarımızdan bir görünüm'
        }
    ];

    return (
        <section id="about" className="py-6 md:py-20 gradient-primary relative overflow-hidden min-h-screen">
            {/* Background Elements - Mobile'da küçük */}
            <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
                <div className="absolute top-10 md:top-20 left-5 md:left-10 w-16 h-16 md:w-32 md:h-32 bg-accent rounded-full blur-2xl md:blur-3xl"></div>
                <div className="absolute bottom-10 md:bottom-20 right-5 md:right-10 w-20 h-20 md:w-40 md:h-40 bg-secondary rounded-full blur-2xl md:blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 w-18 h-18 md:w-36 md:h-36 bg-accent rounded-full blur-2xl md:blur-3xl"></div>
            </div>

            <div className="container mx-auto px-3 sm:px-4 lg:px-8 relative z-10 h-full">
                <div className="max-w-6xl mx-auto h-full flex flex-col justify-center">
                    {/* Header */}
                    <div className="text-center mb-6 md:mb-12 lg:mb-16 xl:mb-20 mt-20">
                        <div className="inline-flex items-center gap-2 px-3 md:px-6 py-1.5 md:py-2 glass-accent rounded-full text-accent font-medium border border-accent/30 mb-3 md:mb-6 lg:mb-8 text-sm md:text-base">
                            <Sparkles className="w-3 h-3 md:w-5 md:h-5" />
                            Hakkımızda
                        </div>
                        <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-primary mb-2 md:mb-4 lg:mb-6 px-2">
                            <span className="text-accent">
                                Pasia Sanat Akademisi
                            </span>
                        </h2>
                        <p className="text-sm md:text-lg lg:text-xl xl:text-2xl text-primary/80 max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto leading-relaxed px-3">
                            İstanbul&apos;un kalbinde, müzik sevgisini paylaşan bir akademi olarak,
                            her yaştan öğrencimize kaliteli müzik eğitimi sunuyoruz.
                        </p>
                    </div>

                    {/* Content Grid */}
                    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-center mb-6 md:mb-8 lg:mb-12 xl:mb-16">
                        {/* Text Content */}
                        <div className="order-2 lg:order-1 card-modern rounded-2xl md:rounded-3xl p-3 md:p-6 lg:p-8 xl:p-10">
                            <h3 className="text-xl lg:text-2xl xl:text-3xl font-bold text-primary mb-4 lg:mb-6 xl:mb-8">
                                <span className="text-accent">
                                    Müzik Yolculuğunuzda Yanınızdayız
                                </span>
                            </h3>
                            <div className="space-y-4 lg:space-y-6 xl:space-y-8 text-primary/80 leading-relaxed">
                                <p className="text-xs md:text-base lg:text-lg xl:text-xl">
                                    <span className="text-accent font-semibold">Kısıklı mahallesi Yusuf Kemal sokak No:4&apos;te</span> bulunan akademimizde,
                                    müziğin evrensel dilini öğrenmek isteyen herkesi bekliyoruz.
                                </p>
                                <p className="text-base lg:text-lg xl:text-xl">
                                    Deneyimli eğitmen kadromuz ile piyano, keman, gitar ve daha birçok
                                    enstrümanda eğitim veriyoruz. Ayrıca <span className="text-accent font-semibold">konservatuar ve üniversite
                                        sınavlarına hazırlık</span> programlarımız ile öğrencilerimizin hedeflerine
                                    ulaşmalarını destekliyoruz.
                                </p>
                                <p className="text-base lg:text-lg xl:text-xl">
                                    Müzik sadece bir hobi değil, aynı zamanda kişisel gelişimin ve
                                    yaratıcılığın en güzel ifade biçimlerinden biridir. Bizimle bu
                                    büyülü yolculuğa çıkın!
                                </p>
                            </div>
                        </div>

                        {/* Image Swiper */}
                        <div className="order-1 lg:order-2 relative max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto lg:mx-0">
                            <div className="relative">
                                <Swiper
                                    modules={[Navigation, Pagination, Autoplay, EffectFade]}
                                    spaceBetween={0}
                                    slidesPerView={1}
                                    autoplay={{
                                        delay: 4000,
                                        disableOnInteraction: false,
                                    }}
                                    effect="fade"
                                    fadeEffect={{
                                        crossFade: true
                                    }}
                                    pagination={{
                                        clickable: true,
                                        dynamicBullets: true,
                                    }}
                                    navigation={false}
                                    className="about-swiper aspect-square rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl"
                                >
                                    {aboutImages.map((image, index) => (
                                        <SwiperSlide key={index}>
                                            <div className="relative w-full h-full group">
                                                <img
                                                    src={image.url}
                                                    alt={image.title}
                                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                                                <div className="absolute bottom-0 left-0 right-0 p-2 md:p-4 lg:p-6 xl:p-8 text-white">
                                                    <h4 className="text-lg lg:text-xl xl:text-2xl font-bold mb-0.5 md:mb-2">{image.title}</h4>
                                                    <p className="text-white/90 text-sm lg:text-base xl:text-lg">{image.description}</p>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                                {/* Floating Badge - Container içinde */}
                                <div className="absolute -bottom-2 -right-2 md:-bottom-4 md:-right-4 lg:-bottom-6 lg:-right-6 xl:-bottom-8 xl:-right-8 card-modern rounded-lg md:rounded-xl lg:rounded-2xl p-1.5 md:p-3 lg:p-4 xl:p-6 z-10 text-center shadow-lg">
                                    <div className="text-xs md:text-lg lg:text-2xl xl:text-3xl font-bold text-accent">15+</div>
                                    <div className="text-xs md:text-sm lg:text-base xl:text-lg text-primary/80 whitespace-nowrap">Yıl Deneyim</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Features Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:gap-8 xl:gap-10">
                        {features.map((feature, index) => (
                            <div key={index} className="card-modern rounded-xl md:rounded-2xl p-6 lg:p-8 xl:p-10 group">
                                <div className="w-16 h-16 lg:w-20 lg:h-20 xl:w-24 xl:h-24 gradient-accent rounded-lg md:rounded-2xl flex items-center justify-center mx-auto mb-4 lg:mb-6 xl:mb-8 text-primary shadow-lg group-hover:scale-110 transition-transform duration-300">
                                    <div className="w-8 h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12 flex items-center justify-center">
                                        {feature.icon}
                                    </div>
                                </div>
                                <h4 className="text-lg lg:text-xl xl:text-2xl font-semibold text-primary mb-1 md:mb-3 lg:mb-4 xl:mb-5 text-center leading-tight">
                                    {feature.title}
                                </h4>
                                <p className="text-sm lg:text-base xl:text-lg text-primary/80 leading-tight text-center">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <style jsx global>{`
                .about-swiper .swiper-pagination-bullet {
                    background: var(--accent);
                    opacity: 0.5;
                }
                .about-swiper .swiper-pagination-bullet-active {
                    background: var(--accent);
                    opacity: 1;
                }
                .about-swiper {
                    height: 100%;
                    width: 100%;
                    overflow: hidden;
                }
                .about-swiper .swiper-wrapper {
                    height: 100%;
                }
                .about-swiper .swiper-slide {
                    height: 100%;
                }
                body {
                    overflow-x: hidden;
                }
            `}</style>
        </section>
    );
};

export default About; 