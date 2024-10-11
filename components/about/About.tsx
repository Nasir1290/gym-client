'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';

const About = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    return (
        <div className="container mx-auto bg-black text-white py-16">
            {/* Hero Section */}
            <section className="text-center mb-16">
                <motion.h1
                    className="text-5xl font-bold"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    About ProGym
                </motion.h1>
                <motion.p
                    className="mt-4 text-lg"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                >
                    Learn more about our mission, vision, and the passionate team behind ProGym.
                </motion.p>
            </section>

            {/* Mission, Vision, Values */}
            <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                <motion.div
                    className="bg-gray-900 p-8 rounded-lg shadow-lg"
                    data-aos="fade-up"
                >
                    <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
                    <p>
                        Our mission is to promote a healthy and active lifestyle by providing exceptional fitness services and cutting-edge equipment in a motivating environment.
                    </p>
                </motion.div>

                <motion.div
                    className="bg-gray-900 p-8 rounded-lg shadow-lg"
                    data-aos="fade-up"
                    data-aos-delay="100"
                >
                    <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
                    <p>
                        We envision a community where fitness is accessible to all, and people are inspired to achieve their goals, no matter their starting point.
                    </p>
                </motion.div>

                <motion.div
                    className="bg-gray-900 p-8 rounded-lg shadow-lg"
                    data-aos="fade-up"
                    data-aos-delay="200"
                >
                    <h2 className="text-2xl font-bold mb-4">Our Values</h2>
                    <ul className="list-none space-y-3">
                        <li className="flex items-center">
                            <FaCheckCircle className="text-yellow-500 mr-2" /> Commitment to Clients
                        </li>
                        <li className="flex items-center">
                            <FaCheckCircle className="text-yellow-500 mr-2" /> Innovation
                        </li>
                        <li className="flex items-center">
                            <FaCheckCircle className="text-yellow-500 mr-2" /> Integrity
                        </li>
                        <li className="flex items-center">
                            <FaCheckCircle className="text-yellow-500 mr-2" /> Teamwork
                        </li>
                    </ul>
                </motion.div>
            </section>

            {/* History Section */}
            <section className="mb-16">
                <motion.div
                    className="mb-8"
                    data-aos="fade-right"
                >
                    <h2 className="text-3xl font-bold mb-4">Our Journey</h2>
                    <p>
                        ProGym started in 2010 with a vision to make fitness accessible to everyone. Over the years, we have grown into a leading gym with top-tier equipment, world-class trainers, and an expanding community of fitness enthusiasts. From humble beginnings, we have been committed to enhancing the well-being of thousands of people, continually innovating our approach.
                    </p>
                </motion.div>

                {/* Timeline Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <motion.div
                        className="bg-gray-900 p-8 rounded-lg shadow-lg"
                        data-aos="fade-up"
                    >
                        <h3 className="text-xl font-bold mb-2">2010: Founded</h3>
                        <p>We opened our first branch in Fitness City with a team of 5 trainers.</p>
                    </motion.div>

                    <motion.div
                        className="bg-gray-900 p-8 rounded-lg shadow-lg"
                        data-aos="fade-up"
                        data-aos-delay="100"
                    >
                        <h3 className="text-xl font-bold mb-2">2015: Expansion</h3>
                        <p>By 2015, we had 5 branches, serving over 10,000 members with a wide range of fitness programs.</p>
                    </motion.div>

                    <motion.div
                        className="bg-gray-900 p-8 rounded-lg shadow-lg"
                        data-aos="fade-up"
                        data-aos-delay="200"
                    >
                        <h3 className="text-xl font-bold mb-2">2020: Going Digital</h3>
                        <p>We launched our online fitness app, reaching thousands of clients globally with virtual training sessions.</p>
                    </motion.div>

                    <motion.div
                        className="bg-gray-900 p-8 rounded-lg shadow-lg"
                        data-aos="fade-up"
                        data-aos-delay="300"
                    >
                        <h3 className="text-xl font-bold mb-2">2024: Present</h3>
                        <p>Today, ProGym continues to innovate, adding new services and expanding our reach globally.</p>
                    </motion.div>
                </div>
            </section>

            {/* Team Section */}
            <section className="mb-16">
                <motion.h2
                    className="text-3xl font-bold text-center mb-12"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    Meet Our Team
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <motion.div
                        className="bg-gray-900 p-8 rounded-lg shadow-lg text-center"
                        data-aos="fade-up"
                    >
                        <img
                            src="/trainer1.jpg" // Replace with real image path
                            alt="Trainer 1"
                            className="rounded-full mx-auto mb-4 w-32 h-32 object-cover"
                        />
                        <h3 className="text-xl font-bold">Alice Johnson</h3>
                        <p className="text-gray-400">Yoga Instructor</p>
                    </motion.div>

                    <motion.div
                        className="bg-gray-900 p-8 rounded-lg shadow-lg text-center"
                        data-aos="fade-up"
                        data-aos-delay="100"
                    >
                        <img
                            src="/trainer2.jpg" // Replace with real image path
                            alt="Trainer 2"
                            className="rounded-full mx-auto mb-4 w-32 h-32 object-cover"
                        />
                        <h3 className="text-xl font-bold">John Doe</h3>
                        <p className="text-gray-400">Strength Trainer</p>
                    </motion.div>

                    <motion.div
                        className="bg-gray-900 p-8 rounded-lg shadow-lg text-center"
                        data-aos="fade-up"
                        data-aos-delay="200"
                    >
                        <img
                            src="/trainer3.jpg" // Replace with real image path
                            alt="Trainer 3"
                            className="rounded-full mx-auto mb-4 w-32 h-32 object-cover"
                        />
                        <h3 className="text-xl font-bold">Sarah Williams</h3>
                        <p className="text-gray-400">Cardio Specialist</p>
                    </motion.div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="mb-16">
                <motion.h2
                    className="text-3xl font-bold text-center mb-12"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    What Our Clients Say
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <motion.div
                        className="bg-gray-900 p-8 rounded-lg shadow-lg"
                        data-aos="fade-up"
                    >
                        <p className="text-gray-300 italic">
                            "ProGym transformed my life. The trainers are so knowledgeable and helped me reach my fitness goals faster than I imagined!"
                        </p>
                        <p className="mt-4 font-bold">— Emily Roberts</p>
                    </motion.div>

                    <motion.div
                        className="bg-gray-900 p-8 rounded-lg shadow-lg"
                        data-aos="fade-up"
                        data-aos-delay="100"
                    >
                        <p className="text-gray-300 italic">
                            "The atmosphere at ProGym is motivating, and the facilities are world-class. It&apos;s the best decision I’ve made for my health."
                        </p>
                        <p className="mt-4 font-bold">— Michael Johnson</p>
                    </motion.div>
                </div>
            </section>

            {/* Footer with Call to Action */}
            <section className="py-16 bg-gray-900 text-center">
                <motion.h2
                    className="text-2xl font-bold"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    Ready to Start Your Fitness Journey?
                </motion.h2>
                <div className="mt-6 flex justify-center space-x-4">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="p-3 rounded-lg bg-gray-800 text-white focus:outline-none w-64"
                    />
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        className="py-3 px-6 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-600"
                    >
                        Get Started
                    </motion.button>
                </div>
            </section>
        </div>
    );
};

export default About;
