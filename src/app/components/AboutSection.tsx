"use client";

import React, { useState } from "react";
import { Briefcase, Code2, ChevronDown } from "lucide-react";
import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";

const AboutSection = () => {
  const [openCards, setOpenCards] = useState<number[]>([]);

  const toggleCard = (index: number) => {
    setOpenCards((prev) =>
      prev.includes(index)
        ? prev.filter((i) => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section id="about" className="relative py-24">
      {/* Role and description */}
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">
          <Typewriter
            words={[
              "I'm a Software Developer.",
              "I'm a Full-Stack Developer.",
              "I'm a Software QA Engineer.",
            ]}
            typeSpeed={60}
            deleteSpeed={50}
            delaySpeed={800}
            cursor
            cursorStyle={"|"}
            loop={true}
          />
        </h2>

        {/* Divider */}
        <div className="relative mt-6 mb-8 w-150 h-[3px] mx-auto">
          <div className="absolute inset-0 rounded-full bg-linear-to-r from-red-500 via-[#ecc28a] to-orange-400" />
          <div className="absolute inset-0 rounded-full blur-md opacity-70 bg-linear-to-r from-red-500 via-[#ecc28a] to-orange-400" />
        </div>

        <p className="text-lg text-white">
          Currently, I'm seeking a role where I can contribute my skills and
          grow professionally.
        </p>

        <p className="mb-34 text-lg mt-8 text-white/50 leading-7">
          Detail-oriented and motivated Computer Engineering graduate with
          hands-on experience in quality assurance, system development, and
          software testing through industry internships and academic projects.
          Skilled in manual and automated testing, web and mobile development,
          and collaborative Agile environments. Passionate about improving
          product quality, user experience, and delivering reliable technical
          solutions. Seeking an entry-level role where I can contribute
          effectively while continuously developing my technical and
          professional skills.
        </p>
      </div>

      {/* Divider */}
      <div className="relative mt-6 mb-8 w-150 h-[3px] mx-auto">
        <div className="absolute inset-0 rounded-full bg-linear-to-r from-red-500 via-[#ecc28a] to-orange-400" />
        <div className="absolute inset-0 rounded-full blur-md opacity-70 bg-linear-to-r from-red-500 via-[#ecc28a] to-orange-400" />
      </div>

      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-semibold text-center mb-16">
          Work <span className="text-[#ecc28a]">Experience</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Card 1 */}
          <div
            onClick={() => toggleCard(1)}
            className="cursor-pointer group relative overflow-hidden rounded-2xl p-8 pb-14 border border-white/10 bg-linear-to-br from-[#3f3e45] via-[#37363d] to-[#2f2e34] transition-all duration-500 hover:border-[#ecc28a]/60 hover:shadow-[0_0_40px_rgba(236,194,138,0.35)] hover:-translate-y-1"
          >
            <div className="absolute inset-0 rounded-2xl pointer-events-none bg-linear-to-br from-[#ecc28a]/0 to-[#ecc28a]/0 group-hover:from-[#ecc28a]/5 group-hover:to-[#ecc28a]/10 transition-all duration-500" />

            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-4">
                <Code2 className="text-[#ecc28a]" size={28} />
                <h3 className="text-xl font-semibold">
                  Software Developer Intern
                </h3>
              </div>

              <p className="text-white/60 mb-2">
                Hayakawa Electronics (Phils.) Corp. • Aug-Oct 2024
              </p>

              {openCards.includes(1) && (
                <div className="mt-6 text-white/70 leading-7">
                  <div className="relative w-full h-44 rounded-xl overflow-hidden mb-6">
                    <Image
                      src="/images/intern2.jpg"
                      alt="Internship 2"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/30" />
                  </div>

                  <ul className="list-disc pl-5 space-y-2">
                    <li>Developed a Python-based facial recognition system.</li>
                    <li>Built a web-based project monitoring system.</li>
                    <li>Collaborated with cross-functional teams.</li>
                    <li>Enhanced internal production systems.</li>
                  </ul>

                  <div className="mt-8 flex justify-center">
                    <a
                      href="/pdfs/dev-intern.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="px-8 py-2.5 rounded-full border border-[#ecc28a]/60 text-[#ecc28a] font-medium transition-all duration-300 hover:bg-[#ecc28a] hover:text-black hover:shadow-[0_0_20px_rgba(236,194,138,0.6)]"
                    >
                      Learn More →
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* Dropdown Indicator */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
              <ChevronDown
                size={22}
                className={`text-[#ecc28a] transition-transform duration-300 ${
                  openCards.includes(1) ? "rotate-180" : ""
                }`}
              />
            </div>
          </div>

          {/* Card 2 */}
          <div
            onClick={() => toggleCard(0)}
            className="cursor-pointer group relative overflow-hidden rounded-2xl p-8 pb-14 border border-white/10 bg-linear-to-br from-[#3f3e45] via-[#37363d] to-[#2f2e34] transition-all duration-500 hover:border-[#ecc28a]/60 hover:shadow-[0_0_40px_rgba(236,194,138,0.35)] hover:-translate-y-1"
          >
            <div className="absolute inset-0 rounded-2xl pointer-events-none bg-linear-to-br from-[#ecc28a]/0 to-[#ecc28a]/0 group-hover:from-[#ecc28a]/5 group-hover:to-[#ecc28a]/10 transition-all duration-500" />

            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-4">
                <Briefcase className="text-[#ecc28a]" size={28} />
                <h3 className="text-xl font-semibold">Software QA Intern</h3>
              </div>

              <p className="text-white/60 mb-2">
                Achieve Without Borders, Inc. • Aug-Oct 2023
              </p>

              {openCards.includes(0) && (
                <div className="mt-6 text-white/70 leading-7">
                  <div className="relative w-full h-44 rounded-xl overflow-hidden mb-6">
                    <Image
                      src="/images/intern1.jpg"
                      alt="Internship 1"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-black/30" />
                  </div>

                  <ul className="list-disc pl-5 space-y-2">
                    <li>Worked as part of QA team for HRIS system.</li>
                    <li>Performed manual and Cypress testing.</li>
                    <li>Developed and executed test cases.</li>
                    <li>Documented bugs and recommendations.</li>
                    <li>Verified fixes with developers in Agile sprints.</li>
                  </ul>

                  <div className="mt-8 flex justify-center">
                    <a
                      href="/pdfs/qa-intern.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="px-8 py-2.5 rounded-full border border-[#ecc28a]/60 text-[#ecc28a] font-medium transition-all duration-300 hover:bg-[#ecc28a] hover:text-black hover:shadow-[0_0_20px_rgba(236,194,138,0.6)]"
                    >
                      Learn More →
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* Dropdown Indicator */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
              <ChevronDown
                size={22}
                className={`text-[#ecc28a] transition-transform duration-300 ${
                  openCards.includes(0) ? "rotate-180" : ""
                }`}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;