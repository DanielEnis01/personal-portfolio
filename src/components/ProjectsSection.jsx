import { motion, AnimatePresence } from 'motion/react'
import { useState, useEffect } from 'react'
import { ImageWithFallback } from './figma/ImageWithFallback'
import { ExternalLink, Github, ArrowUpRight, ArrowLeft, Code2, Calendar, Trophy, Youtube } from 'lucide-react'

const projects = [
  {
    title: 'Vector Fit',
    description: 'AI-powered mobile app for wardrobe organization and outfit generation using computer vision and generative AI.',
    longDescription:
      'Vector Fit is an AI-powered mobile application that helps users organize their wardrobe and generate outfit recommendations using computer vision and generative AI. Users can upload clothing items through a live camera interface, automatically categorize them with a deep learning model (ResNet-50), and receive personalized outfit suggestions based on their digital closet. The backend leverages AWS Bedrock for contextual reasoning (weather, occasion) to suggest outfits interactively, while AWS Lambda and S3 handle serverless image processing and storage.\n\nThis was developed during my time with AIM, and AIS sponsored mentor program. In this program, we developed AI based apps amongst a team of students and were judged by employees from various tech companies. Our hard work landed us on the podium for the event and greatly improved my skills with computer vision models.',
    challenges: 'One of the primary challenges was ensuring high accuracy for clothing categorization across diverse lighting conditions and backgrounds. We had to implement robust preprocessing routines and fine-tune our ResNet-50 model to handle edge cases effectively.',
    learned: 'I learned how to integrate complex computer vision models into mobile applications and navigate the full lifecycle of a machine learning project from data collection to deployment.',
    image: '/Images/vectorfit_hero.png',
    technologies: ['React Native', 'Flask', 'PyTorch', 'AWS Bedrock', 'AWS Lambda', 'DynamoDB'],
    models: 'https://cometmail-my.sharepoint.com/:f:/g/personal/dde230000_utdallas_edu/IgDLezFnLSHyTp6Aa_nLpVA7ATkw-JmVsJ_WWIYPjnHiPng?e=bJlh7Q',
    featured: true,
    year: '2025',
    video: 'https://youtube.com/shorts/eHzz-ldr1E4?si=8rNSlGKEj481VitF',
    github: 'https://github.com/AI-Mentorship/ClosetSensei'
  },
  {
    title: 'Commut.r',
    description: 'AI assistant for UTD commuters predicting traffic and parking using Nebula APIs and voice AI.',
    longDescription:
      'Commut.r is an AI assistant for UTD commuters inspired by the stressful task of navigating campus parking. Our app leverages NebulaLabs’s API to access student schedule data and calculate real-time projections on parking lot vacancy. By analyzing these variables, the system predicts peak traffic times and directs drivers to the most optimal parking lots. A voice-driven AI assistant facilitates safe navigation while the backend architecture, split into Flask and Node.js, manages complex integrations with ElevenLabs TTS, OpenWeather, and Gemini APIs. We were honored to be named the HackAi 2026 Sponsor Track Winner for this solution.',
    challenges: 'Integrating multiple real-time APIs while maintaining law-latency responses was a significant hurdle. We had to implement an efficient caching layer and optimize our Node.js middleware to ensure the voice assistant felt responsive and natural.',
    learned: 'I learned how to coordinate multi-service architectures and leverage real-time APIs to solve logistical challenges for large user bases.',
    image: '/Images/commutr_hero.png',
    technologies: ['React', 'Flask', 'Node.js', 'Gemini AI', 'Nebula API', 'Google Maps'],
    github: 'https://github.com/DanielEnis01/Commutr',
    live: 'https://commutr.org/',
    devpost: 'https://devpost.com/software/commutr-ephl5o',
    featured: true,
    year: '2026',
    achievement: 'HackAi 2026 Sponsor Track Winner',
    video: 'https://youtu.be/UCs95glatJU'
  },
  {
    title: 'FastApp',
    description: 'A job application tracking system to help users organize and manage their applications.',
    longDescription:
      'FastApp was created to solve a real problem my friends and I faced during the job application process. Keeping track of multiple applications across different platforms, remembering recruiter information, application statuses, and login credentials was becoming overwhelming. This app provides a centralized solution to organize and manage all job applications in one place. Features include status tracking, recruiter management, and multi-platform search integration.',
    challenges: 'Designing a schema that was flexible enough to handle various job board formats while remaining searchable was a key focus. I had to iterate on the Firebase structure to balance read performance with write simplicity.',
    learned: 'I learned the importance of centralized data management and how to build efficient, scalable tracking systems for high-velocity user data.',
    image: '/Images/fastapp.png',
    technologies: ['React', 'Firebase', 'JavaScript', 'CSS3'],
    github: 'https://github.com/DanielEnis01/FastApp',
    live: 'https://fastapp-8958f.web.app',
    featured: false,
    year: '2025',
  },
  {
    title: 'Princeton Quant Trading',
    description: 'A full-stack quantitative trading simulation platform for Princeton University.',
    longDescription:
      'A full-stack quantitative trading simulation platform built for Princeton University. This project involved creating a robust system for simulating trading environments, managing user accounts, and providing real-time data visualizations for quantitative analysis.',
    challenges: 'Ensuring absolute data integrity during high-frequency simulation updates was critical. We used WebSockets and optimized React state management to prevent UI lagging during intense trading bursts.',
    learned: 'I learned how to design robust, low-latency interfaces and manage complex data flows for financial simulation environments.',
    image: '/Images/pqt_logo.png',
    technologies: ['React', 'Next.JS', 'RESTful', 'Python'],
    github: 'https://github.com/tom05919/PQT-website-2025',
    live: 'https://princeton-quant.com',
    featured: true,
    year: '2025',
  },
  {
    title: 'Pinglyn',
    description: 'A full-stack chatting application written from scratch with real-time messaging and user tracking.',
    longDescription:
      'Pinglyn is a real-time chatting application built from the ground up to explore the complexities of full-stack communication systems. It uses Node.js and Socket.io for instantaneous message delivery, while MongoDB and Firebase handle user metadata and session tracking. The front end was carefully designed in [Figma](https://www.figma.com/) to ensure a premium user experience, although the project is still in active development.\n\nThis project serves as a deep dive into scalable backend architectures and the nuances of state synchronization in real-time environments.',
    challenges: 'Implementing reliable message persistence while managing high-frequency socket events was a major technical hurdle. I had to design a robust event-handling system to prevent data loss during rapid client-server interactions.',
    learned: 'I mastered the fundamentals of real-time synchronization and learned how to translate high-fidelity Figma designs into functional, reactive React components.',
    image: '/Images/pinglyn_hero.png',
    technologies: ['Node.js', 'Socket.io', 'MongoDB', 'Firebase', 'React', 'Figma'],
    github: 'https://github.com/Tbelkk/Pinglyn',
    featured: true,
    year: '2025',
  },
  {
    title: 'Personal Website',
    description: 'A modern React portfolio website showcasing my projects and skills.',
    longDescription:
      'This very portfolio, designed and built to showcase my work in the most polished way possible. It features a Nord-inspired dark design system, glassmorphism, and scroll-triggered animations. Built with React and Tailwind CSS, it prioritizes performance and responsive design.',
    challenges: 'The biggest challenge was achieving the smooth, high-performance animations while maintaining accessibility. I leveraged Framer Motion and custom CSS properties to ensure the site felt premium without sacrificing speed.',
    learned: 'I learned the fine art of motion design and how to create premium, interactive user experiences that balance aesthetics with performance.',
    image: '/Images/Screenshot 2025-02-02 213016.png',
    technologies: ['React', 'JavaScript', 'CSS3', 'Vite', 'Tailwind'],
    github: 'https://github.com/DanielEnis01/personal-portfolio',
    live: 'https://danielenis.com/',
    featured: false,
    year: '2025',
  },
  {
    title: 'OLL Solver',
    description: 'Python-based Rubik\'s Cube solver focusing on the Orientation of the Last Layer.',
    longDescription:
      'A specialized Python-based tool for Rubik\'s Cube enthusiasts, focusing specifically on solving the Orientation of the Last Layer (OLL). Built with CustomTkinter for a modern UI and compiled with PyInstaller for easy distribution.',
    challenges: 'Translating complex Rubik\'s cube notation into a programmable logic board was a fascinating difficulty. I had to map every possible OLL case to its corresponding algorithm efficiently.',
    learned: 'I learned the fundamentals of algorithmic optimization and how to build intuitive desktop interfaces for complex mathematical problems.',
    image: '/Images/rubixicon.webp',
    technologies: ['Python', 'CustomTkinter', 'PyInstaller'],
    github: 'https://github.com/DanielEnis01/Orientation-Last-Layer-Solver/releases/tag/v1.0.0',
    live: '',
    featured: false,
    year: '2024',
  },
]

function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  return (
    <motion.div
      key="project-modal"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-[400] overflow-y-auto"
      style={{ backgroundColor: '#2E3440' }}
    >
      <div
        className="fixed inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(136,192,208,0.25) 1px, transparent 0)`,
          backgroundSize: '36px 36px',
        }}
      />
      <div className="fixed top-0 left-0 right-0 z-[450] flex items-center justify-between px-6 py-4"
        style={{ backgroundColor: 'rgba(46,52,64,0.92)', backdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(136,192,208,0.12)' }}
      >
        <motion.button onClick={onClose} whileHover={{ x: -3 }} whileTap={{ scale: 0.97 }}
          className="flex items-center gap-2 transition-colors duration-200" style={{ color: '#88C0D0' }}
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="text-sm font-bold">Back to Portfolio</span>
        </motion.button>
        <span className="text-xs text-[#ECEFF4]/40 font-bold">{project.year}</span>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.5, type: 'spring', damping: 28 }}
        className="relative z-0 max-w-4xl mx-auto px-6 pt-28 pb-24"
      >
        <div className="relative rounded-2xl overflow-hidden mb-10" style={{ boxShadow: '0 20px 60px rgba(0,0,0,0.5)' }}>
          <ImageWithFallback src={project.image} alt={project.title} className="w-full h-64 md:h-96 object-cover" />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, #2E3440 0%, transparent 60%)' }} />
        </div>

        <div className="flex items-center gap-4 mb-4">
          <div className="flex items-center gap-2 text-sm" style={{ color: 'rgba(136,192,208,0.6)' }}>
            <Calendar className="w-4 h-4" />
            {project.year}
          </div>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-[#ECEFF4] mb-4">{project.title}</h1>
        <div className="w-16 h-0.5 mb-6" style={{ background: 'linear-gradient(to right, #A3BE8C, #88C0D0)' }} />

        {project.achievement && (
          <div className="flex items-center gap-2 mb-8 px-4 py-2 rounded-lg border inline-flex"
            style={{ backgroundColor: 'rgba(235,203,139,0.1)', borderColor: 'rgba(235,203,139,0.3)', color: '#EBCB8B' }}>
            <Trophy className="w-4 h-4" />
            <span className="text-sm font-bold tracking-wide uppercase">{project.achievement}</span>
          </div>
        )}

        {/* Structured Description */}
        <div className="space-y-8 mb-12">
          <div>
            <h3 className="text-[#88C0D0] text-sm uppercase tracking-widest font-bold mb-3">Project Overview</h3>
            <p className="text-[#ECEFF4]/75 leading-relaxed text-base md:text-lg whitespace-pre-line">
              {project.longDescription.split(/(\[.*?\]\(.*?\))/g).map((part, i) => {
                const match = part.match(/\[(.*?)\]\((.*?)\)/)
                if (match) {
                  return (
                    <a
                      key={i}
                      href={match[2]}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#88C0D0] hover:underline font-bold"
                    >
                      {match[1]}
                    </a>
                  )
                }
                return part
              })}
            </p>
          </div>

          {project.challenges && (
            <div className="pl-6 border-l-2 border-[#D08770]/30">
              <h3 className="text-[#D08770] text-sm uppercase tracking-widest font-bold mb-3">Challenges</h3>
              <p className="text-[#ECEFF4]/75 leading-relaxed text-base italic">
                {project.challenges}
              </p>
            </div>
          )}

          {project.learned && (
            <div className="pl-6 border-l-2 border-[#A3BE8C]/30">
              <h3 className="text-[#A3BE8C] text-sm uppercase tracking-widest font-bold mb-3">What I Learned</h3>
              <p className="text-[#ECEFF4]/75 leading-relaxed text-base">
                {project.learned}
              </p>
            </div>
          )}
        </div>

        <div className="mb-10 p-6 rounded-xl border" style={{ backgroundColor: 'rgba(59,66,82,0.7)', borderColor: 'rgba(136,192,208,0.15)' }}>
          <div className="flex items-center gap-2 mb-4">
            <Code2 className="w-4 h-4" style={{ color: '#88C0D0' }} />
            <span className="text-sm uppercase tracking-widest font-bold" style={{ color: '#88C0D0' }}>Technologies</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <motion.span key={tech} whileHover={{ scale: 1.05 }} className="px-3 py-1.5 rounded-lg text-sm border font-medium"
                style={{ backgroundColor: 'rgba(163,190,140,0.12)', color: '#A3BE8C', borderColor: 'rgba(163,190,140,0.25)' }}>
                {tech}
              </motion.span>
            ))}
          </div>
        </div>

        <div className="flex flex-wrap gap-3">
          {project.live && (
            <motion.a href={project.live} target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold transition-all duration-300 flex-1 min-w-[200px] text-[#2E3440]"
              style={{ backgroundColor: '#A3BE8C', boxShadow: '0 4px 20px rgba(163,190,140,0.3)' }}
            >
              <ArrowUpRight className="w-4 h-4" />
              Visit Live Project
            </motion.a>
          )}
          {project.video && (
            <motion.a href={project.video} target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold transition-all duration-300 border flex-1 min-w-[200px]"
              style={{ borderColor: 'rgba(191,97,106,0.3)', color: '#BF616A', backgroundColor: 'rgba(191,97,106,0.08)' }}
            >
              <Youtube className="w-4 h-4" />
              Watch Demo
            </motion.a>
          )}
          {project.models && (
            <motion.a href={project.models} target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold transition-all duration-300 border flex-1 min-w-[200px]"
              style={{ borderColor: 'rgba(180,142,173,0.3)', color: '#B48EAD', backgroundColor: 'rgba(180,142,173,0.08)' }}
            >
              <ExternalLink className="w-4 h-4" />
              Download Models
            </motion.a>
          )}
          {project.devpost && (
            <motion.a href={project.devpost} target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold transition-all duration-300 border flex-1 min-w-[200px]"
              style={{ borderColor: 'rgba(0,186,255,0.3)', color: '#00BAFF', backgroundColor: 'rgba(0,186,255,0.08)' }}
            >
              <ExternalLink className="w-4 h-4" />
              View Devpost
            </motion.a>
          )}
          {project.github && (
            <motion.a href={project.github} target="_blank" rel="noopener noreferrer" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}
              className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold transition-all duration-300 border flex-1 min-w-[200px]"
              style={{ borderColor: 'rgba(136,192,208,0.3)', color: '#88C0D0', backgroundColor: 'rgba(136,192,208,0.08)' }}
            >
              <Github className="w-4 h-4" />
              View Source
            </motion.a>
          )}
        </div>
      </motion.div>
    </motion.div>
  )
}

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(null)

  useEffect(() => {
    const handleClose = () => setSelectedProject(null)
    window.addEventListener('close-all-modals', handleClose)
    return () => window.removeEventListener('close-all-modals', handleClose)
  }, [])

  const featuredProjects = projects.filter((p) => p.featured)
  const otherProjects = projects.filter((p) => !p.featured)

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#ECEFF4] mb-6">Featured Projects</h2>
          <div className="w-24 h-1 mx-auto" style={{ background: 'linear-gradient(to right, #A3BE8C, #88C0D0)' }} />
        </motion.div>

        <div className="flex flex-wrap justify-center gap-6">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer rounded-2xl overflow-hidden border transition-all duration-400 w-full md:w-[calc(50%-12px)] lg:w-[calc(50%-12px)] max-w-[500px]"
              style={{ backgroundColor: 'rgba(59,66,82,0.7)', borderColor: 'rgba(136,192,208,0.12)' }}
            >
              <div className="relative overflow-hidden">
                <ImageWithFallback src={project.image} alt={project.title} className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/35 group-hover:bg-black/15 transition-all duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-bold" style={{ backgroundColor: '#A3BE8C', color: '#2E3440' }}>
                    <ArrowUpRight className="w-4 h-4" />
                    View Details
                  </div>
                </div>
                <div className="absolute top-4 right-4 flex space-x-2">
                  {project.github && (
                    <motion.a href={project.github} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}
                      className="w-10 h-10 rounded-full flex items-center justify-center text-[#ECEFF4] transition-all duration-300 backdrop-blur-md" style={{ backgroundColor: 'rgba(0,0,0,0.6)' }}
                    >
                      <Github className="w-5 h-5" />
                    </motion.a>
                  )}
                  {project.live && (
                    <motion.a href={project.live} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}
                      className="w-10 h-10 rounded-full flex items-center justify-center text-[#ECEFF4] transition-all duration-300 backdrop-blur-md" style={{ backgroundColor: 'rgba(0,0,0,0.6)' }}
                    >
                      <ExternalLink className="w-5 h-5" />
                    </motion.a>
                  )}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#ECEFF4] mb-3 group-hover:text-[#88C0D0] transition-colors duration-300">{project.title}</h3>
                <p className="mb-4 leading-relaxed text-sm font-medium" style={{ color: 'rgba(236,239,244,0.6)' }}>{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span key={tech} className="px-3 py-1 rounded-full text-sm border font-medium" style={{ backgroundColor: 'rgba(163,190,140,0.12)', color: '#A3BE8C', borderColor: 'rgba(163,190,140,0.25)' }}>{tech}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} viewport={{ once: true }} className="my-16">
          <h3 className="text-2xl font-bold text-[#ECEFF4] text-center mb-8">Other Projects</h3>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-6">
          {otherProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -4 }}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer rounded-2xl overflow-hidden border transition-all duration-300 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] max-w-sm"
              style={{ backgroundColor: 'rgba(59,66,82,0.55)', borderColor: 'rgba(136,192,208,0.1)' }}
            >
              <div className="relative overflow-hidden">
                <ImageWithFallback src={project.image} alt={project.title} className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-bold" style={{ backgroundColor: '#A3BE8C', color: '#2E3440' }}>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                    View Details
                  </div>
                </div>
                <div className="absolute top-3 right-3 flex space-x-2">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}
                      className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-md"
                      style={{ backgroundColor: 'rgba(0,0,0,0.65)', color: '#ECEFF4' }}
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}
                      className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-md"
                      style={{ backgroundColor: 'rgba(0,0,0,0.65)', color: '#ECEFF4' }}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
              <div className="p-4">
                <h4 className="text-[#ECEFF4] font-bold mb-2 group-hover:text-[#88C0D0] transition-colors duration-300">{project.title}</h4>
                <p className="text-sm mb-3 line-clamp-2 font-medium" style={{ color: 'rgba(236,239,244,0.55)' }}>{project.description}</p>
                <div className="flex flex-wrap gap-1">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span key={tech} className="px-2 py-1 rounded text-xs font-medium" style={{ backgroundColor: 'rgba(59,66,82,0.9)', color: 'rgba(236,239,244,0.6)', border: '1px solid rgba(136,192,208,0.15)' }}>{tech}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />}
      </AnimatePresence>
    </section>
  )
}
