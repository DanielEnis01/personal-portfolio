import { motion } from 'motion/react'
import { Code2, GraduationCap, Sparkles } from 'lucide-react'

const focusAreas = [
  { icon: GraduationCap, label: 'Computer Science', detail: 'University of Texas at Dallas' },
  { icon: Code2, label: 'Full-Stack Development', detail: 'Frontend systems and backend foundations' },
  { icon: Sparkles, label: 'Project-Based Learning', detail: 'School organizations and personal builds' },
]

export function AboutSection() {
  return (
    <section id="about" className="relative overflow-hidden py-24 md:py-32">
      <div
        className="absolute inset-x-0 top-1/3 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(136,192,208,0.2), transparent)' }}
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-[minmax(0,0.88fr)_minmax(0,1.12fr)] lg:gap-20">
        <motion.div
          initial={{ opacity: 0, x: -28 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.55 }}
          viewport={{ once: true, amount: 0.25 }}
          className="relative mx-auto w-full max-w-md lg:max-w-none"
        >
          <div
            className="absolute -left-4 -top-4 h-[calc(100%-1.5rem)] w-[calc(100%-1.5rem)] rounded-3xl border"
            style={{ borderColor: 'rgba(136,192,208,0.25)', background: 'rgba(136,192,208,0.06)' }}
          />
          <div
            className="absolute -bottom-5 -right-5 h-32 w-32 rounded-2xl"
            style={{ background: 'linear-gradient(135deg, #A3BE8C, #88C0D0)', opacity: 0.9 }}
          />

          <div
            className="relative h-[430px] overflow-hidden rounded-3xl border sm:h-[510px]"
            style={{
              background: 'radial-gradient(circle at 52% 24%, rgba(136,192,208,0.32), transparent 30%), linear-gradient(145deg, #4C566A 0%, #3B4252 46%, #2E3440 100%)',
              borderColor: 'rgba(236,239,244,0.18)',
              boxShadow: '0 24px 70px rgba(0,0,0,0.32)',
            }}
          >
            <div
              className="absolute -inset-8 scale-110 bg-cover bg-center opacity-35 blur-2xl"
              style={{ backgroundImage: 'url(/Images/daniel-profile.jpg)' }}
            />
            <div className="absolute inset-0 bg-[#2E3440]/35" />
            <div className="absolute left-6 top-6 rounded-full border px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-[#ECEFF4]/80"
              style={{ borderColor: 'rgba(236,239,244,0.24)', backgroundColor: 'rgba(46,52,64,0.48)' }}>
              Daniel Enis
            </div>
            <div className="absolute inset-4 overflow-hidden rounded-[1.15rem] border" style={{ borderColor: 'rgba(236,239,244,0.2)' }}>
              <img
                src="/Images/daniel-profile.jpg"
                alt="Daniel Enis"
                className="h-full w-full object-cover object-[57%_50%]"
              />
              <div className="absolute inset-x-0 bottom-0 h-2/5" style={{ background: 'linear-gradient(to top, rgba(46,52,64,0.68), transparent)' }} />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 28 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.55, delay: 0.08 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <p className="mb-4 font-mono text-xs font-bold uppercase tracking-[0.24em] text-[#88C0D0]">Get to know me</p>
          <h2 className="mb-8 text-5xl font-bold leading-[0.9] tracking-tight text-[#ECEFF4] sm:text-6xl lg:text-7xl">
            About <span className="text-[#A3BE8C]">Me.</span>
          </h2>

          <div className="space-y-5 text-base leading-relaxed text-[#ECEFF4]/72 md:text-lg">
            <p>
              👋 Hello, I&apos;m Daniel, an aspiring Full-Stack Developer currently pursuing my Bachelor&apos;s in Computer Science at the University of Texas at Dallas.
            </p>
            <p>
              As an undergraduate software engineer, I am deeply committed to honing my skills through project-based learning with school organizations and personal builds. I believe in the power of building projects to solidify my understanding of core concepts and the latest technologies and frameworks.
            </p>
            <p>
              I am eager to contribute to innovative solutions and grow as a developer alongside like-minded individuals. My goal is to create applications that solve issues or absences I find in tech while continuously expanding my knowledge in both frontend and backend development.
            </p>
          </div>

          <div className="mt-10 grid gap-3 sm:grid-cols-3">
            {focusAreas.map(({ icon: Icon, label, detail }) => (
              <div key={label} className="rounded-2xl border p-4" style={{ borderColor: 'rgba(136,192,208,0.14)', backgroundColor: 'rgba(59,66,82,0.52)' }}>
                <Icon className="mb-4 h-5 w-5 text-[#A3BE8C]" />
                <p className="text-sm font-bold text-[#ECEFF4]">{label}</p>
                <p className="mt-1 text-xs leading-relaxed text-[#ECEFF4]/48">{detail}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
