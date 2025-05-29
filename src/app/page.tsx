import Hero from '@/components/Hero';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />

      {/* Kısa Tanıtım Bölümü */}
      <section className="py-20 gradient-primary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">
              <span className="text-accent">Pasia Sanat Akademisi</span>'ne Hoş Geldiniz
            </h2>
            <p className="text-xl text-primary/80 mb-12 leading-relaxed">
              İstanbul'un kalbinde, müzik sevgisini paylaşan bir akademi olarak her yaştan öğrencimize
              kaliteli müzik eğitimi sunuyoruz. Profesyonel eğitmenlerimizle birlikte müzik yolculuğunuza başlayın.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="card-modern p-6 rounded-2xl text-center">
                <div className="text-3xl font-bold text-accent mb-2">15+</div>
                <div className="text-primary/80">Yıl Deneyim</div>
              </div>
              <div className="card-modern p-6 rounded-2xl text-center">
                <div className="text-3xl font-bold text-accent mb-2">500+</div>
                <div className="text-primary/80">Mutlu Öğrenci</div>
              </div>
              <div className="card-modern p-6 rounded-2xl text-center">
                <div className="text-3xl font-bold text-accent mb-2">6</div>
                <div className="text-primary/80">Farklı Enstrüman</div>
              </div>
              <div className="card-modern p-6 rounded-2xl text-center">
                <div className="text-3xl font-bold text-accent mb-2">100%</div>
                <div className="text-primary/80">Memnuniyet</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
