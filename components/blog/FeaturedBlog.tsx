import Button from '@/components/ui/Button';
import Image from 'next/image';
import Link from 'next/link';

export default function FeaturedBlog() {
 




    return (
        <section className="py-8">
            <div className="max-w-lg ">
                <p className="text-blue-600  text-sm py-4">RESOURCES & INSIGHTS</p>
                <h1 className="text-3xl font-bold">Engineering Excellence at NexusCorp</h1>
                <p className="text-gray-600 font-normal">
                    Deep dives into modern architecture, developer experience, and the future
                    of distributed systems.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-[3fr_1fr]  gap-4 py-6 ">
                <div className="border rounded-md grid grid-cols-1 sm:grid-cols-2 bg-white md:h-68 sm:h-64 gap-2">
                    <div className="relative w-full h-48 sm:h-56 md:h-68">
                        <Image
                            src="/images/BlogFeature.jpg"
                            alt="Blog feature image"
                            fill
                            className="object-cover rounded-sm"
                        />
                    </div>

                    <div className="space-y-2 w-full p-3 ">

                        <p className="text-xs font-semibold text-gray-600 flex items-center gap-3">
                            <span className="bg-blue-600 px-2 py-1 rounded-md text-white">
                                FEATURED
                            </span>

                            <span>
                                MAY 24, 2024
                            </span>
                        </p>


                        <h2 className="text-2xl font-bold leading-tight">
                            Mastering the App Router: A Comprehensive Guide to Next.js 14
                        </h2>


                        <p className=" text-[15px] text-gray-600 ">
                            Explore the architectural shifts required to leverage Server
                            Components, streaming, and advanced data fetching patterns
                            in the modern web.
                        </p>


                        <Link
                            href="/blog/blog-post-details"
                            className="inline-flex rounded-sm py-2.5 text-sm font-medium text-blue-600 transition-colors duration-200 hover:text-blue-700"
                        >
                            Read Article -&gt;
                        </Link>


                    </div>
                </div>

                <div className="border  rounded-md py-4 px-4 text-sm  text-gray-100 sm:w-60 md:items-center lg:w-78 bg-[#0050CB] grid grid-cols-1 gap-2 pb-14">
                    <h3 className='text-2xl text-white font-bold'>Join the Newsletter</h3>
                    <p className=' font-light'>Get the latest engineering insights delivered straight to your inbox every Tuesday.</p>
                    <input
                     className='bg-blue-600 py-2 border  focus:outline-none rounded-sm  text-white'
                     type="email" name=""
                      id="" 
                      placeholder='  email@example.com' />
                    <Button variant='outline' className='  font-black ' >Subscribe Now</Button>
                </div>
            </div>

           
         

        </section>
    );
}
