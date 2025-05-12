'use client'
import BasicButton from '@/components/BasicButton'
import RocketImage from '@/components/RocketImage'
import { useCallback, useState } from 'react'
import { useRouter } from 'next/navigation'
import PersonOutline from '@/components/PersonOutlineSvg'
import { AnimatePresence, motion } from 'motion/react'
import { animation } from '@/utils/pageAnimation'

export default function Welcome() {
    const router = useRouter()
    const [isVisible, setIsVisible] = useState(true)

    const navigateToMainPage = useCallback(() => {
        setIsVisible(false)
    }, [])

    const handleAnimationComplete = () => {
        if (!isVisible) {
            router.push('/about')
        }
    }

    return (
        <div className="overflow-hidden">
            <AnimatePresence
                mode="wait"
                onExitComplete={handleAnimationComplete}
            >
                {isVisible && (
                    <motion.div
                        {...animation}
                        className="flex flex-col items-center justify-center h-screen p-4"
                    >
                        <PersonOutline className="w-[150px] h-[150px] mb-[75px] fill-white" />

                        <div
                            className="flex flex-col items-center gap-8
             flex-wrap text-center
             "
                        >
                            <p className="text-xl max-w-lg ">
                                In the vast universe of code, simplicity is the
                                ultimate sophistication. I’m{' '}
                                <span className="font-semibold text-yellow-500">
                                    Vili
                                </span>
                                , a Full-Stack Developer building elegant
                                solutions for complex challenges.
                            </p>

                            <BasicButton
                                displayText="Let's get started"
                                icon={<RocketImage />}
                                onClick={navigateToMainPage}
                            />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
