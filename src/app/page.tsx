"use client"

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[90vh]">
        <Image
          src="/hero-image.jpg"
          alt="Roundnet players in action"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40 z-10" />
        <motion.div 
          className="relative z-20 flex flex-col justify-center items-center h-full text-white px-4"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <motion.h1 
            className="text-5xl mt-16 md:text-7xl font-bold mb-6 text-center"
            variants={fadeInUp}
          >
            Welcome to <span className="text-primary-yellow">RoundnetNS</span>
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl mb-8 text-center max-w-2xl"
            variants={fadeInUp}
          >
            For all things Roundnet in Nova Scotia!
          </motion.p>
          <motion.div variants={fadeInUp}>
            <Link 
              href="/events"
              className="bg-primary-yellow text-primary-gray px-8 py-3 rounded-full font-bold text-lg hover:scale-105 transition-transform duration-300"
            >
              Join Our Next Event
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section with scroll animations */}
      <motion.section 
        className="py-16 px-4 md:px-14 bg-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-7xl">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <Image
                src="/practice-1.jpg"
                alt="Weekly practice session"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className='md:block flex flex-col justify-center items-center'> 
              <h2 className="text-3xl font-bold text-primary-blue mb-4">Join Our Weekly Sessions</h2>
              <p className="text-gray-600 text-lg mb-6">
                Whether you're new to the sport or a seasoned player, our weekly sessions 
                are the perfect way to improve your game and meet fellow players.
              </p>
              <Link 
                href="/events"
                className="bg-primary-yellow w-1/2 text-primary-gray px-6 py-3 rounded-full font-bold hover-scale text-center"
              >
                View Schedule
              </Link>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 md:block flex flex-col justify-center items-center">
              <h2 className="text-3xl font-bold text-primary-blue mb-4">Compete in Tournaments</h2>
              <p className="text-gray-600 text-lg mb-6">
                Test your skills against the best players in Nova Scotia. Our tournaments 
                are professionally organized and welcome all skill levels.
              </p>
              <Link 
                href="/events"
                className="bg-primary-yellow text-primary-gray px-6 py-3 rounded-full font-bold hover-scale text-center"
              >
                View Tournaments
              </Link>
            </div>
            <div className="order-1 md:order-2">
              <Image
                src="/tournament-1.jpg"
                alt="Tournament action"
                width={600}
                height={400}
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-primary-darkblue">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Play?</h2>
          <p className="text-lg mb-8">
            Whether you're a beginner or a pro, there's a place for you in our community.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link 
              href="/contact"
              className="bg-primary-yellow text-primary-gray px-6 py-3 rounded-full font-bold hover-scale"
            >
              Contact Us
            </Link>
            <Link 
              href="/about"
              className="bg-transparent border-2 border-white px-6 py-3 rounded-full font-bold hover-scale"
            >
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
