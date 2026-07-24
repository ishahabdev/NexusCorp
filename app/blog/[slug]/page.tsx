"use client"

import { use } from "react"
import Link from "next/link"
import { notFound } from "next/navigation"
import { CalendarDays, ArrowLeft } from "lucide-react"
import { UpdatesArr } from "@/components/blog/BlogCards"

export default function BlogSlugPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = use(params)

  const post = UpdatesArr.find((item) => item.slug === slug)

  if (!post) {
    notFound()
  }

  return (
    <main className="bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-5 py-10">
        {/* Back Button */}
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-blue-600 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Blog
        </Link>

        {/* Category */}
        <span className="inline-block bg-blue-100 text-blue-700 text-sm font-medium px-4 py-1 rounded-full">
          {post.category}
        </span>

        {/* Heading */}
        <h1 className="mt-5 text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
          {post.heading}
        </h1>

        {/* Author & Date */}
        <div className="flex flex-wrap items-center justify-between gap-4 mt-8 pb-8 border-b border-gray-200">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center text-white font-semibold">
              {post.author
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </div>

            <div>
              <h3 className="font-semibold text-gray-900">
                {post.author}
              </h3>
              <p className="text-sm text-gray-500">
                Technical Writer
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <CalendarDays className="w-4 h-4" />
            {post.date}
          </div>
        </div>

        {/* Featured Image */}
        <div className="mt-10 overflow-hidden rounded-2xl shadow-md border border-gray-200">
          <img
            src={post.image}
            alt={post.heading}
            className="w-full object-cover"
          />
        </div>

        {/* Article */}
        <article className="mt-10 bg-white rounded-2xl shadow-sm border border-gray-200 p-6 md:p-10">
          <div className="prose prose-gray max-w-none">
            <p className="text-lg leading-8 text-gray-700 whitespace-pre-line">
              {post.content}
            </p>
          </div>
        </article>

        {/* Author Card */}
        <div className="mt-10 bg-white rounded-2xl border border-gray-200 p-6 flex items-center gap-4">
          <div className="w-14 h-14 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-lg">
            {post.author
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </div>

          <div>
            <h4 className="font-semibold text-gray-900">
              {post.author}
            </h4>
            <p className="text-sm text-gray-600 mt-1">
              Passionate about web development and sharing practical
              knowledge through simple, helpful articles.
            </p>
          </div>
        </div>

        {/* Back Button Bottom */}
        <div className="mt-10 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to All Blogs
          </Link>
        </div>
      </div>
    </main>
  )
}   