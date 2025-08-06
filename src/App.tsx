import React, { useState, useRef } from "react";
import {
  Menu,
  X,
  Notebook as Robot,
  Code2,
  Globe,
  Medal,
  Mail,
  Github,
  Linkedin,
  ExternalLink,
  ChevronLeft,
  ChevronRight,
  Cpu,
  Database,
  Terminal,
  Blocks,
  Cloud,
  Server,
  Brain,
  File as Mobile,
  Rocket,
} from "lucide-react";

import alif from './media/alif.png' 

import {  Instagram, Phone } from "lucide-react";

const SocialCircleButton = () => {
  const items = [
    {
      icon: <Linkedin className="w-6 h-6" />,
      href: "https://www.linkedin.com/in/azmain-mahtab-0905ba279/",
      label: "LinkedIn",
      position: "top-0 left-0",
      hoverColor: "hover:bg-blue-600",
    },
    {
      icon: <Github className="w-6 h-6" />,
      href: "https://github.com/Azmain2005",
      label: "GitHub",
      position: "top-0 right-0",
      hoverColor: "hover:bg-neutral-800",
    },
    {
      icon: <Instagram className="w-6 h-6" />,
      href: "https://www.instagram.com/azmain.mahtab.mazumder/",
      label: "Instagram",
      position: "bottom-0 left-0",
      hoverColor: "hover:bg-pink-500",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      href: "https://wa.me/01905151803",
      label: "WhatsApp",
      position: "bottom-0 right-0",
      hoverColor: "hover:bg-green-500",
    },
  ];

  return (
    <div className="relative w-40 h-40 rounded-full overflow-hidden bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 shadow-2xl transform transition-all duration-500 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)]">
      {items.map((item, index) => (
        <a
          key={index}
          href={item.href}
          target="_blank"
          className={`absolute ${item.position} p-5 w-1/2 h-1/2 flex items-center justify-center bg-black/50 backdrop-blur-sm text-white border-[1px] border-white/10 ${item.hoverColor} transition-all duration-300 group`}
          title={item.label}
        >
          <div className="group-hover:scale-125 transition-transform">{item.icon}</div>
        </a>
      ))}
    </div>
  );
};


interface Project {
  title: string;
  description: string;
  image: string;
  achievements?: string[];
  link?: string;
}

interface SkillSection {
  title: string;
  icon: React.ReactNode;
  description: string;
  projects: Project[];
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("robotics");
  const carouselRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const sectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});


  const scrollCarousel = (
    sectionTitle: string,
    direction: "left" | "right"
  ) => {
    const carousel = carouselRefs.current[sectionTitle];
    if (carousel) {
      const scrollAmount =
        direction === "left" ? -carousel.offsetWidth : carousel.offsetWidth;
      carousel.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const techStack = [
    { icon: <Cpu className="w-6 h-6" />, name: "Embedded Systems" },
    { icon: <Database className="w-6 h-6" />, name: "Data Processing" },
    { icon: <Terminal className="w-6 h-6" />, name: "Backend Dev" },
    { icon: <Blocks className="w-6 h-6" />, name: "System Design" },
    { icon: <Cloud className="w-6 h-6" />, name: "Cloud Computing" },
    { icon: <Server className="w-6 h-6" />, name: "DevOps" },
    { icon: <Brain className="w-6 h-6" />, name: "AI/ML" },
    { icon: <Mobile className="w-6 h-6" />, name: "Mobile Dev" },
    { icon: <Rocket className="w-6 h-6" />, name: "Innovation" },
  ];

  const skillsCarouselRef = useRef<HTMLDivElement | null>(null);
  const autoScrollRef = useRef<NodeJS.Timeout | null>(null);

  const startAutoScroll = () => {
    autoScrollRef.current = setInterval(() => {
      if (skillsCarouselRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } =
          skillsCarouselRef.current;
        const isAtEnd = scrollLeft + clientWidth >= scrollWidth - 5;
        skillsCarouselRef.current.scrollBy({
          left: isAtEnd ? -scrollLeft : 150,
          behavior: "smooth",
        });
      }
    }, 2000);
  };

  React.useEffect(() => {
    startAutoScroll();
    return () => {
      if (autoScrollRef.current) clearInterval(autoScrollRef.current);
    };
  }, []);

  const skillSections: SkillSection[] = [
    {
      title: "Robotics",
      icon: <Robot className="w-6 h-6" />,
      description: "Specialized in autonomous systems and robotics engineering",
      projects: [
        {
          title: "s-rank Drone",
          description:
            "this a drone mainly based on millitary, control over internet, different AI features (custom made AI features).",
          image:
            "https://i.postimg.cc/5yz2VvY8/Whats-App-Image-2025-04-12-at-8-18-50-AM.jpg",
          achievements: [
            "1st prize on Cumilla University.",
            "Patent Pending",
          ],
        },
        {
          title: "CopyCat Arm",
          description:
            "this arm can copy human hand behaviour for purpose like covid time and scientist who need to work on radio active material, they need to keep distance.",
          image:
            "https://i.postimg.cc/Fz0Nq48Z/Whats-App-Image-2025-04-12-at-8-22-14-AM.jpg",
          achievements: ["2nd prize on BAIUST university."],
        },
        {
          title: "Girls safety watch",
          description:
            "Not every girl has mobile with them so if they fall on any bad situation , they can press the watch button and a message will be sent to parents mobile with a location link.",
          image:
            "https://i.postimg.cc/m2PHZb5r/Whats-App-Image-2025-04-12-at-1-22-11-PM.jpg",
          achievements: ["1st prize on district contest.",
                         "1st prize on upazila contest.",
                         "1st prize on upazila contest. (another)"
          ],
        },
        {
          title: "P2E",
          description:
            "This is a project to generate electricity from pressure on highway roads where thousands of cars pass with full weight.",
          image:
            "https://i.postimg.cc/MZRCCRWZ/Whats-App-Image-2025-04-12-at-12-52-14-PM.jpg",
          achievements: ["1st prize on district contest."],
        },
        {
          title: "megaBOT",
          description:
            "This is a robot for a bot fighting contest.",
          image:
            "https://i.postimg.cc/yxvk1GFc/Whats-App-Image-2025-04-12-at-12-52-13-PM.jpg",
          achievements: ["2nd prize on BAIUST university."],
        },
      ],
    },
    {
      title: "App Development",
      icon: <Code2 className="w-6 h-6" />,
      description:
        "Creating innovative mobile applications for iOS and Android",
      projects: [
        {
          title: "NestPointer",
          description:
            "Its my startup, where people can find rentable houses and offices on google map. (will be more updated).",
          image:
            "https://i.postimg.cc/xjw9DtvZ/Whats-App-Image-2025-04-12-at-10-51-41-AM.jpg",
          achievements: ["Google Play Editor's Choice", "4.8 Star Rating"],
          link: "https://example.com/health-app",
        },
        {
          title: "Dighir Chap",
          description: "This is already a published app which is a food delivery app based Cumilla location.",
          image:
            "https://i.postimg.cc/JzRPdHhF/unnamed.webp",
          achievements: ["Google Play Editor's Choice", "4.6 Star Rating"],
          link: "https://play.google.com/store/apps/details?id=com.softulas.dighirchap&hl=bn&pli=1",
        },
      ],
    },
    {
      title: "Web Development",
      icon: <Globe className="w-6 h-6" />,
      description: "Building modern, responsive web applications",
      projects: [
        {
          title: "A lms system for my teacher.",
          description: "I built a simple LMS system for my teacher, so i can study there free of cost and  they can teach us.",
          image:
            "https://i.postimg.cc/kgPFk3Yp/Screenshot-2025-04-12-103742.png",
          achievements: ["i got to study free as a reward."],
        },
        {
          title: "hackathon website",
          description: "A website for a event that has many technical skill contests.",
          image:
            "https://i.postimg.cc/L5Rgx28t/Screenshot-2025-04-12-104212.png",
          achievements: ["more than thousands visitors went there."],
        },
        {
          title: "e-commerce website for electronics.",
          description: "A website for organization wic sells many robotics parts online.",
          image:
            "https://i.postimg.cc/gcN2CvSF/Screenshot-2025-04-12-104343.png",
          achievements: ["It was a client project."],
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      <nav className="fixed bottom-0 w-full glass-effect md:top-0 md:bottom-auto z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <h1 className="text-xl font-bold gradient-text">AzmainMahtab</h1>
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-300 hover:text-white"
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>

            <div className="hidden md:flex space-x-8">
              {skillSections.map((section) => (
                <button
                  key={section.title}
                  onClick={() => {
                    const ref = sectionRefs.current[section.title.toLowerCase()];
                    if (ref) {
                      ref.scrollIntoView({ behavior: "smooth", block: "start" });
                    }
                    setIsMenuOpen(false); // Optional: close menu on mobile
                  }}
                  
                  className={`flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeSection === section.title.toLowerCase()
                      ? "gradient-bg text-white shadow-lg shadow-blue-500/25"
                      : "text-gray-300 hover:text-white hover:bg-gray-800"
                  }`}
                >
                  {section.icon}
                  <span>{section.title}</span>
                </button>
              ))}
              <a
                href="#contact"
                className="flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-800 transition-all duration-300"
              >
                <Mail className="w-6 h-6" />
                <span>Contact</span>
              </a>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden glass-effect border-t border-gray-800">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {skillSections.map((section) => (
                <button
                  key={section.title}
                  onClick={() => {
                    const ref = sectionRefs.current[section.title.toLowerCase()];
                    if (ref) {
                      ref.scrollIntoView({ behavior: "smooth", block: "start" });
                    }
                    setIsMenuOpen(false); // Optional: close menu on mobile
                  }}
                  
                  className={`flex items-center space-x-2 w-full px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeSection === section.title.toLowerCase()
                      ? "gradient-bg text-white shadow-lg shadow-blue-500/25"
                      : "text-gray-300 hover:text-white hover:bg-gray-800"
                  }`}
                >
                  {section.icon}
                  <span>{section.title}</span>
                </button>
              ))}
              <a
                href="#contact"
                className="flex items-center space-x-2 w-full px-4 py-2 rounded-full text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-800 transition-all duration-300"
              >
                <Mail className="w-6 h-6" />
                <span>Contact</span>
              </a>
            </div>
          </div>
        )}
      </nav>

      <main className="max-w-7xl mx-auto px-4 pt-8 pb-24 md:pt-24 md:pb-8">
        <section className="min-h-[80vh] flex flex-col md:flex-row items-center justify-between py-12 md:py-0 relative overflow-hidden">
          <div className="absolute inset-0 hero-gradient"></div>

          <div className="w-full md:w-1/2 z-10 space-y-6 text-left">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in-up">
              Hi, I'm <span className="gradient-text">Azmain Mahtab</span>
              <br />
              <span className="text-3xl md:text-5xl lg:text-6xl text-gray-400">
                self-taught Developer
              </span>
            </h1>

            <p className="text-xl text-gray-400 max-w-2xl animate-fade-in-up animate-delay-1">
              Transforming ideas into reality through code. Specializing in
              robotics, mobile applications, and cutting-edge web development.
            </p>

            <div className="flex space-x-4 animate-fade-in-up animate-delay-2">
              <button className="px-8 py-3 rounded-full gradient-bg text-white font-medium hover:opacity-90 transition-all duration-300 shadow-lg shadow-blue-500/25">
                View Projects
              </button>
              <button className="px-8 py-3 rounded-full border border-gray-700 text-gray-300 font-medium hover:border-blue-500 hover:text-white transition-all duration-300">
                Contact Me
              </button>
            </div>
            <div className="pl-32">
            <SocialCircleButton />
            </div>
            {/* <div className="pt-12 animate-fade-in-up animate-delay-3">
              <h3 className="text-lg font-medium text-gray-400 mb-4">
                Tech Stack
              </h3>
              <div className="tech-stack-grid">
                {techStack.map((tech, index) => (
                  <div
                    key={index}
                    className="tech-icon flex items-center justify-center flex-col"
                  >
                    {tech.icon}
                    <span className="text-xs text-gray-400 mt-2">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div> */}
          </div>


          <div className="w-full md:w-1/2 flex justify-center items-center z-10 mt-12 md:mt-0">
            <div className="relative w-full max-w-lg animate-float">
              <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
              <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
              <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
              <img
                src={alif}
                alt="Developer"
                className="relative rounded-lg shadow-2xl"
              />

            </div>
          </div>
        </section>

                  {/* Skills Auto Carousel */}
                  <section className="mt-16">
            <h2 className="text-3xl font-bold gradient-text mb-6">Skills</h2>
            <div
              className="relative overflow-hidden"
              onMouseEnter={() => clearInterval(autoScrollRef.current)}
              onMouseLeave={() => startAutoScroll()}
            >
              <div
                ref={skillsCarouselRef}
                className="flex space-x-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
              >
                {techStack.map((tech, index) => (
                  <div
                    key={index}
                    className="min-w-[140px] bg-gray-800 rounded-xl p-6 flex flex-col items-center justify-center shadow-md hover:scale-105 transition-transform duration-300"
                  >
                    {tech.icon}
                    <span className="mt-4 text-sm text-gray-300 text-center">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </section>

        {skillSections.map((section) => (
          <section key={section.title} className="mb-16" ref={(el) => (sectionRefs.current[section.title.toLowerCase()] = el)}>

            <div className="flex items-center space-x-3 mb-8">
              {section.icon}
              <h2 className="text-3xl font-bold gradient-text">
                {section.title}
              </h2>
            </div>
            <p className="text-lg text-gray-400 mb-8">{section.description}</p>

            <div className="relative">
              <button
                onClick={() => scrollCarousel(section.title, "left")}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-gray-800 rounded-full p-2 shadow-lg hover:bg-gray-700 text-white"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={() => scrollCarousel(section.title, "right")}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-gray-800 rounded-full p-2 shadow-lg hover:bg-gray-700 text-white"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
              <div
                ref={(el) => (carouselRefs.current[section.title] = el)}
                className="carousel flex overflow-x-auto gap-6 pb-4"
              >
                {section.projects.map((project) => (
                  <div
                    key={project.title}
                    className="carousel-item group flex-none w-[300px] bg-gray-800 rounded-xl overflow-hidden card-hover relative"
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <h3 className="text-xl font-semibold text-white mb-2">
                        {project.title}
                      </h3>
                      <p className="text-gray-400">{project.description}</p>
                    </div>

                    {project.achievements && (
                      <div className="achievement-overlay absolute inset-0 p-6 flex flex-col justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <Medal className="w-8 h-8 text-white mb-4 mx-auto" />
                        <h4 className="text-white text-lg font-semibold mb-4">
                          Achievements
                        </h4>
                        <ul className="text-white space-y-2">
                          {project.achievements.map((achievement, index) => (
                            <li key={index} className="flex items-start">
                              <span className="mr-2">•</span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                        {project.link && (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-4 inline-flex items-center text-white hover:underline"
                          >
                            View Project{" "}
                            <ExternalLink className="w-4 h-4 ml-2" />
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}

        <section id="contact" className="mt-16">
          <h2 className="text-3xl font-bold gradient-text mb-8">
            Get in Touch
          </h2>
          <div className="bg-gray-800 rounded-xl p-8 shadow-xl">
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-300"
                >
                  Name
                </label>
                <input type="text" id="name" className="mt-1 block w-full" />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300"
                >
                  Email
                </label>
                <input type="email" id="email" className="mt-1 block w-full" />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 block w-full"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full gradient-bg text-white py-3 px-4 rounded-lg hover:opacity-90 transition-opacity duration-300 shadow-lg shadow-blue-500/25"
              >
                Send Message
              </button>
            </form>

            <div className="mt-8 flex justify-center space-x-6">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
