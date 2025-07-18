"use client";

import Link from "next/link";
import {
  FaGithub,
  FaInstagram,
  FaXTwitter,
  FaLinkedin,
  FaHeart,
} from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 mt-10">
      <div className="max-w-7xl mx-auto px-6 py-14 flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Developer Info */}
        <div className="flex flex-col md:flex-row items-center gap-6">
          {/* Developer Image */}
          <div className="flex-shrink-0">
            <Image
              src="https://ik.imagekit.io/thissidemayur/mayur_wIqV0e3zT.jpeg"
              alt="Mayur Pal"
              width={160}
              height={160}
              className="rounded-full object-cover object-center w-32 h-32 md:w-40 md:h-40 shadow-lg"
              priority
            />
          </div>

          {/* About Section */}
          <div className="text-center md:text-left space-y-3">
            <h2 className="text-2xl font-extrabold text-gray-800 tracking-tight">
              Hey, I'm Mayur 👋
            </h2>
            <p className="text-gray-600 text-sm max-w-sm leading-relaxed">
              CS undergrad passionate about backend, DevOps, cloud, and building
              SaaS products. Love clean code, scalable systems, and sharing
              knowledge.
            </p>
            <p className="text-sm text-gray-800 font-medium">
              🚀 Available for{" "}
              <span className="font-semibold text-black">Freelancing</span>,{" "}
              <span className="font-semibold text-black">Internships</span>, &{" "}
              <span className="font-semibold text-black">Collaborations</span>.
            </p>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-5 flex-wrap justify-center md:justify-end">
          <Link
            href="https://github.com/thissidemayur"
            target="_blank"
            className="text-gray-500 hover:text-black transition-transform duration-300 hover:scale-110"
          >
            <FaGithub size={30} />
          </Link>
          <Link
            href="https://instagram.com/thissidemayur"
            target="_blank"
            className="text-gray-500 hover:text-pink-600 transition-transform duration-300 hover:scale-110"
          >
            <FaInstagram size={30} />
          </Link>
          <Link
            href="https://x.com/thissidemayur"
            target="_blank"
            className="text-gray-500 hover:text-blue-600 transition-transform duration-300 hover:scale-110"
          >
            <FaXTwitter size={30} />
          </Link>
          <Link
            href="mailto:thissidemayur@email.com"
            className="text-gray-500 hover:text-green-600 transition-transform duration-300 hover:scale-110"
          >
            <MdEmail size={30} />
          </Link>
          <Link
            href="https://in.linkedin.com/in/thissidemayur"
            target="_blank"
            className="text-gray-500 hover:text-blue-800 transition-transform duration-300 hover:scale-110"
          >
            <FaLinkedin size={30} />
          </Link>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-100 py-4">
        <p className="text-center text-xs text-gray-400 flex items-center justify-center gap-1">
          © {new Date().getFullYear()} Mayur. Made with{" "}
          <FaHeart className="text-red-500" /> in India. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
