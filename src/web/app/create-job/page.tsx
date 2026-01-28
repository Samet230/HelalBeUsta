"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowLeft, Loader2 } from "lucide-react"
import Link from "next/link"

export default function CreateJobPage() {
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(false)

    // Hardcoded IDs for MVP (Matches the ones used in tests)
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
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(requestBody),
            })

            if (!response.ok) {
                throw new Error("Failed to create job")
            }

            const data = await response.json()
            // Redirect to track page with the new Job ID
            router.push(`/track/${data.id}`)
        } catch (error) {
            console.error(error)
            alert("Bir hata oluştu. Lütfen tekrar deneyin.")
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className="container mx-auto px-4 py-10 max-w-2xl">
            <Link href="/" className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-6">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Ana Sayfaya Dön
            </Link>

            <div className="space-y-6">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Yeni Tamir Kaydı</h1>
                    <p className="text-muted-foreground mt-2">
                        Aracınızın bilgilerini girerek hemen randevu oluşturun.
                    </p>
                </div>

                <form onSubmit={onSubmit} className="space-y-8 border p-8 rounded-xl shadow-sm bg-white">

                    <div className="space-y-4">
                        <h3 className="text-lg font-medium">Araç Bilgileri</h3>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-sm font-medium leading-none">Plaka</label>
                                <Input name="plate" placeholder="34 ABC 123" required />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium leading-none">Renk</label>
                                <Input name="color" placeholder="Beyaz" required />
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label className="text-sm font-medium leading-none">Marka</label>
                                <Input name="brand" placeholder="Toyota" required />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium leading-none">Model</label>
                                <Input name="model" placeholder="Corolla" required />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-sm font-medium leading-none">Yıl</label>
                            <Input name="year" type="number" placeholder="2020" required min="1900" max="2099" />
                        </div>
                    </div>

                    <div className="space-y-4">
                        <h3 className="text-lg font-medium">Sorun Detayı</h3>
                        <div className="space-y-2">
                            <label className="text-sm font-medium leading-none">Şikayetiniz</label>
                            <textarea
                                name="problemDescription"
                                className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                placeholder="Motor ses yapıyor..."
                                required
                            />
                        </div>
                    </div>

                    <Button type="submit" className="w-full" disabled={isLoading} variant="brand" size="lg">
                        {isLoading ? (
                            <>
                                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                Oluşturuluyor...
                            </>
                        ) : (
                            "Kaydı Oluştur"
                        )}
                    </Button>
                </form>
            </div>
        </div>
    )
}
