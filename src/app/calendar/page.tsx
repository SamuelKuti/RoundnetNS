"use client"

import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import { motion } from 'framer-motion'
import './calendar.css' // We'll create this file for custom styles

const events = [
    {
        title: 'Weekly Practice',
        daysOfWeek: [0], // Repeats every Sunday
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
    }
]

export default function CalendarPage() {
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
                        aspectRatio={window.innerWidth < 768 ? 1.35 : 2.5}
                        headerToolbar={{
                            left: 'dayGridMonth,dayGridWeek today prev,next',
                            center: '',
                            right: 'title'
                        }}
                        buttonText={{
                            today: 'Today',
                            month: 'Month',
                            week: 'Week',
                            prev: 'Previous',
                            next: 'Next'
                        }}
                        eventTimeFormat={{
                            hour: 'numeric',
                            minute: '2-digit',
                            meridiem: 'short'
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
    )
} 