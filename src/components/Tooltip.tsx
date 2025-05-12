import React, { useState } from 'react'

interface TooltipProps {
    text: string
    children: React.ReactNode
    position?: 'top' | 'bottom' | 'left' | 'right'
}

const Tooltip: React.FC<TooltipProps> = ({
    text,
    children,
    position = 'top'
}) => {
    const [isVisible, setIsVisible] = useState(false)

    const tooltipStyles: React.CSSProperties = {
        position: 'absolute',
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        padding: '5px 10px',
        borderRadius: '4px',
        fontSize: '14px',
        zIndex: 1000,
        ...(position === 'top' && {
            bottom: '100%',
            left: '50%',
            transform: 'translateX(-50%) translateY(-8px)'
        }),
        ...(position === 'bottom' && {
            top: '100%',
            left: '50%',
            transform: 'translateX(-50%) translateY(8px)'
        }),
        ...(position === 'left' && {
            right: '100%',
            top: '50%',
            transform: 'translateY(-50%) translateX(-8px)'
        }),
        ...(position === 'right' && {
            left: '100%',
            top: '50%',
            transform: 'translateY(-50%) translateX(8px)'
        })
    }

    const containerStyles: React.CSSProperties = {
        position: 'relative',
        display: 'inline-block'
    }

    return (
        <div
            style={containerStyles}
            onMouseEnter={() => setIsVisible(true)}
            onMouseLeave={() => setIsVisible(false)}
        >
            {isVisible && <div style={tooltipStyles}>{text}</div>}
            {children}
        </div>
    )
}

export default Tooltip
