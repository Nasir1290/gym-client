"use client";
import Image, { StaticImageData } from "next/image";
import React, { useState, useEffect } from "react";
import classImage from "@/public/assets/images/hero-image.jpg";
import classImage2 from "@/public/assets/images/heroImage.jpg";
import Loading from "@/components/shared/Loading";
// Interface for gym class
interface GymClass {
    id: number;
    name: string;
    instructor: string;
    duration: string;
    schedule: string;
    image?: string | StaticImageData; // Changed to string to store base64 image data
}

export default function ClassesPage() {
    const [ classes, setClasses ] = useState<GymClass[]>([]);
    const [ isLoading, setIsLoading ] = useState<boolean>(true);
    const [ showModal, setShowModal ] = useState<boolean>(false);
    const [ formData, setFormData ] = useState<GymClass>({
        id: 0,
        name: "",
        instructor: "",
        duration: "",
        schedule: "",
        image: classImage,
    });

    // Initial classes
    const initialClasses: GymClass[] = [
        {
            id: 1,
            name: "Yoga for Beginners",
            instructor: "Alice Johnson",
            duration: "60 minutes",
            schedule: "Monday, 9:00 AM",
            image: classImage,
        },
        {
            id: 2,
            name: "Yoga for Beginners",
            instructor: "Alice Johnson",
            duration: "60 minutes",
            schedule: "Monday, 9:00 AM",
            image: classImage2,
        }
    ];

    // Load classes from localStorage or initialize with default
    useEffect(() => {
        const storedClasses = localStorage.getItem("gymClasses");
        if (storedClasses) {
            setClasses(JSON.parse(storedClasses));
        } else {
            localStorage.setItem("gymClasses", JSON.stringify(initialClasses));
            setClasses(initialClasses);
        }
        setIsLoading(false);
    }, []);

    // Handle input changes for modal form
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [ name ]: value }));
    };

    // Handle image upload
    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[ 0 ];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setFormData((prevData) => ({ ...prevData, image: reader.result as string }));
            };
            reader.readAsDataURL(file); // Convert image to base64
        }
    };


    // Handle form submission for creating/updating classes
    const handleSubmit = () => {
        setIsLoading(true); // Start loading
        setTimeout(() => {
            const updatedClasses = formData.id
                ? classes.map((gymClass) =>
                    gymClass.id === formData.id ? formData : gymClass
                )
                : [ ...classes, { ...formData, id: Date.now() } ];

            localStorage.setItem("gymClasses", JSON.stringify(updatedClasses));
            setClasses(updatedClasses);
            setShowModal(false);
            resetForm();
            setIsLoading(false); // End loading
        }, 1500); // 1.5-second delay
    };
    // Edit existing class
    const handleEdit = (id: number) => {
        const selectedClass = classes.find((gymClass) => gymClass.id === id);
        if (selectedClass) {
            setFormData(selectedClass);
            setShowModal(true);
        }
    };

    // Remove class from localStorage
    const handleRemove = (id: number) => {
        const filteredClasses = classes.filter((gymClass) => gymClass.id !== id);
        localStorage.setItem("gymClasses", JSON.stringify(filteredClasses));
        setClasses(filteredClasses);
    };

    // Reset form after submission or modal close
    const resetForm = () => {
        setFormData({
            id: 0,
            name: "",
            instructor: "",
            duration: "",
            schedule: "",
            image: "",
        });
    };

    // Toggle modal visibility
    const toggleModal = () => {
        setShowModal(!showModal);
        resetForm();
    };

    if (isLoading) {
        return <Loading/>;
    }

    return (
        <div className="p-4 space-y-6">
            {/* Create Class Button */}
            <div className="flex justify-end">
                <button
                    className="bg-gradient-to-r from-blue-400 font-bold to-blue-600 hover:from-blue-500 hover:to-blue-700 text-white py-2 px-32 rounded-lg shadow-md"
                    onClick={toggleModal}
                >
                    Create Class
                </button>
            </div>

            {/* Classes List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                {classes?.map((gymClass) => (
                    <div
                        key={gymClass.id}
                        className="bg-gradient-to-r from-gray-800 to-gray-900 text-white p-6 rounded-lg shadow-lg border-4 border-transparent hover:border-blue-400 transition-all duration-300 relative overflow-hidden"
                    >
                        <div className="rounded-lg overflow-hidden mb-4">
                            <Image
                                src={gymClass?.image ? gymClass.image : classImage}
                                alt={gymClass.name}
                                className="w-full h-48 rounded-lg object-cover transition-transform duration-300 transform hover:scale-105"
                                width={300}
                                height={200}
                            />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-2">{gymClass.name}</h3>
                            <p className="mb-1 text-blue-300">
                                <span className="font-semibold">Instructor:</span>{" "}
                                {gymClass.instructor}
                            </p>
                            <p className="mb-1 text-green-300">
                                <span className="font-semibold">Duration:</span>{" "}
                                {gymClass.duration}
                            </p>
                            <p className="text-yellow-300">
                                <span className="font-semibold">Schedule:</span>{" "}
                                {gymClass.schedule}
                            </p>
                        </div>

                        <div className="mt-4 flex justify-between">
                            <button
                                className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-3 rounded-lg shadow-md"
                                onClick={() => handleEdit(gymClass.id)}
                            >
                                Edit
                            </button>
                            <button
                                className="bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded-lg shadow-md"
                                onClick={() => handleRemove(gymClass.id)}
                            >
                                Remove
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Modal for creating/editing classes */}
            {showModal && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-gradient-to-br from-purple-600 to-pink-500 bg-opacity-90">
                    <div className="bg-white p-6 rounded-lg shadow-lg border-4 border-purple-400">
                        <h2 className="text-xl font-bold mb-4 text-purple-700">
                            {formData.id ? "Edit Class" : "Create Class"}
                        </h2>
                        <div className="space-y-4">
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                placeholder="Class Name"
                                className="border-2 border-purple-300 text-black rounded-lg w-full px-4 py-2 focus:border-purple-500 focus:ring focus:ring-purple-200"
                            />
                            <input
                                type="text"
                                name="instructor"
                                value={formData.instructor}
                                onChange={handleInputChange}
                                placeholder="Instructor"
                                className="border-2 border-pink-300 text-black rounded-lg w-full px-4 py-2 focus:border-pink-500 focus:ring focus:ring-pink-200"
                            />
                            <input
                                type="text"
                                name="duration"
                                value={formData.duration}
                                onChange={handleInputChange}
                                placeholder="Duration"
                                className="border-2 border-blue-300 text-black rounded-lg w-full px-4 py-2 focus:border-blue-500 focus:ring focus:ring-blue-200"
                            />
                            <input
                                type="text"
                                name="schedule"
                                value={formData.schedule}
                                onChange={handleInputChange}
                                placeholder="Schedule"
                                className="border-2 border-yellow-300 text-black rounded-lg w-full px-4 py-2 focus:border-yellow-500 focus:ring focus:ring-yellow-200"
                            />

                            {/* Image upload input */}
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleImageUpload}
                                className="border-2 border-green-300 text-black rounded-lg w-full px-4 py-2 focus:border-green-500 focus:ring focus:ring-green-200"
                            />
                            {formData.image && (
                                <div className="mt-4">
                                    <Image
                                        src={formData.image}
                                        alt="Class Image Preview"
                                        width={100}
                                        height={100}
                                        className="rounded-lg shadow-lg border-2 border-purple-400"
                                    />
                                </div>
                            )}
                        </div>
                        <div className="flex justify-end mt-6 space-x-4">
                            <button
                                className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg shadow-lg focus:ring-2 focus:ring-red-200 transition duration-200"
                                onClick={toggleModal}
                            >
                                Cancel
                            </button>
                            <button
                                className="bg-teal-500 hover:bg-teal-600 text-white py-2 px-4 rounded-lg shadow-lg focus:ring-2 focus:ring-teal-200 transition duration-200"
                                onClick={handleSubmit}
                            >
                                Save
                            </button>
                        </div>
                    </div>
                </div>

            )}
        </div>
    );
}
