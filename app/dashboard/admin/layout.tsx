
"use client";
import Loading from "@/components/shared/Loading";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import { FaHome, FaUser, FaSignOutAlt, FaBook, FaPen } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

interface Children {
    children: React.ReactNode;
}

export default function AdminLayout({ children }: Readonly<Children>) {

    const [ isMenuOpen, setIsMenuOpen ] = useState(false);

    const router = useRouter();
    // State to hold the user data (role)
    const [ userRole, setUserRole ] = useState<string | null>(null);

    // Check if user is logged in and has the correct role
    useEffect(() => {
        const userInfo = localStorage?.getItem("user");

        if (userInfo) {
            const user = JSON.parse(userInfo);
            setUserRole(user.role);

            // Redirect if the user role is not "TRAINER"
            if (user.role !== "SUPER_ADMIN") {
                router.push("/");
            }
        } else {
            router.push("/"); // Redirect if no user info is found
        }
    }, [ router ]);

    const menuItems = [
        { key: "Home", path: "/" },
        { key: "Classes", path: "/dashboard/admin/classes" },
        { key: "Trainers", path: "/dashboard/admin/trainers" },
        { key: "Profile", path: "/dashboard/admin/profile" },
        { key: "Logout", path: "/logout" },
    ];

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };

    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        router.push("/auth/login");
    };

    if (!userRole) {
        // Optionally show a loading screen while checking user role
        return <Loading />;
    }

    return (
        <div className="min-h-screen">
            {/* Sidebar for mobile */}
            <div className="fixed top-2 mb-2 text-2xl left-3 md:hidden">
                <GiHamburgerMenu onClick={toggleMenu} />
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="grid z-30 bg-primary gap-y-1 text-black fixed top-16 px-8 pt-2 pb-12 rounded-md left-1 text-lg font-bold">
                    {menuItems.map((menuItem, index) => (
                        <div key={index}>
                            <Link href={menuItem.path} onClick={() => setIsMenuOpen(false)}>
                                {menuItem.key}
                            </Link>
                            <hr className="border border-black" />
                        </div>
                    ))}
                </div>
            )}

            {/* Sidebar for large screens */}
            <div className="md:fixed md:top-2 md:left-2 w-full md:h-[calc(100vh-20px)] md:w-1/5 bg-gray-900 text-gray-300 p-3 hidden md:flex flex-col rounded-lg">
                <div className="flex items-center justify-center h-16 mb-10">
                    <h1 className="text-2xl font-bold text-white">ADMIN</h1>
                </div>
                <nav className="flex flex-col space-y-4">
                    <Link
                        href="/"
                        className="flex items-center space-x-2 hover:bg-gray-800 py-2 px-3 rounded-lg"
                    >
                        <FaHome /> <span>Home</span>
                    </Link>
                    <Link
                        href="/dashboard/admin/classes"
                        className="flex items-center space-x-2 hover:bg-gray-800 py-2 px-3 rounded-lg"
                    >
                        <FaBook /> <span>Classes</span>
                    </Link>
                    <Link
                        href="/dashboard/admin/trainers"
                        className="flex items-center space-x-2 hover:bg-gray-800 py-2 px-3 rounded-lg"
                    >
                        <FaPen /> <span>Trainers</span>
                    </Link>
                    <Link
                        href="/dashboard/admin/profile"
                        className="flex items-center space-x-2 hover:bg-gray-800 py-2 px-3 rounded-lg"
                    >
                        <FaUser /> <span>Profile</span>
                    </Link>
                    <button
                        onClick={handleLogout}
                        className="flex items-center space-x-2 hover:bg-gray-800 py-2 px-3 rounded-lg text-red-400"
                    >
                        <FaSignOutAlt /> <span>Logout</span>
                    </button>
                </nav>
            </div>

            {/* Main Content */}
            <div className="ml-0 w-full md:w-[78%] justify-center mr-2 z-10 md:ml-[21%] fixed rounded-md h-[calc(100vh-20px)] top-2 overflow-y-auto mt-8 md:mt-1 p-4 md:p-2 bg-gray-800 text-gray-200">
                <div className="p-2 bg-gray-700 rounded-xl shadow-lg h-full overflow-y-auto">
                    {children}
                </div>
            </div>
        </div>
    );
}
