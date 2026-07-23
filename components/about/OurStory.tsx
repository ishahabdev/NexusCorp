import Image from "next/image";

export default function OurStory() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-[auto_1fr] gap-10 items-start px-4 md:px-0">
      {/* Left side - Image */}
      <div className="w-full md:w-96 h-72 sm:h-96 relative rounded-sm overflow-hidden bg-gray-100">
        <Image
          src="/images/ourstory-pic.jpg"
          alt="Our Story"
          fill
          className="object-cover"
        />
      </div>

      {/* Right side - Content */}
      <div className="flex flex-col gap-4 lg:py-12 lg:px-4 md:py-4">
        <h5 className="text-xl font-bold text-black">
          Our Story
        </h5>
        <p className="text-gray-600 text-sm">
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
        <div className="flex justify-between py-4">
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