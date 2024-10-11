'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Importing AOS styles
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaInstagram, FaFacebook, FaTwitter } from 'react-icons/fa';

const Contact = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 }); // Initialize AOS with duration
    }, []);

    return (
        <div className="container mx-auto min-h-screen ">
            {/* Hero Section */}
            <section className="text-center py-16 container mx-auto">
                <motion.h1
                    className="text-5xl font-extrabold tracking-tight text-yellow-400"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    Let's Connect with Us
                </motion.h1>
                <motion.p
                    className="mt-4 text-lg text-gray-400"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                >
                    We are eager to help you unlock your potential!
                </motion.p>
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    className="mt-8 px-8 py-3 bg-yellow-500 text-black font-bold rounded-lg hover:bg-yellow-600 transition-all"
                >
                    Contact Us Now
                </motion.button>
            </section>

            {/* Contact Information Section */}
            <section className="grid grid-cols-1 md:grid-cols-3 container mx-auto gap-8 py-16">
                <motion.div
                    className="bg-gray-800 p-8 rounded-xl shadow-lg text-center"
                    data-aos="fade-up"
                >
                    <FaMapMarkerAlt className="mx-auto text-4xl text-yellow-400 mb-6" />
                    <h2 className="text-2xl font-bold">Our Location</h2>
                    <p className="mt-3 text-gray-400">123 Gym St, Fitness City, BG</p>
                </motion.div>

                <motion.div
                    className="bg-gray-800 p-8 rounded-xl shadow-lg text-center"
                    data-aos="fade-up"
                    data-aos-delay="100"
                >
                    <FaPhoneAlt className="mx-auto text-4xl text-yellow-400 mb-6" />
                    <h2 className="text-2xl font-bold">Call Us</h2>
                    <p className="mt-3 text-gray-400">+880 1234 567 890</p>
                </motion.div>

                <motion.div
                    className="bg-gray-800 p-8 rounded-xl shadow-lg text-center"
                    data-aos="fade-up"
                    data-aos-delay="200"
                >
                    <FaEnvelope className="mx-auto text-4xl text-yellow-400 mb-6" />
                    <h2 className="text-2xl font-bold">Email Us</h2>
                    <p className="mt-3 text-gray-400">contact@progym.com</p>
                </motion.div>
            </section>

            {/* Contact Form Section */}
            <section className="flex flex-col md:flex-row items-center justify-between py-16 container mx-auto">
                <motion.div
                    className="w-full md:w-1/2 p-6"
                    data-aos="fade-right"
                >
                    <h2 className="text-4xl font-bold mb-6 text-yellow-400">Drop Us a Message</h2>
                    <form className="space-y-6">
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="w-full p-4 rounded-lg bg-gray-700 text-white focus:outline-none"
                        />
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="w-full p-4 rounded-lg bg-gray-700 text-white focus:outline-none"
                        />
                        <input
                            type="text"
                            placeholder="Subject"
                            className="w-full p-4 rounded-lg bg-gray-700 text-white focus:outline-none"
                        />
                        <textarea
                            placeholder="Your Message"
                            className="w-full p-4 rounded-lg bg-gray-700 text-white focus:outline-none"
                            rows={5}
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
                    className="w-full md:w-1/2 p-6 mt-12 md:mt-0"
                    data-aos="fade-left"
                >
                    <div className="w-full h-72 bg-gray-800 rounded-lg flex items-center justify-center">
                        <p className="text-gray-400">Map / Image Placeholder</p>
                    </div>
                </motion.div>
            </section>

            {/* Testimonials Section */}
            <section className="py-16 bg-gray-800">
                <motion.h2
                    className="text-4xl font-bold text-center mb-12 text-yellow-400"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                >
                    What Our Clients Say
                </motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 container mx-auto">
                    <motion.div
                        className="bg-gray-700 p-8 rounded-lg shadow-lg text-center"
                        data-aos="fade-up"
                    >
                        <p className="text-gray-300">"Best gym experience I've ever had. The staff and trainers are so supportive!"</p>
                        <h3 className="mt-4 text-lg font-semibold text-yellow-400">- Sarah, Fitness Enthusiast</h3>
                    </motion.div>
                    <motion.div
                        className="bg-gray-700 p-8 rounded-lg shadow-lg text-center"
                        data-aos="fade-up"
                        data-aos-delay="100"
                    >
                        <p className="text-gray-300">"I achieved my fitness goals with their amazing personal trainers!"</p>
                        <h3 className="mt-4 text-lg font-semibold text-yellow-400">- John, Athlete</h3>
                    </motion.div>
                    <motion.div
                        className="bg-gray-700 p-8 rounded-lg shadow-lg text-center"
                        data-aos="fade-up"
                        data-aos-delay="200"
                    >
                        <p className="text-gray-300">"The atmosphere is so positive, and the equipment is top-notch!"</p>
                        <h3 className="mt-4 text-lg font-semibold text-yellow-400">- Emily, Bodybuilder</h3>
                    </motion.div>
                </div>
            </section>

            {/* Footer Newsletter Section */}
            <section className="py-16 bg-gray-800 text-center">
                <motion.h2
                    className="text-3xl font-bold text-yellow-400"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    Stay Updated with Us
                </motion.h2>
                <div className="mt-6 flex justify-center space-x-4">
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="p-3 rounded-lg bg-gray-700 text-white focus:outline-none w-64"
                    />
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        className="py-3 px-6 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-600"
                    >
                        Subscribe
                    </motion.button>
                </div>

                <div className="mt-8 flex justify-center space-x-6">
                    <FaInstagram className="text-3xl cursor-pointer hover:text-yellow-500 transition" />
                    <FaFacebook className="text-3xl cursor-pointer hover:text-yellow-500 transition" />
                    <FaTwitter className="text-3xl cursor-pointer hover:text-yellow-500 transition" />
                </div>
            </section>
        </div>
    );
};

export default Contact;
