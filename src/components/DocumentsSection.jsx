import { motion } from 'motion/react'
import { FileText, Award, Download, ExternalLink, Shield, BookOpen } from 'lucide-react'

const documents = [
  {
    id: 'resume',
    title: 'Resume',
    description: 'My full professional resume covering work experience, education, and technical skills.',
    icon: FileText,
    accentColor: '#A3BE8C',
    glowColor: 'rgba(163,190,140,0.1)',
    borderHoverColor: 'rgba(163,190,140,0.4)',
    iconBgColor: 'rgba(163,190,140,0.12)',
    primaryAction: { label: 'Download PDF', icon: Download, href: '/Resume/DanielEnisResume252.pdf' },
    secondaryAction: { label: 'View Online', icon: ExternalLink, href: '/Resume/DanielEnisResume252.pdf' },
    tags: ['Experience', 'Education', 'Projects', 'Skills'],
  },
  {
    id: 'certifications',
    title: 'Flow Chart',
    description: 'My comprehensive Computer Science course plan and academic roadmap for the 2024-2025 year.',
    icon: Award,
    accentColor: '#88C0D0',
    glowColor: 'rgba(136,192,208,0.1)',
    borderHoverColor: 'rgba(136,192,208,0.4)',
    iconBgColor: 'rgba(136,192,208,0.12)',
    primaryAction: { label: 'View Flow Chart', icon: ExternalLink, href: '/Resume/Articles/CS-Flow-Chart-24.25-Final-updated-06132024.pdf' },
    secondaryAction: { label: 'Download PDF', icon: Download, href: '/Resume/Articles/CS-Flow-Chart-24.25-Final-updated-06132024.pdf' },
    tags: ['Academic', 'Flow Chart', 'UTD', 'CS'],
  },
]

const certList = [
  { name: 'Computer Science', issuer: 'UT Dallas', year: '2024-2028', icon: Shield },
  { name: 'Web Development', issuer: 'Self-Taught', year: '2023-Present', icon: BookOpen },
  { name: 'Data Engineering', issuer: 'Projects', year: '2024-Present', icon: Shield },
]

export function DocumentsSection() {
  return (
    <section id="documents" className="py-24 relative overflow-hidden">
      {/* Subtle side glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 pointer-events-none rounded-full blur-3xl opacity-30"
        style={{ backgroundColor: 'rgba(163,190,140,0.04)' }} />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 pointer-events-none rounded-full blur-3xl opacity-30"
        style={{ backgroundColor: 'rgba(136,192,208,0.04)' }} />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#ECEFF4] mb-6">Documents</h2>
          <div className="w-24 h-1 mx-auto mb-6" style={{ background: 'linear-gradient(to right, #A3BE8C, #88C0D0)' }} />
          <p className="mt-2 max-w-xl mx-auto font-medium" style={{ color: 'rgba(236,239,244,0.5)' }}>
            Download my resume or browse through my academic roadmap and course plan.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {documents.map((doc, index) => {
            const Icon = doc.icon
            return (
              <motion.div
                key={doc.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15, duration: 0.7 }}
                viewport={{ once: true }}
                whileHover={{ y: -4 }}
                className="group relative rounded-2xl border p-8 transition-all duration-400 overflow-hidden"
                style={{ backgroundColor: 'rgba(59,66,82,0.65)', borderColor: 'rgba(136,192,208,0.12)' }}
              >
                {/* Glow */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{ background: `radial-gradient(ellipse at 30% 20%, ${doc.glowColor} 0%, transparent 70%)` }}
                />

                {/* Icon */}
                <div
                  className="w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                  style={{ backgroundColor: doc.iconBgColor }}
                >
                  <Icon className="w-8 h-8" style={{ color: doc.accentColor }} />
                </div>

                <h3 className="text-2xl font-bold text-[#ECEFF4] mb-3">
                  {doc.title}
                </h3>

                <p className="mb-6 leading-relaxed font-medium" style={{ color: 'rgba(236,239,244,0.55)' }}>
                  {doc.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {doc.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 rounded-full text-sm border font-medium"
                      style={{ backgroundColor: 'rgba(236,239,244,0.05)', borderColor: 'rgba(236,239,244,0.1)', color: 'rgba(236,239,244,0.45)' }}>
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <motion.a
                    href={doc.primaryAction.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold transition-all duration-300 flex-1 text-[#2E3440]"
                    style={{ backgroundColor: doc.accentColor, boxShadow: `0 4px 18px ${doc.glowColor}` }}
                  >
                    <doc.primaryAction.icon className="w-4 h-4" />
                    {doc.primaryAction.label}
                  </motion.a>
                  <motion.a
                    href={doc.secondaryAction.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl transition-all duration-300 border flex-1 font-bold"
                    style={{ borderColor: 'rgba(236,239,244,0.15)', color: 'rgba(236,239,244,0.6)' }}
                  >
                    <doc.secondaryAction.icon className="w-4 h-4" />
                    {doc.secondaryAction.label}
                  </motion.a>
                </div>
              </motion.div>
            )
          })}
        </div>

        <div className="h-px w-full mt-16" style={{ backgroundColor: 'rgba(136,192,208,0.1)' }} />

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 pt-8 text-center"
          style={{ borderTop: '1px solid rgba(136,192,208,0.1)' }}
        >
          <p className="font-medium" style={{ color: 'rgba(236,239,244,0.3)' }}>
            © {new Date().getFullYear()} Daniel Enis. Designed &amp; Built with React &amp; Tailwind CSS.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
