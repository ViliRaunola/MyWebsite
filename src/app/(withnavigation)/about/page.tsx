'use client'
import { AnimatePresence, motion } from 'motion/react'
import { animation } from '@/utils/pageAnimation'
import { TechIconTree } from './TechIconTree'

import MeCard from './MeCard'
import Experience from './Experience'
import { Element } from 'react-scroll'
import Projects from './Projects'
import { iconsList } from '@/constants/iconTree'

export default function About() {
    return (
        <div className=" flex flex-col items-center px-4">
            <AnimatePresence mode="wait">
                <motion.div
                    {...animation}
                    className="flex flex-col items-center px-4 h-full max-w-[1000px] w-full"
                >
                    <div className="flex flex-col m-4 h-full">
                        <Element name="me">
                            <div className="mt-10">
                                <MeCard />
                            </div>
                        </Element>

                        <Element name="experience">
                            <h2 className="text-3xl font-bold text-white mt-30 mb-8 text-shadow-secondary">
                                Experience
                            </h2>
                            <Experience />
                        </Element>

                        <Element name="tech">
                            <div className="flex flex-col mt-30 mb-8">
                                <h2 className="text-3xl font-bold text-white  text-shadow-secondary">
                                    Most recent tech
                                </h2>
                                <p className="text-md text-secondary-text mt-4">
                                    I’m always trying to learn new technologies
                                    and improve my skills. Here are some of the
                                    most recent ones I’ve been professionally
                                    been working with or tried on my free time.
                                </p>
                            </div>

                            <TechIconTree icons={iconsList} />
                        </Element>

                        <Element name="projects">
                            <h2 className="text-3xl font-bold text-white  mt-30 mb-8 text-shadow-secondary">
                                Hobby and school projects
                            </h2>

                            <Projects />
                        </Element>
                    </div>
                </motion.div>
            </AnimatePresence>
        </div>
    )
}
