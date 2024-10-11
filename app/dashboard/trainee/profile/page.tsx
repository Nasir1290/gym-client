"use client";
import React, { useState } from "react";
import Image from "next/image";
import defaultProfilePic from "@/public/assets/images/ourService1.jpg"; // Replace with the path to your default profile image

export default function TraineeProfilePage() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [ profilePhoto, setProfilePhoto ] = useState<any>(defaultProfilePic);
  const [ name, setName ] = useState<string>("Admin Name");
  const [ currentPassword, setCurrentPassword ] = useState<string>("");
  const [ newPassword, setNewPassword ] = useState<string>("");

  // Handle file input for profile photo change
  const handleProfilePhotoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[ 0 ];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setProfilePhoto(imageUrl);
    }
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Profile updated:", { name, currentPassword, newPassword });
    // Add logic to update profile data here (API calls, etc.)
  };

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-yellow-300 mb-6">Admin Profile</h1>
      <form onSubmit={handleSubmit} className="space-y-6 bg-gray-800 p-6 rounded-lg shadow-lg">
        {/* Profile Photo */}
        <div className="flex flex-col items-center space-y-4">
          <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-pink-400 shadow-lg">
            <Image
              src={profilePhoto}
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

        {/* Name */}
        <div>
          <label className="block text-yellow-300 font-bold mb-2">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full bg-gray-900 text-white py-2 px-4 rounded-lg border border-purple-400 focus:border-pink-500 outline-none"
          />
        </div>

        {/* Current Password */}
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

        {/* New Password */}
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

        {/* Save Changes Button */}
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-gradient-to-r from-pink-400 to-purple-600 hover:from-pink-500 hover:to-purple-700 text-white py-2 px-6 rounded-lg shadow-md"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
}
