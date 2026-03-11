import { motion, AnimatePresence } from 'motion/react'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const navItems = ['home', 'projects', 'hackathons', 'extracurriculars', 'documents']

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId) => {
    // Dispatch event to close any open modals
    window.dispatchEvent(new CustomEvent('close-all-modals'))
    
    const element = document.getElementById(sectionId)
    if (element) element.scrollIntoView({ behavior: 'smooth' })
    setMobileOpen(false)
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', damping: 20 }}
        className="fixed top-0 left-0 right-0 z-[300] transition-all duration-300"
        style={
          scrolled
            ? { backgroundColor: 'rgba(46,52,64,0.92)', backdropFilter: 'blur(14px)', borderBottom: '1px solid rgba(136,192,208,0.12)' }
            : { backgroundColor: 'transparent' }
        }
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-xl font-mono"
              style={{ color: '#ECEFF4' }}
            >
              &lt;<span style={{ color: '#88C0D0' }}>Daniel</span>Enis /&gt;
            </motion.div>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item, index) => (
                <motion.button
                  key={item}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  onClick={() => scrollToSection(item)}
                  className="capitalize transition-colors duration-200 text-sm font-medium"
                  style={{ color: 'rgba(236,239,244,0.65)' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#88C0D0')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(236,239,244,0.65)')}
                >
                  {item === 'extracurriculars' ? 'Activities' : item.charAt(0).toUpperCase() + item.slice(1)}
                </motion.button>
              ))}
            </div>

            {/* Mobile hamburger */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 rounded-lg transition-colors duration-200"
              style={{ color: '#ECEFF4' }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(136,192,208,0.1)')}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 right-0 z-40 md:hidden"
            style={{ backgroundColor: 'rgba(46,52,64,0.97)', backdropFilter: 'blur(14px)', borderBottom: '1px solid rgba(136,192,208,0.12)' }}
          >
            <div className="px-6 py-4 flex flex-col gap-1">
              {navItems.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="py-3 px-4 rounded-lg text-left capitalize transition-colors duration-200"
                  style={{ color: 'rgba(236,239,244,0.7)' }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#88C0D0'
                    e.currentTarget.style.backgroundColor = 'rgba(136,192,208,0.08)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = 'rgba(236,239,244,0.7)'
                    e.currentTarget.style.backgroundColor = 'transparent'
                  }}
                >
                  {item === 'extracurriculars' ? 'Activities' : item}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
