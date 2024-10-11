

"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaEdit, FaTrash } from "react-icons/fa";
import { useCreateTrainerMutation, useEditTrainerMutation, useGetTrainerQuery, useDeleteTrainerMutation } from "@/redux/features/api/userApi";
import toast from "react-hot-toast";
import Image from "next/image";
import TrainerImage from "@/public/assets/images/ourService2.jpg"; // Placeholder image
import Loading from "@/components/shared/Loading";


interface Trainer {
  id: number | string;
  _id: string;
  name: string;
  email: string;
  expertise: string;
  profile: string;
  role: string;
}

export default function TrainerManagement() {
  const { isLoading, data, error } = useGetTrainerQuery([]);
  const [ trainers, setTrainers ] = useState<Trainer[]>([]);
  const [ isModalOpen, setIsModalOpen ] = useState(false);
  const [ createTrainer ] = useCreateTrainerMutation();
  const [ editingTrainer, setEditingTraine ] = useState<Trainer | null>(null);
  const [ editTrainer ] = useEditTrainerMutation();
  const [ deleteTrainer ] = useDeleteTrainerMutation();
  const [ change, setChange ] = useState(false);

  // State for the form inputs
  const [ formData, setFormData ] = useState({
    email: "",
    password: "",
    name: "",
    expertise: "",
    role: "TRAINER",
  });

  // Open/Close Modal
  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
    if (isModalOpen) {
      resetFormData(); // Reset the form when closing the modal
    }
  };

  // Reset form data function
  const resetFormData = () => {
    setFormData({
      email: "",
      password: "",
      name: "",
      expertise: "",
      role: "TRAINER",
    });
    setEditingTraine(null); // Clear the editing trainer ID
  };

  // Handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [ name ]: value,
    });
  };


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (editingTrainer) {
      // Logic for updating an existing trainer
      const updatedTrainer = { ...formData };
      const updatedData = {
        image: "",
        data: {
          ...updatedTrainer,
        },
      };

      try {
        console.log(trainers)
        const res = await editTrainer(updatedData).unwrap();
        console.log(res)
        if (res.success) {
          toast.success("Trainer data updated successfully!");

          // Create an updated trainers list
          const updatedTrainersList = trainers.map((trainer) => trainer._id === editingTrainer.id ? res.data : trainer);

          // Set the new list to the state
          setTrainers(updatedTrainersList);

          toggleModal(); // Close modal after editing
        } else {
          toast.error("Failed to update Trainer!");
        }
      } catch (error) {
        toast.error("An error occurred while updating the trainer.");
      }
    } else {
      // Logic for creating a new trainer
      try {
        const res = await createTrainer(formData).unwrap();
        console.log(res)
        if (res.success) {
          toast.success(res.message);

          const newTrainer = {
            id: trainers.length + 1, // This should ideally come from the server
            name: formData.name,
            email: formData.email,
            expertise: formData.expertise,
            image: TrainerImage, // Placeholder image for now
            role: formData.role,
          };

          // Create a new trainers list including the new trainer
          const updatedTrainersList = [ ...trainers, res?.data ];

          // Update the state with the new trainers list
          setTrainers(updatedTrainersList);

          toggleModal(); // Close modal after successful creation
        }
      } catch (error) {
        toast.error(error?.data?.message || "Failed to create trainer");
      }
    }

    resetFormData(); // Reset form after submission
  };

  const handleDeleteTrainer = async (id: string) => {
    console.log({ id })
    try {
      const res = await deleteTrainer(id);
      console.log(res)
      if (res?.data.success) {
        setTrainers(trainers.filter((trainer) => trainer._id !== id));
        toast.success("Trainer deleted!");
      }
    } catch (error) {
      toast.error("Failed to delete trainer");
    }
  };

  // Handle edit trainer
  const handleEditTrainer = (trainer: Trainer) => {
    const incomingFormData = {
      id: trainer._id,
      email: trainer.email,
      password: "", // Do not fill password for security reasons
      name: trainer.name,
      expertise: trainer.expertise,
      role: trainer.role,
    }
    setFormData(incomingFormData);
    setEditingTraine(incomingFormData); // Set the ID of the trainer being edited
    toggleModal(); // Open the modal
  };

  // Load trainers from backend
  useEffect(() => {
    if (!isLoading && Array.isArray(data?.data)) {
      setTrainers(data.data); // Set fetched trainers
    }
  }, [ data, isLoading ]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="container mx-auto px-4 py-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-blue-700">Trainer Management</h1>
        <button
          onClick={toggleModal}
          className="bg-blue-500 text-white font-bold text-lg px-6 py-2 rounded-md hover:bg-blue-600 transition-colors"
        >
          Create Trainer
        </button>
      </div>

      {/* Trainers Table */}
      <div className="overflow-x-auto rounded-md">
        <table className="min-w-full bg-white rounded-md">
          <thead>
            <tr className="bg-blue-200 text-left text-black">
              <th className="p-4 text-center">Image</th>
              <th className="p-4">Name</th>
              <th className="p-4">Email</th>
              <th className="p-4">Expertise</th>
              <th className="p-4 text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {trainers?.map((trainer) => (
              <tr key={trainer.id} className="border-b">
                <td className="p-4 text-center">
                  <Image
                    src={`http://192.168.1.113:4000/${trainer.image}` || TrainerImage} // Use trainer's image if available, otherwise placeholder
                    alt={trainer.name}
                    width={48}
                    height={48}
                    className="w-12 h-12 rounded-full mx-auto"
                  />
                </td>
                <td className="p-4 text-black">{trainer.name}</td>
                <td className="p-4 text-black">{trainer.email}</td>
                <td className="p-4 text-black">{trainer.expertise}</td>
                <td className="p-4 text-black text-center">
                  <button
                    onClick={() => handleEditTrainer(trainer)} // Pass the entire trainer object
                    className="text-blue-600 hover:text-blue-800 mr-4"
                  >
                    <FaEdit />
                  </button>
                  <button
                    onClick={() => {
                      handleDeleteTrainer(trainer._id as string)
                    }}
                    className="text-red-600 hover:text-red-800"
                  >
                    <FaTrash />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal for Creating/Editing Trainer */}
      {isModalOpen && (
        <motion.div
          className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="bg-white rounded-lg p-6 w-full max-w-md shadow-lg">
            <h2 className="text-2xl font-bold text-blue-700 mb-4">
              {editingTrainer ? "Edit Trainer" : "Create Trainer"}
            </h2>

            {/* Form */}
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-lg font-medium text-gray-900 mb-2"
                >
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 text-black rounded focus:outline-none focus:border-blue-500"
                  placeholder="Enter trainer name"
                  required
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-lg font-medium text-gray-900 mb-2"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 text-black rounded focus:outline-none focus:border-blue-500"
                  placeholder="Enter trainer email"
                  required
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="block text-lg font-medium text-gray-700 mb-2"
                >
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  disabled={!!editingTrainer}
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 text-black rounded focus:outline-none focus:border-blue-500"
                  placeholder="Enter password"
                  required={!editingTrainer} // Password required only when creating
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="expertise"
                  className="block text-lg font-medium text-gray-700 mb-2"
                >
                  Expertise
                </label>
                <input
                  id="expertise"
                  name="expertise"
                  type="text"
                  value={formData.expertise}
                  onChange={handleInputChange}
                  className="w-full p-2 border border-gray-300 text-black rounded focus:outline-none focus:border-blue-500"
                  placeholder="Enter trainer expertise"
                  required
                />
              </div>

              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={toggleModal}
                  className="bg-gray-500 text-white px-4 py-2 rounded mr-2"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </motion.div>
      )}
    </div>
  );
}
