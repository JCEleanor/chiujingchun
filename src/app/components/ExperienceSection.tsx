import React from "react";

interface IExperience {
  /** include company name, if undefined means same company different teams/roles */
  jobTitle?: string;
  /** include duration and team, served as uniqe index */
  duration: string;
  /** TODO: include word counts limit & array length limit */
  bulletPoints: string[];
  skills: string[];
}

const data: IExperience[] = [
  {
    jobTitle: "Senior Software Engineer @Shoalter Technology",
    duration: "Sep 2022 - June 2025 (Prmoted Within 19 months)",
    bulletPoints: [
      "Lead development of three content management systems with React and Next for third-party logistics service, enabling real-time data visualization across five systems and supporting cross-functional teams in Hong Kong and Manchester.",
      "Enhanced CI/CD pipeline by troubleshooting build issues, and designing standardized deployment templates including Docker configurations and Kubernetes manifests",
      "Performed unit and end-to-end testing with Jest, Cypress, and Mock Service Worker, preventing regressions and improving development confidence during iterations.",
      "Improved developer experience by introducing emerging web technologies such as Pnpm and Vite, reducing build time by 20%.",
    ],
    skills: [
      "Typescript",
      "ReactJS",
      "NextJS",
      "NodeJS",
      "TailwindCSS",
      "Vite",
      "Jest",
      "Docker",
    ],
  },
  {
    jobTitle: "Software Engineer @PChome Online",
    duration: "Frontend Team (Apr 2022 – Sep 2022)",
    bulletPoints: [
      "Revamped the company's decade-old e-commerce landing page, serving 1.3 billion users, to elevate the brand's image and enhance user experience.",
      "Migrated the frontend codebase from jQuery to React/TypeScript in two months, introducing a component-based architecture to improve reusability and maintainability.",
      "Used Storybook and Webpack to build a scalable UI package in collaboration with UI/UX designers and mobile App developers for three company sites across multiple business units.",
      "Enhanced performance by lazy loading images and reducing 75% of HTTP requests during the first paint, leading to a 35% decrease in page load times.",
    ],
    skills: ["ReactJS", "jQuery", "Storybook", "Webpack", "Rollup"],
  },
  {
    duration: "Content Management System Team (July 2021 – Apr 2022)",
    bulletPoints: [
      "Developed a role-based access control feature from scratch for an in-house content management system using jQuery, PHP, and SQL, supporting hundreds of employees.",
      "Optimized landing page SEO by refactoring CSS animations into composited animations, reducing the Cumulative Layout Shift score from 0.5 to below 0.1 on Google Lighthouse report in a week.",
      "Ensured cross-browser compatibility by providing fallback support with Javascript polyfills and defining DocType in HTML, extending support for users on older browsers.",
    ],
    skills: ["PHP", "SQL", "Javascript", "SEO"],
  },
  {
    jobTitle: "Robotics Instructor for Teenagers @Tiger Group",
    duration: "May 2018 – Sep 2020",
    bulletPoints: [
      "Taught around 20 adolescents aging from 8 to 12 fundamental coding concept using Scratch in a bilingual environment",
      "Received the Best Host award at the 2019 Universal Robotics Challenge Taiwan",
    ],
    skills: ["Scratch", "Communication", "Presentation", "Public Speaking"],
  },
];

const ExperienceSection = () => {
  return (
    <section className="mt-20 scroll-mt-32" id="EXPERIENCE">
      {data.map((exp) => (
        <div key={exp.duration} className={exp?.jobTitle ? "mt-12" : "mt-4"}>
          {exp.jobTitle && (
            <h3 className="text-xl font-semibold">{exp.jobTitle}</h3>
          )}
          <h6 className="font-thin italic">{exp.duration}</h6>
          <div className="mt-4 space-y-3">
            <ul className="ml-4 list-disc list-outside mt-2 space-y-3">
              {exp.bulletPoints.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
          </div>
          <div className="mt-5 flex gap-1">
            {exp.skills.map((skill) => (
              <div
                key={skill}
                className="p-2 border text-xs rounded-full text-white"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default ExperienceSection;
