import Image from "next/image";

export default function TeamSection() {
  const CardArr = [
    {
      id: 1,
      image: "/images/team-1.png",
      name: "Elena Vance",
      role: "Chief Executive Officer",
      desc: "Driven the vision of minimalist high performance computing",
    },
    {
      id: 2,
      image: "/images/team-2.png",
      name: "Marcus Throne",
      role: "Head of Design",
      desc: "Architect of our precision-led visual identity and UX system",
    },
    {
      id: 3,
      image: "/images/team-3.png",
      name: "Sarah Chen",
      role: "Lead Engineer",
      desc: "Building the robust technical foundation of NexusCorp products",
    },
  ];

  return (
    <section className="bg-gradient-from-gray-100 to-gray-50 py-20 ">
      <div className=" mx-auto flex flex-col items-center text-center gap-12">
        <h3 className="text-xl md:text-2xl font-bold text-black">
          The Minds Behind Nexus
        </h3>
        <p className="text-gray-700">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo, eveniet.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full ">
          {CardArr.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-start text-start  from-gray-100 to-white rounded-xl  pb-8 "
            >
              <div className="w-full  h-80 relative overflow-hidden rounded-t-xl ">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover"
                />
              </div>

              <h5 className="font-bold text-black  text-lg mt-4">
                {item.name}
              </h5>
              <p className=" text-sm text-blue-400 font-bold">
                {item.role}
              </p>
              <p className=" text-sm text-neutral-700 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}