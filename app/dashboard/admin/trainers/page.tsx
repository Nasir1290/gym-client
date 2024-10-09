"use client";
import userImage from "@/public/assets/images/hero-image.jpg";
import Image from "next/image";
import React, { useState } from "react";

interface Trainer {
  id: number;
  name: string;
  specialty: string;
  experience: number; // in years
  image?: any;
}

const dummyTrainers: Trainer[] = [
  { id: 1, name: 'John Doe', specialty: 'Strength Training', experience: 5, image: userImage },
  { id: 2, name: 'Jane Smith', specialty: 'Yoga Instructor', experience: 3, image: userImage },
  { id: 3, name: 'Robert Johnson', specialty: 'Cardio Expert', experience: 4, image: userImage },
  { id: 4, name: 'Emily Brown', specialty: 'Pilates Trainer', experience: 6, image: userImage },
];

export default function TrainersPage() {
  const [ trainers, setTrainers ] = useState<Trainer[]>(dummyTrainers);

  const handleEdit = (id: number) => {
    console.log('Edit Trainer:', id);
  };

  const handleRemove = (id: number) => {
    const updatedTrainers = trainers.filter(trainer => trainer.id !== id);
    setTrainers(updatedTrainers);
    console.log('Removed Trainer:', id);
  };

  const handleCreate = () => {
    console.log('Create new trainer');
  };

  return (
    <div className="p-4 space-y-6">
      {/* Create Trainer Button */}
      <div className="flex justify-end">
        <button
          className="bg-gradient-to-r from-blue-500 to-green-500 hover:from-blue-600 hover:to-green-600 text-white py-2 px-4 rounded-lg shadow-md"
          onClick={handleCreate}
        >
          Create Trainer
        </button>
      </div>

      {/* Trainers List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {trainers.map(trainer => (
          <div
            key={trainer.id}
            className="bg-gray-800 text-gray-200 p-6 rounded-lg shadow-lg border-4 border-transparent hover:border-indigo-500 transition-all duration-300 relative overflow-hidden"
          >
            <div className="rounded-lg overflow-hidden mb-4">
              <Image
                src={trainer.image}
                alt={trainer.name}
                className="w-full h-48 rounded-lg object-cover transition-transform duration-300 transform hover:scale-105"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-2 text-cyan-400">{trainer.name}</h3>
              <p className="mb-1 text-amber-300"><span className="font-semibold">Specialty:</span> {trainer.specialty}</p>
              <p className="text-pink-400"><span className="font-semibold">Experience:</span> {trainer.experience} years</p>
            </div>

            <div className="mt-4 flex justify-between">
              <button
                className="bg-gradient-to-r from-purple-400 to-pink-500 hover:from-purple-500 hover:to-pink-600 text-white py-1 px-3 rounded-lg shadow-md"
                onClick={() => handleEdit(trainer.id)}
              >
                Edit
              </button>
              <button
                className="bg-gradient-to-r from-red-400 to-orange-500 hover:from-red-500 hover:to-orange-600 text-white py-1 px-3 rounded-lg shadow-md"
                onClick={() => handleRemove(trainer.id)}
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
