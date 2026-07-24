import Image from "next/image"
export default function EnggFeature() {
    return (
        <section className="grid grid-cols-1  items-center text-center px-8  bg-gray-50">
            <h3 className="text-2xl font-bold py-6 ">Precision-engineered features</h3>
            <h6 className="text-sm font-md text-gray-700">The stack you love, optimized for speed.</h6>
            <div className="grid grid-cols-1  md:grid-cols-2 gap-10 py-8 px-4">

                {/*  ----------------- {/* left side Section  ------------------*/}

                <div className="bg-white border relative border-gray-300 rounded-lg overflow-hidden py-4 px-8">
                    <div className="py-8 text-left  ">
                        <img
                            src="/icons/homeIcon.png"
                            alt="Next.js icon"
                            className="absolute  top-2 bg-gray-200 p-2 rounded-lg "
                        />
                        <h2 className="font-bold text-lg ">Next.js 15 Ready</h2>
                        <p className="text-gray-600 text-sm mt-2">
                            Leverage the latest Server Components and optimized rendering pipelines for instant page loads.
                        </p>
                    </div>
                    <div className="flex items-center justify-center">
                        <img
                            src="/images/HomePic.jpg"
                            alt="Dashboard preview"
                            className="w-full max-w-xs sm:max-h-sm md:max-h-md h-40 sm:h-44 md:h-52 rounded-sm object-cover"
                        />
                    </div>
                </div>


                {/*  ----------------- {/* Right  side Section  ------------------*/}


                <div className="px-4 bg-white  border border-gray-300 rounded-lg overflow">
                    <div className="flex flex-col gap-6 pt-6 text-left">


                        <div className="border rounded-lg p-4">
                            <div className="flex items-center gap-3">
                                <img
                                    src="/icons/homeIcon2.png"
                                    alt="Tailwind CSS icon"
                                    className="w-4 h-4"
                                />
                                <h3 className="font-semibold text-lg">Tailwind CSS 4.0</h3>
                            </div>
                            <p className="text-gray-600 text-sm mt-2">
                                Utility-first styling with zero runtime overhead. Completely
                                customizable design system tokens.
                            </p>
                        </div>

                        {/*------------- Bottom row - two cards side by side ------------*/}

<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
  <div className="border rounded-lg p-4">
    <img
      src="/icons/homeIcon3.png"
      alt="App Router icon"
      className="w-6 h-6 bg-red-100 p-1 rounded-sm"
    />
    <h3 className="font-semibold text-lg mt-2">App Router</h3>
    <p className="text-gray-600 text-sm mt-1">Native nested layouts.</p>
  </div>

  <div className="border rounded-lg p-4">
    <img
      src="/icons/homeIcon4.png"
      alt="Vercel deployment icon"
      className="w-6 h-6 bg-blue-100 p-1 rounded-md"
    />
    <h3 className="font-semibold text-lg mt-2">Vercel Ready</h3>
    <p className="text-gray-600 text-sm mt-1">One-click edge deploy.</p>
  </div>
</div>
                    </div>
                </div>
            </div>

        </section>


    )
}