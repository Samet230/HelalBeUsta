"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Search, ScanLine, ArrowLeft } from "lucide-react"
import Link from "next/link"

export default function TrackPage() {
    const router = useRouter()
    const [jobId, setJobId] = useState("")

    function onSearch(e: React.FormEvent) {
        e.preventDefault()
        if (jobId.trim()) {
            router.push(`/track/${jobId.trim()}`)
        }
    }

    return (
        <div className="min-h-screen bg-background flex flex-col pt-32 p-4 relative overflow-hidden">
            {/* Scanner line animation background */}
            <div className="absolute top-0 left-0 w-full h-1 bg-brand-cyan/20 blur-sm animate-[float_4s_linear_infinite]" style={{ animationName: 'scanline' }}></div>

            <div className="container mx-auto px-4 max-w-2xl relative z-10 flex-1 flex flex-col justify-center">
                <Link href="/" className="absolute top-0 left-4 md:left-0 inline-flex items-center text-sm font-medium text-slate-400 hover:text-brand-cyan mb-8 transition-colors">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Ana Menü
                </Link>

                <Card className="w-full shadow-[0_0_50px_rgba(6,182,212,0.15)] border-brand-cyan/20">
                    <CardHeader className="text-center space-y-4 pt-10">
                        <div className="w-20 h-20 bg-black/50 rounded-full border border-brand-cyan/50 flex items-center justify-center mx-auto mb-4 relative">
                            <div className="absolute inset-0 rounded-full border border-brand-cyan/20 animate-ping"></div>
                            <ScanLine className="h-10 w-10 text-brand-cyan" />
                        </div>
                        <CardTitle className="text-4xl font-bold text-white tracking-tight">Durum Sorgulama</CardTitle>
                        <CardDescription className="text-slate-400 text-lg">
                            Takip numaranızı girerek araç verilerine erişin.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="pb-10 px-8">
                        <form onSubmit={onSearch} className="flex flex-col gap-4">
                            <div className="relative">
                                <Input
                                    placeholder="GUID: 15a4c8ae-..."
                                    value={jobId}
                                    onChange={(e) => setJobId(e.target.value)}
                                    className="h-16 text-lg font-mono text-center tracking-wider bg-black/50 border-brand-cyan/30 focus-visible:ring-brand-cyan"
                                    required
                                />
                                <div className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-mono text-brand-cyan/50 pointer-events-none">ID_REQ</div>
                            </div>
                            <Button type="submit" size="lg" className="h-16 w-full text-lg mt-2" variant="brand">
                                <Search className="mr-2 h-5 w-5" />
                                Verileri Tara
                            </Button>
                        </form>
                    </CardContent>
                </Card>
            </div>

            <style jsx>{`
                @keyframes scanline {
                    0% { top: 0%; opacity: 0; }
                    10% { opacity: 1; }
                    90% { opacity: 1; }
                    100% { top: 100%; opacity: 0; }
                }
            `}</style>
        </div>
    )
}
