import { MdComputer } from "react-icons/md";
import { HiDownload } from "react-icons/hi";
import Link from "next/link";

export default function ProjectsPage() {
  const projects = [
    {
      title: "Bangla Language Teacher App",
      date: "Aug 2025 – Present",
      description:
        "Developing an interactive application to test users on Bangla vocabulary, utilizing a React front end for a dynamic experience & a Flask back end for efficient data management & API integration.",
      icon: <MdComputer size={24} className="text-blue-400" />,
    },
    {
      title: "Hometown Mentors App",
      date: "May 2022 – Sep 2022",
      description:
        "Developed an app with over 100+ downloads using Xcode for the Hometown Mentors Program.",
      icon: <MdComputer size={24} className="text-blue-400" />,
    },
    {
      title: "Wahoo-Watch Website",
      date: "Jan 2022 – May 2022",
      description:
        "Developed website on Heroku using IDBM API & Google Authentication where users view shows on Django using Agile Scrum Methodology while performing unit & integration testing.",
      icon: <MdComputer size={24} className="text-blue-400" />,
    },
    {
      title: "Habit Tracker Website",
      date: "Jan 2022 – May 2022",
      description:
        "Developed website to track habits using HTML, CSS, JavaScript, SQL Queries, AJAX, & Angular.",
      icon: <MdComputer size={24} className="text-blue-400" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-950 to-black">
      <section className="max-w-4xl mx-auto px-6 py-24">
        <h1 className="text-5xl font-bold mb-6 text-white tracking-tight text-center">
          Projects
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

        {/* Timeline */}
        <div className="space-y-10 border-l border-gray-700 pl-6">
          {projects.map((item, idx) => (
            <div
              key={idx}
              className="relative group transition-transform duration-300 hover:scale-[1.015] hover:shadow-lg hover:shadow-blue-500/10 rounded-md pl-4 pr-4 py-4 bg-gray-900/40 backdrop-blur-md"
            >
              <div className="absolute -left-[12px] top-5 w-3 h-3 bg-blue-500 rounded-full border border-gray-700 animate-pulse" />

              <div className="flex items-center gap-3 mb-1">
                {item.icon && <span>{item.icon}</span>}
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
