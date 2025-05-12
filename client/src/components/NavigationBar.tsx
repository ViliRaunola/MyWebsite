'use client'
import { motion } from 'motion/react'
import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-scroll'

export default function NavigationBar() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const navRef = useRef<HTMLDivElement>(null)

    // Change navbar style on scroll
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // Handle outside clicks to close mobile menu
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                navRef.current &&
                !navRef.current.contains(event.target as Node) &&
                isMobileMenuOpen
            ) {
                setIsMobileMenuOpen(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [isMobileMenuOpen])

    return (
        <nav
            ref={navRef}
            className={`sticky top-0 z-50 w-full transition-all duration-300 ${
                isScrolled || isMobileMenuOpen
                    ? 'bg-white backdrop-blur-md shadow-md'
                    : 'bg-transparent'
            }`}
        >
            <div className="max-w-7xl mx-auto flex md:justify-center px-10">
                <div className="flex items-center justify-between h-16">
                    {/* Navigation Links */}
                    <div className="hidden md:block">
                        <div className="flex items-center space-x-8">
                            {['Me', 'Experience', 'Tech', 'Projects'].map(
                                (item) => (
                                    <Link
                                        key={item}
                                        to={item.toLowerCase()}
                                        spy={true}
                                        smooth={true}
                                        offset={
                                            item.toLowerCase() === 'me'
                                                ? -50
                                                : 30
                                        }
                                        duration={500}
                                        className={`${isScrolled ? 'text-black' : 'text-white'} hover:text-yellow-500 px-3 py-2 text-sm font-medium cursor-pointer transition-colors`}
                                        activeClass="text-yellow-500 font-semibold"
                                    >
                                        {item}
                                    </Link>
                                )
                            )}
                        </div>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button
                            type="button"
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-yellow-500 hover:bg-gray-100 focus:outline-none"
                            aria-controls="mobile-menu"
                            aria-expanded="false"
                            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
                        >
                            <svg
                                className="h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu, show/hide based on menu state */}
            {isMobileMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-16 left-0 w-full px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white/90 backdrop-blur-md shadow-md"
                >
                    {['Me', 'Experience', 'Tech', 'Projects'].map((item) => (
                        <motion.div
                            key={item}
                            initial={{ x: -20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{
                                delay:
                                    0.1 *
                                    [
                                        'Me',
                                        'Experience',
                                        'Tech',
                                        'Projects'
                                    ].indexOf(item)
                            }}
                        >
                            <Link
                                to={item.toLowerCase()}
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                className="text-gray-700 hover:text-yellow-500 block px-3 py-2 rounded-md text-base font-medium cursor-pointer transition-colors"
                                activeClass="text-yellow-500 font-semibold bg-gray-50"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {item}
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>
            )}
        </nav>
    )
}
