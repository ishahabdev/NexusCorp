import Image from "next/image"
import Button from "@/components/ui/Button";
export default function SaasFuture() {
  return (
    <section className="flex flex-col justify-center items-center text-center py-20  md:px-24 lg:px-44 ">
      <p className="font-sm py-2 text-gray-700 font-bold border border-gray-300 text-sm bg-gray-100 rounded-2xl p-3 "> <span className="text-blue-600 "> NEW </span>
        V2.0 IS NOW LIVE </p>

      <h3 className="text-3xl md:text-4xl font-[780] py-4 px-10 ">
        Build the <span className="text-blue-600">future</span> of SaaS      </h3>

      <h6 className="text-gray-500 font-normal lg:px-24   ">
        Engineered for high-performance development teams. NexusCorp combines cutting-
        edge architecture with an elite developer experience to ship faster and scale further.
      </h6>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-6">
        <Button  >Deploy your project</Button>
        <Button variant="outline" className="text-black font-semibold">View Documentation</Button>
      </div>
      <img
        src="/images/dashboard.png"
        alt="dashbaord"
        className="py-10 w-full max-w-full h-auto" />
    </section>
  )
}