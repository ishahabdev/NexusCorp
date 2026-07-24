import FeaturedBlog from "@/components/blog/FeaturedBlog";
import BlogCard from "@/components/blog/BlogCards";
import BlogSecondPage from "@/components/blog/BlogSecondPage";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string | string[] }>;
}) {
  const params = await searchParams;
  const currentPage = Array.isArray(params.page) ? params.page[0] : params.page;
  const activePage = currentPage === "2" ? "2" : "1";

  if (currentPage === "2") {
    return (
      <div className="bg-[#F7F9FB] px-16 py-8">
        <BlogSecondPage />
        <BlogPagination activePage={activePage} />
      </div>
    );
  }

  return (
    <div className="bg-blue-50 px-16">
      <FeaturedBlog />
      <BlogCard />
      <BlogPagination activePage={activePage} />
    </div>
  );
}

function BlogPagination({ activePage }: { activePage: "1" | "2" }) {
  const isFirstPage = activePage === "1";

  return (
    <Pagination className="pb-8 pt-6">
      <PaginationContent>
        {!isFirstPage && (
          <PaginationItem>
            <PaginationPrevious href="/blog" />
          </PaginationItem>
        )}
        <PaginationItem>
          <PaginationLink href="/blog" isActive={isFirstPage}>
            1
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="/blog?page=2" isActive={!isFirstPage}>
            2
          </PaginationLink>
        </PaginationItem>
        {isFirstPage && (
          <PaginationItem>
            <PaginationNext href="/blog?page=2" />
          </PaginationItem>
        )}
      </PaginationContent>
    </Pagination>
  );
}
