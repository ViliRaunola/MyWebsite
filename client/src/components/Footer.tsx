import { github, linkedIn } from '@/constants/links'

export default function Footer() {
    return (
        <footer className="w-full py-6 px-4 mt-auto">
            <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
                <div className="text-secondary-text text-sm mb-4 md:mb-0">
                    © {new Date().getFullYear()} Vili Raunola
                </div>
                <div className="flex space-x-6">
                    <a
                        href={github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-secondary-text hover:text-yellow-500 transition-colors"
                    >
                        GitHub
                    </a>
                    <a
                        href={linkedIn}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-secondary-text hover:text-yellow-500 transition-colors"
                    >
                        LinkedIn
                    </a>
                    <a
                        href="mailto:raunolavili+webpage@gmail.com"
                        className="text-secondary-text hover:text-yellow-500 transition-colors"
                    >
                        Contact
                    </a>
                </div>
            </div>
        </footer>
    )
}
