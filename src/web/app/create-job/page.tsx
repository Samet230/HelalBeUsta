"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { ArrowLeft, Loader2, Car, Wrench, Zap } from "lucide-react"
import Link from "next/link"

export default function CreateJobPage() {
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(false)

    // Hardcoded IDs for MVP
    const defaultShopId = "3fa85f64-5717-4562-b3fc-2c963f66afa6"
    const defaultCustomerId = "3fa85f64-5717-4562-b3fc-2c963f66afa6"

    async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault()
        setIsLoading(true)

        const formData = new FormData(event.currentTarget)
        const requestBody = {
            shopId: defaultShopId,
            customerId: defaultCustomerId,
            vehicle: {
                plate: formData.get("plate"),
                brand: formData.get("brand"),
                model: formData.get("model"),
                year: parseInt(formData.get("year") as string),
                color: formData.get("color"),
            },
            problemDescription: formData.get("problemDescription"),
        }

        try {
            const response = await fetch("/api/jobs", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(requestBody),
            })

            if (!response.ok) throw new Error("Failed to create job")

            const data = await response.json()
            router.push(`/track/${data.id}`)
        } catch (error) {
            console.error(error)
            alert("Bir hata oluştu. Lütfen tekrar deneyin.")
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className="min-h-screen bg-background pt-32 pb-20 overflow-hidden relative">

            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-cyan/5 rounded-full blur-[100px] -z-10 animate-pulse-glow" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-violet/5 rounded-full blur-[80px] -z-10" />

            <div className="container mx-auto px-4 max-w-3xl relative z-10">
                <Link href="/" className="inline-flex items-center text-sm font-medium text-slate-400 hover:text-brand-cyan mb-8 transition-colors group">
                    <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                    Kokpit'e Dön
                </Link>

                <Card className="border-t-4 border-t-brand-cyan bg-black/60 backdrop-blur-xl border-x-white/5 border-b-white/5 shadow-2xl">
                    <CardHeader className="space-y-4 pb-8 border-b border-white/5 relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-cyan to-brand-violet"></div>
                        <div className="flex items-center justify-between">
                            <div>
                                <CardTitle className="text-3xl font-bold text-white flex items-center gap-3">
                                    <div className="p-2 rounded-lg bg-brand-cyan/20 border border-brand-cyan/40">
                                        <Car className="h-6 w-6 text-brand-cyan" />
                                    </div>
                                    Yeni Servis Kaydı
                                </CardTitle>
                                <CardDescription className="text-slate-400 mt-2 font-mono text-xs uppercase tracking-wider">
                                    /// SYSTEM_READY // WAITING_FOR_INPUT
                                </CardDescription>
                            </div>
                            <div className="hidden md:block">
                                <Zap className="h-8 w-8 text-white/10 animate-pulse" />
                            </div>
                        </div>
                    </CardHeader>

                    <CardContent className="p-8 md:p-10">
                        <form id="create-job-form" onSubmit={onSubmit} className="space-y-10">

                            <div className="space-y-6">
                                <h3 className="text-sm font-bold uppercase tracking-widest text-brand-cyan flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-brand-cyan shadow-[0_0_10px_var(--primary)]"></span>
                                    01 // Araç Kimliği
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2 group">
                                        <label className="text-xs font-mono text-slate-500 group-focus-within:text-brand-cyan transition-colors">PLAKA</label>
                                        <Input name="plate" placeholder="34 ABC 123" required className="uppercase font-mono tracking-wider h-14" />
                                    </div>
                                    <div className="space-y-2 group">
                                        <label className="text-xs font-mono text-slate-500 group-focus-within:text-brand-cyan transition-colors">RENK</label>
                                        <Input name="color" placeholder="Siyah" required className="h-14" />
                                    </div>
                                    <div className="space-y-2 group">
                                        <label className="text-xs font-mono text-slate-500 group-focus-within:text-brand-cyan transition-colors">MARKA</label>
                                        <Input name="brand" placeholder="Mercedes-Benz" required className="h-14" />
                                    </div>
                                    <div className="space-y-2 group">
                                        <label className="text-xs font-mono text-slate-500 group-focus-within:text-brand-cyan transition-colors">MODEL</label>
                                        <Input name="model" placeholder="CLA 200" required className="h-14" />
                                    </div>
                                    <div className="space-y-2 group">
                                        <label className="text-xs font-mono text-slate-500 group-focus-within:text-brand-cyan transition-colors">YIL</label>
                                        <Input name="year" type="number" placeholder="2024" required min="1900" max="2099" className="h-14" />
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <h3 className="text-sm font-bold uppercase tracking-widest text-brand-violet flex items-center gap-2">
                                    <span className="w-2 h-2 rounded-full bg-brand-violet shadow-[0_0_10px_var(--accent)]"></span>
                                    02 // Sorun Analizi
                                </h3>
                                <div className="space-y-2 group">
                                    <label className="text-xs font-mono text-slate-500 group-focus-within:text-brand-violet transition-colors">ŞİKAYET DETAYI</label>
                                    <textarea
                                        name="problemDescription"
                                        className="flex min-h-[120px] w-full rounded-xl border border-white/10 bg-white/5 px-4 py-4 text-sm text-white shadow-sm placeholder:text-slate-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-violet focus-visible:border-transparent disabled:cursor-not-allowed disabled:opacity-50 resize-y transition-all hover:bg-white/10"
                                        placeholder="Araçtaki sorunu detaylıca belirtiniz..."
                                        required
                                    />
                                </div>
                            </div>

                        </form>
                    </CardContent>

                    <CardFooter className="bg-white/5 p-8 flex justify-end">
                        <Button form="create-job-form" type="submit" className="w-full md:w-auto h-14 px-8 text-lg rounded-xl shadow-[0_0_20px_rgba(6,182,212,0.4)]" disabled={isLoading} variant="brand">
                            {isLoading ? (
                                <>
                                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                                    Sistem İşleniyor...
                                </>
                            ) : (
                                "Kaydı Başlat"
                            )}
                        </Button>
                    </CardFooter>
                </Card>
            </div>
        </div>
    )
}
