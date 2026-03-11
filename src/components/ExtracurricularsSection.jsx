import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { ImageWithFallback } from './figma/ImageWithFallback'
import { ArrowLeft, ExternalLink, Calendar, Tag, ArrowUpRight } from 'lucide-react'

const activities = [
  {
    id: 'sae',
    title: 'SAE Software Division',
    organization: 'UTD SAE',
    period: '2024 – Present',
    category: 'Projects',
    description: 'Member of the Society of Automotive Engineers software development team.',
    longDescription:
      'In the UTD SAE (Society of Automotive Engineers) Software Division, I work as part of a multi-disciplinary team to develop software solutions for automotive applications.',
    keypoints: [
      'Developed Azure Functions for “Star-Stream” project to process metric data from racing cars stored in Azure Event Hubs',
      'Implemented data formatting and transmission systems to send processed data to MongoDB',
      'Utilized Loki for logging functionality and monitoring system performance'
    ],
    image: '/Images/DFR-Logo.webp',
    tags: ['Software Dev', 'Automotive', 'Team Collaboration'],
    link: 'https://dallasformularacing.com/about',
    projectLink: 'https://github.com/DallasFormulaRacing/Star-Stream',
    projectLinkText: 'View Star-Stream',
    highlights: [
      'Contributed to real-time data processing modules',
      'Collaborated with hardware teams for systems integration',
      'Developed diagnostic tools for vehicle telemetry',
    ],
  },
  {
    id: 'aim',
    title: 'AIM - AI Mentorship',
    organization: 'AIS UTD',
    period: '2024 – Present',
    category: 'Projects',
    description: 'Mentee in the Artificial Intelligence Society mentorship program.',
    longDescription:
      'The AIS (Artificial Intelligence Society) AIM program has offered me a deep dive into the world of AI and machine learning.',
    keypoints: [
      'Developed and evaluated ML models for real-world datasets',
      'Implemented advanced data preprocessing and classification techniques',
      'Mastered core Python AI libraries during technical sprint'
    ],
    image: '/Images/aim.png',
    tags: ['AI/ML', 'Data Processing', 'Research'],
    link: 'https://aisutd.org/',
    projectLink: 'https://github.com/AI-Mentorship/ClosetSensei',
    projectLinkText: 'View Vector Fit',
    highlights: [
      'Implemented machine learning models for data classification',
      'Participated in research discussions on AI ethics',
      'Gained hands-on experience with Python-based AI libraries',
    ],
  },
  {
    id: 'acm',
    title: 'ACM Mentee',
    organization: 'UTD ACM',
    period: '2024 – Present',
    category: 'Leadership',
    description: 'Participating in the Association for Computing Machinery mentorship program at UTD.',
    longDescription:
      'As a mentee in the UTD ACM (Association for Computing Machinery) mentorship program, I have been actively involved in structured sessions focusing on technical growth, career development, and networking within the computer science community.',
    keypoints: [
      'Mastered technical growth strategies through expert-led labs',
      'Developed core professional networking and career planning skills',
      'Collaborated on real-world coding challenges with senior mentors'
    ],
    image: '/Images/acmutd_logo_larger_background.jpg',
    tags: ['Mentorship', 'Networking', 'Technical Growth'],
    link: 'https://acmutd.co/',
    highlights: [
      'Active participation in weekly technical workshops',
      'Collaborated with mentors on project development',
      'Expanded network within the UTD CS community',
    ],
  },
]

const categoryColors = {
  Leadership:   { text: 'text-[#88C0D0]', bg: 'bg-[#88C0D0]/15', border: 'border-[#88C0D0]/30' },
  Community:    { text: 'text-[#A3BE8C]', bg: 'bg-[#A3BE8C]/15', border: 'border-[#A3BE8C]/30' },
  Education:    { text: 'text-[#EBCB8B]', bg: 'bg-[#EBCB8B]/15', border: 'border-[#EBCB8B]/30' },
  Volunteering: { text: 'text-[#B48EAD]', bg: 'bg-[#B48EAD]/15', border: 'border-[#B48EAD]/30' },
  Creative:     { text: 'text-[#D08770]', bg: 'bg-[#D08770]/15', border: 'border-[#D08770]/30' },
  Projects:     { text: 'text-[#B48EAD]', bg: 'bg-[#B48EAD]/15', border: 'border-[#B48EAD]/30' },
}

function ActivityModal({ activity, onClose }) {
  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  const cat = categoryColors[activity.category] ?? categoryColors['Community']

  return (
    <motion.div
      key="activity-modal"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-[400] overflow-y-auto"
      style={{ backgroundColor: '#2E3440' }}
    >
      {/* Topography hint pattern */}
      <div
        className="fixed inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(136,192,208,0.25) 1px, transparent 0)`,
          backgroundSize: '36px 36px',
        }}
      />

      {/* Fixed top bar */}
      <div className="fixed top-0 left-0 right-0 z-[450] flex items-center justify-between px-6 py-4"
        style={{ backgroundColor: 'rgba(46,52,64,0.92)', backdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(136,192,208,0.12)' }}
      >
        <motion.button
          onClick={onClose}
          whileHover={{ x: -3 }}
          whileTap={{ scale: 0.97 }}
          className="flex items-center gap-2 text-[#88C0D0] hover:text-[#ECEFF4] transition-colors duration-200"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="text-sm font-bold">Back to Portfolio</span>
        </motion.button>

        <span className={`px-3 py-1 rounded-full text-xs border ${cat.bg} ${cat.text} ${cat.border}`}>
          {activity.category}
        </span>
      </div>

      {/* Page content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.5, type: 'spring', damping: 28 }}
        className="relative z-0 max-w-4xl mx-auto px-6 pt-28 pb-24"
      >
        {/* Hero image */}
        <div className="relative rounded-2xl overflow-hidden mb-10" style={{ boxShadow: '0 20px 60px rgba(0,0,0,0.5)' }}>
          <ImageWithFallback
            src={activity.image}
            alt={activity.title}
            className="w-full h-64 md:h-96 object-cover"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, #2E3440 0%, transparent 60%)' }} />
        </div>

        {/* Meta */}
        <div className="flex flex-wrap items-center gap-4 mb-4">
          <div className="flex items-center gap-2 text-[#88C0D0]/70 text-sm">
            <Calendar className="w-4 h-4" />
            {activity.period}
          </div>
          <div className="w-1 h-1 rounded-full bg-[#ECEFF4]/20" />
          <span className="text-[#ECEFF4]/60 text-sm font-medium">{activity.organization}</span>
        </div>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-[#ECEFF4] mb-4">{activity.title}</h1>
        <div className="w-16 h-0.5 mb-8" style={{ background: 'linear-gradient(to right, #A3BE8C, #88C0D0)' }} />

        {/* Simplified Description & Keypoints */}
        <div className="space-y-8 mb-12">
          <div>
            <h3 className="text-[#88C0D0] text-sm uppercase tracking-widest font-bold mb-3">Activities & Contributions</h3>
            <p className="text-[#ECEFF4]/75 leading-relaxed text-base md:text-lg whitespace-pre-line">
              {activity.longDescription}
            </p>
          </div>

          <div className="pl-6 border-l-2 border-[#A3BE8C]/30">
            <h3 className="text-[#A3BE8C] text-sm uppercase tracking-widest font-bold mb-3">What I Learned & Used</h3>
            <ul className="space-y-2 text-[#ECEFF4]/80 text-base italic">
              {activity.keypoints.map((pt, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#A3BE8C] shrink-0" />
                  {pt}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Highlights */}
        <div className="mb-10 p-6 rounded-xl border" style={{ backgroundColor: 'rgba(59,66,82,0.7)', borderColor: 'rgba(136,192,208,0.15)' }}>
          <h3 className="text-[#88C0D0] text-sm uppercase tracking-widest font-bold mb-4">Key Highlights</h3>
          <ul className="space-y-3">
            {activity.highlights.map((h, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 + i * 0.07 }}
                className="flex items-start gap-3 text-[#ECEFF4]/80 font-medium"
              >
                <span className="mt-1.5 w-2 h-2 rounded-full shrink-0" style={{ backgroundColor: '#A3BE8C' }} />
                {h}
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Tags */}
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-3">
            <Tag className="w-4 h-4 text-[#88C0D0]/60" />
            <span className="text-[#ECEFF4]/40 text-sm uppercase tracking-wider font-bold">Tags</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {activity.tags.map((tag) => (
              <span key={tag} className="px-3 py-1.5 rounded-lg text-sm text-[#88C0D0] border font-medium"
                style={{ backgroundColor: 'rgba(136,192,208,0.1)', borderColor: 'rgba(136,192,208,0.2)' }}>
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="flex flex-wrap gap-4">
          {activity.projectLink && (
            <motion.a
              href={activity.projectLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-8 py-3 rounded-xl text-[#ECEFF4] font-bold transition-all duration-300 border"
              style={{ backgroundColor: 'rgba(59,66,82,0.8)', borderColor: 'rgba(136,192,208,0.2)' }}
            >
              <ExternalLink className="w-4 h-4" />
              {activity.projectLinkText || 'View Project'}
            </motion.a>
          )}
          {activity.link && (
            <motion.a
              href={activity.link}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-8 py-3 rounded-xl text-[#2E3440] font-bold transition-all duration-300"
              style={{ backgroundColor: '#A3BE8C', boxShadow: '0 4px 20px rgba(163,190,140,0.3)' }}
            >
              <ArrowUpRight className="w-4 h-4" />
              Learn More
            </motion.a>
          )}
        </div>
      </motion.div>
    </motion.div>
  )
}

export function ExtracurricularsSection() {
  const [selected, setSelected] = useState(null)

  useEffect(() => {
    const handleClose = () => setSelected(null)
    window.addEventListener('close-all-modals', handleClose)
    return () => window.removeEventListener('close-all-modals', handleClose)
  }, [])

  return (
    <section id="extracurriculars" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#ECEFF4] mb-6">Extracurriculars</h2>
          <div className="w-24 h-1 mx-auto" style={{ background: 'linear-gradient(to right, #A3BE8C, #88C0D0)' }} />
        </motion.div>

        <div className="flex flex-wrap justify-center gap-6">
          {activities.map((activity, index) => {
            const cat = categoryColors[activity.category] ?? categoryColors['Community']
            return (
              <motion.div
                key={activity.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                onClick={() => setSelected(activity)}
                className="group cursor-pointer rounded-2xl overflow-hidden border transition-all duration-400 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] max-w-sm"
                style={{
                  backgroundColor: 'rgba(59,66,82,0.7)',
                  borderColor: 'rgba(136,192,208,0.12)',
                }}
              >
                {/* Image */}
                <div className="relative overflow-hidden h-44">
                  <ImageWithFallback
                    src={activity.image}
                    alt={activity.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-108"
                    style={{ transform: 'scale(1)' }}
                  />
                  <div className="absolute inset-0 transition-opacity duration-300"
                    style={{ background: 'linear-gradient(to top, rgba(59,66,82,0.9) 0%, rgba(46,52,64,0.2) 100%)' }} />

                  {/* Hover overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex items-center gap-2 px-4 py-2 rounded-full text-[#2E3440] text-sm font-bold"
                      style={{ backgroundColor: '#A3BE8C' }}>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                      View Details
                    </div>
                  </div>

                  {/* Category badge */}
                  <div className="absolute top-3 left-3">
                    <span className={`px-2.5 py-1 rounded-full text-xs border ${cat.bg} ${cat.text} ${cat.border} backdrop-blur-sm font-bold`}>
                      {activity.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="w-3.5 h-3.5 text-[#88C0D0]/50" />
                    <span className="text-[#ECEFF4]/40 text-xs font-medium">{activity.period}</span>
                  </div>
                  <h3 className="text-[#ECEFF4] font-bold mb-1 group-hover:text-[#88C0D0] transition-colors duration-300">
                    {activity.title}
                  </h3>
                  <p className="text-[#ECEFF4]/50 text-xs mb-3 font-medium">{activity.organization}</p>
                  <p className="text-[#ECEFF4]/60 text-sm line-clamp-2 mb-4 font-medium">{activity.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {activity.tags.slice(0, 3).map((tag) => (
                      <span key={tag} className="px-2 py-0.5 rounded text-xs font-medium"
                        style={{ backgroundColor: 'rgba(136,192,208,0.12)', color: 'rgba(136,192,208,0.8)' }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>

      <AnimatePresence>
        {selected && <ActivityModal activity={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </section>
  )
}
