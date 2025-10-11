import Image from "next/image";
import Link from "next/link";
import { MdComputer } from "react-icons/md";
import { HiDownload } from "react-icons/hi";

export default function CertsSkillsPage() {
  const certs = [
    {
      title: "Red Hat Certified System Administrator (RHCSA)",
      date: "Nov 2025 (Expected)",
      image: "/redhat-logo.png",
    },
    {
      title: "Red Hat Certified Engineer (RHCE)",
      date: "Dec 2025 (Expected)",
      image: "/redhat-logo.png",
    },
  ];

  const skills = [
    "Python (Pro)",
    "Java (Pro)",
    "SQL (Familiar)",
    "Jira",
    "Confluence",
    "Atlassian",
    "Linux",
    "Munki",
    "Windows",
    "MAC",
    "Office",
    "Git",
    "Trend Micro",
    "Tailscale",
    "Slack",
    "1Password",
    "Parallels Virtual Machine",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-950 to-black">
      <section className="max-w-4xl mx-auto px-6 py-24">
        <h1 className="text-5xl font-bold mb-6 text-blue-gray-100 tracking-tight text-center">
          Certifications & Skills
        </h1>

        {/* Download Résumé Button */}
        <div className="flex justify-center mb-12">
          <Link
            href="/ChowdhuryRedwanResume.pdf"
            download
            className="flex items-center gap-2 px-5 py-2 rounded-lg border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition font-semibold"
          >
            <HiDownload className="text-xl" />
            Download Résumé
          </Link>
        </div>

        {/* Certifications */}
        <div className="space-y-10 border-l border-blue-gray-800 pl-6 mb-12">
          {certs.map((item, idx) => (
            <div
              key={idx}
              className="relative group transition-transform duration-300 hover:scale-[1.015] hover:shadow-lg hover:shadow-blue-500/10 rounded-md pl-4 pr-4 py-4 bg-gray-900/40 backdrop-blur-md"
            >
              <div className="absolute -left-[12px] top-5 w-3 h-3 bg-blue-500 rounded-full border border-blue-gray-800 animate-pulse" />
              <div className="flex items-center gap-3 mb-1">
                <Image
                  src={item.image}
                  alt={`${item.title} logo`}
                  width={24}
                  height={24}
                  className="rounded"
                />
                <h2 className="text-xl font-semibold text-blue-gray-200 group-hover:text-blue-400 transition-colors duration-200">
                  {item.title}
                </h2>
              </div>
              <p className="text-sm italic text-blue-gray-400">{item.date}</p>
            </div>
          ))}
        </div>

        {/* Skills Section */}
        <div className="bg-gray-900/40 backdrop-blur-md rounded-md p-6 shadow-md shadow-blue-500/10">
          <h2 className="text-2xl font-semibold mb-4 text-blue-gray-200">
            Technical Skills
          </h2>
          <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-blue-gray-300 list-disc list-inside">
            {skills.map((skill, idx) => (
              <li key={idx}>{skill}</li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
