"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import defaultProfilePic from "@/public/assets/images/ourService1.jpg"; 
import { useGetAdminQuery } from "@/redux/features/api/userApi";
import Loading from "@/components/shared/Loading";

interface IAdmin {
  _id: string;
  name: string;
  email: string;
  password: string;
  expertise?: string;
  profile?: string;
  role: string;
}

export default function AdminProfilePage() {
  const { isLoading, data, error } = useGetAdminQuery([]);
  const [ admin, setAdmin ] = useState<IAdmin | null>(null);
  const [ profilePhoto, setProfilePhoto ] = useState<string>(defaultProfilePic.src);
  const [ name, setName ] = useState<string>("Admin Name");
  const [ currentPassword, setCurrentPassword ] = useState<string>("");
  const [ newPassword, setNewPassword ] = useState<string>("");
  const [ isEditing, setIsEditing ] = useState<boolean>(false);

  useEffect(() => {
    if (data) {
      setAdmin(data.data[ 0 ]);
      setProfilePhoto(data.data[ 0 ].profile || defaultProfilePic.src); // Fallback to default image
      setName(data.data[ 0 ].name || "Admin Name");
    }
  }, [ data ]);

  if (isLoading) {
    return <Loading />;
  }

  if (error) {
    console.error("Error fetching admin data:", error);
    return <p>Error loading admin data.</p>;
  }

  if (!admin) {
    return <p>No admin data available.</p>;
  }

  const handleProfilePhotoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[ 0 ];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfilePhoto(imageUrl);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Create a FormData object
    const formData = new FormData();

    // Append data to the FormData object
    formData.append('image', profilePhoto);
    formData.append('data', JSON.stringify({ name, currentPassword, newPassword }));

    // Log the FormData entries to see what is being sent
    for (const [ key, value ] of formData.entries()) {
      console.log(`${key}:`, value);
    }

    // Here, you would typically make a call to the backend to update the profile
    // For now, we just log it
    console.log("Profile updated:", { name, currentPassword, newPassword });

    setIsEditing(false); // Close modal after form submission
  };

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-yellow-300 mb-6">Admin Profile</h1>

      <div className="flex flex-col items-center space-y-4">
        <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-pink-400 shadow-lg">
          <Image
            src={profilePhoto || defaultProfilePic.src}
            alt="Profile Picture"
            width={128}
            height={128}
            className="object-cover"
          />
        </div>
        <h2 className="text-xl font-bold text-white">{name}</h2>
        <button
          onClick={() => setIsEditing(true)}
          className="bg-gradient-to-r from-pink-400 to-purple-600 hover:from-pink-500 hover:to-purple-700 text-white py-2 px-6 rounded-lg shadow-md"
        >
          Edit Profile
        </button>
      </div>

      {isEditing && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg w-full max-w-lg">
            <h2 className="text-2xl font-bold text-yellow-300 mb-4">Edit Profile</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="flex flex-col items-center space-y-4">
                <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-pink-400 shadow-lg">
                  <Image
                    src={profilePhoto || defaultProfilePic.src}
                    alt="Profile Picture"
                    width={128}
                    height={128}
                    className="object-cover"
                  />
                </div>
                <label className="bg-gradient-to-r from-pink-400 to-purple-600 hover:from-pink-500 hover:to-purple-700 text-white py-2 px-4 rounded-lg shadow-md cursor-pointer">
                  Change Profile Photo
                  <input
                    type="file"
                    className="hidden"
                    accept="image/*"
                    onChange={handleProfilePhotoChange}
                  />
                </label>
              </div>

              <div>
                <label className="block text-yellow-300 font-bold mb-2">Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-gray-900 text-white py-2 px-4 rounded-lg border border-purple-400 focus:border-pink-500 outline-none"
                />
              </div>

              <div>
                <label className="block text-yellow-300 font-bold mb-2">Current Password</label>
                <input
                  type="password"
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  className="w-full bg-gray-900 text-white py-2 px-4 rounded-lg border border-purple-400 focus:border-pink-500 outline-none"
                  placeholder="Enter current password"
                />
              </div>

              <div>
                <label className="block text-yellow-300 font-bold mb-2">New Password</label>
                <input
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="w-full bg-gray-900 text-white py-2 px-4 rounded-lg border border-purple-400 focus:border-pink-500 outline-none"
                  placeholder="Enter new password"
                />
              </div>

              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-gradient-to-r from-pink-400 to-purple-600 hover:from-pink-500 hover:to-purple-700 text-white py-2 px-6 rounded-lg shadow-md"
                >
                  Save Changes
                </button>
                <button
                  type="button"
                  onClick={() => setIsEditing(false)}
                  className="ml-4 bg-red-500 text-white py-2 px-6 rounded-lg shadow-md"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
