import GithubSvg from '@/components/GithubSvg'
import LinkedInSvg from '@/components/LinkedInSvg'
import LocationSvg from '@/components/LocationIcon'
import { github, linkedIn } from '@/constants/links'
import { motion } from 'framer-motion'

export default function MeCard() {
    return (
        <div
            className="flex flex-col 
        justify-center border-solid border-1 border-white/80 rounded-2xl p-8 max-w-[100%] bg-foreground"
        >
            <div className="flex flex-row justify-space-between items-center w-full ">
                <h3 className="text-xl font-normal text-white">Vili Raunola</h3>

                <div className="flex flex-row gap-4 ml-auto">
                    <ClickableIcon href={linkedIn}>
                        <LinkedInSvg className="w-[24px] h-[24px] fill-yellow-500 transition-colors" />
                    </ClickableIcon>

                    <ClickableIcon href={github}>
                        <GithubSvg className="w-[24px] h-[24px] fill-yellow-500 transition-colors" />
                    </ClickableIcon>
                </div>
            </div>

            <div className="flex flex-row items-center">
                <LocationSvg className="w-[12px] h-[12px] fill-secondary-text mr-2" />
                <p className="text-sm font-normal text-secondary-text">
                    Lappeenranta, Finland
                </p>
            </div>

            <div className="flex flex-row items-center mt-6">
                <p className="text-m font-normal text-white">
                    I'm a Full Stack Developer with nearly 2 years of working
                    experience. I have a Master's degree in software
                    engineering. Outside of work I love to play video games, try
                    out new receipes and spend time in the nature. My aim is to
                    keep my knowledge up to date by reading tech related
                    literature and trying out new technologies to solve everyday
                    problems.
                </p>
            </div>
        </div>
    )
}

function ClickableIcon({
    href,
    children
}: {
    href: string
    children: React.ReactNode
}) {
    const animation = {
        initial: { scale: 1 },
        whileHover: { scale: 1.2 },
        whileTap: { scale: 0.9 },
        animate: {
            rotate: [0, -10, 10, -10, 10, 0],
            transition: {
                delay: 4,
                duration: 0.5,
                repeat: Infinity,
                repeatDelay: 10
            }
        }
    }

    return (
        <motion.a
            {...animation}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
        >
            {children}
        </motion.a>
    )
}
