'use client'

import { useEffect, useRef } from 'react'
import { createStars } from '@/utils/createStars'

export default function StarsBackground() {
    const starsRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (!starsRef.current) return
        createStars(starsRef.current)
    }, [])

    return <div className="stars absolute inset-0" ref={starsRef}></div>
}
