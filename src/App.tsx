import { useEffect, useState } from 'react';
import { MotionConfig } from 'motion/react';
import { ContactSection } from './components/ContactSection';
import { HeroSection } from './components/HeroSection';
import { Navbar } from './components/Navbar';
import { Preloader } from './components/Preloader';
import { ProjectModal } from './components/ProjectModal';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { SubtleCursor } from './components/SubtleCursor';
import { TestimonialsSection } from './components/TestimonialsSection';
import { PROJECTS, type ProjectItem } from './data/portfolioData';
import { getAdjacentProject } from './utils/portfolioLogic';

export default function App() {
  const [loading, setLoading] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    const params = new URLSearchParams(window.location.search);
    if (params.get('autostart') === '1') return false;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return false;
    }
    return true;
  });

  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(
    null
  );

  useEffect(() => {
    if (!loading) return;
    const timer = window.setTimeout(() => {
      setLoading(false);
    }, 950);
    return () => window.clearTimeout(timer);
  }, [loading]);

  const handleNavigateProject = (direction: 'prev' | 'next') => {
    if (!selectedProject) return;
    const nextProject = getAdjacentProject(
      PROJECTS,
      selectedProject.id,
      direction
    );
    if (nextProject) {
      setSelectedProject(nextProject);
    }
  };

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-[#F5F1EB] text-[#141413]">
        <Preloader visible={loading} />
        <SubtleCursor />
        <Navbar />
        <main>
          <HeroSection />
          <ProjectsSection onSelectProject={setSelectedProject} />
          <SkillsSection />
          <TestimonialsSection />
        </main>
        <ContactSection />
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onNavigate={handleNavigateProject}
        />
      </div>
    </MotionConfig>
  );
}
