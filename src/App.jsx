import { useCallback, useRef, useState } from "react";

// Styles
import "./styles/global.css";

// Hooks
import { useTheme } from "./hooks/useTheme";
import { useActiveSection } from "./hooks/useActiveSection";

// Layout
import { Header } from "./components/layout/Header";
import { Sidebar } from "./components/layout/Sidebar";
import { Footer } from "./components/layout/Footer";
import { MobileMenu } from "./components/layout/MobileMenu";

// Sections
import { AboutSection } from "./components/sections/AboutSection";
import { ResumeSection } from "./components/sections/ResumeSection";
import { ProjectsSection } from "./components/sections/ProjectsSection";
import { ResearchSection } from "./components/sections/ResearchSection";
import { ContactSection } from "./components/sections/ContactSection";

// UI
import { CustomCursor } from "./components/ui/CustomCursor";

// Data
import { navigation } from "./data/navigation";

// Utils
import { scrollContainerToSection } from "./utils/scroll";

/**
 * App — the root controller.
 *
 * Layout is a CSS grid with four panels (header, sidebar, main, footer)
 * separated by gaps. Only the `main` panel is scrollable.
 */
export default function App() {
  const { theme, toggleTheme } = useTheme();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const mainRef = useRef(null);
  const activeId = useActiveSection(mainRef, navigation, 120);

  const handleNavigate = useCallback((id) => {
    scrollContainerToSection(mainRef.current, id);
  }, []);

  const handleScrollTop = useCallback(() => {
    mainRef.current?.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <CustomCursor />
      <div className="grain-overlay" aria-hidden="true" />

      <div className="shell">
        <Header
          activeId={activeId}
          onNavigate={handleNavigate}
          theme={theme}
          onToggleTheme={toggleTheme}
          onOpenMobileMenu={() => setMobileMenuOpen(true)}
        />

        <Sidebar />

        <main className="main panel" ref={mainRef} id="top" tabIndex={-1}>
          <AboutSection />
          <ResumeSection />
          <ProjectsSection />
          <ResearchSection />
          <ContactSection />
        </main>

        <Footer onScrollTop={handleScrollTop} />
      </div>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        activeId={activeId}
        onNavigate={handleNavigate}
        onClose={() => setMobileMenuOpen(false)}
        theme={theme}
        onToggleTheme={toggleTheme}
      />
    </>
  );
}
