import Button from "@/components/ui/Button";
export default function BuildFuture() {
    return (
       <div className="h-100">
         <section className="bg-blue-600 mb- rounded-xl text-white py-16  text-center flex flex-col items-center gap-6  mx-auto"> 
              <h3 className="text-sm md:text-sm font-light ">
            Ready to build the future?
        </h3>
            <p  className="text-sm md:text-sm font-light ">
                Join the hundreds of teams already leveraging NexusCorp to scale
                their vision.
            </p>
            <div className="flex gap-8">
              <Button variant="outline">Get Started</Button>
              <Button variant="transparent" className="text-white">Learn More</Button> 
            </div>
        </section>
       </div>
    );
}