"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, CheckCircle, Shield, Clock, Wrench, Star, Zap, Activity, Database, Server } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen selection:bg-brand-cyan selection:text-black">

      {/* HERO SECTION - Immersive Space */}
      <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden pt-20">

        {/* Animated Background Elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-cyan/20 rounded-full blur-[120px] animate-[pulse-glow_8s_ease-in-out_infinite] -z-10" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-violet/10 rounded-full blur-[100px] -z-10 animate-float" />

        <div className="container mx-auto px-4 relative z-10 text-center">

          {/* Holographic Badge */}
          <div className="inline-flex items-center rounded-full border border-brand-cyan/30 bg-brand-cyan/10 px-4 py-1.5 text-sm font-medium text-brand-cyan mb-8 backdrop-blur-md shadow-[0_0_15px_rgba(6,182,212,0.2)] animate-float">
            <Zap className="h-4 w-4 mr-2 text-brand-cyan fill-brand-cyan animate-pulse" />
            V2.0 YENİ NESİL SERVİS DENEYİMİ
          </div>

          <h1 className="text-6xl md:text-8xl font-black tracking-tighter mb-6 leading-tight text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-slate-500 drop-shadow-[0_0_40px_rgba(255,255,255,0.3)]">
            GELECEĞİN <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-brand-cyan to-brand-violet">SERVİS STANDARDI</span>
          </h1>

          <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed border-l-2 border-brand-cyan/50 pl-6 text-left md:text-center md:border-none md:pl-0">
            TamirSepeti, aracınızın bakım sürecini dijital bir kokpite dönüştürür.
            Sıfır bekleme, kristal netliğinde şeffaflık ve yapay zeka destekli süreç yönetimi.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link href="/create-job">
              <Button size="lg" variant="brand" className="w-full sm:w-auto text-lg h-16 px-12 rounded-2xl">
                Sisteme Giriş Yap <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/track">
              <Button size="lg" variant="outline" className="w-full sm:w-auto text-lg h-16 px-10 rounded-2xl border-white/10 hover:bg-white/5">
                Durum Sorgula
              </Button>
            </Link>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 animate-bounce">
          <span className="text-xs font-mono uppercase tracking-[0.2em] text-cyan-400">Keşfet</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-cyan-400 to-transparent"></div>
        </div>
      </section>

      {/* DIAGNOSTICS STRIP - High Density Data */}
      <section className="border-y border-white/5 bg-black/40 backdrop-blur-md">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-0 divide-x divide-white/5">
            <div className="py-6 px-4 flex items-center justify-center gap-4 hover:bg-white/5 transition-colors">
              <Activity className="h-8 w-8 text-brand-cyan opacity-80" />
              <div className="text-left">
                <div className="text-2xl font-black text-white leading-none">99.9%</div>
                <div className="text-xs font-mono text-slate-500 uppercase tracking-widest mt-1">Sistem Uptime</div>
              </div>
            </div>
            <div className="py-6 px-4 flex items-center justify-center gap-4 hover:bg-white/5 transition-colors">
              <Database className="h-8 w-8 text-brand-violet opacity-80" />
              <div className="text-left">
                <div className="text-2xl font-black text-white leading-none">12K+</div>
                <div className="text-xs font-mono text-slate-500 uppercase tracking-widest mt-1">Kayıtlı Araç</div>
              </div>
            </div>
            <div className="py-6 px-4 flex items-center justify-center gap-4 hover:bg-white/5 transition-colors">
              <Wrench className="h-8 w-8 text-green-400 opacity-80" />
              <div className="text-left">
                <div className="text-2xl font-black text-white leading-none">45dk</div>
                <div className="text-xs font-mono text-slate-500 uppercase tracking-widest mt-1">Ort. Servis</div>
              </div>
            </div>
            <div className="py-6 px-4 flex items-center justify-center gap-4 hover:bg-white/5 transition-colors">
              <Server className="h-8 w-8 text-orange-400 opacity-80" />
              <div className="text-left">
                <div className="text-2xl font-black text-white leading-none">24/7</div>
                <div className="text-xs font-mono text-slate-500 uppercase tracking-widest mt-1">Canlı Takip</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SUPPORTED BRANDS TICKER */}
      <section className="py-12 bg-black/60 overflow-hidden relative border-b border-white/5">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10"></div>

        <div className="flex w-full">
          <div className="flex min-w-full shrink-0 justify-around items-center gap-16 animate-marquee px-8">
            {/* LOGO GROUP 1 */}
            <BrandLogo name="MERCEDES" />
            <BrandLogo name="BMW" />
            <BrandLogo name="AUDI" />
            <BrandLogo name="TESLA" />
            <BrandLogo name="PORSCHE" />
            <BrandLogo name="TOYOTA" />
            <BrandLogo name="VOLKSWAGEN" />
            <BrandLogo name="FORD" />
            <BrandLogo name="HONDA" />
            <BrandLogo name="CHEVROLET" />
            <BrandLogo name="LAND ROVER" />
            <BrandLogo name="FERRARI" />
            <BrandLogo name="VOLVO" />
          </div>
          <div className="flex min-w-full shrink-0 justify-around items-center gap-16 animate-marquee px-8" aria-hidden="true">
            {/* LOGO GROUP 2 (Duplicate for loop) */}
            <BrandLogo name="MERCEDES" />
            <BrandLogo name="BMW" />
            <BrandLogo name="AUDI" />
            <BrandLogo name="TESLA" />
            <BrandLogo name="PORSCHE" />
            <BrandLogo name="TOYOTA" />
            <BrandLogo name="VOLKSWAGEN" />
            <BrandLogo name="FORD" />
            <BrandLogo name="HONDA" />
            <BrandLogo name="CHEVROLET" />
            <BrandLogo name="LAND ROVER" />
            <BrandLogo name="FERRARI" />
            <BrandLogo name="VOLVO" />
          </div>
        </div>
        <style jsx global>{`
            @keyframes marquee {
                from { transform: translateX(0); }
                to { transform: translateX(-100%); }
            }
            .animate-marquee {
                animation: marquee 30s linear infinite;
            }
          `}</style>
      </section>

      {/* FEATURES - Bento Grid Cockpit */}
      <section className="py-24 relative">
        <div className="container mx-auto px-4 z-10 relative">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">ÜSTÜN TEKNOLOJİ. MAKSİMUM GÜVEN.</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-brand-cyan to-brand-violet mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Feature 1 - Wide Glass Panel */}
            <Card className="md:col-span-2 bg-gradient-to-br from-white/5 to-transparent border-white/10">
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-brand-cyan/20 flex items-center justify-center mb-4 border border-brand-cyan/30 shadow-[0_0_20px_rgba(6,182,212,0.2)]">
                  <Shield className="h-6 w-6 text-brand-cyan" />
                </div>
                <CardTitle className="text-white">Dijital Güvenlik Protokolü</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-400">
                  Her işlem blockchain benzeri bir şeffaflıkla kaydedilir.
                  Parça değişimleri, usta notları ve fiyatlandırma - hepsi parmaklarınızın ucunda.
                </p>
              </CardContent>
            </Card>

            {/* Feature 2 - Tall Neon Panel */}
            <Card className="md:row-span-2 bg-black/40 border-brand-violet/30 shadow-[0_0_30px_rgba(139,92,246,0.1)]">
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-brand-violet/20 flex items-center justify-center mb-4 border border-brand-violet/30">
                  <Clock className="h-6 w-6 text-brand-violet" />
                </div>
                <CardTitle className="text-white">Hiper Hızlı Süreç</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-400 mb-6">
                  Yapay zeka optimize edilmiş randevu sistemi ile bekleme süreleri %80 azaldı.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center text-sm text-slate-300">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-400" /> Anlık Randevu
                  </div>
                  <div className="flex items-center text-sm text-slate-300">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-400" /> Canlı Takip
                  </div>
                  <div className="flex items-center text-sm text-slate-300">
                    <CheckCircle className="h-4 w-4 mr-2 text-green-400" /> Hızlı Teslimat
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Feature 3 - Small Panel */}
            <Card className="bg-gradient-to-tl from-white/5 to-transparent border-white/10">
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center mb-4 border border-green-500/30">
                  <CheckCircle className="h-6 w-6 text-green-400" />
                </div>
                <CardTitle className="text-white">Garantili Sonuç</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-slate-400">
                  Memnuniyet algoritmamız sizin için çalışır. %100 Servis Garantisi.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Background Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)] pointer-events-none" />
      </section>

      {/* PROCESS TIMELINE - How It Works */}
      <section className="py-24 bg-black/20 border-t border-white/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-2">OPERASYONEL SÜREÇ</h2>
            <p className="text-slate-500">Maksimum verimlilik için optimize edilmiş 3 aşamalı döngü.</p>
          </div>

          <div className="relative">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-brand-cyan/50 to-transparent -translate-y-1/2 z-0"></div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
              {/* Step 1 */}
              <div className="bg-black/80 border border-white/10 p-8 rounded-2xl backdrop-blur-xl hover:border-brand-cyan/50 transition-colors group">
                <div className="w-16 h-16 rounded-full bg-brand-cyan/20 border border-brand-cyan/50 flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(6,182,212,0.3)]">
                  <span className="font-mono text-2xl font-bold text-brand-cyan">01</span>
                </div>
                <h3 className="text-xl font-bold text-white text-center mb-3">Randevu & Analiz</h3>
                <p className="text-slate-400 text-center text-sm">
                  Sisteme giriş yapın, araç verilerini girin. Yapay zeka tahmini arıza analizi yapar.
                </p>
              </div>

              {/* Step 2 */}
              <div className="bg-black/80 border border-white/10 p-8 rounded-2xl backdrop-blur-xl hover:border-brand-violet/50 transition-colors group">
                <div className="w-16 h-16 rounded-full bg-brand-violet/20 border border-brand-violet/50 flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(139,92,246,0.3)]">
                  <span className="font-mono text-2xl font-bold text-brand-violet">02</span>
                </div>
                <h3 className="text-xl font-bold text-white text-center mb-3">İşlem & Canlı Takip</h3>
                <p className="text-slate-400 text-center text-sm">
                  Servis süreci başlar. İzleme paneli üzerinden her adımı anlık olarak takip edersiniz.
                </p>
              </div>

              {/* Step 3 */}
              <div className="bg-black/80 border border-white/10 p-8 rounded-2xl backdrop-blur-xl hover:border-green-500/50 transition-colors group">
                <div className="w-16 h-16 rounded-full bg-green-500/20 border border-green-500/50 flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(34,197,94,0.3)]">
                  <span className="font-mono text-2xl font-bold text-green-400">03</span>
                </div>
                <h3 className="text-xl font-bold text-white text-center mb-3">Onay & Teslimat</h3>
                <p className="text-slate-400 text-center text-sm">
                  İşlem tamamlandığında bildirim alırsınız. Dijital servis raporunuz arşivlenir.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION - Portal */}
      <section className="py-32 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="relative p-12 md:p-24 rounded-[3rem] overflow-hidden border border-white/10 bg-white/5 backdrop-blur-3xl text-center shadow-[0_0_100px_rgba(6,182,212,0.1)]">

            {/* Glowing Orb Background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-brand-cyan to-brand-violet rounded-full blur-[150px] opacity-30 animate-pulse-glow pointer-events-none" />

            <h2 className="text-4xl md:text-6xl font-black mb-8 text-white tracking-tight relative z-10">
              SÜRÜCÜ KOLTUĞUNA GEÇİN
            </h2>
            <p className="text-slate-300 mb-12 text-xl max-w-2xl mx-auto relative z-10">
              Aracınızın kontrolünü tamamen elinize alın. Geleceğin servis deneyimi bir tık uzağınızda.
            </p>
            <Link href="/create-job" className="relative z-10">
              <Button size="lg" className="bg-white text-black hover:bg-cyan-50 h-20 px-16 text-xl rounded-full font-bold shadow-[0_0_40px_rgba(255,255,255,0.4)] hover:shadow-[0_0_60px_rgba(255,255,255,0.6)] hover:scale-105 transition-all duration-300">
                Randevu Oluştur
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

function BrandLogo({ name }: { name: string }) {
  // Mapping of brand display names to Simple Icons slugs
  const brandMap: Record<string, string> = {
    "MERCEDES": "mercedes",
    "BMW": "bmw",
    "AUDI": "audi",
    "TESLA": "tesla",
    "PORSCHE": "porsche",
    "TOYOTA": "toyota",
    "VOLKSWAGEN": "volkswagen",
    "FORD": "ford",
    "HONDA": "honda",
    "CHEVROLET": "chevrolet",
    "LAND ROVER": "landrover",
    "FERRARI": "ferrari",
    "VOLVO": "volvo"
  };

  const slug = brandMap[name] || "acura";

  // Custom sizing for specific logos that look smaller/larger
  const getSizeClass = (brand: string) => {
    if (brand === 'AUDI') return 'h-20 w-auto scale-125'; // Audi rings need to be wider/larger
    if (brand === 'TESLA') return 'h-10 w-auto'; // Tesla T can be overpowering, slightly smaller
    return 'h-12 w-auto'; // Default
  }

  return (
    <div className="flex flex-col items-center gap-4 opacity-50 hover:opacity-100 transition-all duration-300 hover:scale-110 group cursor-pointer grayscale hover:grayscale-0 px-4">
      {/* Use Simple Icons CDN for guaranteed accuracy */}
      <img
        src={`https://cdn.simpleicons.org/${slug}/white`}
        alt={`${name} Logo`}
        className={`${getSizeClass(name)} object-contain drop-shadow-[0_0_10px_rgba(255,255,255,0.2)]`}
        loading="lazy"
      />
    </div>
  );
}
