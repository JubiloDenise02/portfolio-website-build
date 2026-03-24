"use client";

import { useState } from "react";
import { GithubIcon } from "lucide-react";

const Projects = () => {

  // CAPSTONE PROJECT
  const capstone = {
    title: "iDrated: Enhancing Hydration with a Water Jug and App Integration for Monitoring Intake",
    desc: "iDrated is a final year project that integrates a smart water jug with a mobile app to provide personalized hydration goals based on demographics, activity level, urine color, and weather. I served as a Full Stack Developer, focused on the user interface and core app functionality, including authentication, daily hydration history tracking, notification system, and troubleshooting/debugging to ensure smooth user experience.",
    tech: ["Kotlin", "Java", "Firebase", "Android Studio"],
    image: "/images/capstone.gif", 
    github: "https://github.com/SunshinePalahang/iDrated/tree/ira",
  };

  const projects = [
    {
      title: "ArchiTech Vault (ATV) - Search Engine and Filtering Results",
      desc: "I was responsible for developing the search and filter results section of the website. I implemented the front-end based on my groupmate’s UI design, created the functionalities for the search and filter features, and integrated Supabase to fetch and display data dynamically.",
      tech: ["HTML", "Tailwind CSS" , "JavaScript", "Supabase" , "React", "Next.js"],
      image: "/images/searchfield.gif",
      github: "https://github.com/Aces007/atv-db/blob/apr-21-denise/src/app/searchresults/page.jsx",
    },
    {
      title: "Coffee Shop Frontend",
      desc: "Modern web application for managing coffee shop operations and customer interactions.",
      tech: ["HTML", "CSS"],
      image: "/images/coffeeshop.gif",
      github: "https://github.com/JubiloDenise02/Coffee-Shop-Webpage/tree/main/shop",
    },
    {
      title: "Quiz App",
      desc: "Interactive quiz application with real-time scoring and leaderboard features.",
      tech: ["HTML", "CSS", "JavaScript"],
      image: "/images/quizapp.gif",
      github: "https://github.com/JubiloDenise02/Web-Quiz/tree/main/quiz",
    },
    {
      title: "Portfolio Website",
      desc: "Personal portfolio website to showcase projects and skills.",
      tech: ["Next.js", "React", "Tailwind CSS", "Vercel"],
      image: "/images/profile.gif",
      github: "https://github.com/JubiloDenise02/portfolio-website-build",
    },
    {
      title: "Collision Detection Game",
      desc: "Interactive game with collision detection mechanics like shooting game.",
      tech: ["HTML", "CSS", "JavaScript"],
      image: "/images/collisiongame.gif",
      github: "https://github.com/JubiloDenise02/portfolio-website-build",
    },
    {
      title: "Memory Game",
      desc: "A group final project: Interactive memory matching game with a twist, an image of computer hardware or software component matches with its own word.",
      tech: ["HTML", "CSS", "JavaScript"],
      image: "/images/memorygame.gif",
      github: "https://github.com/JubiloDenise02/CET3-Finals_Memory-Game",
    },
  ];

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="projects" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-40 left-1/2 -translate-x-1/2 w-150 h-150 bg-[#ecc28a]/10 blur-[160px] rounded-full" />
      </div>

      <div className="relative mt-6 mb-8 w-150 h-0.75 mx-auto">
        <div className="absolute inset-0 rounded-full bg-linear-to-r from-red-500 via-[#ecc28a] to-orange-400" />
        <div className="absolute inset-0 rounded-full blur-md opacity-70 bg-linear-to-r from-red-500 via-[#ecc28a] to-orange-400" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <h2 className="text-3xl sm:text-4xl font-semibold text-center mb-16">
          Featured <span className="text-[#ecc28a]">Projects</span>
        </h2>

        {/* Capstone Card */}
        <div className="mb-20 group relative rounded-3xl overflow-hidden border border-[#ecc28a]/40 bg-linear-to-br from-[#3f3e45] via-[#37363d] to-[#2f2e34] hover:shadow-[0_0_120px_rgba(236,194,138,0.45)] transition-all duration-500">
          <div className="absolute top-4 left-4 z-20 text-xs px-3 py-1 rounded-full bg-[#ecc28a] text-black font-semibold">
            CAPSTONE PROJECT
          </div>

          <div className="relative h-72 overflow-hidden">
            <img
              src={capstone.image}
              alt={capstone.title}
              className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-linear-to-t from-[#2f2e34] via-transparent to-transparent opacity-90" />
          </div>

          <div className="p-8">
            <h3 className="text-2xl font-semibold mb-3">{capstone.title}</h3>
            <p className="text-white/60 mb-6">{capstone.desc}</p>
            <div className="flex flex-wrap gap-2 mb-6">
              {capstone.tech.map((t, i) => (
                <span
                  key={i}
                  className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/70"
                >
                  {t}
                </span>
              ))}
            </div>

            <a
              href={capstone.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-[#ecc28a] text-black font-medium hover:shadow-[0_0_25px_rgba(236,194,138,0.8)] transition"
            >
              <GithubIcon size={16} />
              View Capstone Source
            </a>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-3 gap-12">
          {projects.map((p, i) => {

            // ✅ ONLY ADDITION (logic fix)
            const isStaticProject =
              p.title.includes("ArchiTech Vault") ||
              p.title.includes("Memory Game");

            const staticImage = p.image.replace(".gif", ".png");

            return (
              <div
                key={i}
                onMouseEnter={() => setHoveredIndex(i)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="group relative rounded-3xl overflow-hidden border border-white/10 bg-linear-to-br from-[#3f3e45] via-[#37363d] to-[#2f2e34] transition-all duration-500 hover:-translate-y-3 hover:border-[#ecc28a]/70 hover:shadow-[0_0_80px_rgba(236,194,138,0.35)]"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-700 bg-linear-to-br from-[#ecc28a]/10 via-transparent to-[#ecc28a]/5 pointer-events-none" />

                <div className="relative h-56 overflow-hidden">
                  <img
                    src={
                      isStaticProject
                        ? staticImage
                        : hoveredIndex === i
                        ? p.image
                        : staticImage
                    }
                    alt={p.title}
                    className="w-full h-full object-cover transition duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-[#2f2e34] via-transparent to-transparent opacity-80" />
                </div>

                <div className="p-7 relative z-10">
                  <h3 className="text-xl font-semibold mb-3">{p.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed mb-6">{p.desc}</p>
                  <div className="flex flex-wrap gap-2 mb-7">
                    {p.tech.map((t, idx) => (
                      <span
                        key={idx}
                        className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/70 backdrop-blur"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex">
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-6 py-2 text-sm rounded-full border border-[#ecc28a]/60 text-[#ecc28a] font-medium transition-all duration-300 hover:bg-[#ecc28a] hover:text-black hover:shadow-[0_0_25px_rgba(236,194,138,0.6)]"
                    >
                      <GithubIcon size={16} />
                      View Source
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-20 text-center">
          <p className="text-white/60 mb-4">
            Want to explore more of my projects and repositories?
          </p>
          <a
            href="https://github.com/JubiloDenise02"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full border border-[#ecc28a]/60 text-[#ecc28a] font-medium hover:bg-[#ecc28a] hover:text-black transition-all duration-300 hover:shadow-[0_0_35px_rgba(236,194,138,0.6)]"
          >
            <GithubIcon size={18} />
            Visit My GitHub Profile
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;