import Image from "next/image";
import HeroImage from "@/public/assets/images/heroImage.jpg";

// components/HeroSection.js
const HeroSection = () => {
    return (
        <div className="w-full bg-black text-white">
            <div className=" pb-8 mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-4 py-5 md:py-10">
                {/* Left Section: Text */}
                <div className="md:w-1/2 flex flex-col items-start justify-center text-center md:text-left">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">
                        Improve Your <span className="text-primary">Health</span>, Happiness, and Strength
                    </h1>
                    <p className="mb-6 text-lg">
                        Welcome to ProGym! Join our classes and start your journey to a better you.
                    </p>
                    <button className="bg-primary mx-auto md:mx-0 hover:bg-primary text-black font-bold py-2 px-6 rounded-lg">
                        Join Class
                    </button>
                </div>

                {/* Right Section: Image */}
                <div className="md:w-1/2 flex justify-center shadow-2xl">
                    <Image
                        src={HeroImage}
                        alt="Gym Hero"
                        className="w-full h-auto max-w-md md:max-w-lg"
                    />
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
