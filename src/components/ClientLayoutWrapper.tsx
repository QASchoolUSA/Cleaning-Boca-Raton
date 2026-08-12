"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingInteractiveWidgets from "@/components/FloatingInteractiveWidgets";

export default function ClientLayoutWrapper({ children }: { children: React.ReactNode }) {
    const pathname = usePathname();

    if (pathname === '/booking-success') {
        return <main className="min-h-screen bg-white">{children}</main>;
    }

    return (
        <>
            <FloatingInteractiveWidgets />
            <Header />
            <main className="min-h-screen">{children}</main>
            <Footer />
        </>
    );
}
