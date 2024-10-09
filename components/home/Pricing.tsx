import React from 'react';
import { GiCheckMark } from 'react-icons/gi';

const Pricing = () => {
    return (
        <section className="bg-black text-white py-12">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8">Effective &amp; flexible pricing</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    {/* Card 1 */}
                    <div className="bg-gray-900 border border-primary p-8 text-center rounded-lg">
                        <h3 className="text-xl font-semibold mb-4">One Day Plan</h3>
                        <p className="text-4xl font-bold mb-4">$99 <span className="text-lg font-medium">/Month</span></p>
                        <p className="text-sm mb-4">AI Content generation website is a platform that utilizes artificial intelligences</p>
                        <ul className="text-left mb-8">

                            <li className="mb-2 flex gap-2"><span className="text-yellow-400 mr-1 rounded-full p-1 border-2 border-primary">
                                <GiCheckMark className=" font-extrabold text-xl " />
                            </span> Single day Access</li>
                            <li className="mb-2 flex gap-2"><span className="text-yellow-400 mr-1 rounded-full p-1 border-2 border-primary">
                                <GiCheckMark className=" font-extrabold text-xl " />
                            </span> 24/7 Gym Access</li>
                            <li className="mb-2 flex gap-2"><span className="text-yellow-400 mr-1 rounded-full p-1 border-2 border-primary">
                                <GiCheckMark className=" font-extrabold text-xl " />
                            </span> Personal Trainer</li>
                            <li className="mb-2 flex gap-2"><span className="text-yellow-400 mr-1 rounded-full p-1 border-2 border-primary">
                                <GiCheckMark className=" font-extrabold text-xl " />
                            </span> Nutrition Plan</li>
                            <li className="mb-2 flex gap-2"><span className="text-yellow-400 mr-1 rounded-full p-1 border-2 border-primary">
                                <GiCheckMark className=" font-extrabold text-xl " />
                            </span> Weekly Events</li>
                        </ul>
                        <button className="bg-transparent border border-primary text-primary py-2 px-4 rounded-lg hover:bg-primary hover:text-black transition">
                            Choose your plan
                        </button>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-primary text-black p-8 text-center rounded-lg">
                        <h3 className="text-xl font-semibold mb-4">One Day Plan</h3>
                        <p className="text-4xl font-bold mb-4">$99 <span className="text-lg font-medium">/Month</span></p>
                        <p className="text-sm mb-4">AI Content generation website is a platform that utilizes artificial intelligences</p>
                        <ul className="text-left mb-8">
                            <li className="mb-2 flex gap-2"><span className="text-yellow-400 mr-1 rounded-full p-1 border-2 border-green-600">
                                <GiCheckMark className=" font-extrabold text-green-500 text-xl " />
                            </span> Single day Access</li>
                            <li className="mb-2 flex gap-2"><span className="text-yellow-400 mr-1 rounded-full p-1 border-2 border-green-600">
                                <GiCheckMark className=" font-extrabold text-green-500 text-xl " />
                            </span> 24/7 Gym Access</li>
                            <li className="mb-2 flex gap-2"><span className="text-yellow-400 mr-1 rounded-full p-1 border-2 border-green-600">
                                <GiCheckMark className=" font-extrabold text-green-500 text-xl " />
                            </span> Personal Trainer</li>
                            <li className="mb-2 flex gap-2"><span className="text-yellow-400 mr-1 rounded-full p-1 border-2 border-green-600">
                                <GiCheckMark className=" font-extrabold text-green-500 text-xl " />
                            </span> Nutrition Plan</li>
                            <li className="mb-2 flex gap-2"><span className="text-yellow-400 mr-1 rounded-full p-1 border-2 border-green-600">
                                <GiCheckMark className=" font-extrabold text-green-500 text-xl " />
                            </span> Weekly Events</li>
                        </ul>
                        <button className="bg-black text-primary py-2 px-4 rounded-lg hover:bg-gray-800 transition">
                            Choose your plan
                        </button>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-gray-900 border border-primary p-8 text-center rounded-lg">
                        <h3 className="text-xl font-semibold mb-4">One Day Plan</h3>
                        <p className="text-4xl font-bold mb-4">$99 <span className="text-lg font-medium">/Month</span></p>
                        <p className="text-sm mb-4">AI Content generation website is a platform that utilizes artificial intelligences</p>
                        <ul className="text-left mb-8">
                            <li className="mb-2 flex gap-2"><span className="text-yellow-400 mr-1 rounded-full p-1 border-2 border-primary">
                                <GiCheckMark className=" font-extrabold text-xl " />
                            </span> Single day Access</li>
                            <li className="mb-2 flex gap-2"><span className="text-yellow-400 mr-1 rounded-full p-1 border-2 border-primary">
                                <GiCheckMark className=" font-extrabold text-xl " />
                            </span> 24/7 Gym Access</li>
                            <li className="mb-2 flex gap-2"><span className="text-yellow-400 mr-1 rounded-full p-1 border-2 border-primary">
                                <GiCheckMark className=" font-extrabold text-xl " />
                            </span> Personal Trainer</li>
                            <li className="mb-2 flex gap-2"><span className="text-yellow-400 mr-1 rounded-full p-1 border-2 border-primary">
                                <GiCheckMark className=" font-extrabold text-xl " />
                            </span> Nutrition Plan</li>
                            <li className="mb-2 flex gap-2"><span className="text-yellow-400 mr-1 rounded-full p-1 border-2 border-primary">
                                <GiCheckMark className=" font-extrabold text-xl " />
                            </span> Weekly Events</li>
                        </ul>
                        <button className="bg-transparent border border-primary text-primary py-2 px-4 rounded-lg hover:bg-primary hover:text-black transition">
                            Choose your plan
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Pricing;
