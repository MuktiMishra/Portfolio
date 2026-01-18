import React, { useState, useEffect, useRef } from 'react';
import { Github, Linkedin, Mail, Phone, MapPin, ExternalLink, Code, Briefcase, GraduationCap, Award, Sparkles, Terminal, Zap, Layers } from 'lucide-react';

export default function App() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [scrollY, setScrollY] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const sectionsRef = useRef([]);

  useEffect(() => {
    setIsLoaded(true);
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const projects = [
    {
      title: "LitUI - React UI Library",
      description: "Dark neon-themed React UI library with magnetic, shimmer, and hover effects for high-impact visuals. Plug-and-play components for vibrant, modern web apps.",
      tech: ["React", "CSS", "Animations"],
      link: "#",
      icon: <Sparkles className="w-6 h-6" />
    },
    {
      title: "Realtime Collaborative Whiteboard",
      description: "Multi-user live drawing app using Next.js, React Konva, and Yjs with CRDT-based synchronization. OAuth authentication and optimized canvas performance.",
      tech: ["Next.js", "React Konva", "Yjs", "WebSocket"],
      link: "#",
      icon: <Layers className="w-6 h-6" />
    }
  ];

  const skills = [
    { name: "Python", level: 90, category: "language" },
    { name: "JavaScript", level: 95, category: "language" },
    { name: "Java", level: 85, category: "language" },
    { name: "React.js", level: 95, category: "frontend" },
    { name: "Node.js", level: 88, category: "backend" },
    { name: "MongoDB", level: 85, category: "database" },
    { name: "Express.js", level: 87, category: "backend" },
    { name: "NLP", level: 80, category: "ai" },
    { name: "CNN", level: 82, category: "ai" },
    { name: "PPO", level: 85, category: "ai" },
    { name: "Git", level: 92, category: "tools" },
    { name: "Docker", level: 78, category: "tools" }
  ];

  const getCategoryColor = (category) => {
    const colors = {
      language: "from-orange-500 to-red-500",
      frontend: "from-blue-500 to-cyan-500",
      backend: "from-green-500 to-emerald-500",
      database: "from-purple-500 to-pink-500",
      ai: "from-yellow-500 to-orange-500",
      tools: "from-indigo-500 to-blue-500"
    };
    return colors[category] || "from-gray-500 to-gray-700";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden relative">
      {/* Animated background gradient orbs - New Color Palette */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"
          style={{
            left: `${mousePos.x / 10}px`,
            top: `${mousePos.y / 10}px`,
            transition: 'all 0.3s ease-out'
          }}
        />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-orange-600/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-emerald-600/20 rounded-full blur-3xl animate-pulse delay-700" />
      </div>

      {/* Floating particles */}
      <div className="fixed inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">
        
        {/* Hero Section with Image */}
        <section className={`min-h-screen flex items-center justify-center transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="grid md:grid-cols-2 gap-12 items-center w-full">
            {/* Left side - Image */}
            <div 
              className="relative group"
              style={{
                transform: `translateY(${scrollY * 0.1}px)`,
                transition: 'transform 0.1s ease-out'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-orange-600 blur-3xl opacity-40 group-hover:opacity-60 transition-opacity rounded-full" />
              <div className="relative w-80 h-80 mx-auto">
                {/* Placeholder for image - replace with actual image */}
                <img src="./assets/mukti.jpeg" alt="Profile" className="w-48 h-48 rounded-full border-4 border-white shadow-lg shadow-black/50" />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-orange-500 to-emerald-500 rounded-3xl rotate-6 group-hover:rotate-12 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl flex items-center justify-center border-4 border-blue-500/30 group-hover:border-orange-500/50 transition-all duration-500">
                  <div className="text-center">
                    <div className="w-64 h-64 bg-gradient-to-br from-blue-600 to-orange-600 rounded-2xl flex items-center justify-center text-6xl font-black text-white">
                      MM
                    </div>
                   {/* <p className="mt-4 text-sm text-gray-400">Upload your photo here</p> */}
                  </div>
                </div>
              </div>
              
              {/* Floating badges around image */}
              <div className="absolute -top-4 -right-4 px-4 py-2 bg-blue-600 rounded-full text-sm font-bold animate-bounce shadow-lg shadow-blue-600/50">
                AI/ML
              </div>
              <div className="absolute -bottom-4 -left-4 px-4 py-2 bg-orange-600 rounded-full text-sm font-bold animate-bounce delay-300 shadow-lg shadow-orange-600/50">
                Full Stack
              </div>
              <div className="absolute top-1/2 -right-8 px-4 py-2 bg-emerald-600 rounded-full text-sm font-bold animate-bounce delay-500 shadow-lg shadow-emerald-600/50">
                500+ DSA
              </div>
            </div>

            {/* Right side - Text content */}
            <div 
              className="space-y-8"
              style={{
                transform: `translateX(${Math.min(scrollY * 0.2, 50)}px)`,
                opacity: Math.max(1 - scrollY * 0.001, 0.8),
                transition: 'all 0.1s ease-out'
              }}
            >
              <div className="relative inline-block">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-orange-600 blur-2xl opacity-50 animate-pulse" />
                <h1 className="relative text-6xl md:text-8xl font-black bg-gradient-to-r from-blue-400 via-orange-400 to-emerald-400 bg-clip-text text-transparent animate-gradient">
                  MUKTI MISHRA
                </h1>
              </div>
              
              <div className="flex items-center gap-3 text-blue-300">
                <Terminal className="w-5 h-5 animate-pulse" />
                <p className="text-xl md:text-2xl font-mono">Full Stack Developer & AI Enthusiast</p>
                <Zap className="w-5 h-5 animate-pulse" />
              </div>

              <p className="text-gray-300 text-lg leading-relaxed">
                Passionate about building innovative solutions with modern technologies. 
                Specialized in AI/ML, Deep Reinforcement Learning, and creating beautiful user experiences.
              </p>

              <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full backdrop-blur-sm border border-blue-500/20 hover:border-blue-500/50 transition-all">
                  <MapPin className="w-4 h-4" />
                  Mathura, UP
                </div>
                <a href="tel:+916397337788" className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full backdrop-blur-sm border border-orange-500/20 hover:border-orange-500/50 hover:scale-105 transition-all">
                  <Phone className="w-4 h-4" />
                  +91 6397337788
                </a>
                <a href="mailto:muktimishra0495@gmail.com" className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full backdrop-blur-sm border border-emerald-500/20 hover:border-emerald-500/50 hover:scale-105 transition-all">
                  <Mail className="w-4 h-4" />
                  Email
                </a>
              </div>

              <div className="flex gap-6 pt-4">
                {[
                  { icon: <Linkedin />, label: "LinkedIn", href: "#", color: "blue" },
                  { icon: <Github />, label: "GitHub", href: "#", color: "orange" },
                  { icon: <Code />, label: "Medium", href: "https://medium.com/@muktimishra0495", color: "emerald", badge: "Tech Writer" },
                  { icon: <Terminal />, label: "LeetCode", href: "https://leetcode.com/muktimishra0495", color: "yellow", badge: "500+" }
                ].map((social, i) => (
                  <a
                    key={i}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative"
                  >
                    <div className={`relative p-4 bg-gradient-to-br from-${social.color}-600/20 to-${social.color}-600/20 rounded-xl backdrop-blur-sm border border-${social.color}-500/30 hover:border-${social.color}-400 hover:scale-110 hover:-translate-y-1 transition-all duration-300`}>
                      <div className={`absolute inset-0 bg-gradient-to-br from-${social.color}-600 to-${social.color}-600 rounded-xl opacity-0 group-hover:opacity-20 blur transition-opacity`} />
                      {social.icon}
                      {social.badge && (
                        <div className={`absolute -top-2 -right-2 px-2 py-1 bg-${social.color}-600 rounded-full text-xs font-bold shadow-lg animate-pulse`}>
                          {social.badge}
                        </div>
                      )}
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section 
          className="py-20"
          style={{
            transform: `translateY(${Math.max(0, 200 - scrollY * 0.3)}px)`,
            opacity: Math.min(scrollY / 500, 1)
          }}
        >
          <div className="flex items-center gap-4 mb-12">
            <GraduationCap className="w-10 h-10 text-orange-400" />
            <h2 className="text-5xl font-bold bg-gradient-to-r from-orange-400 to-blue-400 bg-clip-text text-transparent">Education</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="group p-8 bg-gradient-to-br from-blue-900/30 to-orange-900/30 rounded-2xl backdrop-blur-sm border border-blue-500/30 hover:border-orange-400 hover:scale-105 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-orange-600/20 rounded-2xl opacity-0 group-hover:opacity-100 blur transition-opacity" />
              <h3 className="text-2xl font-bold text-orange-300 mb-2">GLA University</h3>
              <p className="text-blue-300 mb-2">BTech Hons. (Computer Software Engineering)</p>
              <div className="flex justify-between text-gray-400 text-sm mb-4">
                <span>Expected Jul 2027</span>
                <span className="text-orange-400 font-bold">CPI: 8.2/10</span>
              </div>
              <p className="text-gray-400 text-sm">Data Analysis, Software Engineering, Operating Systems, AI</p>
            </div>

            <div className="group p-8 bg-gradient-to-br from-emerald-900/30 to-blue-900/30 rounded-2xl backdrop-blur-sm border border-emerald-500/30 hover:border-emerald-400 hover:scale-105 transition-all duration-300">
              <h3 className="text-2xl font-bold text-emerald-300 mb-4">KMPS</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-blue-300">Class 12th (CBSE)</span>
                  <span className="text-emerald-400 font-bold">91.8%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-blue-300">Class 10th (CBSE)</span>
                  <span className="text-emerald-400 font-bold">97%</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section 
          className="py-20"
          style={{
            transform: `translateX(${Math.max(0, 100 - scrollY * 0.15)}px)`,
            opacity: Math.min(scrollY / 800, 1)
          }}
        >
          <div className="flex items-center gap-4 mb-12">
            <Briefcase className="w-10 h-10 text-blue-400" />
            <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">Experience</h2>
          </div>

          <div className="relative pl-8 border-l-2 border-blue-500/30">
            <div className="absolute -left-3 top-0 w-6 h-6 bg-blue-500 rounded-full animate-pulse" />
            <div className="group mb-12 p-8 bg-gradient-to-br from-blue-900/40 to-emerald-900/40 rounded-2xl backdrop-blur-sm border border-blue-500/30 hover:border-blue-400 hover:translate-x-2 transition-all duration-300">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-blue-300">Deep Reinforcement Learning Intern</h3>
                  <p className="text-orange-400">IIIT, Allahabad</p>
                </div>
                <span className="text-gray-400 text-sm">May 2025 – Jul 2025</span>
              </div>
              <ul className="space-y-3 text-gray-300">
                <li className="flex gap-3">
                  <span className="text-orange-400 mt-1">▹</span>
                  <span>Developed UAV Search and Rescue simulation using PPO + Genetic Algorithms, improving efficiency by 30%</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-orange-400 mt-1">▹</span>
                  <span>Engineered multi-objective reward function, reducing episode duration by ~30%</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-orange-400 mt-1">▹</span>
                  <span>Built custom Gym environment with PyTorch and Pygame, supporting 5000+ GPU-accelerated training episodes</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section 
          className="py-20"
          style={{
            transform: `scale(${Math.min(0.9 + scrollY * 0.0001, 1)})`,
            opacity: Math.min(scrollY / 1200, 1)
          }}
        >
          <div className="flex items-center gap-4 mb-12">
            <Code className="w-10 h-10 text-emerald-400" />
            <h2 className="text-5xl font-bold bg-gradient-to-r from-emerald-400 to-orange-400 bg-clip-text text-transparent">Featured Projects</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, i) => (
              <div 
                key={i}
                className="group relative p-8 bg-gradient-to-br from-blue-900/30 to-emerald-900/30 rounded-2xl backdrop-blur-sm border border-blue-500/30 hover:border-emerald-400 hover:scale-105 transition-all duration-500"
                style={{ 
                  animationDelay: `${i * 200}ms`,
                  transform: `translateY(${scrollY * 0.05}px) rotate(${i % 2 === 0 ? -1 : 1}deg)`
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/20 to-blue-600/20 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity" />
                
                <div className="relative">
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-3 bg-gradient-to-br from-emerald-500/20 to-blue-500/20 rounded-xl">
                      {project.icon}
                    </div>
                    <a href={project.link} className="p-2 hover:scale-125 transition-transform">
                      <ExternalLink className="w-5 h-5 text-orange-400" />
                    </a>
                  </div>

                  <h3 className="text-2xl font-bold text-emerald-300 mb-3">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, j) => (
                      <span 
                        key={j}
                        className="px-3 py-1 bg-blue-500/20 border border-blue-400/30 rounded-full text-sm text-blue-300 hover:bg-blue-500/30 transition-colors"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section - Simple Design */}
        <section 
          className="py-20"
          style={{
            transform: `translateY(${Math.max(0, 150 - scrollY * 0.2)}px)`,
            opacity: Math.min(scrollY / 1500, 1)
          }}
        >
          <div className="flex items-center gap-4 mb-12">
            <Sparkles className="w-10 h-10 text-orange-400" />
            <h2 className="text-5xl font-bold bg-gradient-to-r from-orange-400 to-blue-400 bg-clip-text text-transparent">Skills & Expertise</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Languages */}
            <div className="p-6 bg-gradient-to-br from-orange-900/30 to-red-900/30 rounded-2xl backdrop-blur-sm border border-orange-500/30 hover:border-orange-400 hover:scale-105 transition-all duration-300">
              <h3 className="text-2xl font-bold text-orange-300 mb-4 flex items-center gap-2">
                <Code className="w-6 h-6" />
                Languages
              </h3>
              <div className="flex flex-wrap gap-2">
                {["Python", "JavaScript", "Java"].map((skill, i) => (
                  <span key={i} className="px-4 py-2 bg-orange-500/20 rounded-lg text-white hover:bg-orange-500/30 transition-colors">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Web Development */}
            <div className="p-6 bg-gradient-to-br from-blue-900/30 to-cyan-900/30 rounded-2xl backdrop-blur-sm border border-blue-500/30 hover:border-blue-400 hover:scale-105 transition-all duration-300">
              <h3 className="text-2xl font-bold text-blue-300 mb-4 flex items-center gap-2">
                <Layers className="w-6 h-6" />
                Web Development
              </h3>
              <div className="flex flex-wrap gap-2">
                {["React.js", "Node.js", "Express.js", "MongoDB", "HTML", "CSS"].map((skill, i) => (
                  <span key={i} className="px-4 py-2 bg-blue-500/20 rounded-lg text-white hover:bg-blue-500/30 transition-colors">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* AI & Machine Learning */}
            <div className="p-6 bg-gradient-to-br from-emerald-900/30 to-green-900/30 rounded-2xl backdrop-blur-sm border border-emerald-500/30 hover:border-emerald-400 hover:scale-105 transition-all duration-300">
              <h3 className="text-2xl font-bold text-emerald-300 mb-4 flex items-center gap-2">
                <Sparkles className="w-6 h-6" />
                AI & ML
              </h3>
              <div className="flex flex-wrap gap-2">
                {["NLP", "CNN", "PPO", "Genetic Algorithms"].map((skill, i) => (
                  <span key={i} className="px-4 py-2 bg-emerald-500/20 rounded-lg text-white hover:bg-emerald-500/30 transition-colors">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Data & Visualization */}
            <div className="p-6 bg-gradient-to-br from-purple-900/30 to-pink-900/30 rounded-2xl backdrop-blur-sm border border-purple-500/30 hover:border-purple-400 hover:scale-105 transition-all duration-300">
              <h3 className="text-2xl font-bold text-purple-300 mb-4 flex items-center gap-2">
                <Terminal className="w-6 h-6" />
                Data Handling
              </h3>
              <div className="flex flex-wrap gap-2">
                {["Pandas", "NumPy", "Matplotlib"].map((skill, i) => (
                  <span key={i} className="px-4 py-2 bg-purple-500/20 rounded-lg text-white hover:bg-purple-500/30 transition-colors">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Tools & Platforms */}
            <div className="p-6 bg-gradient-to-br from-indigo-900/30 to-blue-900/30 rounded-2xl backdrop-blur-sm border border-indigo-500/30 hover:border-indigo-400 hover:scale-105 transition-all duration-300">
              <h3 className="text-2xl font-bold text-indigo-300 mb-4 flex items-center gap-2">
                <Briefcase className="w-6 h-6" />
                Tools & Platforms
              </h3>
              <div className="flex flex-wrap gap-2">
                {["Git", "GitHub", "VSCode", "Postman", "MongoDB Atlas"].map((skill, i) => (
                  <span key={i} className="px-4 py-2 bg-indigo-500/20 rounded-lg text-white hover:bg-indigo-500/30 transition-colors">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Others */}
            <div className="p-6 bg-gradient-to-br from-yellow-900/30 to-orange-900/30 rounded-2xl backdrop-blur-sm border border-yellow-500/30 hover:border-yellow-400 hover:scale-105 transition-all duration-300">
              <h3 className="text-2xl font-bold text-yellow-300 mb-4 flex items-center gap-2">
                <Zap className="w-6 h-6" />
                Others
              </h3>
              <div className="flex flex-wrap gap-2">
                {["API Integration", "Model Deployment", "Problem Solving", "Technical Writing"].map((skill, i) => (
                  <span key={i} className="px-4 py-2 bg-yellow-500/20 rounded-lg text-white hover:bg-yellow-500/30 transition-colors">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section 
          className="py-20"
          style={{
            transform: `translateX(${Math.max(0, -100 + scrollY * 0.1)}px)`,
            opacity: Math.min(scrollY / 2000, 1)
          }}
        >
          <div className="flex items-center gap-4 mb-12">
            <Award className="w-10 h-10 text-blue-400" />
            <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">Achievements</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-gradient-to-br from-blue-900/40 to-orange-900/40 rounded-2xl backdrop-blur-sm border border-blue-500/30 hover:border-blue-400 hover:scale-105 transition-all group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-blue-600/20 rounded-2xl opacity-0 group-hover:opacity-100 blur transition-opacity" />
              <div className="relative">
                <div className="flex items-center gap-3 mb-2">
                  <div className="text-4xl font-black text-orange-400">500+</div>
                  <div className="px-3 py-1 bg-orange-600 rounded-full text-xs font-bold animate-pulse">
                    Solved
                  </div>
                </div>
                <p className="text-gray-300 mb-3">LeetCode DSA Problems</p>
                <a 
                  href="https://leetcode.com/muktimishra0495" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <span className="text-sm font-semibold">View Profile</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="p-6 bg-gradient-to-br from-emerald-900/40 to-blue-900/40 rounded-2xl backdrop-blur-sm border border-emerald-500/30 hover:border-emerald-400 hover:scale-105 transition-all">
              <div className="text-4xl font-black text-blue-400 mb-2">OSS</div>
              <p className="text-gray-300">Processing Foundation Contributor (p5.js)</p>
            </div>

            <div className="p-6 bg-gradient-to-br from-orange-900/40 to-blue-900/40 rounded-2xl backdrop-blur-sm border border-orange-500/30 hover:border-orange-400 hover:scale-105 transition-all group">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-600/20 to-orange-600/20 rounded-2xl opacity-0 group-hover:opacity-100 blur transition-opacity" />
              <div className="relative">
                <div className="flex items-center gap-3 mb-2">
                  <div className="text-4xl font-black text-emerald-400">Writer</div>
                  <div className="px-3 py-1 bg-emerald-600 rounded-full text-xs font-bold animate-pulse">
                    Tech Articles
                  </div>
                </div>
                <p className="text-gray-300 mb-3">Published Tech Articles on Medium</p>
                <a 
                  href="https://medium.com/@muktimishra0495" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-orange-400 hover:text-orange-300 transition-colors"
                >
                  <span className="text-sm font-semibold">Read My Articles</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
                <p className="text-gray-400 text-sm mt-2">Simplifying tech concepts & frontend development</p>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-12 text-center">
          <div className="inline-block p-8 bg-gradient-to-br from-blue-900/30 to-orange-900/30 rounded-2xl backdrop-blur-sm border border-blue-500/30">
            <p className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-orange-400 bg-clip-text text-transparent mb-4">
              Let's Build Something Amazing Together
            </p>
            <a 
              href="mailto:muktimishra0495@gmail.com"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-orange-600 rounded-full font-semibold hover:scale-110 hover:shadow-2xl hover:shadow-blue-500/50 transition-all duration-300"
            >
              <Mail className="w-5 h-5" />
              Get In Touch
            </a>
          </div>
        </footer>
      </div>

      <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); }
          25% { transform: translateY(-20px) translateX(10px); }
          50% { transform: translateY(-10px) translateX(-10px); }
          75% { transform: translateY(-30px) translateX(5px); }
        }

        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }

        .animate-float {
          animation: float linear infinite;
        }

        .delay-300 {
          animation-delay: 300ms;
        }

        .delay-500 {
          animation-delay: 500ms;
        }

        .delay-700 {
          animation-delay: 700ms;
        }
      `}</style>
    </div>
  );
}