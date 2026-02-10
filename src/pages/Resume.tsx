import { useEffect, useRef } from "react";
import {
  education,
  technicalSkills,
  leadership,
  awards,
  certifications,
} from "../data/mock";

function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const children = el.querySelectorAll<HTMLElement>("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).classList.add("animate-slide-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 },
    );

    children.forEach((child) => observer.observe(child));
    return () => observer.disconnect();
  }, []);

  return ref;
}

export default function Resume() {
  const containerRef = useScrollReveal();

  return (
    <div className="px-6 py-20" ref={containerRef}>
      <h1 className="mb-2 text-3xl font-bold">Resume</h1>
      <p className="mb-10 text-muted">Education, skills, and achievements.</p>

      {/* Education */}
      <section className="mb-10">
        <h2 className="mb-4 text-lg font-semibold text-accent">Education</h2>
        <div className="space-y-4">
          {education.map((edu, i) => (
            <div
              key={edu.degree + edu.school}
              data-reveal
              className="rounded-xl border border-border bg-surface p-5 opacity-0"
              style={{ animationDelay: `${i * 0.1}s` }}
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
        <div
          data-reveal
          className="rounded-xl border border-border bg-surface p-5 opacity-0"
        >
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
          {leadership.map((l, i) => (
            <div
              key={l.organization}
              data-reveal
              className="rounded-xl border border-border bg-surface p-5 opacity-0"
              style={{ animationDelay: `${i * 0.1}s` }}
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
        <div
          data-reveal
          className="rounded-xl border border-border bg-surface p-5 opacity-0"
        >
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
        <div
          data-reveal
          className="rounded-xl border border-border bg-surface p-5 opacity-0"
        >
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
