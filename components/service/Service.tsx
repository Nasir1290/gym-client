'use client';

import { FaDumbbell, FaUsers, FaAppleAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Services = () => {
    return (
        <div className="bg-black text-white min-h-screen py-16">
            {/* Hero Section */}
            <section className="container mx-auto text-center">
                <motion.h1
                    className="text-4xl md:text-6xl font-bold"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    Our Premium Services
                </motion.h1>
                <motion.p
                    className="mt-4 text-lg md:text-xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                >
                    Unlock your full potential with our range of services tailored to your fitness needs.
                </motion.p>
            </section>

            {/* Services Section */}
            <section className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 px-6 md:px-0">
                {/* Personal Training */}
                <motion.div
                    className="bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <FaDumbbell className="text-4xl text-yellow-500 mx-auto" />
                    <h2 className="text-2xl font-bold mt-4">Personal Training</h2>
                    <p className="mt-4">
                        Receive one-on-one guidance from our certified trainers. Whether you are new to fitness or a seasoned athlete, we create custom plans to help you meet your goals.
                    </p>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        className="mt-6 px-6 py-3 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-600"
                    >
                        Learn More
                    </motion.button>
                </motion.div>

                {/* Group Classes */}
                <motion.div
                    className="bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 1 }}
                >
                    <FaUsers className="text-4xl text-yellow-500 mx-auto" />
                    <h2 className="text-2xl font-bold mt-4">Group Classes</h2>
                    <p className="mt-4">
                        Join our dynamic group classes, ranging from high-intensity interval training to yoga. Be a part of an encouraging community while achieving your fitness goals.
                    </p>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        className="mt-6 px-6 py-3 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-600"
                    >
                        See Schedule
                    </motion.button>
                </motion.div>

                {/* Nutrition Plans */}
                <motion.div
                    className="bg-gray-900 p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 1 }}
                >
                    <FaAppleAlt className="text-4xl text-yellow-500 mx-auto" />
                    <h2 className="text-2xl font-bold mt-4">Nutrition Plans</h2>
                    <p className="mt-4">
                        Fuel your body the right way with personalized nutrition plans. Our expert nutritionists will guide you through a diet plan that complements your fitness routine.
                    </p>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        className="mt-6 px-6 py-3 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-600"
                    >
                        Get Started
                    </motion.button>
                </motion.div>
            </section>

            {/* Extended Content Section */}
            <section className="container mx-auto mt-16 px-6 md:px-0">
                <motion.h2
                    className="text-3xl font-bold text-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    Why Choose Us?
                </motion.h2>
                <motion.p
                    className="mt-4 text-lg text-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                >
                    At ProGym, we provide not just fitness services, but a lifestyle. Our dedicated team and comprehensive approach ensure you get the best out of your fitness journey.
                </motion.p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                    {/* Feature 1 */}
                    <motion.div
                        className="bg-gray-900 p-6 rounded-lg shadow-lg"
                        data-aos="fade-right"
                    >
                        <h3 className="text-xl font-bold">Customized Plans</h3>
                        <p className="mt-4">
                            Every individual is unique, and so are their fitness goals. Our programs are designed specifically to fit your body, schedule, and personal targets.
                        </p>
                    </motion.div>

                    {/* Feature 2 */}
                    <motion.div
                        className="bg-gray-900 p-6 rounded-lg shadow-lg"
                        data-aos="fade-left"
                    >
                        <h3 className="text-xl font-bold">World-Class Trainers</h3>
                        <p className="mt-4">
                            Learn from the best in the industry. Our certified trainers are not only experts in fitness but also passionate about helping you succeed.
                        </p>
                    </motion.div>

                    {/* Feature 3 */}
                    <motion.div
                        className="bg-gray-900 p-6 rounded-lg shadow-lg"
                        data-aos="fade-right"
                    >
                        <h3 className="text-xl font-bold">Modern Equipment</h3>
                        <p className="mt-4">
                            We offer state-of-the-art gym equipment for all your fitness needs, ensuring a safe and effective workout experience.
                        </p>
                    </motion.div>

                    {/* Feature 4 */}
                    <motion.div
                        className="bg-gray-900 p-6 rounded-lg shadow-lg"
                        data-aos="fade-left"
                    >
                        <h3 className="text-xl font-bold">Holistic Approach</h3>
                        <p className="mt-4">
                            At ProGym, we believe in a balanced approach to fitness. We focus on your physical, mental, and nutritional health to bring out the best version of you.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="container mx-auto text-center py-16 mt-16 bg-gray-900 rounded-lg">
                <motion.h2
                    className="text-3xl font-bold"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    Ready to Begin Your Journey?
                </motion.h2>
                <motion.p
                    className="mt-4 text-lg"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                >
                    Contact us today to schedule a free consultation with one of our certified trainers.
                </motion.p>
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    className="mt-6 px-8 py-3 bg-yellow-500 text-black font-semibold rounded-lg hover:bg-yellow-600"
                >
                    Get Started Now
                </motion.button>
            </section>
        </div>
    );
};

export default Services;
