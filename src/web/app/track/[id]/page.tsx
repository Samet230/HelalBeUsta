"use client"

import { useEffect, useState } from "react"
import { useParams } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Car, Calendar, Wrench, CheckCircle, Clock, AlertCircle } from "lucide-react"

// Types matching API response
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
                    if (res.status === 404) throw new Error("Kayıt bulunamadı.")
                    throw new Error("Bir hata oluştu.")
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
            <div className="flex h-[50vh] items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-brand-orange"></div>
            </div>
        )
    }

    if (error || !job) {
        return (
            <div className="container mx-auto px-4 py-20 text-center max-w-md">
                <AlertCircle className="mx-auto h-16 w-16 text-red-500 mb-4" />
                <h2 className="text-2xl font-bold mb-2">Hata Oluştu</h2>
                <p className="text-muted-foreground mb-6">{error}</p>
                <Link href="/track">
                    <Button variant="outline">Tekrar Dene</Button>
                </Link>
            </div>
        )
    }

    return (
        <div className="container mx-auto px-4 py-10 max-w-4xl">
            <Link href="/track" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-6">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Sorgulama Ekranına Dön
            </Link>

            <div className="grid gap-6 md:grid-cols-3">
                {/* Main Info */}
                <div className="md:col-span-2 space-y-6">
                    <div className="bg-white border rounded-xl p-6 shadow-sm">
                        <div className="flex items-start justify-between mb-4">
                            <div>
                                <h1 className="text-2xl font-bold">{job.vehicle.plate}</h1>
                                <p className="text-muted-foreground">{job.vehicle.brand} {job.vehicle.model} ({job.vehicle.year})</p>
                            </div>
                            <div className="bg-brand-orange/10 text-brand-orange px-3 py-1 rounded-full text-sm font-medium border border-brand-orange/20">
                                {job.status}
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4 text-sm mt-6">
                            <div className="flex items-center text-muted-foreground">
                                <Calendar className="mr-2 h-4 w-4" />
                                <span>Kayıt: {new Date(job.createdAt).toLocaleDateString("tr-TR")}</span>
                            </div>
                            <div className="flex items-center text-muted-foreground">
                                <Clock className="mr-2 h-4 w-4" />
                                <span>Saat: {new Date(job.createdAt).toLocaleTimeString("tr-TR", { hour: '2-digit', minute: '2-digit' })}</span>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white border rounded-xl p-6 shadow-sm">
                        <h3 className="text-lg font-semibold mb-4 flex items-center">
                            <AlertCircle className="mr-2 h-5 w-5 text-blue-500" />
                            Sorun Bildirimi
                        </h3>
                        <p className="text-slate-700 bg-slate-50 p-4 rounded-lg border">
                            {job.problemDescription}
                        </p>
                    </div>
                </div>

                {/* Status Timeline (Mock Visual) */}
                <div className="md:col-span-1">
                    <div className="bg-white border rounded-xl p-6 shadow-sm h-full">
                        <h3 className="font-semibold mb-6">İşlem Durumu</h3>
                        <div className="space-y-8 relative before:absolute before:left-3.5 before:top-2 before:h-full before:w-0.5 before:bg-slate-100">

                            {/* Step 1: Pending */}
                            <div className="relative flex items-start">
                                <span className={`f flex h-7 w-7 items-center justify-center rounded-full ring-4 ring-white ${job.status === 'Pending' ? 'bg-brand-orange' : 'bg-green-500'}`}>
                                    {job.status === 'Pending' ? <Clock className="h-4 w-4 text-white" /> : <CheckCircle className="h-4 w-4 text-white" />}
                                </span>
                                <div className="ml-4">
                                    <p className="text-sm font-medium">Kayıt Alındı</p>
                                    <p className="text-xs text-muted-foreground">Araç servise kabul edildi.</p>
                                </div>
                            </div>

                            {/* Step 2: InProgress (Mock) */}
                            <div className="relative flex items-start opacity-70">
                                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-200 ring-4 ring-white">
                                    <Wrench className="h-3.5 w-3.5 text-slate-500" />
                                </span>
                                <div className="ml-4">
                                    <p className="text-sm font-medium text-slate-500">Tamir Başladı</p>
                                    <p className="text-xs text-muted-foreground">Usta incelemeye başladı.</p>
                                </div>
                            </div>

                            {/* Step 3: Complete (Mock) */}
                            <div className="relative flex items-start opacity-70">
                                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-200 ring-4 ring-white">
                                    <CheckCircle className="h-3.5 w-3.5 text-slate-500" />
                                </span>
                                <div className="ml-4">
                                    <p className="text-sm font-medium text-slate-500">Tamamlandı</p>
                                    <p className="text-xs text-muted-foreground">Araç teslime hazır.</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
