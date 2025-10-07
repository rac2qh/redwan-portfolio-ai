export default function ExperiencePage() {
  const timeline = [
    {
      title: "IT Support Engineer – Dean and Company",
      date: "Feb 2023 – Present",
      description:
        "Due to an NDA, I cannot include details. Please reach out directly for my résumé.",
    },
    {
      title: "Front End Developer – Pikasso Swig",
      date: "May 2021 – Aug 2021",
      description:
        "Developed and maintained a website for a small business with 1000+ customers alongside 3 engineers using HTML, CSS, JavaScript & GitHub, increasing revenue by 12.5x.",
    },
    {
      title: "Library Technician – IT Services at UVA",
      date: "Jan 2020 – May 2020",
      description:
        "Assisted 500+ staff across 10 libraries and resolved 1500+ tickets using the ServiceNow system. Supported inventory management of 1000+ devices with ITIL practices.",
    },
    {
      title: "Electronics Sales Associate – Walmart",
      date: "2017 – 2019",
      description:
        "Supported customers in the electronics department and collaborated with cross-store teams to maintain inventory and service quality.",
    },
  ];

  return (
    <section className="max-w-4xl mx-auto px-6 py-24">
  <h1 className="text-5xl font-bold mb-12 text-blue-gray-100 tracking-tight">
    Experience
  </h1>

  <div className="space-y-10 border-l border-blue-gray-800 pl-6">
    {timeline.map((item, idx) => (
      <div
        key={idx}
        className="relative group transition transform duration-200 hover:scale-[1.02] hover:shadow-md hover:shadow-blue-500/10 rounded-md pl-4 pr-4 py-4"
      >
        <div className="absolute -left-[12px] top-4 w-2.5 h-2.5 bg-blue-500 rounded-full border border-blue-gray-800" />
        <div className="space-y-1">
          <h2 className="text-xl font-semibold text-blue-gray-200 group-hover:text-blue-400 transition-colors duration-200">
            {item.title}
          </h2>
          <p className="text-sm italic text-blue-gray-400">{item.date}</p>
          <p className="text-blue-gray-300">{item.description}</p>
        </div>
      </div>
    ))}
  </div>
</section>


  );
}

