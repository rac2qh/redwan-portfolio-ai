import Image from "next/image";
import Link from "next/link";
import { MdComputer } from "react-icons/md";
import { FaPaintBrush } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";

export default function ExperiencePage() {
  const timeline = [
    {
      title: "Linux System Administrator – Dean and Company",
      date: "Feb 2023 – Present",
      description:
        "Due to an NDA, I cannot include details. Please click 'Download Resume' button above.",
      icon: <MdComputer size={24} className="text-blue-400" />,
    },
    {
      title: "System Administrator – Pikasso Swig",
      date: "May 2021 – Aug 2021",
      description:
        "Developed and maintained a website for a•	Resolved 500+ support tickets using Jira, while building 1,000+ Confluence documentation which streamline troubleshooting for 15+ employees, reducing repeat tickets & improving efficiency. small business with 1000+ customers alongside 3 engineers using HTML, CSS, JavaScript & GitHub, increasing revenue by 12.5x. Collaborated with a team of 3 engineers to develop & maintain a business website for 1,000+ customers using HTML, CSS, & JavaScript, contributing to a 12.5x increase in revenue. Conducted front-end unit & cross-browser testing across 100+ test cases to ensure consistent UI performance & functionality across Chrome, Firefox, & Safari.",
      icon: <FaPaintBrush size={22} className="text-pink-400" />,
    },
    {
      title: "Junior System Administrator– IT Services at UVA",
      date: "Jan 2020 – May 2020",
      description:
        "Resolved 1,500+ tickets via ServiceNow for 500+ staff, covering hardware, software, & access. Managed user access, permissions, & 2FA enrollment for new & exiting employees while maintaining internal device inventory to ensure secure provisioning & accurate asset tracking",
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
        <h1 className="text-5xl font-bold mb-6 text-white tracking-tight text-center">
          Experience
        </h1>

        {/* Download Résumé Button */}
        <div className="flex justify-center mb-12">
          <Link
            href="/ChowdhuryRedwanResume.pdf"
            download
            className="flex items-center gap-2 px-5 py-2 rounded-lg border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition font-semibold"
          >
            <HiDownload className="text-xl" />
            Download Resume
          </Link>
        </div>

        {/* Timeline */}
        <div className="space-y-10 border-l border-gray-700 pl-6">
          {timeline.map((item, idx) => (
            <div
              key={idx}
              className="relative group transition-transform duration-300 hover:scale-[1.015] hover:shadow-lg hover:shadow-blue-500/10 rounded-md pl-4 pr-4 py-4 bg-gray-900/40 backdrop-blur-md"
            >
              <div className="absolute -left-[12px] top-5 w-3 h-3 bg-blue-500 rounded-full border border-gray-700 animate-pulse" />

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
                <h2 className="text-xl font-semibold text-white group-hover:text-blue-400 transition-colors duration-200">
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
