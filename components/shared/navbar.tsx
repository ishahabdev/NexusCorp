"use client";
import { useState } from "react";
import { IoMdSearch } from "react-icons/io";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import Button from "@/components/ui/Button";
const navLinks = [
  { id: 1, label: "Home", href: "/" },
  { id: 3, label: "Blog", href: "/blog" },
  { id: 4, label: "Dashboard", href: "/dashboard" },
  { id: 2, label: "About", href: "/about" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const isBlogPage = pathname?.startsWith("/blog")

  function HandleClick() {



  }

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
                  ? "after:w-full  font-medium border-b-2 text-blue-600  border-blue-600 "
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
            <div className="relative">
              <IoMdSearch className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search ..."
                className="border rounded-md p-2 pl-8 text-sm focus:outline-none focus:ring-2 mr-4 focus:ring-blue-500"
              />
            </div>
          )}
          <Link href="/dashboard" className="hidden md:block shrink-0">
            <Button onClick={HandleClick}>Get Started</Button>
          </Link>

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
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <div className="flex flex-col gap-1 px-4 pb-4">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`px-3 py-2 rounded-md text-sm transition ${pathname === link.href
                ? "bg-blue-50 text-blue-600 font-medium"
                : "text-gray-700 hover:bg-gray-100"
                }`}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/dashboard" onClick={() => setIsOpen(false)} className="mt-2">
            <Button className="w-full">Get Started</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}