"use client"

import { motion } from 'framer-motion';
import Image from 'next/image';

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
        <Image
          src="/about-hero.jpg"
          alt="Roundnet community gathering"
          width={1200}
          height={400}
          className="rounded-lg shadow-lg mb-8"
        />
        <motion.h1 
          className="text-4xl md:text-5xl font-bold text-primary-blue mb-6 text-center"
          variants={slideIn}
        >
          About RoundnetNS
        </motion.h1>
        <motion.p 
          className="text-xl text-gray-600 text-center max-w-3xl mx-auto"
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
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: "John Smith",
              role: "President",
              image: "/team-member-1.jpg",
              description: "Roundnet enthusiast since 2018, focused on growing the sport in Halifax."
            },
            {
              name: "Sarah Johnson",
              role: "Events Coordinator",
              image: "/team-member-2.jpg",
              description: "Organizing tournaments and weekly meetups across the province."
            },
            {
              name: "Mike Williams",
              role: "Community Manager",
              image: "/team-member-3.jpg",
              description: "Ensuring our community stays connected and engaged."
            }
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
                  <h3 className="text-xl font-bold text-primary-blue mb-2">{member.name}</h3>
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
        <div className="grid md:grid-cols-2 gap-8">
          <ValueCard 
            title="Community First"
            description="We believe in building a strong, supportive community where everyone feels welcome."
            image="/community-value.jpg"
          />
          <ValueCard 
            title="Inclusivity"
            description="Roundnet is for everyone, regardless of age, background, or skill level."
            image="/inclusivity-value.jpg"
          />
          <ValueCard 
            title="Growth"
            description="We're committed to helping players develop their skills and love for the game."
            image="/growth-value.jpg"
          />
          <ValueCard 
            title="Fun"
            description="Above all, we believe in making Roundnet enjoyable for everyone involved."
            image="/fun-value.jpg"
          />
        </div>
      </section>
    </div>
  );
}

const TeamMember = ({ name, role, image, description }) => (
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

const ValueCard = ({ title, description, image }) => (
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