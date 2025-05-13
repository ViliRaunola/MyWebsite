'use client'
import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function App() {
    const router = useRouter()

    // Need to use useEffect to redirect as
    // the redirects is not working on static build
    useEffect(() => {
        router.push('/welcome')
    }, [router])

    return <></>
}
