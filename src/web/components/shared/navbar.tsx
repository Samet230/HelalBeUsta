"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Wrench } from "lucide-react";

export function Navbar() {
    return (
        <div className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
            <nav className="flex items-center justify-between px-6 h-16 w-full max-w-5xl bg-black/40 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] transition-all hover:bg-black/50 hover:border-white/20">

                {/* LOGO - Glowing */}
                <Link href="/" className="flex items-center space-x-3 group">
                    <div className="relative">
                        <div className="absolute inset-0 bg-brand-cyan blur-md opacity-50 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="relative bg-black/80 border border-white/10 text-brand-cyan p-2 rounded-lg">
                            <Wrench className="h-5 w-5" />
                        </div>
                    </div>
                    <span className="font-bold text-xl tracking-tight text-white group-hover:text-brand-cyan transition-colors duration-300">
                        Tamir<span className="text-brand-cyan">Sepeti</span>
                    </span>
                </Link>

                {/* LINKS - Hidden on mobile, spaced out */}
                <div className="hidden md:flex items-center gap-8">
                    <Link href="/" className="text-sm font-medium text-slate-400 hover:text-white transition-colors relative group">
                        Ana Sayfa
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-cyan group-hover:w-full transition-all duration-300"></span>
                    </Link>
                    <Link href="/track" className="text-sm font-medium text-slate-400 hover:text-white transition-colors relative group">
                        Sorgulama
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-cyan group-hover:w-full transition-all duration-300"></span>
                    </Link>
                    <Link href="/create-job" className="text-sm font-medium text-slate-400 hover:text-white transition-colors relative group">
                        Hizmetler
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-cyan group-hover:w-full transition-all duration-300"></span>
                    </Link>
                </div>

                {/* ACTIONS */}
                <div className="flex items-center gap-4">
                    <Link href="/create-job">
                        <Button variant="brand" className="rounded-full px-8 h-10 shadow-[0_0_20px_rgba(6,182,212,0.3)]">
                            Randevu Al
                        </Button>
                    </Link>
                </div>
            </nav>
        </div>
    );
}
