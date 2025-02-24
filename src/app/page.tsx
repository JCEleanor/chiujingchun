import AboutSection from "./components/AboutSection";
import Header from "./components/Header";
import Links from "./components/Links";
import ExperienceSection from "./components/ExperienceSection";
import Image from "next/image";

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
          <div className="project-card">
            <div className="project-image">
              <img src="yelp-camp.png" alt="Yelp Camp Preview" />
            </div>
            <div className="project-info">
              <h3>Yelp Camp - June 2021</h3>
              <p>
                Yelp Camp is a full-stack web app inspired by Yelp. Built as the
                capstone project for Colt Steele’s
                <em>The Web Developer Bootcamp 2021</em>, it utilizes the
                <strong>MERN stack</strong> and integrates third-party services
                like
                <strong>Mapbox</strong> for interactive maps.
              </p>
              <div className="tech-stack">
                <span>MongoDB</span> <span>Express</span> <span>React</span>
                <span>Node.js</span> <span>Bootstrap</span>
              </div>
            </div>
          </div>
          {/* <div>
            <h3 className="text-xl font-semibold">Yelp Camp - 2021 June</h3>
            <Image
              width={180}
              height={150}
              alt="yelp-camp"
              src="/yelp-camp.png"
            />
            <span>
              Yelp Camp is a full-stack web application inspired by Yelp. Built
              as the capstone project for Colt Steele&apos;s The Web Developer
              Bootcamp 2021, it utilizes the MERN stack and integrates
              third-party services like Mapbox for interactive maps.
            </span>
            <div className="mt-5 flex gap-1">
              {["MongoDB", "Express", "React", "Node.js", "Bootstrap"].map(
                (t) => (
                  <div
                    className="p-2 border text-xs rounded-full text-white"
                    key={t}
                  >
                    {t}
                  </div>
                )
              )}
            </div>
          </div> */}
        </section>
      </main>
    </div>
  );
}
