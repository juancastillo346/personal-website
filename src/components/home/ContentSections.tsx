import SectionBlock from '@/components/home/SectionBlock';
import SpotlightCard from '@/components/home/SpotlightCard';
import { experiences, projects } from '@/data/portfolio';

export default function ContentSections() {
  return (
    <div className="pb-20 lg:pt-16">
      <SectionBlock
        id="about"
        eyebrow="About"
        index="01"
      >
        <div className="max-w-4xl space-y-5">
          <p className="text-base leading-8 text-muted sm:text-lg">
            I&apos;m a computer science student at{' '}
            <span className="font-medium text-accent">Columbia University</span> who enjoys
            building software that&apos;s <span className="font-medium text-accent">clean, useful, and grounded in real impact</span>.
          </p>
          <p className="text-base leading-8 text-muted sm:text-lg">
            I&apos;m interested in <span className="font-medium text-accent">full-stack development</span> and{' '}
            <span className="font-medium text-accent">machine learning</span>, especially when
            they come together in projects involving{' '}
            <span className="font-medium text-accent">performance</span>,{' '}
            <span className="font-medium text-accent">finance</span>, or{' '}
            <span className="font-medium text-accent">real-world problem solving</span>. I care a
            lot about making things work well technically, but also making them feel{' '}
            <span className="font-medium text-accent">easy and natural to use</span>.
          </p>
          <p className="text-base leading-8 text-muted sm:text-lg">
            I&apos;ve taught computer science to{' '}
            <span className="font-medium text-accent">over 150 students</span>, worked on AWS
            systems at <span className="font-medium text-accent">Amazon</span> that improved
            performance by <span className="font-medium text-accent">800×</span>, and built
            everything from <span className="font-medium text-accent">neural networks</span> to{' '}
            <span className="font-medium text-accent">finance dashboards</span>. I like the
            challenge of taking complex ideas and turning them into something practical, reliable,
            and user-friendly.
          </p>
          <p className="text-base leading-8 text-muted sm:text-lg">
            I&apos;m also a proud member of <span className="font-medium text-accent">SHPE</span>{' '}
            and <span className="font-medium text-accent">ColorStack</span>, and I&apos;m always
            learning, whether that means picking up a new technology or just finding a cleaner way
            to build.
          </p>
          <p className="text-base leading-8 text-muted sm:text-lg">
            Outside of tech, I like solving my{' '}
            <span className="font-medium text-accent">Rubik&apos;s Cube</span> and watching a lot
            of movies.
          </p>
        </div>
      </SectionBlock>

      <SectionBlock
        id="experience"
        eyebrow="Experience"
        index="02"
      >
        <div className="space-y-6">
          {experiences.map((experience) => (
            <SpotlightCard
              key={`${experience.company}-${experience.period}`}
              href={experience.link}
              title={`${
                experience.company === 'Amazon'
                  ? 'Software Development Intern'
                  : experience.title
              } · ${experience.company}`}
              description={
                experience.company === 'Datadog' ? (
                  <>Incoming internship at Datadog as a Software Engineering Intern.</>
                ) : experience.company === 'Amazon' ? (
                  <>
                    Redesigned a <span className="font-medium text-accent">FHIR export system</span> on{' '}
                    <span className="font-medium text-accent">AWS</span> (Glue PySpark, Fargate, Step Functions) to
                    boost throughput from <span className="font-medium text-accent">5 GB/hour to 4 TB/hour</span>{' '}
                    (<span className="font-medium text-accent">800x</span>) across{' '}
                    <span className="font-medium text-accent">20+ TB of clinical data</span> while cutting parsing{' '}
                    <span className="font-medium text-accent">~95%</span>, reducing compute cost{' '}
                    <span className="font-medium text-accent">4x</span>, and raising job success to{' '}
                    <span className="font-medium text-accent">99.9%</span> via dual-path workflows with caching,
                    validation, and dynamic routing.
                  </>
                ) : (
                  <>
                    <span className="font-medium text-accent">Designed and delivered curriculum</span> for an
                    Introduction to Computer Science course to{' '}
                    <span className="font-medium text-accent">150 students</span>, leveraging a variety of teaching
                    techniques to accommodate diverse learning styles. Collaborated with fellow instructors and the
                    Head of the STEM Department to{' '}
                    <span className="font-medium text-accent">innovate curriculum</span> development and assessment
                    strategies.
                  </>
                )
              }
              technologies={experience.technologies}
              meta={experience.period}
              showTechnologies={false}
            />
          ))}
        </div>
      </SectionBlock>

      <SectionBlock
        id="projects"
        eyebrow="Projects"
        index="03"
      >
        <div className="grid gap-6 xl:grid-cols-2">
          {projects.map((project) => (
            <SpotlightCard
              key={project.title}
              href={project.link}
              title={project.title}
              technologies={project.technologies}
            />
          ))}
        </div>
      </SectionBlock>
    </div>
  );
}
