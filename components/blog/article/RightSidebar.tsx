"use client"
import Button from "@/components/ui/Button"
import Link from "next/link"
import { useState } from "react"
export default function RightSidebar() {
    const navItems = [
        { label: "Introduction", href: "#introduction" },
        { label: "The Edge-First Shift", href: "#edge-shift" },
        { label: "Performance Factors", href: "#performance" },
        { label: "Conclusion", href: "#conclusion" },
    ]
    const [activehref, setActiveHref] = useState("#introduction")
    return (
        <section className="px-4">
            <p className="font-medium text-md py-2 ">ON THIS PAGE</p>
            <div className="grid grid-cols-1   py-4 gap-2 border-l border-gray-200">
                {
                    navItems.map((item) => (
                        <Link
                            key={item.href}
                            onClick={() => setActiveHref(item.href)}
                            className=
                            {` text-md px-3 py-2 border-l rounded-md transition-color
                            ${activehref === item.href ? "text-blue-600 border-l-2 border-blue-600 rounded-none" : "text-gray-700"}`}
                            href={item.href}
                        >
                            {item.label}
                        </Link>
                    ))
                }
            </div>

           <div className="bg-blue-100 rounded-md p-6 space-y-3 mt-6 ">
    <h1 className="text-xl font-semibold">Get the latest insights</h1>
    <p className="text-gray-600 text-sm">
        Join 20k+ engineers receiving our weekly deep-dives.
    </p>
    <input
        className="bg-white border border-gray-300 p-2 rounded-md w-full text-sm"
        type="email"
        placeholder="email@example.com"
    />
    <Button className="w-full">Subscribe</Button>
</div>




        </section>
    )
}
