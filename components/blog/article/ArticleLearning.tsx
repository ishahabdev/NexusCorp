import Button from './../../ui/Button';

export default function ArticleLearning() {
    return (
        <section className='bg-gray-50 border'>
            <div className='text-center items-center max-w-xl mx-auto px-4 sm:px-6 py-8 sm:py-12'>
                <h1 className='text-xl sm:text-2xl md:text-3xl font-semibold py-2 sm:py-4'>
                    Continue learning with NexusCorp
                </h1>
                <p className='text-gray-600 text-sm py-2 sm:py-4'>
                    Dive into our technical library for more deep dives on architecture, design
                    patterns, and engineering culture.
                </p>
                <div className='flex flex-col sm:flex-row gap-3 sm:gap-4 text-sm justify-center items-center mt-2'>
                    <Button className="w-full sm:w-auto">Browse All Posts</Button>
                    <Button variant="outline" className="w-full sm:w-auto">
                        Engineering Careers
                    </Button>
                </div>
            </div>
        </section>
    )
}