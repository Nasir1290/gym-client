"use client";
import classImage from "@/public/assets/images/ourService3.jpg";
import Image from "next/image";
import React, { useState } from "react";

interface GymClass {
    id: number;
    name: string;
    instructor: string;
    duration: string; // e.g., "60 minutes"
    schedule: string; // e.g., "Monday, 10:00 AM"
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    image?: any;
}

const dummyClasses: GymClass[] = [
    { id: 1, name: 'HIIT', instructor: 'John Doe', duration: '60 minutes', schedule: 'Monday, 10:00 AM', image: classImage },
    { id: 2, name: 'Yoga', instructor: 'Jane Smith', duration: '45 minutes', schedule: 'Tuesday, 9:00 AM', image: classImage },
    { id: 3, name: 'Pilates', instructor: 'Emily Brown', duration: '50 minutes', schedule: 'Wednesday, 11:00 AM', image: classImage },
    { id: 4, name: 'Strength Training', instructor: 'Robert Johnson', duration: '75 minutes', schedule: 'Thursday, 5:00 PM', image: classImage },
];

export default function ClassesPage() {
    const [ classes, setClasses ] = useState<GymClass[]>(dummyClasses);

    const handleRemove = (id: number) => {
        const updatedClasses = classes.filter(gymClass => gymClass.id !== id);
        setClasses(updatedClasses);
        console.log('Removed Class:', id);
    };

    const handleCreate = () => {
        console.log('Create new class');
    };

    return (
        <div className="p-4 space-y-6">
            {/* Create Class Button */}
            <div className="flex justify-end">
                <div
                    className="bg-gradient-to-r from-blue-400 to-blue-600 hover:from-blue-500 hover:to-blue-700 text-white py-2 px-4 rounded-lg shadow-md"
                    onClick={handleCreate}
                >
                    Your Classes
                </div>
            </div>

            {/* Classes List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                {classes.map(gymClass => (
                    <div
                        key={gymClass.id}
                        className="bg-gradient-to-r from-gray-800 to-gray-900 text-white p-6 rounded-lg shadow-lg border-4 border-transparent hover:border-blue-400 transition-all duration-300 relative overflow-hidden"
                    >
                        <div className="rounded-lg overflow-hidden mb-4">
                            <Image
                                src={gymClass.image}
                                alt={gymClass.name}
                                className="w-full h-48 rounded-lg object-cover transition-transform duration-300 transform hover:scale-105"
                            />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold mb-2">{gymClass.name}</h3>
                            <p className="mb-1 text-blue-300"><span className="font-semibold">Instructor:</span> {gymClass.instructor}</p>
                            <p className="mb-1 text-green-300"><span className="font-semibold">Duration:</span> {gymClass.duration}</p>
                            <p className="text-yellow-300"><span className="font-semibold">Schedule:</span> {gymClass.schedule}</p>
                        </div>

                        <div className="mt-4 flex justify-between">
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
        </div>
    );
}
