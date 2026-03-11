import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { ImageWithFallback } from './figma/ImageWithFallback'
import { ArrowLeft, ExternalLink, Calendar, Tag, ArrowUpRight } from 'lucide-react'

const hackathons = [
  {
    id: 'hackai-2026',
    title: 'HackAi 2026',
    organization: 'HackAi',
    period: '2026',
    category: 'Hackathon',
    description: 'Sponsor Track Winner at HackAi 2026 for commut.r.',
    longDescription:
      'This was my first hackathon ever attended and, fortunately enough, my first win. My and my partner Tyler Belken (https://github.com/Tbelkk) came up with the idea for commut.r as commuters ourselves. We won the NebulaLabs Sponsored track, which was one of the 4 main sponsors of the event, due to our unique use of their API during development. The student data provided from their API was the root of our formula that calculated predictions. It was a very good experience overall and I look forward to future hackathons.',
    challenges: 'Developing a reliable parking prediction algorithm in under 24 hours while learning the Nebula API on the fly was an intense challenge. We had to quickly iterate on our logic to ensure the predictions were both accurate and useful.',
    learned: 'I learned how to work under extreme time constraints and the power of leveraging community-driven APIs to solve local problems. It also taught me the importance of rapid prototyping and effective teamwork.',
    image: '/Images/hackai_logo_v2.png',
    tags: ['Nebula API', 'Flask', 'React', 'Innovation'],
    link: 'https://hackai-2026.devpost.com/',
    highlights: [
      'Won the NebulaLabs Sponsored Track',
      'Developed an AI parking predictor in 24 hours',
      'Integrated real-time student data for predictions',
    ],
  },
]

const categoryColors = {
  Hackathon: { text: 'text-[#88C0D0]', bg: 'bg-[#88C0D0]/15', border: 'border-[#88C0D0]/30' },
}

function HackathonModal({ hackathon, onClose }) {
  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', handleKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  const cat = categoryColors[hackathon.category] ?? categoryColors['Hackathon']

  return (
    <motion.div
      key="hackathon-modal"
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
          {hackathon.category}
        </span>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.5, type: 'spring', damping: 28 }}
        className="relative z-0 max-w-4xl mx-auto px-6 pt-28 pb-24"
      >
        <div className="relative rounded-2xl overflow-hidden mb-10" style={{ boxShadow: '0 20px 60px rgba(0,0,0,0.5)' }}>
          <ImageWithFallback
            src={hackathon.image}
            alt={hackathon.title}
            className="w-full h-64 md:h-96 object-cover"
          />
          <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, #2E3440 0%, transparent 60%)' }} />
        </div>

        <div className="flex flex-wrap items-center gap-4 mb-4">
          <div className="flex items-center gap-2 text-[#88C0D0]/70 text-sm">
            <Calendar className="w-4 h-4" />
            {hackathon.period}
          </div>
          <div className="w-1 h-1 rounded-full bg-[#ECEFF4]/20" />
          <span className="text-[#ECEFF4]/60 text-sm font-medium">{hackathon.organization}</span>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-[#ECEFF4] mb-4">{hackathon.title}</h1>
        <div className="w-16 h-0.5 mb-8" style={{ background: 'linear-gradient(to right, #A3BE8C, #88C0D0)' }} />

        {/* Structured Description */}
        <div className="space-y-8 mb-12">
          <div>
            <h3 className="text-[#88C0D0] text-sm uppercase tracking-widest font-bold mb-3">Event Overview</h3>
            <p className="text-[#ECEFF4]/75 leading-relaxed text-base md:text-lg whitespace-pre-line">
              {hackathon.longDescription}
            </p>
          </div>

          {hackathon.challenges && (
            <div className="pl-6 border-l-2 border-[#D08770]/30">
              <h3 className="text-[#D08770] text-sm uppercase tracking-widest font-bold mb-3">Challenges</h3>
              <p className="text-[#ECEFF4]/75 leading-relaxed text-base italic">
                {hackathon.challenges}
              </p>
            </div>
          )}

          {hackathon.learned && (
            <div className="pl-6 border-l-2 border-[#A3BE8C]/30">
              <h3 className="text-[#A3BE8C] text-sm uppercase tracking-widest font-bold mb-3">What I Learned</h3>
              <p className="text-[#ECEFF4]/75 leading-relaxed text-base">
                {hackathon.learned}
              </p>
            </div>
          )}
        </div>

        <div className="mb-10 p-6 rounded-xl border" style={{ backgroundColor: 'rgba(59,66,82,0.7)', borderColor: 'rgba(136,192,208,0.15)' }}>
          <h3 className="text-[#88C0D0] text-sm uppercase tracking-widest font-bold mb-4">Key Highlights</h3>
          <ul className="space-y-3">
            {hackathon.highlights.map((h, i) => (
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

        <div className="mb-10">
          <div className="flex items-center gap-2 mb-3">
            <Tag className="w-4 h-4 text-[#88C0D0]/60" />
            <span className="text-[#ECEFF4]/40 text-sm uppercase tracking-wider font-bold">Tags</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {hackathon.tags.map((tag) => (
              <span key={tag} className="px-3 py-1.5 rounded-lg text-sm text-[#88C0D0] border font-medium"
                style={{ backgroundColor: 'rgba(136,192,208,0.1)', borderColor: 'rgba(136,192,208,0.2)' }}>
                {tag}
              </span>
            ))}
          </div>
        </div>

        {hackathon.link && (
          <motion.a
            href={hackathon.link}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-8 py-3 rounded-xl text-[#2E3440] font-bold transition-all duration-300"
            style={{ backgroundColor: '#A3BE8C', boxShadow: '0 4px 20px rgba(163,190,140,0.3)' }}
          >
            <ArrowUpRight className="w-4 h-4" />
            View on Devpost
          </motion.a>
        )}
      </motion.div>
    </motion.div>
  )
}

export function HackathonsSection() {
  const [selected, setSelected] = useState(null)

  useEffect(() => {
    const handleClose = () => setSelected(null)
    window.addEventListener('close-all-modals', handleClose)
    return () => window.removeEventListener('close-all-modals', handleClose)
  }, [])

  return (
    <section id="hackathons" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#ECEFF4] mb-6">Hackathons</h2>
          <div className="w-24 h-1 mx-auto" style={{ background: 'linear-gradient(to right, #A3BE8C, #88C0D0)' }} />
        </motion.div>

        <div className="flex flex-wrap justify-center gap-6">
          {hackathons.map((hackathon, index) => {
            const cat = categoryColors[hackathon.category] ?? categoryColors['Hackathon']
            return (
              <motion.div
                key={hackathon.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                onClick={() => setSelected(hackathon)}
                className="group cursor-pointer rounded-2xl overflow-hidden border transition-all duration-400 w-full md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] max-w-sm"
                style={{
                  backgroundColor: 'rgba(59,66,82,0.7)',
                  borderColor: 'rgba(136,192,208,0.12)',
                }}
              >
                <div className="relative overflow-hidden h-44">
                  <ImageWithFallback
                    src={hackathon.image}
                    alt={hackathon.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-108"
                    style={{ transform: 'scale(1)' }}
                  />
                  <div className="absolute inset-0 transition-opacity duration-300"
                    style={{ background: 'linear-gradient(to top, rgba(59,66,82,0.9) 0%, rgba(46,52,64,0.2) 100%)' }} />

                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex items-center gap-2 px-4 py-2 rounded-full text-[#2E3440] text-sm font-bold"
                      style={{ backgroundColor: '#A3BE8C' }}>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                      View Experience
                    </div>
                  </div>

                  <div className="absolute top-3 left-3">
                    <span className={`px-2.5 py-1 rounded-full text-xs border ${cat.bg} ${cat.text} ${cat.border} backdrop-blur-sm font-bold`}>
                      {hackathon.category}
                    </span>
                  </div>
                </div>

                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="w-3.5 h-3.5 text-[#88C0D0]/50" />
                    <span className="text-[#ECEFF4]/40 text-xs font-medium">{hackathon.period}</span>
                  </div>
                  <h3 className="text-[#ECEFF4] font-bold mb-1 group-hover:text-[#88C0D0] transition-colors duration-300">
                    {hackathon.title}
                  </h3>
                  <p className="text-[#ECEFF4]/50 text-xs mb-3 font-medium">{hackathon.organization}</p>
                  <p className="text-[#ECEFF4]/60 text-sm line-clamp-2 mb-4 font-medium">{hackathon.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {hackathon.tags.slice(0, 3).map((tag) => (
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
        {selected && <HackathonModal hackathon={selected} onClose={() => setSelected(null)} />}
      </AnimatePresence>
    </section>
  )
}
