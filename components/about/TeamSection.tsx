import Image from "next/image";

export default function TeamSection() {
  const CardArr = [
    {
      id: 1,
      image: "/images/team-1.jpg",
      name: "Elena Vance",
      role: "Chief Executive Officer",
      desc: "Driven the vision of minimalist high performance computing",
    },
    {
      id: 2,
      image: "/images/team-2.jpg",
      name: "Marcus Throne",
      role: "Head of Design",
      desc: "Architect of our precision-led visual identity and UX system",
    },
    {
      id: 3,
      image: "/images/team-3.jpg",
      name: "Sarah Chen",
      role: "Lead Engineer",
      desc: "Building the robust technical foundation of NexusCorp products",
    },
  ];

  return (
    <section className="bg-[#F2F4F6] border-t py-10">
      <div className="mx-auto flex flex-col items-center text-center p-6 sm:p-8 md:p-10">
        <h3 className="text-xl md:text-2xl font-bold text-black">
          The Minds Behind Nexus
        </h3>
        <p className="text-gray-700 text-sm mt-2">
          Engineers, designers, and visionaries obsessed with quality.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 w-full mt-8">
          {CardArr.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-start text-start from-gray-100 to-white rounded-xl pb-8"
            >
              <div className="w-full h-64 sm:h-72 md:h-80 lg:h-96 relative overflow-hidden rounded-t-xl">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
              </div>

              <h5 className="font-bold text-black text-lg mt-4">
                {item.name}
              </h5>
              <p className="text-sm text-blue-400 font-normal">
                {item.role}
              </p>
              <p className="text-sm text-neutral-700 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}