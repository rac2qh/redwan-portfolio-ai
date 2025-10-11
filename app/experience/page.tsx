import Image from "next/image";
import { MdComputer } from "react-icons/md";
import { FaPaintBrush } from "react-icons/fa";

export default function ExperiencePage() {
  const timeline = [
    {
      title: "Technical Support Engineer – Dean and Company",
      date: "Feb 2023 – Present",
      description:
        "Due to an NDA, I cannot include details. Please download my resume below for more details.",
      icon: <MdComputer size={24} className="text-blue-400" />,
    },
    {
      title: "Front End Developer – Pikasso Swig",
      date: "May 2021 – Aug 2021",
      description:
        "Developed and maintained a website for a small business with 1000+ customers alongside 3 engineers using HTML, CSS, JavaScript & GitHub, increasing revenue by 12.5x.",
      icon: <FaPaintBrush size={22} className="text-pink-400" />,
    },
    {
      title: "Library Technician – IT Services at UVA",
      date: "Jan 2020 – May 2020",
      description:
        "Assisted 500+ staff across 10 libraries and resolved 1500+ tickets using the ServiceNow system. Supported inventory management of 1000+ devices with ITIL practices.",
      image: "/uva-logo.png",
    },
    {
      title: "Electronics Sales Associate – Walmart",
      date: "2017 – 2019",
      description:
        "Supported customers in the electronics department and collaborated with cross-store teams to maintain inventory and service quality.",
      image: "/walmart-logo.png",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-950 to-black">
      <section className="max-w-4xl mx-auto px-6 py-24">
        <h1 className="text-5xl font-bold mb-12 text-white tracking-tight text-center">
          Experience
        </h1>

        <div className="space-y-10 border-l border-gray-800 pl-6">
          {timeline.map((item, idx) => (
            <div
              key={idx}
              className="relative group transition-transform duration-300 hover:scale-[1.015] hover:shadow-lg hover:shadow-blue-500/10 rounded-md pl-4 pr-4 py-4 bg-gray-900/40 backdrop-blur-md"
            >
              {/* Animated timeline dot */}
              <div className="absolute -left-[12px] top-5 w-3 h-3 bg-blue-500 rounded-full border border-gray-800 animate-pulse" />

              <div className="flex items-center gap-3 mb-1">
                {item.icon && <span>{item.icon}</span>}
                {item.image && (
                  <Image
                    src={item.image}
                    alt={`${item.title} logo`}
                    width={24}
                    height={24}
                    className="rounded"
                  />
                )}
                <h2 className="text-xl font-semibold text-gray-200 group-hover:text-blue-400 transition-colors duration-200">
                  {item.title}
                </h2>
              </div>

              <p className="text-sm italic text-gray-400">{item.date}</p>
              <p className="text-gray-300">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
