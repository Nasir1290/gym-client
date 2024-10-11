
'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Importing AOS styles
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';


const Contact = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 }); // Initialize AOS with duration
    }, []);

    return (
        <div className="bg-black text-white min-h-screen">
            {/* Hero Section */}
            <section className="text-center py-16">
                <motion.h1
                    className="text-4xl font-bold"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    Get in Touch with Us
                </motion.h1>
                <motion.p
                    className="mt-4 text-lg"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                >
                    We’re here to help you achieve your fitness goals!
                </motion.p>
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    className="mt-8 px-6 py-3 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-600"
                >
                    Send a Message
                </motion.button>
            </section>

            {/* Contact Information Section */}
            <section className="grid grid-cols-1 md:grid-cols-3 gap-6 py-16">
                <motion.div
                    className="bg-gray-900 p-6 rounded-lg shadow-lg text-center"
                    data-aos="fade-up"
                >
                    <FaMapMarkerAlt className="mx-auto text-3xl text-yellow-500 mb-4" />
                    <h2 className="text-xl font-bold">Our Location</h2>
                    <p className="mt-2">123 Gym St, Fitness City, BG</p>
                </motion.div>

                <motion.div
                    className="bg-gray-900 p-6 rounded-lg shadow-lg text-center"
                    data-aos="fade-up"
                    data-aos-delay="100"
                >
                    <FaPhoneAlt className="mx-auto text-3xl text-yellow-500 mb-4" />
                    <h2 className="text-xl font-bold">Call Us</h2>
                    <p className="mt-2">+880 1234 567 890</p>
                </motion.div>

                <motion.div
                    className="bg-gray-900 p-6 rounded-lg shadow-lg text-center"
                    data-aos="fade-up"
                    data-aos-delay="200"
                >
                    <FaEnvelope className="mx-auto text-3xl text-yellow-500 mb-4" />
                    <h2 className="text-xl font-bold">Email Us</h2>
                    <p className="mt-2">contact@progym.com</p>
                </motion.div>
            </section>

            {/* Contact Form Section */}
            <section className="flex flex-col md:flex-row items-center justify-between py-16">
                <motion.div
                    className="w-full md:w-1/2 p-6"
                    data-aos="fade-right"
                >
                    <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
                    <form className="space-y-4">
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="w-full p-3 rounded-lg bg-gray-800 text-white focus:outline-none"
                        />
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="w-full p-3 rounded-lg bg-gray-800 text-white focus:outline-none"
                        />
                        <input
                            type="text"
                            placeholder="Subject"
                            className="w-full p-3 rounded-lg bg-gray-800 text-white focus:outline-none"
                        />
                        <textarea
                            placeholder="Your Message"
                            className="w-full p-3 rounded-lg bg-gray-800 text-white focus:outline-none"
                            rows={4}
                        />
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            className="w-full py-3 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-600"
                        >
                            Submit
                        </motion.button>
                    </form>
                </motion.div>

                {/* Right Side Map/Image */}
                <motion.div
                    className="w-full md:w-1/2 p-6"
                    data-aos="fade-left"
                >
                    <div className="w-full h-64 bg-gray-900 rounded-lg flex items-center justify-center">
                        <p>Map / Image Placeholder</p>
                    </div>
                </motion.div>
            </section>

            {/* FAQ Section */}
            <section className="py-16">
                <motion.h2
                    className="text-3xl font-bold text-center mb-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                >
                    Frequently Asked Questions
                </motion.h2>

                <div className="space-y-4 max-w-3xl mx-auto">
                    <motion.div
                        className="bg-gray-900 p-4 rounded-lg shadow-lg"
                        data-aos="fade-up"
                    >
                        <h3 className="text-lg font-semibold">What are your opening hours?</h3>
                        <p className="mt-2">
                            We are open Monday to Friday from 6 AM to 9 PM, and Saturday from 8 AM to 6 PM.
                        </p>
                    </motion.div>
                    <motion.div
                        className="bg-gray-900 p-4 rounded-lg shadow-lg"
                        data-aos="fade-up"
                        data-aos-delay="100"
                    >
                        <h3 className="text-lg font-semibold">Do you offer personal training?</h3>
                        <p className="mt-2">
                            Yes, we offer one-on-one personal training sessions with certified trainers.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Footer Newsletter Section */}
            <section className="py-16 bg-gray-900 text-center">
                <motion.h2
                    className="text-2xl font-bold"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    Subscribe to Our Newsletter
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
                        Subscribe
                    </motion.button>
                </div>
            </section>
        </div>
    );
};

export default Contact;
