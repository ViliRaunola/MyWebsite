'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Element } from 'react-scroll/modules'
import { projects } from '@/constants/projects'

export interface Project {
    id: string
    title: string
    description: string
    imageSrc: string
    projectUrl?: string
    sourceUrl?: string
    videoUrl?: string
    techStack?: string[]
}

export default function Projects() {
    return (
        <Element name="projects">
            <motion.section
                initial="hidden"
                animate="show"
                className=" max-w-7xl mx-auto"
            >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {projects.map((p) => (
                        <motion.div
                            key={p.id}
                            className="bg-foreground/10 backdrop-blur-md border border-white/20 rounded-2xl overflow-hidden flex flex-col"
                            whileHover={{ scale: 1.03 }}
                            transition={{ type: 'tween', duration: 0.3 }}
                        >
                            <div className="relative w-full h-48 overflow-hidden group">
                                <Image
                                    src={`${p.imageSrc}`}
                                    alt={p.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div className="p-6 flex flex-col flex-1">
                                <h3 className="text-xl font-semibold text-white mb-2">
                                    {p.title}
                                </h3>
                                <p className="text-secondary-text flex-1 text-sm mb-4">
                                    {p.description}
                                </p>
                                {/* tech icons row */}
                                {p.techStack && (
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {p.techStack.map((tech) => (
                                            <div
                                                key={tech}
                                                className="w-6 h-6 bg-white/10 rounded-full p-1 backdrop-blur-sm"
                                            >
                                                <Image
                                                    src={`${tech}-icon.svg`}
                                                    alt={tech}
                                                    width={24}
                                                    height={24}
                                                    className="object-contain"
                                                />
                                            </div>
                                        ))}
                                    </div>
                                )}
                                <div className="flex flex-wrap gap-4 mt-auto pt-3 border-t border-white/10">
                                    {p.projectUrl && (
                                        <a
                                            href={p.projectUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-yellow-400 hover:text-yellow-300 hover:underline text-sm font-medium transition-colors"
                                        >
                                            Live Site
                                        </a>
                                    )}
                                    {p.sourceUrl && (
                                        <a
                                            href={p.sourceUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-yellow-500 hover:underline text-sm"
                                        >
                                            Source Code
                                        </a>
                                    )}

                                    {p.videoUrl && (
                                        <a
                                            href={p.videoUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-yellow-500 hover:underline text-sm"
                                        >
                                            Intro Video
                                        </a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.section>
        </Element>
    )
}
