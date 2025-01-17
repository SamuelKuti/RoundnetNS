"use client";

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useState, FormEvent } from 'react';
import { ContactInfoProps } from '@/types';
import emailjs from '@emailjs/browser';

// Initialize EmailJS
emailjs.init('iEjVGJDq8HYfs4WU3');

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const ContactInfo: React.FC<ContactInfoProps> = ({ title, info, icon, index }) => (
  <motion.div 
    className="bg-gray-50 p-6 rounded-lg transform hover:-translate-y-1 transition-all duration-300"
    variants={fadeInUp}
    custom={index}
  >
    <div className="text-3xl mb-4">{icon}</div>
    <h3 className="text-xl font-bold text-primary-blue mb-2">{title}</h3>
    <p className="text-gray-600">{info}</p>
  </motion.div>
);

export default function Contact() {
  const [formStatus, setFormStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const form = e.currentTarget;
      const formData = new FormData(form);

      const response = await emailjs.send(
        'service_b6j03si',
        'template_pcs3gce',
        {
          from_name: formData.get('name'),
          from_email: formData.get('email'),
          message: formData.get('message'),
        },
        'iEjVGJDq8HYfs4WU3'
      );

      if (response.status === 200) {
        setFormStatus('success');
        form.reset();
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error: any) {
      console.error('Error:', error.message || 'Failed to send email');
      setFormStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen">
      <motion.div 
        className="relative h-[60vh]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <Image
          src="/contact-hero.jpg"
          alt="Contact us"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold mt-16 text-white text-center">
            Contact Us
          </h1>
        </div>
      </motion.div>

      <div className="max-w-6xl mx-auto px-4 mt-10">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div 
            className="bg-white md:mb-6 p-8 rounded-lg shadow-lg"
            variants={fadeInUp}
          >
            <h2 className="text-2xl font-bold text-primary-blue mb-6">Send us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <motion.div variants={fadeInUp}>
                <label className="block text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-blue"
                  required
                />
              </motion.div>
              <motion.div variants={fadeInUp}>
                <label className="block text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-blue"
                  required
                />
              </motion.div>
              <motion.div variants={fadeInUp}>
                <label className="block text-gray-700 mb-2">Message</label>
                <textarea
                  name="message"
                  className="w-full p-3 border border-gray-300 rounded-lg h-32 focus:outline-none focus:border-primary-blue"
                  required
                ></textarea>
              </motion.div>
              <motion.button
                type="submit"
                className="w-full bg-primary-yellow text-primary-gray font-bold py-3 rounded-full relative"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-primary-gray" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  'Send Message'
                )}
              </motion.button>

              <AnimatePresence>
                {formStatus === 'success' && (
                  <motion.p 
                    className="text-green-600 text-center"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                  >
                    Thanks for reaching out! We'll get back to you soon.
                  </motion.p>
                )}
              </AnimatePresence>

              <AnimatePresence>
                {formStatus === 'error' && (
                  <motion.p 
                    className="text-red-600 text-center"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                  >
                    Something went wrong. Please try again later.
                  </motion.p>
                )}
              </AnimatePresence>
            </form>
          </motion.div>

          {/* Contact Information */}
          <div>
            <motion.div 
              className="grid gap-6 mb-8 "
              variants={{
                animate: {
                  transition: {
                    staggerChildren: 0.1
                  }
                }
              }}
            >
              <ContactInfo
                title="Email Us"
                info="roundnetns@gmail.com"
                icon="✉️"
                index={0}
              />
              <ContactInfo
                title="Follow Us"
                info="@roundnetns"
                icon="📱"
                index={1}
              />
              <ContactInfo
                title="Location"
                info="Halifax, Nova Scotia"
                icon="📍"
                index={2}
              />
            </motion.div>
            <motion.div 
              className="relative overflow-hidden mb-4 md:mb-6 rounded-lg h-64"
              variants={fadeInUp}
            >
              <Image
                src="/about-hero.jpg"
                alt="Our location"
                fill
                className="object-cover"
              />
              <motion.div 
                className="absolute inset-0 bg-primary-blue/80 p-6 text-white"
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h3 className="text-xl font-bold mb-4">Quick Response</h3>
                <p>
                  We typically respond to inquiries within 24 hours. For immediate updates, 
                  follow us on social media!
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
} 