// src/components/Navbar.jsx
import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import linkedInIcon from "../assets/linkedln.svg";
import fileIcon from "../assets/file.svg";
import ThemeToggleButton from "./ThemeToggleButton";

const NAV_LINKS = [
  { id: "projects", label: "Works" },
  { id: "about", label: "About me" },
  { id: "contact", label: "Contact" },
];

const navItemVariants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0 },
};

const Navbar = () => {
  // Theme is now handled globally via ThemeToggleButton & ThemeContext
  const [menuOpen, setMenuOpen] = useState(false);
  const headerRef = useRef(null);

  // lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // close menu on ESC
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Smooth scroll with offset to account for fixed header
  const handleNavClick = (e, id) => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (!target) {
      setMenuOpen(false);
      return;
    }
    const headerHeight = headerRef.current?.offsetHeight || 80;
    const top = target.getBoundingClientRect().top + window.scrollY - headerHeight - 12;
    window.scrollTo({ top, behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <>
      <header
        ref={headerRef}
        className="fixed top-0 left-0 right-0 z-50 bg-[#F9F9F9]/95 backdrop-blur-sm"
      >
        <div className="max-w-10xl mx-auto flex items-center justify-between py-6 px-6 md:px-20">
          {/* LEFT: Logo */}
          <div className="flex items-center">
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="text-[#54423D] text-2xl md:text-3xl font-bulky font-bold hover:text-[#CC4B2C] transition-colors duration-300"
            >
              iam.
            </a>
          </div>

          {/* CENTER: Desktop nav */}
          <nav className="hidden lg:flex gap-10 absolute left-1/2 transform -translate-x-1/2">
            {NAV_LINKS.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleNavClick(e, link.id)}
                className="relative font-medianMono text-[20px] text-[#54423D] hover:text-[#CC4B2C] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* RIGHT: Desktop icons OR Mobile theme + hamburger */}
          <div className="flex items-center gap-4 flex-shrink-0">
            {/* Desktop: LinkedIn & Resume & Theme (hidden on small) */}
            <div className="hidden md:flex items-center gap-6">
              <a
                href="https://www.linkedin.com/in/aliyu-mubarak-a080b0196/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-slimMono underline text-[20px] hover:text-[#CC4B2C] transition-colors"
              >
                <img src={linkedInIcon} alt="LinkedIn" className="w-6 h-6" />
                <span>LinkedIn</span>
              </a>

              <a
                href="/cv/resume.pdf"
                target="_blank"
                className="flex items-center gap-2 font-slimMono underline text-[20px] hover:text-[#CC4B2C] transition-colors"
              >
                <img src={fileIcon} alt="Resume" className="w-6 h-6" />
                <span>Resume</span>
              </a>

              <ThemeToggleButton />
            </div>

            {/* Mobile: theme toggle + hamburger */}
            <div className="flex items-center md:hidden gap-3">
              <ThemeToggleButton />

              <button
                onClick={() => setMenuOpen(true)}
                aria-label="Open menu"
                className="p-2"
              >
                <FaBars size={22} className="text-[#54423D]" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile full-width sliding menu (from left) */}
      <AnimatePresence>
        {menuOpen && (
          <motion.aside
            key="mobile-menu"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.45, ease: "easeInOut" }}
            className="fixed inset-0 z-60 bg-[#F9F9F9] flex flex-col"
            aria-modal="true"
            role="dialog"
          >
            <div className="px-6 pt-6 pb-4">
              <div className="flex items-center justify-between">
                {/* Close Button */}
                <button
                  onClick={() => setMenuOpen(false)}
                  aria-label="Close menu"
                  className="absolute top-6 right-6 text-[#54423D] hover:text-[#CC4B2C] text-3xl"
                >
                  <FaTimes size={22} className="text-[#54423D]" />
                </button>
                {/* keep brand visible on top-right */}
                <div className="text-lg font-bulky text-[#54423D]">iam.</div>
              </div>
            </div>

            {/* nav items (staggered) */}
            <motion.nav
              initial="hidden"
              animate="show"
              exit="hidden"
              variants={{
                hidden: {},
                show: { transition: { staggerChildren: 0.06, delayChildren: 0.06 } },
              }}
              className="flex flex-col items-start justify-center flex-grow px-6 gap-6 md:px-12"
            >
              {NAV_LINKS.map((link) => (
                <motion.a
                  key={link.id}
                  variants={navItemVariants}
                  href={`#${link.id}`}
                  onClick={(e) => handleNavClick(e, link.id)}
                  className="text-3xl md:text-4xl font-medianMono text-[#54423D] hover:text-[#CC4B2C] transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
            </motion.nav>

            {/* bottom group with icons (LinkedIn, Resume, Theme) */}
            <div className="px-6">
              <div className="border-t border-zinc-200 pt-6 pb-4 flex flex-col items-center gap-4">
                <div className="flex items-center gap-6">
                  <a
                    href="https://www.linkedin.com/in/aliyu-mubarak-a080b0196/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 font-slimMono text-[#54423D] hover:text-[#CC4B2C] transition-colors"
                  >
                    <img src={linkedInIcon} alt="LinkedIn" className="w-6 h-6" />
                    <span>LinkedIn</span>
                  </a>

                  <a
                    href="/cv/resume.pdf"
                    target="_blank"
                    className="flex items-center gap-2 font-slimMono text-[#54423D] hover:text-[#CC4B2C] transition-colors"
                  >
                    <img src={fileIcon} alt="Resume" className="w-6 h-6" />
                    <span>Resume</span>
                  </a>

                  <ThemeToggleButton />
                </div>

                <div className="text-center text-sm text-[#54423D] mt-3">
                  <div>I love phone calls +2347067834186</div>
                  <div>© {new Date().getFullYear()} iam. All rights reserved.</div>
                </div>
              </div>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;


// import React, { useEffect, useRef, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { FaBars, FaTimes } from "react-icons/fa";
// import linkedInIcon from "../assets/linkedln.svg";
// import fileIcon from "../assets/file.svg";
// import sunIcon from "../assets/sun.svg";
// import sunIconWhite from "../assets/sun-white.svg";
// import moonIcon from "../assets/moon-vector.svg";

// const NAV_LINKS = [
//   { id: "projects", label: "Works" },
//   { id: "about", label: "About me" },
//   { id: "contact", label: "Contact" },
// ];

// const navItemVariants = {
//   hidden: { opacity: 0, y: 18 },
//   show: { opacity: 1, y: 0 },
// };

// const Navbar = () => {
//   const [isDark, setIsDark] = useState(() => localStorage.getItem("theme") === "dark");
//   const [menuOpen, setMenuOpen] = useState(false);
//   const headerRef = useRef(null);

//   // theme persistence
//   useEffect(() => {
//     document.body.classList.toggle("theme-dark", isDark);
//     localStorage.setItem("theme", isDark ? "dark" : "light");
//   }, [isDark]);
//   const toggleTheme = () => setIsDark((v) => !v);

//   // lock body scroll when menu open
//   useEffect(() => {
//     document.body.style.overflow = menuOpen ? "hidden" : "";
//     return () => {
//       document.body.style.overflow = "";
//     };
//   }, [menuOpen]);

//   // close menu on ESC
//   useEffect(() => {
//     const onKey = (e) => {
//       if (e.key === "Escape") setMenuOpen(false);
//     };
//     window.addEventListener("keydown", onKey);
//     return () => window.removeEventListener("keydown", onKey);
//   }, []);

//   // Smooth scroll with offset to account for fixed header
//   const handleNavClick = (e, id) => {
//     e.preventDefault();
//     const target = document.getElementById(id);
//     if (!target) {
//       setMenuOpen(false);
//       return;
//     }
//     const headerHeight = headerRef.current?.offsetHeight || 80;
//     const top = target.getBoundingClientRect().top + window.scrollY - headerHeight - 12;
//     window.scrollTo({ top, behavior: "smooth" });
//     setMenuOpen(false);
//   };

//   return (
//     <>
//      {/* <header
//         ref={headerRef}
//         className="fixed top-0 left-0 right-0 z-50 grid grid-cols-3 items-center py-6 px-6 md:px-20 bg-[#F9F9F9]"
//       > */}
//       <header
//         ref={headerRef}
//         className="fixed top-0 left-0 right-0 z-50 bg-[#F9F9F9]/95 backdrop-blur-sm"
//       >
//         <div className="max-w-10xl mx-auto flex items-center justify-between py-6 px-6 md:px-20">
//           {/* LEFT: Logo */}
//           <div className="flex items-center">
//             <a
//               href="#home"
//               onClick={(e) => {
//                 e.preventDefault();
//                 window.scrollTo({ top: 0, behavior: "smooth" });
//               }}
//               className="text-[#54423D] text-2xl md:text-3xl font-bulky font-bold hover:text-[#CC4B2C] transition-colors duration-300"
//             >
//               iam.
//             </a>
//           </div>

//           {/* CENTER: Desktop nav */}
//           <nav className="hidden lg:flex gap-10 absolute left-1/2 transform -translate-x-1/2">
//             {NAV_LINKS.map((link) => (
//               <a
//                 key={link.id}
//                 href={`#${link.id}`}
//                 onClick={(e) => handleNavClick(e, link.id)}
//                 className="relative font-medianMono text-[20px] text-[#54423D] hover:text-[#CC4B2C] transition-colors"
//               >
//                 {link.label}
//                 {/* optional CSS slash effect could be added via classes if desired */}
//               </a>
//             ))}
//           </nav>

//           {/* RIGHT: Desktop icons OR Mobile theme + hamburger */}
//           <div className="flex items-center gap-4 flex-shrink-0">
//             {/* Desktop: LinkedIn & Resume & Theme (hidden on small) */}
//             <div className="hidden md:flex items-center gap-6">
//               <a
//                 href="https://www.linkedin.com/in/aliyu-mubarak-a080b0196/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="flex items-center gap-2 font-slimMono underline text-[20px] hover:text-[#CC4B2C] transition-colors"
//               >
//                 <img src={linkedInIcon} alt="LinkedIn" className="w-6 h-6" />
//                 <span>LinkedIn</span>
//               </a>

//               <a
//                 href="/cv/resume.pdf"
//                 target="_blank"
//                 className="flex items-center gap-2 font-slimMono underline text-[20px] hover:text-[#CC4B2C] transition-colors"
//               >
//                 <img src={fileIcon} alt="Resume" className="w-6 h-6" />
//                 <span>Resume</span>
//               </a>

//               <button
//                 onClick={toggleTheme}
//                 aria-label="Toggle light / dark"
//                 className="p-2 rounded-full bg-[#F3EEEC] hover:bg-[#CC4B2C] transition-colors group"
//               >
//                 <img
//                   src={isDark ? moonIcon : sunIcon}
//                   alt="Toggle theme"
//                   className="w-6 h-6 group-hover:hidden"
//                 />
//                 {!isDark && (
//                   <img
//                     src={sunIconWhite}
//                     alt="Toggle theme hover"
//                     className="w-6 h-6 hidden group-hover:block"
//                   />
//                 )}
//               </button>
//             </div>

//             {/* Mobile: theme toggle + hamburger */}
//             <div className="flex items-center md:hidden gap-3">
//               <button
//                 onClick={toggleTheme}
//                 aria-label="Toggle light / dark"
//                 className="p-2 rounded-full bg-[#F3EEEC] hover:bg-[#CC4B2C] transition-colors group"
//               >
//                 <img
//                   src={isDark ? moonIcon : sunIcon}
//                   alt="Toggle theme"
//                   className="w-6 h-6 group-hover:hidden"
//                 />
//                 {!isDark && (
//                   <img
//                     src={sunIconWhite}
//                     alt="Toggle theme hover"
//                     className="w-6 h-6 hidden group-hover:block"
//                   />
//                 )}
//               </button>

//               <button
//                 onClick={() => setMenuOpen(true)}
//                 aria-label="Open menu"
//                 className="p-2"
//               >
//                 <FaBars size={22} className="text-[#54423D]" />
//               </button>
//             </div>
//           </div>
//         </div>
//       </header>

//       {/* Mobile full-width sliding menu (from left) */}
//       <AnimatePresence>
//         {menuOpen && (
//           <motion.aside
//             key="mobile-menu"
//             initial={{ x: "100%" }}
//             animate={{ x: 0 }}
//             exit={{ x: "100%" }}
//             transition={{ duration: 0.45, ease: "easeInOut" }}
//             className="fixed inset-0 z-60 bg-[#F9F9F9] flex flex-col"
//             aria-modal="true"
//             role="dialog"
//           >
//             <div className="px-6 pt-6 pb-4">
//               <div className="flex items-center justify-between">
//                 {/* Close Button */}
//                 <button
//                   onClick={() => setMenuOpen(false)}
//                   aria-label="Close menu"
//                   className="absolute top-6 right-6 text-[#54423D] hover:text-[#CC4B2C] text-3xl"
//                 >
//                   <FaTimes size={22} className="text-[#54423D]" />
//                 </button>
//                 {/* keep brand visible on top-right */}
//                 <div className="text-lg font-bulky text-[#54423D]">iam.</div>
//               </div>
//             </div>

//             {/* nav items (staggered) */}
//             <motion.nav
//               initial="hidden"
//               animate="show"
//               exit="hidden"
//               variants={{
//                 hidden: {},
//                 show: { transition: { staggerChildren: 0.06, delayChildren: 0.06 } },
//               }}
//               className="flex flex-col items-start justify-center flex-grow px-6 gap-6 md:px-12"
//             >
//               {NAV_LINKS.map((link) => (
//                 <motion.a
//                   key={link.id}
//                   variants={navItemVariants}
//                   href={`#${link.id}`}
//                   onClick={(e) => handleNavClick(e, link.id)}
//                   className="text-3xl md:text-4xl font-medianMono text-[#54423D] hover:text-[#CC4B2C] transition-colors"
//                 >
//                   {link.label}
//                 </motion.a>
//               ))}
//             </motion.nav>

//             {/* bottom group with icons (LinkedIn, Resume, Theme) */}
//             <div className="px-6">
//               <div className="border-t border-zinc-200 pt-6 pb-4 flex flex-col items-center gap-4">
//                 <div className="flex items-center gap-6">
//                   <a
//                     href="https://www.linkedin.com/in/aliyu-mubarak-a080b0196/"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="flex items-center gap-2 font-slimMono text-[#54423D] hover:text-[#CC4B2C] transition-colors"
//                   >
//                     <img src={linkedInIcon} alt="LinkedIn" className="w-6 h-6" />
//                     <span>LinkedIn</span>
//                   </a>

//                   <a
//                     href="/cv/resume.pdf"
//                     target="_blank"
//                     className="flex items-center gap-2 font-slimMono text-[#54423D] hover:text-[#CC4B2C] transition-colors"
//                   >
//                     <img src={fileIcon} alt="Resume" className="w-6 h-6" />
//                     <span>Resume</span>
//                   </a>

//                   <button
//                     onClick={toggleTheme}
//                     aria-label="Toggle light / dark"
//                     className="p-2 rounded-full bg-[#F3EEEC] hover:bg-[#CC4B2C] transition-colors group"
//                   >
//                     <img
//                       src={isDark ? moonIcon : sunIcon}
//                       alt="Toggle theme"
//                       className="w-6 h-6 group-hover:hidden"
//                     />
//                     {!isDark && (
//                       <img
//                         src={sunIconWhite}
//                         alt="Toggle theme hover"
//                         className="w-6 h-6 hidden group-hover:block"
//                       />
//                     )}
//                   </button>
//                 </div>

//                 <div className="text-center text-sm text-[#54423D] mt-3">
//                   <div>I love phone calls +2347067834186</div>
//                   <div>© {new Date().getFullYear()} iam. All rights reserved.</div>
//                 </div>
//               </div>
//             </div>
//           </motion.aside>
//         )}
//       </AnimatePresence>
//     </>
//   );
// };

// export default Navbar;
