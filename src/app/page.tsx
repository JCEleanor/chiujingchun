import AboutSection from "./components/AboutSection";
import Header from "./components/Header";
import Links from "./components/Links";
import ExperienceSection from "./components/ExperienceSection";
import { ProjectSection } from "./components/ProjectSection";
import { JournalSection } from "./components/journal-section";
import { PageTransitionLayout } from "./components/PageTransitionLayout";

export default function Home() {
  return (
    <PageTransitionLayout>
      {/* HEADER */}
      <div className="flex flex-col justify-between h-[80vh] fixed pt-20">
        <Header />
        <div className="flex gap-2 text-3xl items-center">
          <Links />
        </div>
      </div>
      {/* MAIN */}
      <main className="pt-20 ml-[50%]">
        <AboutSection />
        <ExperienceSection />
        <ProjectSection />
        <JournalSection />
      </main>
    </PageTransitionLayout>
  );
}
