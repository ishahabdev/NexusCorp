import Button from "@/components/ui/Button";

export default function ReadyToShip() {
  return (
<section className="py-12 sm:py-16 md:py-20 px-4 text-left relative bg-[#2D3133] rounded-xl text-white overflow-hidden mb-6 sm:mb-10 md:mb-8">      <div className="px-4 sm:px-6 md:px-8">
        <img
          src="/icons/homeIcon5.png"
          className="absolute right-0 top-0 w-32 sm:w-48 md:w-64 opacity-10"
          alt=""
        />
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold max-w-full sm:max-w-lg">
          Ready to ship your next big idea?
        </h2>
        <p className="mt-4 text-sm sm:text-base text-blue-100 max-w-full sm:max-w-xl">
          Join over 10,000 developers building the future of the web with NexusCorp. Get started for free today.
        </p>
        <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-4">
          <Button className="px-4 py-2 sm:px-6 sm:py-2.5 text-sm sm:text-base w-full sm:w-auto">
            Get Started for Free
          </Button>    
          </div>
      </div>
    </section>
  );
}