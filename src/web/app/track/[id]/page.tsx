"use client"

import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { ArrowLeft, Car, Calendar, Wrench, CheckCircle, Clock, AlertCircle, PlayCircle, StopCircle } from "lucide-react"

interface JobDto {
    id: string
    shopId: string
    customerId: string
    status: string
    vehicle: {
        plate: string
        brand: string
        model: string
        year: number
        color: string
    }
    problemDescription: string
    createdAt: string
    updatedAt?: string
}

export default function JobDetailsPage() {
    const params = useParams()
    const id = params.id as string

    const [job, setJob] = useState<JobDto | null>(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState("")

    useEffect(() => {
        async function fetchJob() {
            try {
                const res = await fetch(`/api/jobs/${id}`)
                if (!res.ok) {
                    if (res.status === 404) throw new Error("Kayıt veritabanında bulunamadı.")
                    throw new Error("Sistem hatası.")
                }
                const data = await res.json()
                setJob(data)
            } catch (err: any) {
                setError(err.message)
            } finally {
                setLoading(false)
            }
        }
        fetchJob()
    }, [id])

    if (loading) {
        return (
            <div className="flex h-screen items-center justify-center bg-background">
                <div className="text-center">
                    <div className="relative">
                        <div className="animate-spin h-16 w-16 border-4 border-white/10 border-t-brand-cyan mx-auto mb-6 rounded-full"></div>
                        <div className="absolute inset-0 h-16 w-16 border-4 border-white/5 mx-auto rounded-full blur-sm"></div>
                    </div>
                    <div className="font-mono text-sm uppercase text-brand-cyan tracking-[0.3em] animate-pulse">System_Loading</div>
                </div>
            </div>
        )
    }

    if (error || !job) {
        return (
            <div className="min-h-screen bg-background pt-32 flex flex-col items-center justify-center">
                <div className="border border-red-500/30 bg-red-900/10 backdrop-blur-xl p-10 max-w-md text-center rounded-2xl shadow-[0_0_50px_rgba(239,68,68,0.2)]">
                    <AlertCircle className="mx-auto h-20 w-20 text-red-500 mb-6 drop-shadow-[0_0_10px_rgba(239,68,68,0.5)]" />
                    <h2 className="text-2xl font-bold uppercase mb-2 text-red-400 tracking-widest">VERİ HATASI</h2>
                    <p className="font-mono text-sm mb-8 text-red-200/70">ERR_CODE: {error}</p>
                    <Link href="/track">
                        <Button variant="outline" className="border-red-500/50 text-red-400 hover:bg-red-500/20 w-full">YENİDEN TARA</Button>
                    </Link>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-background pt-32 pb-20 p-4">
            <div className="container mx-auto px-4 max-w-6xl">
                <Link href="/track" className="inline-flex items-center text-sm font-medium text-slate-400 hover:text-brand-cyan mb-8 transition-colors group">
                    <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                    LİSTEYE DÖN
                </Link>

                {/* HEADER DASHBOARD */}
                <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-black/80 to-slate-900/80 backdrop-blur-2xl p-8 mb-8 shadow-2xl">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-brand-cyan/10 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/2"></div>

                    <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
                        <div className="flex items-center gap-6">
                            <div className="w-20 h-20 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-white shadow-inner">
                                <Car className="h-10 w-10 text-white" />
                            </div>
                            <div>
                                <div className="font-mono text-xs text-brand-cyan uppercase tracking-widest mb-2">ARAÇ PLAKASI</div>
                                <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight drop-shadow-md">{job.vehicle.plate}</h1>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            {/* Status Indicator */}
                            <div className={`px-6 py-3 rounded-full border backdrop-blur-md flex items-center gap-3 ${job.status === 'Completed' ? 'bg-green-500/10 border-green-500/30 text-green-400 shadow-[0_0_20px_rgba(34,197,94,0.2)]' :
                                    job.status === 'InProgress' ? 'bg-blue-500/10 border-blue-500/30 text-blue-400 shadow-[0_0_20px_rgba(59,130,246,0.2)]' :
                                        'bg-brand-cyan/10 border-brand-cyan/30 text-brand-cyan shadow-[0_0_20px_rgba(6,182,212,0.2)]'
                                }`}>
                                <div className={`w-2.5 h-2.5 rounded-full animate-pulse ${job.status === 'Completed' ? 'bg-green-400' :
                                        job.status === 'InProgress' ? 'bg-blue-400' :
                                            'bg-brand-cyan'
                                    }`}></div>
                                <span className="font-bold tracking-wider uppercase text-sm">{job.status}</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid gap-8 md:grid-cols-3">

                    {/* Main Info Columns */}
                    <div className="md:col-span-2 space-y-8">
                        {/* Vehicle Specs Grid */}
                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { label: 'MARKA', value: job.vehicle.brand },
                                { label: 'MODEL', value: job.vehicle.model },
                                { label: 'YIL', value: job.vehicle.year },
                                { label: 'RENK', value: job.vehicle.color },
                            ].map((item, i) => (
                                <Card key={i} className="hover:bg-white/5 transition-colors group">
                                    <CardContent className="p-6">
                                        <div className="font-mono text-xs text-slate-500 uppercase tracking-widest mb-2 group-hover:text-brand-cyan transition-colors">{item.label}</div>
                                        <div className="text-xl font-bold text-white">{item.value}</div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>

                        <Card className="border-brand-violet/20 bg-brand-violet/5">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2 text-brand-violet">
                                    <AlertCircle className="h-5 w-5" /> SORUN RAPORU
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="bg-black/40 rounded-xl p-6 border border-brand-violet/10 font-mono text-sm text-slate-300 leading-relaxed shadow-inner">
                                    <span className="text-brand-violet opacity-50">&gt;&gt; LOG_ENTRY:</span><br />
                                    {job.problemDescription}
                                </div>
                            </CardContent>
                        </Card>
                    </div>

                    {/* Timeline - Digital Progress */}
                    <div className="md:col-span-1">
                        <Card className="h-full bg-black/40 border-white/5">
                            <CardHeader>
                                <CardTitle className="text-white">OPERASYON AKIŞI</CardTitle>
                            </CardHeader>
                            <CardContent className="pt-6 relative">
                                <div className="absolute left-[27px] top-6 bottom-6 w-0.5 bg-white/10"></div>

                                <div className="space-y-10">
                                    {/* Step 1 */}
                                    <div className="relative pl-12 group">
                                        <div className={`absolute left-4 top-1 -translate-x-1/2 w-6 h-6 rounded-full border-4 border-background transition-all duration-500 z-10 ${job.status ? 'bg-brand-cyan shadow-[0_0_15px_var(--primary)] scale-110' : 'bg-slate-800'
                                            }`}></div>
                                        <div>
                                            <h4 className={`font-bold transition-colors ${job.status ? 'text-white' : 'text-slate-600'}`}>KAYIT OLUŞTURULDU</h4>
                                            <p className="text-xs font-mono text-slate-500 mt-1">{new Date(job.createdAt).toLocaleDateString("tr-TR")}</p>
                                        </div>
                                    </div>

                                    {/* Step 2 */}
                                    <div className="relative pl-12 group">
                                        <div className={`absolute left-4 top-1 -translate-x-1/2 w-6 h-6 rounded-full border-4 border-background transition-all duration-500 z-10 ${job.status === 'InProgress' || job.status === 'Completed' ? 'bg-blue-500 shadow-[0_0_15px_#3b82f6] scale-110' : 'bg-slate-800'
                                            }`}></div>
                                        <div>
                                            <h4 className={`font-bold transition-colors ${job.status === 'InProgress' || job.status === 'Completed' ? 'text-white' : 'text-slate-600'}`}>SERVİS İŞLEMİ</h4>
                                            <p className="text-xs font-mono text-slate-500 mt-1">
                                                {job.status === 'InProgress' ? 'İŞLENİYOR...' : job.status === 'Completed' ? 'TAMAMLANDI' : 'BEKLİYOR'}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Step 3 */}
                                    <div className="relative pl-12 group">
                                        <div className={`absolute left-4 top-1 -translate-x-1/2 w-6 h-6 rounded-full border-4 border-background transition-all duration-500 z-10 ${job.status === 'Completed' ? 'bg-green-500 shadow-[0_0_15px_#22c55e] scale-110' : 'bg-slate-800'
                                            }`}></div>
                                        <div>
                                            <h4 className={`font-bold transition-colors ${job.status === 'Completed' ? 'text-white' : 'text-slate-600'}`}>TESLİMATA HAZIR</h4>
                                            <p className="text-xs font-mono text-slate-500 mt-1">
                                                {job.status === 'Completed' ? 'KEY_HANDOVER_READY' : 'PENDING_COMPLETION'}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    )
}
