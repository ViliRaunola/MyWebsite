import { motion } from 'motion/react'
import React from 'react'

export interface TechTreeIcon {
    icon: React.ReactNode
    label?: string
}

interface TechIconTreeProps {
    icons: TechTreeIcon[]
}

export const TechIconTree: React.FC<TechIconTreeProps> = ({ icons }) => {
    return (
        <div
            className="
              w-full
              grid
              gap-clamp(0.5rem,2vw,1.5rem)
              grid-cols-[repeat(auto-fit,minmax(80px,1fr))]
              mt-8
       
            "
        >
            {icons.map((item, index) => (
                <motion.div
                    key={index}
                    whileHover={{ scale: 1.25 }}
                    className="flex flex-col items-center p-2"
                >
                    {item.icon}
                    <p className="text-sm text-secondary-text mt-2">
                        {item.label}
                    </p>
                </motion.div>
            ))}
        </div>
    )
}
