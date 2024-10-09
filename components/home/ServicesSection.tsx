import ServiceImage1 from "@/public/assets/images/ourService1.jpg"
import ServiceImage2 from "@/public/assets/images/ourService2.jpg"
import ServiceImage3 from "@/public/assets/images/ourService3.jpg"
import ServiceImage4 from "@/public/assets/images/heroImage.jpg"
import Image from "next/image";


// components/ServicesSection.js
const ServicesSection = () => {
    return (
        <div className="w-full bg-black text-white py-20">
            <div className="container mx-auto px-4">
                {/* Heading */}
                <div className="flex justify-between items-center mb-12">
                    <div>
                        <h2 className="text-primary text-sm uppercase mb-2">Our Services</h2>
                        <h1 className="text-4xl font-bold">Fitness Journey At Progym <br /> Your Future & Fitness</h1>
                    </div>
                    <p className="hidden md:block text-gray-400 w-1/3">
                        Our gym is staffed with highly qualified and experienced doctors, nurses, and healthcare professionals.
                    </p>
                </div>

                {/* Services Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Service Card 1 */}
                    <div className="relative bg-gray-900 p-4 rounded-lg group hover:bg-primary transition-all duration-300">
                        <Image
                            src={ServiceImage1}
                            alt="Personal Training"
                            className="w-full h-64 object-cover mb-4"
                        />
                        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity"></div>
                        <div className="relative">
                            <h3 className="text-2xl font-bold mb-2 group-hover:text-black">Personal Training</h3>
                            <p className="text-gray-400 mb-4 group-hover:text-black">
                                Exceptional patient care to ensure you technology.
                            </p>
                            <a href="#" className="text-primary group-hover:text-black flex items-center">
                                Learn More <span className="ml-2">→</span>
                            </a>
                        </div>
                    </div>

                    {/* Service Card 2 */}
                    <div className="relative bg-gray-900 p-4 rounded-lg group hover:bg-primary transition-all duration-300">
                        <Image
                            src={ServiceImage2}
                            alt="Personal Training"
                            className="w-full h-64 object-cover mb-4"
                        />
                        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity"></div>
                        <div className="relative">
                            <h3 className="text-2xl font-bold mb-2 group-hover:text-black">Personal Training</h3>
                            <p className="text-gray-400 mb-4 group-hover:text-black">
                                Exceptional patient care to ensure you technology.
                            </p>
                            <a href="#" className="text-primary group-hover:text-black flex items-center">
                                Learn More <span className="ml-2">→</span>
                            </a>
                        </div>
                    </div>

                    {/* Service Card 3 */}
                    <div className="relative bg-gray-900 p-4 rounded-lg group hover:bg-primary transition-all duration-300">
                        <Image
                            src={ServiceImage3}
                            alt="Outdoor Classes"
                            className="w-full h-64 object-cover mb-4"
                        />
                        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity"></div>
                        <div className="relative">
                            <h3 className="text-2xl font-bold mb-2 group-hover:text-black">Outdoor Classes</h3>
                            <p className="text-gray-400 mb-4 group-hover:text-black">
                                Exceptional patient care to ensure you technology.
                            </p>
                            <a href="#" className="text-primary group-hover:text-black flex items-center">
                                Learn More <span className="ml-2">→</span>
                            </a>
                        </div>
                    </div>

                    {/* Service Card 4 */}
                    <div className="relative bg-gray-900 p-4 rounded-lg group hover:bg-primary transition-all duration-300">
                        <Image
                            src={ServiceImage4} // Replace with actual image
                            alt="Online Training"
                            className="w-full h-64 object-cover mb-4"
                        />
                        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-50 transition-opacity"></div>
                        <div className="relative">
                            <h3 className="text-2xl font-bold mb-2 group-hover:text-black">Online Training</h3>
                            <p className="text-gray-400 mb-4 group-hover:text-black">
                                Exceptional patient care to ensure you technology.
                            </p>
                            <a href="#" className="text-primary group-hover:text-black flex items-center">
                                Learn More <span className="ml-2">→</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesSection;
