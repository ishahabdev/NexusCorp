"use client";
import Button from "@/components/ui/Button";
import { useRouter } from "next/navigation"

export default function NotFound() {

    const errorCodes = [
        { id: 1, title: " status_404", image: "/icons/PageNotFound2.png" },
        { id: 2, title: "log_missing", image: "/icons/PageNotFound3.png" },
        { id: 3, title: "node_unknown", image: "/icons/PageNotFound4.png" },
        { id: 4, title: "trace_null", image: "/icons/PageNotFound5.png" },
    ]


    const router = useRouter();

    function handleGoBack() {
        router.back();
    }

    return (
        <section className="text-center items-center px-2 bg-blue-50 min-h-screen flex flex-col justify-center">

            <div className="flex flex-col border rounded-2xl border-gray-300 items-center justify-center bg-white max-w-sm mx-auto text-center px-8 min-h-[40vh]">
                <img
                    src="/icons/PageNotFound1.png"
                    alt="Page not found illustration"
                    className="w-12 mb-4 bg-red-100 p-2 rounded-[50%] h-auto"
                />
                <h1 className="text-2xl font-bold py-2">Page not found</h1>
                <p className="text-gray-600 max-w-md">
                    We searched every server and database, but the page you&apos;re looking for seems to have vanished into the void.
                </p>
            </div>
            <div className="flex justify-center gap-4 mt-6">
               <Button
  onClick={handleGoBack}
 
>
  Previous page
</Button>
                <Button
                    onClick={handleGoBack}
                    variant="transparent"
                >
                    Previous page
                </Button>
            </div>

            <div className="flex justify-center flex-wrap gap-4 py-10 ">
                {
                    errorCodes.map((item) => (
                        <span key={item.id}
                            className="flex items-center gap-1 font-mono text-xs text-gray-500 bg-gray-100 border border-gray-300 px-3 py-1 rounded-md"

                        >
                            <img src={item.image} alt="ajsal" />
                            {item.title}

                        </span>
                    ))
                }
            </div>

        </section>
    )
}
