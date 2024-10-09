import Image from "next/image";
import AboutSectionImage from "@/public/assets/images/hero-image.jpg"
import { GiCheckMark } from "react-icons/gi";

// components/AboutSection.js
const AboutSection = () => {
    return (
        <div className="w-full bg-black text-white">
            <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4 py-20">

                {/* Left Section: Image */}
                <div className="md:w-1/2 flex justify-center mb-8 md:mb-0">
                    <Image
                        src={AboutSectionImage} // Replace with your own image
                        alt="Gym Training"
                        className="w-full h-auto max-w-md md:max-w-lg"
                    />
                </div>

                {/* Right Section: Text */}
                <div className="md:w-1/2 flex flex-col items-start justify-center text-center md:text-left">
                    <h2 className="text-yellow-400 text-sm uppercase mb-4 text-center font-semibold flex justify-center mx-auto md:mx-0">About Us</h2>
                    <h1 className="text-4xl font-bold mb-6">
                        We Have Lot Of Experience Gym Training Goals.
                    </h1>
                    <p className="mb-6">
                        Our gym is staffed with highly qualified and experienced healthcare professionals
                        dedicated to providing exceptional technology edge treatments to ensure your goals are met.
                    </p>

                    {/* Bullet Points */}
                    <ul className="space-y-2 mb-6 mx-auto md:mx-0">
                        <li className="flex items-center">
                            <span className="text-yellow-400 mr-2 rounded-full p-2 border-4 border-primary">
                                <GiCheckMark className=" font-extrabold text-xl " />
                            </span>Center
                        </li>
                        <li className="flex items-center">
                            <span className="text-yellow-400 mr-2 rounded-full p-2 border-4 border-primary">
                                <GiCheckMark className=" font-extrabold text-xl " />
                            </span> Great Facilities For Client
                        </li>
                        <li className="flex items-center">
                            <span className="text-yellow-400 mr-2 rounded-full p-2 border-4 border-primary">
                                <GiCheckMark className=" font-extrabold text-xl " />
                            </span> Special Instructor
                        </li>
                    </ul>

                    {/* Button */}
                    <div className=" mx-auto md:mx-0">

                        <button className="bg-primary text-black font-bold text-lg px-7 py-2 rounded mr-4">
                            More About Us
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutSection;
