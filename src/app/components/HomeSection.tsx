"use client";

import Image from "next/image";

const HomeSection = () => {
  return (
    <section id="home" className="relative pt-45 pb-24">
      <div className="select-none w-full text-center text-white/80 mb-6">
        <div className="text-2xl md:text-4xl font-bold">
          <span>Hi! I'm </span>
          <span className="text-[#ecc28a]">DENISE IRA JUBILO</span>
        </div>
  </div>

  <div className="mt-12 md:mt-24 max-w-6xl mx-auto px-6">
    {/*avatar and headline*/}
        <div className="flex flex-col md:flex-row items-center justify-center max-w-5xl mx-auto">
          {/*greetings*/}
          <div className="relative flex justify-center md:justify-center">
            <div className="pointer-events-none absolute inset-10 md:-inset-24 rounded-full bg-linear-to-b from-[#ecc28a] via-[#ff9200]/30 to-transparent blur-3xl opacity-90"></div>
            <div className="relative">
              <Image
                src="/images/avatar_me.png"
                alt="avatar"
                width={240}
                height={240}
                className="relative"
                priority
              />
            </div>
          </div>

          {/*intro*/}
          <div className="text-center md:text-left md:ml-4">
            <p className="text-sm md:text-base mb-2 text-white/60 font-normal">
              A Developer who
            </p>

            <h1 className="text-3xl sm:text-3xl font-normal">
              Does not just make it work
            </h1>

            <p className="text-4xl sm:text-4xl font-bold text-white/60 tracking-tight leading-normal max-w-md md:max-w-lg mx-auto md:mx-0 ">
              <span className="block">
                but makes it{" "}
                <span className="relative inline-block align-baseline">
                  <span className="relative z-10 text-[#ecc28a]">right</span>
                  <span className="top-3 mb-2 pointer-events-none absolute -inset-x-20 -inset-y-20 rotate-180">
                    <Image
                      src="/images/right.gif"
                      alt="right"
                      fill
                      className="object-contain"
                      priority
                    />
                  </span>
                </span>
                .
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
