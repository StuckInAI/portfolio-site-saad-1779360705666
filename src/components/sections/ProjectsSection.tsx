import { useState } from 'react';
import { ExternalLink, Github, Star } from 'lucide-react';
import clsx from 'clsx';
import { projects } from '@/lib/data';
import type { Project } from '@/types';

const categories = ['All', 'Featured', 'React', 'Full-Stack'];

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="glass rounded-2xl overflow-hidden group hover:border-purple-500/30 transition-all duration-300 hover:-translate-y-1">
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        {project.featured && (
          <div className="absolute top-3 left-3 flex items-center gap-1 px-2 py-1 rounded-full text-xs font-semibold text-yellow-300" style={{ background: 'rgba(0,0,0,0.6)' }}>
            <Star size={12} fill="currentColor" />
            Featured
          </div>
        )}
        {/* Hover overlay */}
        <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: 'rgba(0,0,0,0.5)' }}>
          <a
            href={project.liveUrl}
            className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-white/40 transition-colors"
            aria-label="Live demo"
          >
            <ExternalLink size={16} />
          </a>
          <a
            href={project.githubUrl}
            className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white hover:bg-white/40 transition-colors"
            aria-label="GitHub"
          >
            <Github size={16} />
          </a>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-bold text-white text-lg mb-2">{project.title}</h3>
        <p className="text-sm text-slate-500 leading-relaxed mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2 py-1 rounded-md text-xs font-medium text-purple-300"
              style={{ background: 'rgba(108,99,255,0.15)' }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState('All');

  const filtered = projects.filter((p) => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'Featured') return p.featured;
    return p.tags.some((t) => t.toLowerCase().includes(activeFilter.toLowerCase()));
  });

  return (
    <section id="projects" className="py-24 px-6" style={{ background: 'rgba(26,26,46,0.5)' }}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: '#6c63ff' }}>Portfolio</span>
          <h2 className="text-4xl md:text-5xl font-black text-white mt-2">My Projects</h2>
          <p className="text-slate-500 mt-4 max-w-xl mx-auto">
            A selection of things I've built — from side projects to production apps.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={clsx(
                'px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 border-none cursor-pointer',
                activeFilter === cat
                  ? 'text-white'
                  : 'text-slate-400 hover:text-white glass'
              )}
              style={activeFilter === cat ? { background: 'linear-gradient(135deg, #6c63ff, #ff6584)' } : {}}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
