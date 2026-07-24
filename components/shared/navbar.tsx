"use client";
import { useState } from "react";
import { IoMdSearch } from "react-icons/io";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import Button from "@/components/ui/Button";

import LoginForm from "@/components/ui/LoginForm";


const navLinks = [
  { id: 1, label: "Home", href: "/" },
  { id: 3, label: "Blog", href: "/blog" },
  { id: 4, label: "Dashboard", href: "/dashboard" },
  { id: 2, label: "About", href: "/about" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const isBlogPage = pathname?.startsWith("/blog");

  return (
    <nav className="relative border-b">
      <div className="flex items-center justify-between px-4 sm:px-8 py-4">
        {/* Logo */}
        <Link href="/" className="text-lg sm:text-xl font-bold text-blue-600 shrink-0">
          NexusCrop
        </Link>

        {/* Center links - visible from md upward */}
        <div className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              href={link.href}
              className={`
                ${pathname === link.href
                  ? "after:w-full font-medium border-b-2 text-blue-600 border-blue-600"
                  : "after:w-0 hover:after:w-full"
                }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Right side: Get Started (md+) and hamburger (below md) */}
        <div className="flex items-center gap-2">
          {isBlogPage && (
            <div className="relative hidden lg:block">
              <IoMdSearch className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search ..."
                className="border border-gray-400 rounded-md bg-[#F2F4F6] p-2 pl-8 text-sm focus:outline-none focus:ring-2 mr-4 focus:ring-blue-500"
              />
            </div>
          )}

          <Button
            className="hidden md:block shrink-0"
            onClick={() => setIsLoginOpen(true)}
          >
            Get Started
          </Button>

          {/* Hamburger button - visible below md */}
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="md:hidden shrink-0 p-2 rounded-md text-gray-700 hover:bg-gray-100 transition"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-1 px-4 pb-4">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`px-3 py-2 rounded-md text-sm transition ${
                pathname === link.href
                  ? "bg-blue-50 text-blue-600 font-medium"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              {link.label}
            </Link>
          ))}

          <Button
            className="w-full mt-2"
            onClick={() => {
              setIsOpen(false);
              setIsLoginOpen(true);
            }}
          >
            Get Started
          </Button>
        </div>
      </div>

      {/* Login modal - shared for both desktop and mobile buttons */}
      {isLoginOpen && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
          onClick={() => setIsLoginOpen(false)}
        >
          <div
            className="bg-white rounded-lg p-6 max-w-md w-full mx-4 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsLoginOpen(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
              aria-label="Close login"
            >
              ✕
            </button>

           <LoginForm onSuccess={() => setIsLoginOpen(false)} />
           
          </div>
        </div>
      )}
    </nav>
  );
}