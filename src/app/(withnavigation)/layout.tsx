import Footer from '@/components/Footer'
import NavigationBar from '@/components/NavigationBar'
import { ReactNode } from 'react'

export default function Layout({ children }: { children: ReactNode }) {
    return (
        <>
            <NavigationBar />
            <div className="h-full">{children}</div>
            <Footer />
        </>
    )
}
