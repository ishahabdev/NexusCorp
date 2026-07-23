export default function ArticleHero() {
    return (
        <section className="text-center items-center mx-auto py-10">
            <p className=" text-center w-fit mx-auto  bg-gray-200 text-blue-600 rounded-xl px-2  text-sm font-semibold">ENGINEERING</p>
            <h1 className="text-4xl  font-extrabold py-4  ">Deep Dive into Dynamic Routing</h1>
            <div className="flex items-center justify-center gap-4 mx-auto mt-6 py-2">
                <img
                    src="/images/BlogArticle1.jpg"
                    alt="BlogArticle1"
                    width={60}
                    height={60}
                    className="h-16 w-16 rounded-full object-cover"
                />

                <div className="text-left ">
                    <p className="font-semibold">
                        Alex Chen
                    </p>

                    <p className="text-sm text-gray-500">
                        Lead Engineer • Oct 24, 2024
                    </p>
                </div>
            </div>
            <img 
            src="/images/BlogArticle2.jpg" 
            alt="BlogArticle2"
            className="mx-auto w-3xl border-2 mt-10"
           
           
           
           />
        </section>
    )
}