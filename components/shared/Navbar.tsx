"use client";
import { useState, useEffect } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import Link from "next/link";

export default function Navbar() {
    const [ isMenuOpen, setIsMenuOpen ] = useState(false);

    // State to hold the user data (role)
    const [ userRole, setUserRole ] = useState<string | null>(null);

    // Use useEffect to retrieve and set user role from local storage
    useEffect(() => {
        const userInfo = localStorage?.getItem("user");
        if (userInfo) {
            const user = JSON.parse(userInfo);
            setUserRole(user.role);
        }
    }, []); // Empty dependency array ensures this only runs once on component mount

    const menuItems = [
        { key: "Home", path: "/" },
        { key: "Contact", path: "/contact" },
    ];

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev);
    };

    return (
        <header className="my-3 md:my-6">
            <div className="container flex justify-between items-center mx-auto">
                {/* Left side */}
                <Link href={"/"} className="text-3xl flex justify-center items-center font-bold ml-3">
                    <GiHamburgerMenu
                        className="flex md:hidden mr-4 cursor-pointer"
                        onClick={toggleMenu}
                    />
                    Progym
                </Link>

                {/* Middle section */}
                {isMenuOpen ? (
                    <div className="grid bg-primary gap-y-1 text-black fixed top-16 px-8 pt-2 pb-12 rounded-md left-1 text-lg font-bold">
                        {menuItems.map((menuItem, index) => (
                            <div key={index}>
                                <Link href={menuItem.path} onClick={() => setIsMenuOpen(false)}>{menuItem.key}</Link>
                                <hr className="border border-black" />
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="hidden md:flex gap-8 text-lg font-semibold">
                        {menuItems.map((menuItem, index) => (
                            <div key={index}>
                                <Link href={menuItem.path} className="cursor-pointer" onClick={() => setIsMenuOpen(false)}>{menuItem.key}</Link>
                            </div>
                        ))}
                    </div>
                )}

                {/* Right side */}
                <div>
                    {userRole ? (
                        <Link
                            href={`/dashboard/${userRole === "TRAINEE" ? "trainee" : userRole === "TRAINER" ? "trainer" : userRole === "SUPER_ADMIN" ? "admin" : ""}`}
                            className="bg-primary text-black font-bold text-lg px-7 py-2 rounded mr-4"
                        >
                            Dashboard
                        </Link>
                    ) : (
                        <Link href={`/auth/login`} className="bg-primary text-black font-bold text-lg px-7 py-2 rounded mr-4">
                            Login
                        </Link>
                    )}
                </div>
            </div>
        </header>
    );
}
