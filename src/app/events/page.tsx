"use client";

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { TabButtonProps, EventCardProps } from '@/types';

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

const TabButton: React.FC<TabButtonProps> = ({ active, children, onClick }) => (
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

const EventCard: React.FC<EventCardProps> = ({ title, date, location, description, status, image, index }) => {
  // Helper function to get status styles
  const getStatusStyles = (status: string) => {
    switch (status) {
      case 'open':
        return {
          bg: 'bg-green-500',
          text: 'Registration Open'
        };
      case 'coming':
        return {
          bg: 'bg-orange-500',
          text: 'Coming Soon'
        };
      case 'closed':
        return {
          bg: 'bg-red-500',
          text: 'Registration Closed'
        };
      default:
        return {
          bg: 'bg-gray-500',
          text: 'Status Unknown'
        };
    }
  };

  const statusStyles = getStatusStyles(status);

  return (
    <motion.div 
      className="bg-white md:mx-0 mx-4 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
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
        <div className="absolute top-4 right-4">
          <motion.span 
            className={`${statusStyles.bg} text-white px-3 py-1 rounded-full text-sm font-semibold`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            {statusStyles.text}
          </motion.span>
        </div>
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
        {status === 'open' && (
          <motion.button 
            className="w-full bg-primary-yellow text-primary-gray font-bold py-2 rounded-full"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Register Now
          </motion.button>
        )}
      </div>
    </motion.div>
  );
};

export default function Events() {
  const [selectedTab, setSelectedTab] = useState<'upcoming' | 'past'>('upcoming');
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleTabChange = (tab: 'upcoming' | 'past') => {
    setSelectedTab(tab);
  };

  return (
    <div className="min-h-screen">
      <motion.div 
        className="relative h-[70vh]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <Image
          src="/events-hero.jpg"
          alt="Roundnet tournament"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl mt-16 font-bold text-white text-center">
            Events & Tournaments
          </h1>
        </div>
      </motion.div>

      <div className="max-w-6xl my-6 mx-auto">
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
                    title="Atlantic Roundnet Tournament"
                    date="June 15, 2025"
                    location="Halifax Commons, NS"
                    description="Join us for the Atlantic stop of the Roundnet Canada series."
                    status="open"
                    image="/square-logo.jpg"
                    index={0}
                  />
                  <EventCard 
                    title="Coming Soon"
                    date="TBD"
                    location="TBD"
                    description="Stay tuned!"
                    status="coming"
                    image="/net.jpg"
                    index={1}
                  />
                </>
              ) : (
                <>
                  <EventCard 
                    title="Fall Open Tournament"
                    date="October 14, 2023"
                    location="Halifax Commons"
                    description="Registration is now closed."
                    status="closed"
                    image="/location-map.jpg"
                    index={2}
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