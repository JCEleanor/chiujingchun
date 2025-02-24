import AboutSection from "./components/AboutSection";
import Header from "./components/Header";
import Links from "./components/Links";
import ExperienceSection from "./components/ExperienceSection";

export default function Home() {
  return (
    <div>
      <div className="flex flex-col justify-between top-[8rem] h-[80vh] fixed">
        <Header />
        <div className="flex gap-2 text-3xl items-center">
          <Links />
        </div>
      </div>

      <main className="pt-20 ml-[50%]">
        <AboutSection />
        <ExperienceSection />
        <section className="mt-20 scroll-mt-32" id="PROJECTS">
          PROJECTS
        </section>
      </main>
    </div>
  );
}
