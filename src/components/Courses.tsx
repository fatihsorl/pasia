'use client';

import { Music, Guitar, Music2, Mic, GraduationCap, Star } from 'lucide-react';

const Courses = () => {
    const courses = [
        {
            icon: <Music className="w-8 h-8" />,
            title: "Piyano Eğitimi",
            description: "Başlangıçtan ileri seviyeye kadar piyano dersleri",
            features: ["Klasik müzik", "Pop müzik", "Teknik çalışmalar", "Bireysel ders"],
        },
        {
            icon: <Music2 className="w-8 h-8" />,
            title: "Keman Eğitimi",
            description: "Profesyonel keman eğitimi ve teknik gelişim",
            features: ["Klasik repertuar", "Teknik etüdler", "Oda müziği", "Solo performans"],
        },
        {
            icon: <Guitar className="w-8 h-8" />,
            title: "Gitar Eğitimi",
            description: "Akustik ve elektro gitar dersleri",
            features: ["Akor çalışmaları", "Solo teknikleri", "Ritim çalışmaları", "Şarkı eşlikleri"],
        },
        {
            icon: <Mic className="w-8 h-8" />,
            title: "Ses Eğitimi",
            description: "Vokal teknik ve şarkı söyleme dersleri",
            features: ["Nefes teknikleri", "Ses açılımı", "Repertuar çalışması", "Sahne performansı"],
        },
        {
            icon: <GraduationCap className="w-8 h-8" />,
            title: "Sınav Hazırlık",
            description: "Konservatuar ve üniversite sınavlarına hazırlık",
            features: ["Teorik bilgiler", "Pratik çalışmalar", "Sınav teknikleri", "Bireysel takip"],
        },
        {
            icon: <Star className="w-8 h-8" />,
            title: "Müzik Teorisi",
            description: "Temel müzik bilgisi ve teorik eğitim",
            features: ["Nota okuma", "Armoni bilgisi", "Ritim çalışmaları", "Müzik tarihi"],
        }
    ];

    return (
        <section id="courses" className="py-20 gradient-surface">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                            <span className="text-accent">Eğitim</span> Programlarımız
                        </h2>
                        <p className="text-xl text-primary/80 max-w-3xl mx-auto leading-relaxed">
                            Her seviyeden öğrenci için tasarlanmış kapsamlı müzik eğitimi programları
                        </p>
                    </div>

                    {/* Courses Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                        {courses.map((course, index) => (
                            <div key={index} className="card-modern rounded-2xl overflow-hidden group">
                                {/* Header */}
                                <div className="gradient-accent p-6 text-primary">
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                            {course.icon}
                                        </div>
                                        <h3 className="text-xl font-bold">{course.title}</h3>
                                    </div>
                                    <p className="text-primary/90">{course.description}</p>
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <ul className="space-y-3">
                                        {course.features.map((feature, featureIndex) => (
                                            <li key={featureIndex} className="flex items-center gap-3 text-primary/80">
                                                <div className="w-2 h-2 bg-accent rounded-full"></div>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>

                                    <button className="w-full mt-6 glass-modern hover:bg-accent hover:text-primary text-primary py-3 px-6 rounded-lg font-semibold transition-all duration-300 border border-detail hover:border-accent">
                                        Detaylı Bilgi Al
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* CTA Section */}
                    <div className="text-center gradient-accent rounded-2xl p-8 md:p-12 text-primary hover-glow">
                        <h3 className="text-3xl md:text-4xl font-bold mb-4">
                            Müzik Yolculuğunuza Bugün Başlayın!
                        </h3>
                        <p className="text-xl mb-8 text-primary/90 max-w-2xl mx-auto">
                            Hangi enstrümanı öğrenmek istediğinizi bilmiyor musunuz?
                            Ücretsiz deneme dersi için bizimle iletişime geçin.
                        </p>
                        <button className=" text-white bg-[#1a1e26] px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl">
                            Ücretsiz Deneme Dersi
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Courses; 