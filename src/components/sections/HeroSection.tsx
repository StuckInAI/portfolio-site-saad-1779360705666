import { ArrowDown, Github, Linkedin, Download } from 'lucide-react';

export default function HeroSection() {
  const scrollToProjects = () => {
    document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background orbs */}
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl opacity-20 animate-pulse"
        style={{ background: 'radial-gradient(circle, #6c63ff, transparent)' }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full blur-3xl opacity-15 animate-pulse"
        style={{ background: 'radial-gradient(circle, #ff6584, transparent)', animationDelay: '1s' }}
      />
      <div
        className="absolute top-1/2 left-1/2 w-64 h-64 rounded-full blur-3xl opacity-10 animate-pulse"
        style={{ background: 'radial-gradient(circle, #00d4ff, transparent)', animationDelay: '2s' }}
      />

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-slate-300 mb-8 animate-fade-in-up">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          Available for new opportunities
        </div>

        {/* Avatar */}
        <div className="relative inline-block mb-8 animate-float">
          <div
            className="w-32 h-32 rounded-full mx-auto animate-pulse-glow"
            style={{ background: 'linear-gradient(135deg, #6c63ff, #ff6584)', padding: '3px' }}
          >
            <div
              className="w-full h-full rounded-full flex items-center justify-center text-5xl"
              style={{ background: '#0f0f1a' }}
            >
              👨‍💻
            </div>
          </div>
        </div>

        {/* Name */}
        <h1 className="text-5xl md:text-7xl font-black mb-4 leading-tight">
          Hi, I'm{' '}
          <span className="gradient-text">Alex Morgan</span>
        </h1>

        {/* Title */}
        <p className="text-xl md:text-2xl text-slate-400 font-medium mb-6">
          Full-Stack Developer & UI Craftsman
        </p>

        {/* Description */}
        <p className="text-base md:text-lg text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed">
          I build beautiful, performant web applications that blend thoughtful engineering
          with pixel-perfect design. Turning complex problems into elegant digital experiences.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <button
            onClick={scrollToProjects}
            className="px-8 py-4 rounded-full font-semibold text-white transition-transform hover:scale-105 shadow-lg"
            style={{ background: 'linear-gradient(135deg, #6c63ff, #ff6584)' }}
          >
            View My Work
          </button>
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="px-8 py-4 rounded-full font-semibold text-white glass hover:bg-white/10 transition-all flex items-center gap-2"
          >
            <Download size={18} />
            Download CV
          </a>
        </div>

        {/* Social links */}
        <div className="flex items-center justify-center gap-6">
          {[
            { icon: Github, label: 'GitHub', href: '#' },
            { icon: Linkedin, label: 'LinkedIn', href: '#' },
          ].map(({ icon: Icon, label, href }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="w-12 h-12 rounded-full glass flex items-center justify-center text-slate-400 hover:text-white hover:border-brand transition-all duration-200"
            >
              <Icon size={20} />
            </a>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToProjects}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-600 hover:text-slate-400 transition-colors animate-bounce bg-transparent border-none cursor-pointer"
        aria-label="Scroll down"
      >
        <ArrowDown size={24} />
      </button>
    </section>
  );
}
