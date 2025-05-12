import { motion } from 'motion/react'

interface TimelineItemProps {
    title: string
    subtitle: string
    duration: string
    description: string
    isLast?: boolean
}

const TimelineItem: React.FC<TimelineItemProps> = ({
    title,
    subtitle,
    duration,
    description,
    isLast = false
}) => {
    return (
        <div className="flex">
            {/* Timeline connector */}
            <div className="flex flex-col items-center mr-4">
                {/* Ball */}
                <motion.div
                    className="w-4 h-4 rounded-full bg-yellow-500"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                />
                {/* Line */}
                {!isLast && (
                    <motion.div
                        className="w-0.5 bg-yellow-500 h-full"
                        initial={{ height: 0 }}
                        animate={{ height: '100%' }}
                        transition={{ duration: 0.5 }}
                    />
                )}
            </div>

            {/* Content */}
            <motion.div
                className="pb-8 flex-1"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
            >
                <h3 className="text-xl font-semibold text-white -mt-2">
                    {title}
                </h3>
                <div className="flex justify-between items-center mb-2">
                    <span className="text-yellow-500">{subtitle}</span>
                    <span className="text-secondary-text text-sm">
                        {duration}
                    </span>
                </div>
                <p className="text-secondary-text">{description}</p>
            </motion.div>
        </div>
    )
}

export default function Experience() {
    const experiences = [
        {
            title: 'Full Stack Developer',
            subtitle: 'NOCFO',
            duration: '2025 - Present',
            description:
                'Working on developing complex features in the finance domain for NOCFO product. Designing and implementing features for front and backend. Collaborating with the team to ensure the best user experience and quality while keeping the solution as simple as possible. Participated also brainstorming and planning sessions to improve the product and the development process.'
        },
        {
            title: 'Junior Full Stack Developer',
            subtitle: 'NOCFO',
            duration: '2024 - 2025',
            description:
                'Designing, developing, and maintaining the NOCFO product while crushing bunch of bugs. Working mainly with React, TypeScript, and Python.'
        },
        {
            title: 'Software Developer Trainee',
            subtitle: 'Weasel Software',
            duration: '2023 - 2023',
            description:
                "Part of an internal team developing a web application to generate and display company's internal communications."
        }
    ]

    return (
        <div className="w-full">
            {experiences.map((exp, index) => (
                <TimelineItem
                    key={index}
                    {...exp}
                    isLast={index === experiences.length - 1}
                />
            ))}
        </div>
    )
}
