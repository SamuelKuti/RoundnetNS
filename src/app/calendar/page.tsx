"use client";

import React, { useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import { motion } from 'framer-motion';
import './calendar.css'; // custom styles

const events = [
  {
    title: 'Weekly Practice',
    daysOfWeek: [0],
    startTime: '14:00:00',
    endTime: '16:00:00',
    backgroundColor: '#0046b6', // primary-blue
    borderColor: '#3B82F6',
  },
  {
    title: 'Spring Tournament',
    start: '2025-04-15T09:00:00',
    end: '2025-04-15T17:00:00',
    backgroundColor: '#F59E0B', // primary-yellow
    borderColor: '#F59E0B',
  },
];

export default function CalendarPage() {
  const [aspectRatio, setAspectRatio] = useState(2.5);

  useEffect(() => {
    // Update aspect ratio on load and when resizing
    function handleResize() {
      if (window.innerWidth < 768) {
        setAspectRatio(1.35);
      } else {
        setAspectRatio(2.5);
      }
    }

    // Initial check
    handleResize();
    // Listen for window resizing
    window.addEventListener('resize', handleResize);
    // Cleanup on unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="min-h-screen pt-20 px-4 md:px-14">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto"
      >
        <div className="bg-white rounded-lg shadow-lg p-6 my-4">
          <FullCalendar
            plugins={[dayGridPlugin]}
            initialView="dayGridMonth"
            events={events}
            height="auto"
            aspectRatio={aspectRatio}
            headerToolbar={{
              left: 'dayGridMonth,dayGridWeek today prev,next',
              center: '',
              right: 'title',
            }}
            buttonText={{
              today: 'Today',
              month: 'Month',
              week: 'Week',
              prev: 'Previous',
              next: 'Next',
            }}
            eventTimeFormat={{
              hour: 'numeric',
              minute: '2-digit',
              meridiem: 'short',
            }}
            dayMaxEvents={3}
            eventDisplay="block"
            eventBackgroundColor="#3B82F6"
            eventBorderColor="#3B82F6"
            eventTextColor="#FFFFFF"
            buttonIcons={false}
            dayCellClassNames="hover:bg-gray-50"
            titleFormat={{ year: 'numeric', month: 'long' }}
          />
        </div>
      </motion.div>
    </div>
  );
}
