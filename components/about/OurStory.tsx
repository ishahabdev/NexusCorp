import Image from "next/image";

export default function OurStory() {
  return (
    <section className="bg-[#F7F9FB] border-t-2 grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-stretch px-4 sm:px-6 lg:px-10 py-10">
      {/* Left side - Image (5 columns) */}
      <div className="md:col-span-5 w-full h-72 sm:h-96 md:h-auto lg:h-100 relative rounded-sm overflow-hidden bg-gray-100">
        <Image
          src="/images/ourstory-pic.jpg"
          alt="Our Story"
          fill
          className="object-cover"
        />
      </div>

      {/* Right side - Content (7 columns) */}
      <div className="md:col-span-7 flex flex-col gap-4 px-6 mr-20">
        <h5 className="text-xl font-semibold text-black lg:mt-6 py-6">
          Our Story
        </h5>
        <p className="text-gray-500 text-sm">
          Founded in 2021, NexusCorp emerged from a simple observation:
          technical platforms had become overly complex, cluttered with
          decorative noise that hindered productivity. We set out to create a
          &quot;Precision Minimalist&quot; ecosystem where every pixel serves a
          purpose.
        </p>
        <p className="text-gray-600 text-sm">
          What started as a small team of three developers in a shared studio
          has grown into a global organization. Our journey is defined by a
          rigorous commitment to the 4px grid, functional density, and an
          elite aesthetic that respects the user&apos;s intelligence.
        </p>

        {/* Stats row */}
        <div className="flex justify-between mt-10">
          <div className="flex flex-col">
            <span className="text-2xl font-bold text-blue-600">500+</span>
            <span className="text-sm text-gray-500">Global Partners</span>
          </div>

          <div className="flex flex-col">
            <span className="text-2xl font-bold text-blue-600">24/7</span>
            <span className="text-sm text-gray-500">Technical Support</span>
          </div>
        </div>
      </div>
    </section>
  );
}