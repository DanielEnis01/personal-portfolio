import { motion } from 'motion/react'
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react'

export function HeroSection() {
  const scrollToProjects = () => {
    const el = document.getElementById('projects')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Extra topo shimmer particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              backgroundColor: i % 2 === 0 ? 'rgba(136,192,208,0.35)' : 'rgba(163,190,140,0.3)',
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0], scale: [0, 1, 0] }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg tracking-wider font-medium"
            style={{ color: '#88C0D0' }}
          >
            Hello, I'm
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-5xl md:text-7xl font-bold mb-6"
            style={{ color: '#ECEFF4' }}
          >
            Daniel Enis
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-2xl md:text-4xl font-medium mb-8"
            style={{ color: 'rgba(236,239,244,0.75)' }}
          >
            I'm a{' '}
            <span className="text-gradient-primary">
              Computer Scientist
            </span>
            {' '}specializing in{' '}
            <span className="text-gradient-secondary">
              Web & Data Engineering
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="text-lg max-w-2xl mx-auto mb-8 leading-relaxed"
            style={{ color: 'rgba(236,239,244,0.5)' }}
          >
            Pursuing my Bachelor's degree at UTD. I craft exceptional digital experiences and explore the depths of full stack development.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <motion.button
              onClick={scrollToProjects}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="px-8 py-3 rounded-xl font-bold transition-all duration-300 text-[#2E3440]"
              style={{ backgroundColor: '#A3BE8C', boxShadow: '0 4px 20px rgba(163,190,140,0.35)' }}
            >
              View My Work
            </motion.button>

            <div className="flex items-center space-x-3">
              {[
                { icon: Github, href: 'https://github.com/DanielEnis01' },
                { icon: Linkedin, href: 'https://www.linkedin.com/in/daniel-enis-26b670348/' },
                { icon: Mail, href: 'mailto:daniel@example.com' }, // Placeholder mail
              ].map(({ icon: Icon, href }, index) => (
                <motion.a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2 + index * 0.1 }}
                  whileHover={{ scale: 1.12, y: -2 }}
                  className="w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 border backdrop-blur-sm"
                  style={{ backgroundColor: 'rgba(136,192,208,0.1)', color: '#88C0D0', borderColor: 'rgba(136,192,208,0.2)' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(136,192,208,0.2)'
                    e.currentTarget.style.borderColor = 'rgba(136,192,208,0.5)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(136,192,208,0.1)'
                    e.currentTarget.style.borderColor = 'rgba(136,192,208,0.2)'
                  }}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            style={{ color: 'rgba(136,192,208,0.5)' }}
          >
            <ArrowDown className="w-6 h-6" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
