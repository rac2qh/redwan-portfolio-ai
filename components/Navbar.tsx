"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
// @ts-ignore
import clsx from "clsx";

const navItems = [
  { name: "Me", href: "/me" },
  { name: "Experience", href: "/experience" },
  { name: "Investments", href: "/investment-portfolio" },
  { name: "Philanthropy", href: "/philanthropy" },
  { name: "Books", href: "/books" },
  { name: "Ancestry", href: "/ancestry" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-black border-b border-yellow-500">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold text-yellow-400">Redwan</h1>
        <ul className="flex space-x-6 text-sm">
          {navItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={clsx(
                  "hover:text-white transition-colors",
                  pathname === item.href ? "text-white" : "text-yellow-400"
                )}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
