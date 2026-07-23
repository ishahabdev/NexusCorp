import Button from './../../ui/Button';

export default function ArticleLearning() {
    return (
        <section className='bg-gray-50 border '>
            <div className='text-center items-center w-xl mx-auto p-8'>
                <h1 className='text-3xl font-semibold py-4'>Continue learning with NexusCorp</h1>
                <p className='text-gray-600 text-sm py-4'>Dive into our technical library for more deep dives on architecture, design
patterns, and engineering culture.</p>
                <div className='flex gap-4 text-sm justify-center items-center'>
                    <Button>Browse All Posts</Button>
                    <Button variant="outline">Engineering Careers</Button>
                </div>
            </div>
        </section>
    )
}