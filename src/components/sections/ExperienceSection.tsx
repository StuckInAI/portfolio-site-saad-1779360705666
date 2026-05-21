import { experiences } from '@/lib/data';
import { CheckCircle2 } from 'lucide-react';

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-24 px-6" style={{ background: 'rgba(26,26,46,0.5)' }}>
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: '#6c63ff' }}>Career</span>
          <h2 className="text-4xl md:text-5xl font-black text-white mt-2">Experience</h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-6 top-0 bottom-0 w-px"
            style={{ background: 'linear-gradient(to bottom, #6c63ff, #ff6584, transparent)' }}
          />

          <div className="flex flex-col gap-12">
            {experiences.map((exp, idx) => (
              <div key={exp.id} className="relative pl-16">
                {/* Dot */}
                <div
                  className="absolute left-0 w-12 h-12 rounded-full flex items-center justify-center text-2xl glass"
                  style={{ border: '2px solid rgba(108,99,255,0.5)' }}
                >
                  {exp.logo}
                </div>

                {/* Card */}
                <div className="glass rounded-2xl p-6 hover:border-purple-500/30 transition-all duration-300">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                      <p className="text-purple-400 font-medium">{exp.company}</p>
                    </div>
                    <span
                      className="text-xs font-semibold px-3 py-1 rounded-full"
                      style={{ background: 'rgba(108,99,255,0.2)', color: '#a89dff' }}
                    >
                      {exp.period}
                    </span>
                  </div>
                  <ul className="flex flex-col gap-2">
                    {exp.description.map((point, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-slate-400">
                        <CheckCircle2 size={16} className="mt-0.5 shrink-0" style={{ color: '#6c63ff' }} />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
