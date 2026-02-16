import {
  education,
  technicalSkills,
  leadership,
  awards,
  certifications,
} from "../data/mock";

export default function Resume() {
  return (
    <div className="px-6 pt-10">
      <h1 className="mb-2 pl-2 text-5xl font-bold">Resume</h1>
      <p className="mb-10 text-muted">Education, skills, and achievements.</p>

      {/* Education */}
      <section className="mb-10">
        <h2 className="mb-4 text-lg font-semibold text-accent">Education</h2>
        <div className="space-y-4">
          {education.map((edu) => (
            <div
              key={edu.degree + edu.school}
              className="rounded-xl border border-border bg-surface p-5"
            >
              <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-start">
                <div>
                  <h3 className="font-semibold">{edu.school}</h3>
                  <p className="text-sm text-muted">{edu.degree}</p>
                  {edu.detail && (
                    <p className="text-sm text-accent">{edu.detail}</p>
                  )}
                </div>
                <div className="text-sm text-muted sm:text-right">
                  <p>{edu.location}</p>
                  <p>{edu.period}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Technical Skills */}
      <section className="mb-10">
        <h2 className="mb-4 text-lg font-semibold text-accent">
          Technical Skills
        </h2>
        <div className="rounded-xl border border-border bg-surface p-5">
          <div className="space-y-3">
            {technicalSkills.map((cat) => (
              <div key={cat.category}>
                <span className="text-sm font-medium">{cat.category}: </span>
                <span className="text-sm text-muted">
                  {cat.skills.join(", ")}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="mb-10">
        <h2 className="mb-4 text-lg font-semibold text-accent">Leadership</h2>
        <div className="space-y-4">
          {leadership.map((l) => (
            <div
              key={l.organization}
              className="rounded-xl border border-border bg-surface p-5"
            >
              <div className="flex flex-col justify-between gap-1 sm:flex-row sm:items-start">
                <div>
                  <h3 className="font-semibold">{l.organization}</h3>
                  <p className="text-sm text-muted">{l.role}</p>
                </div>
                <div className="text-sm text-muted sm:text-right">
                  <p>{l.location}</p>
                  <p>{l.period}</p>
                </div>
              </div>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {l.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Awards */}
      <section className="mb-10">
        <h2 className="mb-4 text-lg font-semibold text-accent">
          Honors & Awards
        </h2>
        <div className="rounded-xl border border-border bg-surface p-5">
          <ul className="space-y-2">
            {awards.map((a) => (
              <li key={a.title} className="text-sm">
                <span className="font-medium">{a.title}</span>
                <span className="text-muted"> | {a.event}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Certifications */}
      <section>
        <h2 className="mb-4 text-lg font-semibold text-accent">
          Certifications
        </h2>
        <div className="rounded-xl border border-border bg-surface p-5">
          <ul className="space-y-1">
            {certifications.map((c) => (
              <li key={c} className="text-sm text-muted">
                {c}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
