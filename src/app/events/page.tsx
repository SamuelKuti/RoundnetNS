"use client";

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 }
};

const slideUp = {
  initial: { y: 30, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: { duration: 0.5 }
};

const TabButton = ({ active, children, onClick }) => (
  <motion.button
    className={`px-6 py-2 rounded-full transition-colors duration-200 ${
      active ? 'bg-primary-blue text-white' : 'text-gray-600 hover:bg-gray-200'
    }`}
    onClick={onClick}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    {children}
  </motion.button>
);

const EventCard = ({ title, date, location, description, registrationOpen, image, index }) => (
  <motion.div 
    className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
    variants={{
      initial: { opacity: 0, y: 50 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: -50 }
    }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
  >
    <div className="relative h-48 overflow-hidden">
      <Image
        src={image || '/event-default.jpg'}
        alt={title}
        fill
        className="object-cover transform hover:scale-110 transition-transform duration-700"
      />
      {registrationOpen && (
        <div className="absolute top-4 right-4">
          <motion.span 
            className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            Registration Open
          </motion.span>
        </div>
      )}
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold text-primary-blue mb-3">{title}</h3>
      <div className="space-y-2 mb-4">
        <p className="flex items-center text-gray-600">
          <span className="mr-2">📅</span> {date}
        </p>
        <p className="flex items-center text-gray-600">
          <span className="mr-2">📍</span> {location}
        </p>
      </div>
      <p className="text-gray-600 mb-4">{description}</p>
      {registrationOpen && (
        <motion.button 
          className="w-full bg-primary-yellow text-primary-blue font-bold py-2 rounded-full"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          Register Now
        </motion.button>
      )}
    </div>
  </motion.div>
);

export default function Events() {
  const [selectedTab, setSelectedTab] = useState('upcoming');
  const [isLoading, setIsLoading] = useState(false);

  const handleTabChange = async (tab) => {
    setIsLoading(true);
    setSelectedTab(tab);
    // Simulate loading delay
    await new Promise(resolve => setTimeout(resolve, 300));
    setIsLoading(false);
  };

  return (
    <div className="py-20 px-4">
      {/* Hero Section with Parallax */}
      <motion.div 
        className="relative h-[40vh] mb-12"
        initial="initial"
        animate="animate"
        variants={fadeIn}
      >
        <Image
          src="/events-hero.jpg"
          alt="Roundnet tournament"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <motion.div 
          className="relative z-10 h-full flex flex-col justify-center items-center text-white"
          variants={slideUp}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Roundnet Events</h1>
          <p className="text-xl text-center max-w-2xl">
            Join us for tournaments, practice sessions, and community gatherings
          </p>
        </motion.div>
      </motion.div>

      <div className="max-w-6xl mx-auto">
        {/* Tab Navigation */}
        <motion.div 
          className="flex justify-center mb-8"
          variants={fadeIn}
          initial="initial"
          animate="animate"
        >
          <div className="flex space-x-4 bg-gray-100 p-2 rounded-full">
            <TabButton 
              active={selectedTab === 'upcoming'} 
              onClick={() => handleTabChange('upcoming')}
            >
              Upcoming Events
            </TabButton>
            <TabButton 
              active={selectedTab === 'past'} 
              onClick={() => handleTabChange('past')}
            >
              Past Events
            </TabButton>
          </div>
        </motion.div>

        {/* Events Grid with AnimatePresence for smooth transitions */}
        <AnimatePresence mode="wait">
          {isLoading ? (
            <motion.div 
              className="flex justify-center py-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-blue"></div>
            </motion.div>
          ) : (
            <motion.div 
              className="grid md:grid-cols-2 gap-8"
              initial="initial"
              animate="animate"
              exit="exit"
              variants={{
                animate: {
                  transition: {
                    staggerChildren: 0.1
                  }
                }
              }}
            >
              {selectedTab === 'upcoming' ? (
                <>
                  <EventCard 
                    title="Summer Kickoff Tournament"
                    date="June 15, 2024"
                    location="Halifax Commons"
                    description="Join us for our season opening tournament! All skill levels welcome."
                    registrationOpen={true}
                    image="/tournament-1.jpg"
                    index={0}
                  />
                  <EventCard 
                    title="Weekly Practice Session"
                    date="Every Sunday"
                    location="Point Pleasant Park"
                    description="Regular practice sessions for all members. Equipment provided."
                    registrationOpen={true}
                    image="/practice-1.jpg"
                    index={1}
                  />
                </>
              ) : (
                <>
                  <EventCard 
                    title="Spring Championship"
                    date="April 10, 2024"
                    location="Dartmouth Commons"
                    description="Congratulations to all participants in our spring tournament!"
                    registrationOpen={false}
                    image="/past-event-1.jpg"
                    index={0}
                  />
                </>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
} 