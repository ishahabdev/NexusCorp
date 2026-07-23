"use client"
import { useState } from "react";

export default function BlogCard() {

    const UpdatesArr = [
        {
            id: 1,
            type: "Engineer",
            image: "/images/BlogCard1.jpg",
            category: "INFRASTRUCTURE",
            date: "May 18, 2024",
            heading: "Scaling Globally with Edge Functions",
            desc: "How we reduced latency by 40% using globally distributed compute clusters and intelligent...",
            pic: "",
            author: "Sarah Drasner"
        },
        {
            id: 2,
            type: "Design",
            image: "/images/BlogCard2.jpg",
            category: "DESIGN SYSTEMS",
            date: "May 12, 2024",
            heading: "The Future of Multi-brand UI Systems",
            desc: "Lessons learned from building a shared component library used by over 50 product teams.",
            pic: "",
            author: "Marcus Aurelius"
        },
        {
            id: 3,
            type: "Engineer",
            image: "/images/BlogCard3.jpg",
            category: "SECURITY",
            date: "May 05, 2024",
            heading: "Hardening Your CI/CD Pipeline",
            desc: "Implementing zero-trust architecture in automated deployment workflows for maximum safety.",
            pic: "",
            author: "Elena Rigby"
        },
        {
            id: 4,
            type: "Design",
            image: "/images/BlogCard4.jpg",
            category: "CULTURE",
            date: "April 28, 2024",
            heading: "Sustainable Developer Velocity",
            desc: "Building healthy habits to prevent burnout while maintaining high-quality delivery cycles.",
            pic: "",
            author: "David Heinemeier"
        },
        {
            id: 5,
            type: "Design",
            image: "/images/BlogCard5.jpg",
            category: "ARTIFICIAL INTELLIGENCE",
            date: "April 20, 2024",
            heading: "LLMs in Your Local Workflow",
            desc: "Integrating local language models for privacy-first code assistance and documentation tasks.",
            pic: "",
            author: "Simina Ionescu"
        },
        {
            id: 6,
            type: "Engineer",
            image: "/images/BlogCard6.jpg",
            category: "PERFORMANCE",
            heading: "Optimizing Core Web Vitals",
            desc: "Advanced techniques for improving Largest Contentful Paint and Cumulative Layout Shift.",
            pic: "",
            author: "Ken Wheeler"
        }
    ]

    const [filter, setFilter] = useState("All Posts");
    const buttons = ["All Posts", "Engineer", "Design"];
    return (
        <section className="py-6">

            <div className="flex justify-between  border-b border-gray-500 ">
                <h1 className="text-xl font-bold">
                    Recent Updates
                </h1>

              <div className="flex gap-4 font-semibold ">
    {buttons.map((btn) => (
        <button
            key={btn}
            onClick={() => setFilter(btn)}
            className={filter === btn ? " text-blue-600 pb-2" : "pb-2"}
        >
            {btn}
        </button>
    ))}
</div>
            </div>
            <div className='grid lg:grid-cols-3 py-10 md:grid-cols-2 sm:grid-cols-1 gap-6'>
                {
                    UpdatesArr
                        .filter((item) => filter === "All Posts" || item.type === filter)
                        .map((item) => (
                            <div key={item.id} className='border  bg-white ' >
                                <img src={item.image}
                                    alt={item.heading}
                                    className="w-full "
                                />
                                <div className="p-4 grid grid-cols-1 gap-2">
                                    <div className="flex justify-between">
                                        <p className="text-blue-600 text-sm font-semibold"> {item.category}</p>
                                        <p className="text-gray-600 text-xs font-semibold"> {item.date}</p>
                                    </div>
                                    <h1 className="text-2xl font-bold "> {item.heading}</h1>
                                    <p className="text-sm  text-gray-600"> {item.desc}</p>
                                    <div className="flex items-center x gap-x-4 ">
                                        <p className="w-6 h-6 bg-gray-400 rounded-[50%] ">{item.pic}</p>
                                        <p className="py-2 text-sm font-semibold "> {item.author}</p>
                                    </div>
                                </div>



                            </div>
                        ))


                }
            </div>


            
        </section>
    )
}
