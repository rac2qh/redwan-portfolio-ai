import { FaInstagram, FaFacebook, FaYoutube, FaLinkedin, FaGithub } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";
import Link from "next/link";

export default function ContactPage() {
  const contacts = [
    {
      label: "Email",
      value: "redwan.arman.chowdhury@gmail.com",
      href: "mailto:redwan.arman.chowdhury@gmail.com",
      icon: <MdEmail size={24} className="text-red-400" />,
    },
    {
      label: "Phone",
      value: "(571) 435-1907",
      href: "tel:5714351907",
      icon: <MdPhone size={24} className="text-green-400" />,
    },
    {
      label: "Instagram",
      value: "@redwan_",
      href: "https://www.instagram.com/redwan_",
      icon: <FaInstagram size={24} className="text-pink-400" />,
    },
    {
      label: "Facebook",
      value: "facebook.com/redwan",
      href: "https://www.facebook.com/Reedu1298/",
      icon: <FaFacebook size={24} className="text-blue-500" />,
    },
    {
      label: "YouTube",
      value: "youtube.com/@redwan",
      href: "https://www.youtube.com/@Redtertainment",
      icon: <FaYoutube size={24} className="text-red-600" />,
    },
    {
      label: "LinkedIn",
      value: "linkedin.com/in/redwan",
      href: "https://www.linkedin.com/in/redwan-chowdhury-b491931b2/",
      icon: <FaLinkedin size={24} className="text-blue-400" />,
    },
    {
      label: "GitHub",
      value: "github.com/rac2qh",
      href: "https://github.com/rac2qh",
      icon: <FaGithub size={24} className="text-gray-300" />,
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-950 to-black">
      <section className="max-w-4xl mx-auto px-6 py-24">
        <h1 className="text-5xl font-bold mb-12 text-blue-gray-100 tracking-tight text-center">
          Contact Me
        </h1>

        <div className="space-y-10 border-l border-blue-gray-800 pl-6">
          {contacts.map((item, idx) => (
            <div
              key={idx}
              className="relative group transition-transform duration-300 hover:scale-[1.015] hover:shadow-lg hover:shadow-blue-500/10 rounded-md pl-4 pr-4 py-4 bg-gray-900/40 backdrop-blur-md"
            >
              <div className="absolute -left-[12px] top-5 w-3 h-3 bg-blue-500 rounded-full border border-blue-gray-800 animate-pulse" />

              <div className="flex items-center gap-3 mb-1">
                <span>{item.icon}</span>
                <h2 className="text-xl font-semibold text-blue-gray-200 group-hover:text-blue-400 transition-colors duration-200">
                  {item.label}
                </h2>
              </div>

              <Link
                href={item.href}
                target="_blank"
                className="text-blue-gray-300 hover:text-blue-500 transition"
              >
                {item.value}
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}