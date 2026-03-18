"use client";

const Footer = () => {
  return (
    <footer className="bg-[#2f2e34] text-white py-10 px-6 border-t border-[#ecc28a]/20">

      <div className="max-w-6xl mx-auto flex flex-col items-center justify-center text-center gap-3">

        {/* Copyright */}
        <p className="text-sm text-white/60">
          © {new Date().getFullYear()} Denise Ira Jubilo. All rights reserved.
        </p>

        {/* Tagline */}
        <p className="text-sm text-[#ecc28a] font-medium">
          Designed & Built with Passion
        </p>

      </div>

    </footer>
  );
};

export default Footer;