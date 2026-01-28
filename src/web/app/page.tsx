import Link from "next/link";
import { Button } from "../components/ui/button";
import { ArrowRight, CheckCircle, Shield, Clock } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden bg-brand-blue text-white">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl mb-6">
              Aracını Güvenle <br />
              <span className="text-brand-orange">Tamir Ettir</span>
            </h1>
            <p className="text-lg text-slate-300 mb-8 max-w-2xl bg-brand-blue/50 p-2 rounded backdrop-blur-sm">
              TamirSepeti ile aracınızın bakım ve onarım işlemlerini kolayca planlayın,
              süreci adım adım takip edin. Sürpriz maliyetler yok, güven var.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/create-job">
                <Button size="lg" variant="brand" className="w-full sm:w-auto text-lg gap-2">
                  Hemen Randevu Al <ArrowRight className="h-5 w-5" />
                </Button>
              </Link>
              <Link href="/track">
                <Button size="lg" variant="outline" className="w-full sm:w-auto text-lg bg-transparent border-white text-white hover:bg-white hover:text-brand-blue">
                  Durum Sorgula
                </Button>
              </Link>
            </div>
          </div>
        </div>
        {/* Abstract Background Elements */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[800px] h-[800px] bg-brand-orange/20 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-500/20 rounded-full blur-3xl opacity-30" />
      </section>

      {/* Features Section */}
      <section className="py-24 bg-brand-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Neden TamirSepeti?
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Sizin için en iyi servis deneyimini sunuyoruz.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 transition-all hover:shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                <Shield className="h-6 w-6 text-brand-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Güvenilir Hizmet</h3>
              <p className="text-slate-600">
                Tüm işlemler uzman ekipler tarafından yapılır ve garantilidir.
                Aracınız emin ellerde.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 transition-all hover:shadow-md">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-6">
                <Clock className="h-6 w-6 text-brand-orange" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Hızlı Süreç</h3>
              <p className="text-slate-600">
                Randevunuzu hemen alın, beklemeden hizmete ulaşın.
                Süreci online takip edin.
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 transition-all hover:shadow-md">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                <CheckCircle className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Şeffaf Fiyat</h3>
              <p className="text-slate-600">
                Sürpriz ek ücretlerle karşılaşmazsınız.
                Ne ödeyeceğinizi baştan bilirsiniz.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats/CTA Section (Optional) */}
      <section className="py-20 bg-white border-t">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-6">Hemen Başlayın</h2>
            <p className="text-slate-600 mb-8">Aracınızın bakım zamanı geldi mi? Birkaç tıkla randevunuzu oluşturun.</p>
            <Link href="/create-job">
              <Button size="lg" variant="brand" className="px-12">Randevu Al</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
