"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

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
        <div className="container mx-auto px-4 py-20 max-w-xl text-center">
            <h1 className="text-3xl font-bold tracking-tight mb-4">Tamir Durumu Sorgula</h1>
            <p className="text-muted-foreground mb-8">
                Size verilen takip numarasını (Job ID) aşağıya girerek aracınızın son durumunu öğrenebilirsiniz.
            </p>

            <form onSubmit={onSearch} className="flex gap-2">
                <Input
                    placeholder="Örn: 15a4c8ae-..."
                    value={jobId}
                    onChange={(e) => setJobId(e.target.value)}
                    className="h-12 text-lg"
                    required
                />
                <Button type="submit" size="lg" className="h-12 px-8" variant="brand">
                    <Search className="mr-2 h-5 w-5" />
                    Sorgula
                </Button>
            </form>
        </div>
    )
}
