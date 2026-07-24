import Link from "next/link";
import { CiShare2 } from "react-icons/ci";
import { CiAt } from "react-icons/ci";

function Footer() {
  const footerMenu = [
    {
      title: "PRODUCT",
      links: ["Pricing", "Documentation", "API Reference"]
    },
    {
      title: "COMPANY",
      links: ["About Us", "Careers", "Privacy Policy"]
    },
    {
      title: "LEGAL",
      links: ["Term of Services", "Cookie Policy", "Contact"]
    }
  ];

  return (
    <section className="border bg-white px-4 sm:px-6 md:px-8 py-4">
      <div className="flex flex-col md:flex-row justify-between gap-8 md:gap-6">
        <div className="flex flex-col gap-2 max-w-xs">
          <p className="font-bold text-lg">NexusCorp</p>
          <p className="text-sm leading-relaxed">
            Precision minimalist infrastructure for modern teams.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8">
          {footerMenu.map((item) => (
            <div key={item.title}>
              <p className="font-semibold mb-4 text-sm sm:text-base">
                {item.title}
              </p>

              <div className="flex flex-col gap-3">
                {item.links.map((link) => (
                  <Link
                    key={link}
                    href="/"
                    className="text-gray-600 text-xs sm:text-sm"
                  >
                    {link}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 border-t-2 text-gray-700 border-gray-400 py-2 mt-6">
        <p className="text-xs sm:text-sm">© 2024 NexusCorp. All rights reserved.</p>
        <div className="flex gap-4 text-2xl sm:text-3xl">
          <CiShare2 strokeWidth={.5} />
          <CiAt strokeWidth={.5} />
        </div>
      </div>
    </section>
  );
}

export default Footer;