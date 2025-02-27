'use client'
import React, { memo } from 'react'

interface Props {
    displayText: string
    icon?: React.ReactNode
    onClick?: () => void
}

const BasicButton = ({ displayText, icon, onClick }: Props) => {
    return (
        <button
            className="bg-yellow-500
            py-3 px-6 rounded-xl shadow-secondary
            text-md
            cursor-pointer
            hover:shadow-secondary-hover
            hover:bg-yellow-800
            transition-all duration-300
            "
            onClick={() => onClick?.()}
        >
            <span className="flex items-center justify-center gap-2">
                {displayText}
                {icon}
            </span>
        </button>
    )
}

export default memo(BasicButton)
