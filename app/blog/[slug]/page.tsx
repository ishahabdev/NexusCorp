import ArticleHero from "@/components/blog/article/ArticleHero";
import ArticleIntro from "@/components/blog/article/ArticleIntro";
import ArticleLearning from "@/components/blog/article/ArticleLearning";
import LeftSidebar from "@/components/blog/article/LeftSidebar";
import RightSidebar from "@/components/blog/article/RightSidebar";
import { notFound } from "next/navigation";

const articles = [
  {
    slug: "blog-post-details",
    
  },
];

export function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export default async function BlogArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = articles.find((item) => item.slug === slug);

  if (!article) {
    notFound();
  }

  return (
    <main className="bg-blue-50">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-8 lg:px-16">
        <ArticleHero />

        <div className="grid gap-8 lg:grid-cols-[80px_minmax(0,1fr)_280px]">
          <aside className="hidden lg:block">
            <LeftSidebar />
          </aside>

          <article className="min-w-0">
            <ArticleIntro />
          </article>

          <aside className="hidden lg:block">
            <RightSidebar />
          </aside>
        </div>
      </div>

      <ArticleLearning />
    </main>
  );
}
