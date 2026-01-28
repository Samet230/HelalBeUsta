import Link from "next/link"
import { Button } from "../ui/button"
import { Car, Wrench } from "lucide-react"

export function Navbar() {
    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center mx-auto px-4">
                <Link href="/" className="mr-8 flex items-center space-x-2">
                    <Wrench className="h-6 w-6 text-brand-orange" />
                    <span className="hidden font-bold sm:inline-block text-xl">
                        Tamir<span className="text-brand-orange">Sepeti</span>
                    </span>
                </Link>
                <nav className="flex items-center space-x-6 text-sm font-medium">
                    <Link
                        href="/"
                        className="transition-colors hover:text-foreground/80 text-foreground/60"
                    >
                        Ana Sayfa
                    </Link>
                    <Link
                        href="/create-job"
                        className="transition-colors hover:text-foreground/80 text-foreground/60"
                    >
                        Randevu Al
                    </Link>
                    <Link
                        href="/track"
                        className="transition-colors hover:text-foreground/80 text-foreground/60"
                    >
                        Takip
                    </Link>
                </nav>
                <div className="ml-auto flex items-center space-x-4">
                    <Link href="/create-job">
                        <Button variant="brand" size="sm">Hemen Başla</Button>
                    </Link>
                </div>
            </div>
        </header>
    )
}
