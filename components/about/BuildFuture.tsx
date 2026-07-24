import Button from "@/components/ui/Button";

export default function BuildFuture() {
  return (
    <div className="px-4 sm:px-6 lg:px-10 p-10 bg-[#F7F9FB]">
      <section className="bg-blue-600 rounded-xl text-white py-12 sm:py-14 md:py-16 px-6 sm:px-8 text-center flex flex-col items-center gap-4 sm:gap-6 mx-auto">
        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold">
          Ready to build the future?
        </h3>
        <p className="text-sm sm:text-base font-light max-w-md">
          Join the hundreds of teams already leveraging NexusCorp to scale
          their vision.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 w-full sm:w-auto items-center">
          <Button variant="outline" className="w-full sm:w-auto">
            Get Started
          </Button>
          <Button variant="transparent" className="text-white w-full hover:text-blue-600 sm:w-auto">
            View Careers
          </Button>
        </div>
      </section>
    </div>
  );
}