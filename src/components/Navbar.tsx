"use client"

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const NavLink = ({ href, children, onClick }) => (
    <Link
        href={href}
        className="text-primary-gray font-extrabold tracking-tighter hover:text-primary-yellow transition-colors duration-200 relative group inline-block"
        onClick={onClick}
    >
        {children}
        <span className="absolute left-0 bottom-0 w-full h-0.5 bg-primary-yellow transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100"></span>
    </Link>
);

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [visible, setVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const controlNavbar = () => {
            if (window.scrollY > lastScrollY) { // if scroll down hide the navbar
                setVisible(false);
            } else { // if scroll up show the navbar
                setVisible(true);
            }

            // remember current page location to use in the next move
            setLastScrollY(window.scrollY);
        };

        window.addEventListener('scroll', controlNavbar);

        // cleanup function
        return () => {
            window.removeEventListener('scroll', controlNavbar);
        };
    }, [lastScrollY]);

    const menuVariants = {
        closed: {
            height: 0,
            opacity: 0,
            transition: {
                duration: 0.3,
                ease: "easeInOut"
            }
        },
        open: {
            height: "auto",
            opacity: 1,
            transition: {
                duration: 0.3,
                ease: "easeInOut"
            }
        }
    };

    const handleLinkClick = () => {
        setIsOpen(false);
    };

    return (
        <nav className={`bg-secondary-blue shadow-lg fixed w-full z-50 transition-transform duration-300 ${visible ? 'translate-y-0' : '-translate-y-full'
            }`}>
            <div className="max-w-7xl px-14">
                <div className="flex justify-between items-center">
                    <div className="flex items-center justify-center">
                        <Link href="/" className="relative">
                            <Image
                                src="/Website-Logo.png"
                                alt="RoundnetNS Logo"
                                width={250}
                                height={100}
                                className='pt-6 pb-1'
                                priority
                            />
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        <NavLink href="/" onClick={handleLinkClick}>Home</NavLink>
                        <NavLink href="/about" onClick={handleLinkClick}>About</NavLink>
                        <NavLink href="/events" onClick={handleLinkClick}>Events</NavLink>
                        <NavLink href="/calendar" onClick={handleLinkClick}>Calendar</NavLink>
                        <NavLink href="/rankings" onClick={handleLinkClick}>Rankings</NavLink>
                        <NavLink href="/contact" onClick={handleLinkClick}>Contact</NavLink>
                    </div>

                    {/* Mobile menu button */}
                    <div className="ml-4 mt-3 md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-white hover:text-primary-yellow"
                        >
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                {isOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation with animation */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            className="md:hidden overflow-hidden"
                            initial="closed"
                            animate="open"
                            exit="closed"
                            variants={menuVariants}
                        >
                            <div className="ml-4 pb-4">
                                <div className="flex flex-col space-y-4">
                                    <NavLink href="/" onClick={handleLinkClick}>Home</NavLink>
                                    <NavLink href="/about" onClick={handleLinkClick}>About</NavLink>
                                    <NavLink href="/events" onClick={handleLinkClick}>Events</NavLink>
                                    <NavLink href="/calendar" onClick={handleLinkClick}>Calendar</NavLink>
                                    <NavLink href="/rankings" onClick={handleLinkClick}>Rankings</NavLink>
                                    <NavLink href="/contact" onClick={handleLinkClick}>Contact</NavLink>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    );
} 