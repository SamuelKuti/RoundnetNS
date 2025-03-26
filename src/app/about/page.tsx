"use client"

import { motion } from 'framer-motion';
import Image from 'next/image';
import { TeamMemberProps, ValueCardProps } from '@/types';
import Link from 'next/link';

const fadeIn = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 0.6 }
};

const slideIn = {
    initial: { x: -60, opacity: 0 },
    animate: { x: 0, opacity: 1 },
    transition: { duration: 0.6 }
};

export default function About() {
    return (
        <div className="py-20 px-4">
            {/* Hero Section */}
            <motion.section
                className="relative max-w-6xl mx-auto mb-16"
                initial="initial"
                animate="animate"
                variants={fadeIn}
            >
                <motion.h1
                    className="text-4xl md:text-5xl font-bold text-primary-blue mt-16 text-center"
                    variants={slideIn}
                >
                    About RoundnetNS
                </motion.h1>
                <motion.p
                    className="text-xl text-gray-600 text-center max-w-3xl mt-4 mx-auto"
                    variants={slideIn}
                >
                    Building and growing the Roundnet community across Nova Scotia since 2023
                </motion.p>
            </motion.section>

            {/* Mission Section with parallax effect */}
            <motion.section
                className="max-w-6xl mx-auto mb-20 relative overflow-hidden rounded-lg"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <div className="relative h-[400px]">
                    <Image
                        src="/mission-bg.jpg"
                        alt="Players in action"
                        fill
                        className="object-cover brightness-50 transform scale-110 transition-transform duration-[2s]"
                    />
                    <div className="relative z-10 p-8 md:p-12 h-full flex flex-col justify-center">
                        <h2 className="text-3xl font-bold mb-6 text-white">Our Mission</h2>
                        <p className="text-lg leading-relaxed text-white">
                            RoundnetNS is dedicated to promoting and developing the sport of Roundnet
                            throughout Nova Scotia. We aim to create an inclusive community where players
                            of all skill levels can come together to play, learn, and compete.
                        </p>
                    </div>
                </div>
            </motion.section>

            {/* Team Section with stagger effect */}
            <motion.section
                className="max-w-6xl mx-auto mb-20"
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                variants={{
                    animate: {
                        transition: {
                            staggerChildren: 0.2
                        }
                    }
                }}
            >
                <motion.h2
                    className="text-3xl font-bold text-primary-blue mb-12 text-center"
                    variants={fadeIn}
                >
                    Meet Our Team
                </motion.h2>
                <div className="grid mx-4 md:mx-0 md:grid-cols-3 gap-8">
                    {[
                        {
                            name: "Samuel Kuti",
                            role: "President",
                            image: "/sam-photo.jpg",
                            description: "Roundnet enthusiast, focused on growing the sport in Nova Scotia.",
                            instagram: "https://www.instagram.com/samuel_kuti_04/"
                        },
                        {
                            name: "Taiki Kawano",
                            role: "Vice President",
                            image: "/taiki-photo.jpg",
                            description: "Assisting in the growth and inclusion of all within the sport.",
                            instagram: "https://www.instagram.com/taiki_20/"
                        },
                        {
                            name: "Jaak Reichman",
                            role: "Marketing & Events Coordinator",
                            image: "/jaak-photo.jpg",
                            description: "Organizing fun & competitive tournaments across the province.",
                            instagram: "https://www.instagram.com/jaakreichman/"
                        },

                    ].map((member, index) => (
                        <motion.div
                            key={member.name}
                            variants={{
                                initial: { opacity: 0, y: 20 },
                                animate: { opacity: 1, y: 0 }
                            }}
                            className="group"
                        >
                            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                                <div className="relative h-64">
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div className="p-6">
                                    <div className="flex flex-row justify-between items-center gap-2">
                                        <h3 className="text-xl font-bold text-primary-blue mb-2">{member.name}</h3>
                                        <Link
                                            href={member.instagram}
                                            target="_blank"
                                            className="hover-scale text-primary-blue"
                                        >
                                            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                                                {/* Instagram SVG */}
                                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                            </svg>
                                        </Link>
                                    </div>
                                    <p className="text-primary-yellow font-semibold mb-4">{member.role}</p>
                                    <p className="text-gray-600">{member.description}</p>

                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.section>

            {/* Values Section with image backgrounds */}
            <section className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-primary-blue mb-12 text-center">
                    Our Values
                </h2>
                <div className="grid md:mx-0 mx-4 md:grid-cols-2 gap-8">
                    <ValueCard
                        title="Community First"
                        description="We believe in building a strong, supportive community where everyone feels welcome."
                        image="/growth-value.jpg"
                    />
                    <ValueCard
                        title="Inclusivity"
                        description="Roundnet is for everyone, regardless of age, background, or skill level."
                        image="/inclusivity-value.jpg"
                    />
                    <ValueCard
                        title="Growth"
                        description="We're committed to helping players develop their skills and love for the game."
                        image="/event-hero.jpg"
                    />
                    <ValueCard
                        title="Fun"
                        description="Above all, we believe in making Roundnet enjoyable for everyone involved."
                        image="/contact-hero.jpg"
                    />
                </div>
            </section>
        </div>
    );
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, role, image, description, instagram }) => (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover-scale">
        <div className="aspect-w-1 aspect-h-1 relative">
            <Image
                src={image}
                alt={name}
                width={400}
                height={400}
                className="object-cover"
            />
        </div>
        <div className="p-6">
            <h3 className="text-xl font-bold text-primary-blue mb-1">{name}</h3>
            <p className="text-primary-yellow font-semibold mb-3">{role}</p>
            <p className="text-gray-600">{description}</p>
        </div>
    </div>
);

const ValueCard: React.FC<ValueCardProps> = ({ title, description, image }) => (
    <div className="relative overflow-hidden rounded-lg shadow-lg hover-scale group h-64">
        <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/50 group-hover:bg-black/60 transition-colors duration-300" />
        <div className="relative z-10 p-6 text-white h-full flex flex-col justify-end">
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p className="text-gray-200">{description}</p>
        </div>
    </div>
); 