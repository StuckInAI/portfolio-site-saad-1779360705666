import { Code2, Lightbulb, Users, Zap } from 'lucide-react';

const stats = [
  { value: '6+', label: 'Years Experience' },
  { value: '50+', label: 'Projects Shipped' },
  { value: '20+', label: 'Happy Clients' },
  { value: '10K+', label: 'GitHub Stars' },
];

const values = [
  {
    icon: Code2,
    title: 'Clean Code',
    desc: 'I write maintainable, well-documented code that teams love working with.',
  },
  {
    icon: Lightbulb,
    title: 'Creative Solutions',
    desc: 'Every problem has an elegant solution — I love finding it.',
  },
  {
    icon: Zap,
    title: 'Performance First',
    desc: 'Speed and accessibility are not afterthoughts — they are requirements.',
  },
  {
    icon: Users,
    title: 'Team Player',
    desc: 'Great products are built by great teams. I thrive in collaborative environments.',
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section label */}
        <div className="text-center mb-16">
          <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: '#6c63ff' }}>About Me</span>
          <h2 className="text-4xl md:text-5xl font-black text-white mt-2">
            Who I Am
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          {/* Left — text */}
          <div>
            <p className="text-lg text-slate-400 leading-relaxed mb-6">
              I'm a <span className="text-white font-semibold">Full-Stack Developer</span> based in San Francisco
              with a passion for building products that live at the intersection of design and engineering.
            </p>
            <p className="text-lg text-slate-400 leading-relaxed mb-6">
              My journey started with a curiosity about how the internet works, and has grown into a career
              building everything from real-time collaboration tools to AI-powered dashboards.
            </p>
            <p className="text-lg text-slate-400 leading-relaxed">
              When I'm not coding, you'll find me hiking trails around the Bay Area, experimenting with
              electronic music production, or contributing to open-source projects.
            </p>
          </div>

          {/* Right — stats grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((s) => (
              <div
                key={s.label}
                className="glass rounded-2xl p-6 text-center hover:border-purple-500/30 transition-all duration-300"
              >
                <div className="text-4xl font-black mb-1 gradient-text">{s.value}</div>
                <div className="text-sm text-slate-500">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Values */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="glass rounded-2xl p-6 hover:bg-white/8 transition-all duration-300 group"
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform"
                style={{ background: 'linear-gradient(135deg, rgba(108,99,255,0.3), rgba(255,101,132,0.3))' }}
              >
                <Icon size={22} style={{ color: '#6c63ff' }} />
              </div>
              <h3 className="font-bold text-white mb-2">{title}</h3>
              <p className="text-sm text-slate-500 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
