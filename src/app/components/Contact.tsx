"use client";
import { Github, Linkedin, Facebook } from "lucide-react";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative py-24 px-6 bg-gradient-to-b from-[#443c2d] to-[#2f2e34] text-white overflow-hidden"
    >
      {/* ===== Title ===== */}
      <h2 className="text-4xl sm:text-5xl font-bold text-center mb-6">
        Get in <span className="text-[#ecc28a]">Touch</span>
      </h2>

      {/* ===== Location ===== */}
      <p className="text-center text-[#ecc28a]/80 text-sm mb-4">
        Philippines • Available for remote work
      </p>

      {/* ===== Intro ===== */}
      <p className="text-center text-white/70 max-w-xl mx-auto mb-10">
        I’m currently open to full-time roles, freelance projects, and
        collaboration opportunities. Feel free to reach out through any of the
        platforms below.
      </p>

      {/* ===== Divider ===== */}
      <div className="w-24 h-[2px] bg-[#ecc28a] mx-auto mb-14 opacity-60" />

      {/* ===== Contact Cards ===== */}
      <div className="relative z-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto">

        {/* GitHub */}
        <a
          href="https://github.com/JubiloDenise02"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col items-center gap-2 px-6 py-6 bg-[#3f3e45]/80 backdrop-blur-md rounded-2xl shadow-lg border border-[#ecc28a]/20 text-[#ecc28a] hover:bg-[#ecc28a] hover:text-black hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(236,194,138,0.6)] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#ecc28a]"
        >
          <Github size={30} className="group-hover:scale-110 transition" />
          <span className="font-semibold text-lg">GitHub</span>
          <span className="text-xs opacity-70">View my repositories</span>
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/denise-ira-jubilo-73b09537a/"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col items-center gap-2 px-6 py-6 bg-[#3f3e45]/80 backdrop-blur-md rounded-2xl shadow-lg border border-[#ecc28a]/20 text-[#ecc28a] hover:bg-[#ecc28a] hover:text-black hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(236,194,138,0.6)] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#ecc28a]"
        >
          <Linkedin size={30} className="group-hover:scale-110 transition" />
          <span className="font-semibold text-lg">LinkedIn</span>
          <span className="text-xs opacity-70">Connect professionally</span>
        </a>

        {/* Facebook */}
        <a
          href="https://www.facebook.com/deniseira.jubilo"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex flex-col items-center gap-2 px-6 py-6 bg-[#3f3e45]/80 backdrop-blur-md rounded-2xl shadow-lg border border-[#ecc28a]/20 text-[#ecc28a] hover:bg-[#ecc28a] hover:text-black hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(236,194,138,0.6)] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#ecc28a]"
        >
          <Facebook size={30} className="group-hover:scale-110 transition" />
          <span className="font-semibold text-lg">Facebook</span>
          <span className="text-xs opacity-70">Message me on Facebook</span>
        </a>

      </div>

      {/* ===== Resume ===== */}
      <div className="text-center mt-16">
        <a
          href="/pdfs/DENISE IRA JUBILO - RESUME.pdf"
          download
          className="inline-block px-10 py-4 rounded-full border border-[#ecc28a]/50 text-[#ecc28a] font-semibold text-lg hover:bg-[#ecc28a] hover:text-black transition-all duration-300 hover:shadow-[0_0_25px_rgba(236,194,138,0.5)]"
        >
          Download Resume
        </a>
      </div>

      {/* ===== Direct Email ===== */}
      <p className="text-center text-white/50 text-sm mt-8">
        Or email me directly at{" "}
        <span className="text-[#ecc28a]">
          jubilodeniseira@gmail.com
        </span>
      </p>

      {/* ===== Closing ===== */}
      <p className="text-center text-white/40 mt-4 text-sm">
        Looking forward to connecting with you.
      </p>
    </section>
  );
};

export default Contact;