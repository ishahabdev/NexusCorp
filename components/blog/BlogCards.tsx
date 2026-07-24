"use client"
import { useState } from "react"
import Link from "next/link"

export const UpdatesArr = [
  {
    id: 1,
    slug: "edge-functions",
    type: "Engineer",
    image: "/images/BlogCard1.jpg",
    category: "INFRASTRUCTURE",
    date: "May 18, 2024",
    heading: "Scaling Globally with Edge Functions",
    desc: "How we reduced latency by 40% using globally distributed compute clusters and intelligent...",
    content: `We reduced latency by 40% using globally distributed compute clusters and intelligent request routing across edge regions worldwide.
 
Our engineering team spent six months redesigning the core infrastructure to move computation closer to end users. This involved deploying serverless functions across 30+ edge locations, implementing smart caching strategies, and building a custom routing layer that predicts user location patterns.
 
The results were dramatic. Average response times dropped from 340ms to 190ms globally, with the biggest improvements seen in regions previously underserved by traditional cloud infrastructure. This case study walks through our architecture decisions, the challenges we faced, and lessons learned along the way.`,
    pic: "",
    author: "Sarah Drasner",
  },
  {
    id: 2,
    slug: "ui-systems",
    type: "Design",
    image: "/images/BlogCard2.jpg",
    category: "DESIGN SYSTEMS",
    date: "May 12, 2024",
    heading: "The Future of Multi-brand UI Systems",
    desc: "Lessons learned from building a shared component library used by over 50 product teams.",
    content: `Building a design system that serves 50+ product teams across multiple brands is not just a technical challenge, it is an organizational one.

Over the past year we rebuilt our component library from the ground up, focusing on theming primitives instead of hardcoded brand values. Every component now accepts a theme token set, allowing each product team to express their own brand identity while staying within shared accessibility and interaction guidelines.
 
We also introduced a governance model where design and engineering co-own the system, with regular office hours and a public roadmap. This piece covers the technical architecture, the token pipeline, and the cultural shifts needed to get adoption across such a large organization.`,
    pic: "",
    author: "Marcus Aurelius",
  },
  {
    id: 3,
    slug: "cicd-security",
    type: "Engineer",
    image: "/images/BlogCard3.jpg",
    category: "SECURITY",
    date: "May 05, 2024",
    heading: "Hardening Your CI/CD Pipeline",
    desc: "Implementing zero-trust architecture in automated deployment workflows for maximum safety.",
    content: `Zero-trust is often discussed in the context of networks and identity, but rarely applied rigorously to CI/CD pipelines, where a single compromised credential can lead to a full supply chain breach.
 
In this article we walk through how we redesigned our deployment pipeline around short-lived, scoped credentials, mandatory code signing, and isolated build environments for every job. We removed all long-lived secrets from our CI configuration and replaced them with workload identity federation.
 
We also cover the monitoring layer we built to detect anomalous pipeline behavior in real time, and the incident response playbook we created specifically for supply chain related threats.`,
    pic: "",
    author: "Elena Rigby",
  },
  {
    id: 4,
    slug: "dev-velocity",
    type: "Design",
    image: "/images/BlogCard4.jpg",
    category: "CULTURE",
    date: "April 28, 2024",
    heading: "Sustainable Developer Velocity",
    desc: "Building healthy habits to prevent burnout while maintaining high-quality delivery cycles.",
    content: `Fast is not the same as sustainable. Many teams optimize for short-term velocity at the cost of long-term output, and burnout is usually the first sign that something is wrong.
 
We share the practices we introduced over the last two quarters: protected focus blocks, a strict no-meeting Wednesday policy, rotating on-call responsibilities, and a quarterly review specifically focused on workload balance rather than just output metrics.
 
The result was a measurable increase in code quality and a noticeable drop in after-hours activity across our engineering org, without sacrificing our delivery commitments to the business.`,
    pic: "",
    author: "David Heinemeier",
  },
  {
    id: 5,
    slug: "local-llms",
    type: "Design",
    image: "/images/BlogCard5.jpg",
    category: "ARTIFICIAL INTELLIGENCE",
    date: "April 20, 2024",
    heading: "LLMs in Your Local Workflow",
    desc: "Integrating local language models for privacy-first code assistance and documentation tasks.",
    content: `Not every AI workflow needs to call an external API. For teams working with sensitive codebases, running language models locally offers a compelling privacy-first alternative.
 
We evaluated several open-weight models for code completion, documentation generation, and internal search, running everything on developer workstations with no data ever leaving the local network. This article covers the hardware requirements, the quantization techniques that made this practical, and the trade-offs in quality compared to hosted alternatives.
 
We also share our internal tooling that lets developers switch between local and hosted models depending on the sensitivity of the task at hand.`,
    pic: "",
    author: "Simina Ionescu",
  },
  {
    id: 6,
    slug: "web-vitals",
    type: "Engineer",
    image: "/images/BlogCard6.jpg",
    category: "PERFORMANCE",
    date: "April 15, 2024",
    heading: "Optimizing Core Web Vitals",
    desc: "Advanced techniques for improving Largest Contentful Paint and Cumulative Layout Shift.",
    content: `Core Web Vitals are not just a ranking signal, they are a proxy for real user experience, and small regressions can quietly erode conversion rates over time.
 
This piece breaks down the specific techniques we used to bring our Largest Contentful Paint under 1.2 seconds and our Cumulative Layout Shift near zero, including image preloading strategies, font loading optimization, and reserving layout space for dynamic content before it loads.
 
We also cover the monitoring setup we use to catch regressions before they reach production, combining synthetic testing with real user monitoring across our highest traffic pages.`,
    pic: "",
    author: "Ken Wheeler",
  },
]


export default function BlogCard() {
  const [filter, setFilter] = useState("All Posts")
  const buttons = ["All Posts", "Engineer", "Design"]

  return (
    <section className="py-6">
      <div className="flex justify-between border-b border-gray-500">
        <h1 className="text-xl font-bold">Recent Updates</h1>

        <div className="flex gap-4 font-semibold">
          {buttons.map((btn) => (
            <button
              key={btn}
              onClick={() => setFilter(btn)}
              className={filter === btn ? "text-blue-600 pb-2" : "pb-2"}
            >
              {btn}
            </button>
          ))}
        </div>
      </div>

      <div className="grid lg:grid-cols-3 py-10 md:grid-cols-2 sm:grid-cols-1 gap-6">
        {UpdatesArr.filter(
          (item) => filter === "All Posts" || item.type === filter
        ).map((item) => (
          <Link
            key={item.id}
            href={`/blog/${item.slug}`}
            className="border bg-white hover:shadow-md transition-shadow duration-200"
          >
            <img src={item.image} alt={item.heading} className="w-full" />
            <div className="p-4 grid grid-cols-1 gap-2">
              <div className="flex justify-between">
                <p className="text-blue-600 text-sm font-semibold">
                  {item.category}
                </p>
                <p className="text-gray-600 text-xs font-semibold">
                  {item.date}
                </p>
              </div>
              <h1 className="text-2xl font-bold">{item.heading}</h1>
              <p className="text-sm text-gray-600">{item.desc}</p>
              <div className="flex items-center gap-x-4">
                <p className="w-6 h-6 bg-gray-400 rounded-full">
                  {item.pic}
                </p>
                <p className="py-2 text-sm font-semibold">{item.author}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}