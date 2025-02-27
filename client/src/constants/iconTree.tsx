import { TechTreeIcon } from '@/app/(withnavigation)/about/TechIconTree'
import Image from 'next/image'

export const iconsList: TechTreeIcon[] = [
    {
        icon: (
            <Image src="python-icon.svg" alt="python" width={50} height={50} />
        ),

        label: 'Python'
    },

    {
        icon: <Image src="react-icon.svg" alt="react" width={50} height={50} />,

        label: 'React'
    },
    {
        icon: (
            <Image src="docker-icon.svg" alt="docker" width={50} height={50} />
        ),

        label: 'Docker'
    },
    {
        icon: <Image src="ts-icon.svg" alt="ts" width={50} height={50} />,

        label: 'TypeScript'
    },

    {
        icon: <Image src="figma-icon.svg" alt="figma" width={50} height={50} />,

        label: 'Figma'
    },

    {
        icon: <Image src="bash-icon.svg" alt="bash" width={50} height={50} />,

        label: 'Bash'
    },
    {
        icon: (
            <Image src="django-icon.svg" alt="django" width={50} height={50} />
        ),

        label: 'Django'
    },
    {
        icon: <Image src="aws-icon.svg" alt="aws" width={50} height={50} />,

        label: 'AWS'
    },
    {
        icon: (
            <Image src="openai-icon.svg" alt="openai" width={50} height={50} />
        ),

        label: 'OpenAI'
    },

    {
        icon: (
            <Image src="stripe-icon.svg" alt="stripe" width={50} height={50} />
        ),

        label: 'Stripe'
    },
    {
        icon: <Image src="c-icon.svg" alt="c" width={50} height={50} />,

        label: 'C'
    },
    {
        icon: (
            <Image src="pandas-icon.svg" alt="pandas" width={50} height={50} />
        ),

        label: 'Pandas'
    },
    {
        icon: (
            <Image
                src="tanstack-icon.svg"
                alt="tanstack"
                width={50}
                height={50}
            />
        ),

        label: 'TanStack'
    },
    {
        icon: (
            <Image
                src="floatingui-icon.svg"
                alt="floatingui"
                width={50}
                height={50}
            />
        ),

        label: 'Floating UI'
    },

    {
        icon: (
            <Image src="github-icon.svg" alt="github" width={50} height={50} />
        ),

        label: 'GitHub'
    },
    {
        icon: (
            <Image src="nextjs-icon.svg" alt="github" width={50} height={50} />
        ),

        label: 'NextJs'
    },
    {
        icon: (
            <Image
                src="tailwind-icon.svg"
                alt="github"
                width={50}
                height={50}
            />
        ),

        label: 'Tailwind'
    }
]
