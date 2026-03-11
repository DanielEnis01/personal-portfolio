import { Navigation } from './components/Navigation'
import { HeroSection } from './components/HeroSection'
import { ProjectsSection } from './components/ProjectsSection'
import { HackathonsSection } from './components/HackathonsSection'
import { ExtracurricularsSection } from './components/ExtracurricularsSection'
import { DocumentsSection } from './components/DocumentsSection'
import { TopographyBackground } from './components/TopographyBackground'

function App() {
  return (
    <div className="min-h-screen selection:bg-[#88C0D0]/30 selection:text-[#88C0D0]" style={{ color: '#ECEFF4' }}>
      {/* Animated topography canvas — fixed behind everything */}
      <TopographyBackground />

      <Navigation />

      <main className="relative">
        <HeroSection />
        <ProjectsSection />
        <HackathonsSection />
        <ExtracurricularsSection />
        <DocumentsSection />
      </main>
    </div>
  )
}

export default App