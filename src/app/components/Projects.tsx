"use client";

import { useState } from "react";
import { ExternalLink } from "lucide-react";

const Projects = () => {

  // ===== CAPSTONE PROJECT =====
  const capstone = {
    title:
      "iDrated: Enhancing Hydration with a Water Jug and App Integration for Monitoring Intake",
    desc:
      "iDrated is a final year project that integrates a smart water jug with a mobile app to provide personalized hydration goals based on demographics, activity level, urine color, and weather.",
    tech: ["Kotlin", "Java", "Firebase", "Android Studio"],
    image: "/images/capstone.gif",
    github: "https://github.com/SunshinePalahang/iDrated/tree/ira",
  };

  // ===== OTHER PROJECTS =====
  const projects = [
    {
      title: "ArchiTech Vault (ATV) - Search Engine and Filtering Results",
      desc:
        "Developed search and filter features with dynamic data from Supabase.",
      tech: ["HTML", "Tailwind CSS", "JavaScript", "Supabase", "React", "Next.js"],
      image: "/images/searchfield.png",
      github:
        "https://github.com/Aces007/atv-db/blob/apr-21-denise/src/app/searchresults/page.jsx",
      hasGif: false, // PNG ONLY
    },
    {
      title: "Coffee Shop Frontend",
      desc: "Modern web application for coffee shop operations.",
      tech: ["HTML", "CSS"],
      image: "/images/coffeeshop.gif",
      github:
        "https://github.com/JubiloDenise02/Coffee-Shop-Webpage/tree/main/shop",
      hasGif: true,
    },
    {
      title: "Quiz App",
      desc: "Interactive quiz with scoring system.",
      tech: ["HTML", "CSS", "JavaScript"],
      image: "/images/quizapp.gif",
      github:
        "https://github.com/JubiloDenise02/Web-Quiz/tree/main/quiz",
      hasGif: true,
    },
    {
      title: "PUP Kiosk System",
      desc: "Campus navigation system.",
      tech: ["HTML", "CSS"],
      image: "/images/pupkiosk.gif",
      github:
        "https://github.com/JubiloDenise02/PUP-Kiosk/tree/main/PUPKiosk",
      hasGif: true,
    },
    {
      title: "Collision Detection Game",
      desc: "Shooting game with collision mechanics.",
      tech: ["HTML", "CSS", "JavaScript"],
      image: "/images/collisiongame.gif",
      github:
        "https://github.com/JubiloDenise02/Collision-Detection_Shooting-Game",
      hasGif: true,
    },
    {
      title: "Memory Game",
      desc: "Memory matching game using computer components.",
      tech: ["HTML", "CSS", "JavaScript"],
      image: "/images/memorygame.png",
      github:
        "https://github.com/JubiloDenise02/CET3-Finals_Memory-Game",
      hasGif: false, // PNG ONLY
    },
  ];

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="projects" className="relative py-24 overflow-hidden">

      {/* Divider */}
        <div className="relative mt-6 mb-8 w-150 h-[3px] mx-auto">
          <div className="absolute inset-0 rounded-full bg-linear-to-r from-red-500 via-[#ecc28a] to-orange-400" />
          <div className="absolute inset-0 rounded-full blur-md opacity-70 bg-linear-to-r from-red-500 via-[#ecc28a] to-orange-400" />
        </div>

      {/* ===== Section Title ===== */}
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-semibold text-center mb-16">
          Featured <span className="text-[#ecc28a]">Projects</span>
        </h2>

        {/* ===== CAPSTONE CARD ===== */}
        <div className="mb-20 rounded-3xl overflow-hidden border border-[#ecc28a]/40 bg-linear-to-br from-[#3f3e45] to-[#2f2e34]">

          <div className="relative h-72">
            <img
              src={capstone.image}
              alt={capstone.title}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="p-8">
            <h3 className="text-2xl font-semibold mb-3">
              {capstone.title}
            </h3>

            <p className="text-white/60 mb-6">{capstone.desc}</p>

            <div className="flex flex-wrap gap-2 mb-6">
              {capstone.tech.map((t, i) => (
                <span
                  key={i}
                  className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10"
                >
                  {t}
                </span>
              ))}
            </div>

            <a
              href={capstone.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-[#ecc28a] text-black font-medium"
            >
              <ExternalLink size={16} />
              View Capstone Source
            </a>
          </div>
        </div>

        {/* ===== PROJECT GRID ===== */}
        <div className="grid lg:grid-cols-3 gap-10">

          {projects.map((p, i) => {

            // Static frame if GIF exists
            const staticImage = p.hasGif
              ? p.image.replace(".gif", ".png")
              : p.image;

            // Decide which image to show
            const displayImage =
              p.hasGif && hoveredIndex === i
                ? p.image
                : staticImage;

            return (
              <div
                key={i}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group rounded-3xl overflow-hidden border border-white/10 bg-linear-to-br from-[#3f3e45] to-[#2f2e34] hover:-translate-y-2 transition-all duration-300"
              >
                <div className="relative h-56">
                  <img
                    src={displayImage}
                    alt={p.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    {p.title}
                  </h3>

                  <p className="text-white/60 text-sm mb-4">
                    {p.desc}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-5">
                    {p.tech.map((t, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2 text-sm rounded-full border border-[#ecc28a]/60 text-[#ecc28a] hover:bg-[#ecc28a] hover:text-black transition"
                  >
                    <ExternalLink size={16} />
                    View Source
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* ===== GITHUB CTA ===== */}
        <div className="mt-20 text-center">
          <p className="text-white/60 mb-4">
            Want to explore more of my projects?
          </p>

          <a
            href="https://github.com/JubiloDenise02"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full border border-[#ecc28a]/60 text-[#ecc28a] hover:bg-[#ecc28a] hover:text-black transition"
          >
            <ExternalLink size={18} />
            Visit My GitHub Profile
          </a>
        </div>

      </div>
    </section>
  );
};

export default Projects;