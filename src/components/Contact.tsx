'use client';

import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        course: '',
        message: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Form submission logic would go here
        console.log('Form submitted:', formData);
        setIsSubmitted(true);

        // Reset form after 3 seconds
        setTimeout(() => {
            setIsSubmitted(false);
            setFormData({
                name: '',
                email: '',
                phone: '',
                course: '',
                message: ''
            });
        }, 3000);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const contactInfo = [
        {
            icon: <Phone className="w-6 h-6" />,
            title: "Telefon",
            info: "0501 596 2716",
            link: "tel:+905015962716"
        },
        {
            icon: <Mail className="w-6 h-6" />,
            title: "E-posta",
            info: "info@pasiasanatakademi.com",
            link: "mailto:info@pasiasanatakademi.com"
        },
        {
            icon: <MapPin className="w-6 h-6" />,
            title: "Adres",
            info: "Kısıklı mah. Yusuf kemal sk. No:4, İstanbul, Turkey",
            link: "https://maps.google.com"
        },
        {
            icon: <Clock className="w-6 h-6" />,
            title: "Çalışma Saatleri",
            info: "Pazartesi - Cumartesi: 09:00 - 20:00",
            link: null
        }
    ];

    return (
        <section id="contact" className="py-20 gradient-surface">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                            <span className="text-accent">İletişime</span> Geçin
                        </h2>
                        <p className="text-xl text-primary/80 max-w-3xl mx-auto leading-relaxed">
                            Müzik eğitimi hakkında bilgi almak için bizimle iletişime geçin.
                            Size en uygun programı birlikte belirleyelim.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <div className="bg-surface/40 backdrop-blur-sm rounded-2xl p-8 border border-detail/30">
                            <h3 className="text-2xl font-bold text-primary mb-6">
                                Bilgi Formu
                            </h3>

                            {isSubmitted ? (
                                <div className="text-center py-12">
                                    <CheckCircle className="w-16 h-16 text-accent mx-auto mb-4" />
                                    <h4 className="text-xl font-semibold text-primary mb-2">
                                        Mesajınız Gönderildi!
                                    </h4>
                                    <p className="text-primary/80">
                                        En kısa sürede size geri dönüş yapacağız.
                                    </p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="name" className="block text-sm font-medium text-primary mb-2">
                                                Ad Soyad *
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                required
                                                value={formData.name}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 bg-transparent border border-detail rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-all duration-200 text-primary placeholder-primary/50"
                                                placeholder="Adınız ve soyadınız"
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="phone" className="block text-sm font-medium text-primary mb-2">
                                                Telefon *
                                            </label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                required
                                                value={formData.phone}
                                                onChange={handleChange}
                                                className="w-full px-4 py-3 bg-transparent border border-detail rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-all duration-200 text-primary placeholder-primary/50"
                                                placeholder="0555 123 45 67"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-primary mb-2">
                                            E-posta
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 bg-transparent border border-detail rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-all duration-200 text-primary placeholder-primary/50"
                                            placeholder="ornek@email.com"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="course" className="block text-sm font-medium text-primary mb-2">
                                            İlgilendiğiniz Kurs
                                        </label>
                                        <select
                                            id="course"
                                            name="course"
                                            value={formData.course}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 bg-primary border border-detail rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-all duration-200 text-primary"
                                            style={{
                                                backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e")`,
                                                backgroundPosition: 'right 0.5rem center',
                                                backgroundRepeat: 'no-repeat',
                                                backgroundSize: '1.5em 1.5em',
                                                paddingRight: '2.5rem'
                                            }}
                                        >
                                            <option value="">Seçiniz</option>
                                            <option value="piyano">Piyano Eğitimi</option>
                                            <option value="keman">Keman Eğitimi</option>
                                            <option value="gitar">Gitar Eğitimi</option>
                                            <option value="ses">Ses Eğitimi</option>
                                            <option value="sinav">Sınav Hazırlık</option>
                                            <option value="teori">Müzik Teorisi</option>
                                        </select>
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-sm font-medium text-primary mb-2">
                                            Mesajınız
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            rows={4}
                                            value={formData.message}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 bg-transparent border border-detail rounded-lg focus:ring-2 focus:ring-accent focus:border-accent transition-all duration-200 text-primary placeholder-primary/50"
                                            placeholder="Lütfen sorularınızı veya özel isteklerinizi belirtiniz..."
                                        ></textarea>
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full bg-gradient-to-r from-accent to-[#b59c7a] hover:from-[#b59c7a] hover:to-accent text-primary py-4 px-6 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 shadow-xl"
                                    >
                                        <Send className="w-5 h-5" />
                                        Mesaj Gönder
                                    </button>
                                </form>
                            )}
                        </div>

                        {/* Contact Information */}
                        <div>
                            <h3 className="text-2xl font-bold text-primary mb-8">
                                İletişim Bilgileri
                            </h3>

                            {/* Map */}
                            <div className="card-modern rounded-xl overflow-hidden hover-glow mb-8">
                                <iframe
                                    src="https://www.google.com/maps?q=K%C4%B1s%C4%B1kl%C4%B1+mahallesi+Yusuf+kemal+sokak+No:4+%C3%9Csk%C3%BCdar+%C4%B0stanbul&output=embed"
                                    width="100%"
                                    height="400"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    className="w-full h-96 rounded-xl"
                                    title="Pasia Sanat Akademisi - Kısıklı mah. Yusuf kemal sk. No:4"
                                ></iframe>
                            </div>

                            <div className="space-y-6 ">
                                {contactInfo.map((item, index) => (
                                    <div key={index} className="card-modern rounded-xl p-6 group hover-glow">
                                        <div className="flex items-start gap-4">
                                            <div className="w-12 h-12 gradient-accent rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                                                {item.icon}
                                            </div>
                                            <div className="flex-1">
                                                <h4 className="font-semibold text-primary mb-1">{item.title}</h4>
                                                {item.link ? (
                                                    <a
                                                        href={item.link}
                                                        className="text-primary/80 hover:text-accent transition-colors duration-200"
                                                    >
                                                        {item.info}
                                                    </a>
                                                ) : (
                                                    <p className="text-primary/80">{item.info}</p>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>


                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact; 