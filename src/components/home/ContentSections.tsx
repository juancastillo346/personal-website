import SectionBlock from '@/components/home/SectionBlock';
import SpotlightCard from '@/components/home/SpotlightCard';
import { experiences, projects } from '@/data/portfolio';

export default function ContentSections() {
  return (
    <div className="pb-20 lg:pt-16">
      <SectionBlock
        id="about"
        eyebrow="About"
        intro="I like work that is technically rigorous, easy to use, and grounded in measurable impact."
        index="01"
      >
        <div className="max-w-4xl space-y-5">
          <p className="text-base leading-8 text-muted sm:text-lg">
            I&apos;m a computer science student at{' '}
            <span className="font-medium text-accent">Columbia University</span> passionate about
            building software that blends thoughtful design with solid engineering. My work spans{' '}
            <span className="font-medium text-accent">full-stack development</span> and{' '}
            <span className="font-medium text-accent">machine learning</span>, with a focus on
            performance, finance, and real-world impact.
          </p>
          <p className="text-base leading-8 text-muted sm:text-lg">
            I&apos;ve <span className="font-medium text-accent">taught</span> computer science to
            over <span className="font-medium text-accent">150 students</span> as a course
            instructor, redesigned AWS systems at{' '}
            <span className="font-medium text-accent">Amazon</span> to achieve 800x performance
            improvements, and built neural networks and password managers. I enjoy working at the
            intersection of backend logic and frontend design.
          </p>
          <p className="text-base leading-8 text-muted sm:text-lg">
            Outside of coding, I&apos;m a proud member of{' '}
            <span className="font-medium text-accent">SHPE</span> and{' '}
            <span className="font-medium text-accent">ColorStack</span>, and I&apos;m constantly
            learning, whether it&apos;s a new tech stack or a better way to write maintainable
            code.
          </p>
          <p className="text-base leading-8 text-muted sm:text-lg">
            When I&apos;m not programming, you&apos;ll probably find me solving my Rubik&apos;s
            Cube or playing video games to recharge.
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
