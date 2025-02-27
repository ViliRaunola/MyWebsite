import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import StarsBackground from '@/components/StarsBackground'

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin']
})

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin']
})

export const metadata: Metadata = {
    title: 'Hello There!',
    description: "Vili Raunola's site"
}

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
            >
                <div className="flex h-full w-full">
                    <div className="starry-night fixed inset-0 z-0 overflow-hidden">
                        <StarsBackground key="stars-background" />
                    </div>
                    <div className="flex flex-col w-full h-content">
                        {children}
                    </div>
                </div>
            </body>
        </html>
    )
}
