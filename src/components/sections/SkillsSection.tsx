import { skills } from '@/lib/data';
import type { Skill } from '@/types';
import clsx from 'clsx';
import { useState } from 'react';

const categoryLabels: Record<Skill['category'], string> = {
  frontend: 'Frontend',
  backend: 'Backend',
  tools: 'Tools & DevOps',
  design: 'Design',
};

const categoryColors: Record<Skill['category'], string> = {
  frontend: '#6c63ff',
  backend: '#ff6584',
  tools: '#00d4ff',
  design: '#ffd166',
};

function SkillBar({ skill }: { skill: Skill }) {
  const color = categoryColors[skill.category];
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-1">
        <span className="text-sm font-medium text-slate-300">{skill.name}</span>
        <span className="text-xs text-slate-500">{skill.level}%</span>
      </div>
      <div className="h-2 rounded-full bg-white/10 overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-1000"
          style={{ width: `${skill.level}%`, background: `linear-gradient(90deg, ${color}80, ${color})` }}
        />
      </div>
    </div>
  );
}

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState<Skill['category'] | 'all'>('all');
  const categories = Object.keys(categoryLabels) as Skill['category'][];

  const filteredSkills = activeCategory === 'all'
    ? skills
    : skills.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: '#6c63ff' }}>Expertise</span>
          <h2 className="text-4xl md:text-5xl font-black text-white mt-2">Skills & Tools</h2>
          <p className="text-slate-500 mt-4 max-w-xl mx-auto">
            Technologies I work with daily and have built production software with.
          </p>
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button
            onClick={() => setActiveCategory('all')}
            className={clsx(
              'px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 border-none cursor-pointer',
              activeCategory === 'all' ? 'text-white' : 'text-slate-400 hover:text-white glass'
            )}
            style={activeCategory === 'all' ? { background: 'linear-gradient(135deg, #6c63ff, #ff6584)' } : {}}
          >
            All
          </button>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={clsx(
                'px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 border-none cursor-pointer',
                activeCategory === cat ? 'text-white' : 'text-slate-400 hover:text-white glass'
              )}
              style={activeCategory === cat ? { background: `linear-gradient(135deg, ${categoryColors[cat]}aa, ${categoryColors[cat]})` } : {}}
            >
              {categoryLabels[cat]}
            </button>
          ))}
        </div>

        {/* Skills grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {activeCategory === 'all'
            ? categories.map((cat) => (
                <div key={cat} className="glass rounded-2xl p-6">
                  <h3
                    className="text-sm font-semibold uppercase tracking-widest mb-5"
                    style={{ color: categoryColors[cat] }}
                  >
                    {categoryLabels[cat]}
                  </h3>
                  {filteredSkills
                    .filter((s) => s.category === cat)
                    .map((skill) => <SkillBar key={skill.name} skill={skill} />)
                  }
                </div>
              ))
            : (
                <div className="md:col-span-2 glass rounded-2xl p-6">
                  <h3
                    className="text-sm font-semibold uppercase tracking-widest mb-5"
                    style={{ color: categoryColors[activeCategory] }}
                  >
                    {categoryLabels[activeCategory]}
                  </h3>
                  {filteredSkills.map((skill) => <SkillBar key={skill.name} skill={skill} />)}
                </div>
              )
          }
        </div>
      </div>
    </section>
  );
}
