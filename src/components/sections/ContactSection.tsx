import { useState } from 'react';
import { Send, Mail, MapPin, MessageSquare, CheckCircle2 } from 'lucide-react';
import clsx from 'clsx';

type FormState = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function ContactSection() {
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<Status>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setTimeout(() => {
      setStatus('success');
      setForm({ name: '', email: '', subject: '', message: '' });
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-semibold tracking-widest uppercase" style={{ color: '#6c63ff' }}>Contact</span>
          <h2 className="text-4xl md:text-5xl font-black text-white mt-2">Let's Work Together</h2>
          <p className="text-slate-500 mt-4 max-w-xl mx-auto">
            Have a project in mind or just want to say hello? My inbox is always open.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-10">
          {/* Left info */}
          <div className="md:col-span-2 flex flex-col gap-6">
            {[
              { icon: Mail, label: 'Email', value: 'alex@alexmorgan.dev' },
              { icon: MapPin, label: 'Location', value: 'San Francisco, CA' },
              { icon: MessageSquare, label: 'Response time', value: 'Within 24 hours' },
            ].map(({ icon: Icon, label, value }) => (
              <div key={label} className="glass rounded-2xl p-5 flex items-center gap-4">
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: 'linear-gradient(135deg, rgba(108,99,255,0.3), rgba(255,101,132,0.3))' }}
                >
                  <Icon size={20} style={{ color: '#6c63ff' }} />
                </div>
                <div>
                  <p className="text-xs text-slate-500 mb-0.5">{label}</p>
                  <p className="text-sm font-medium text-white">{value}</p>
                </div>
              </div>
            ))}

            {/* Availability card */}
            <div
              className="rounded-2xl p-5"
              style={{ background: 'linear-gradient(135deg, rgba(108,99,255,0.2), rgba(255,101,132,0.2))', border: '1px solid rgba(108,99,255,0.3)' }}
            >
              <p className="text-sm font-semibold text-white mb-1">🟢 Open to opportunities</p>
              <p className="text-xs text-slate-400">
                Currently available for freelance projects and full-time remote positions.
              </p>
            </div>
          </div>

          {/* Right form */}
          <div className="md:col-span-3">
            {status === 'success' ? (
              <div className="glass rounded-2xl p-10 flex flex-col items-center justify-center text-center gap-4 h-full">
                <CheckCircle2 size={56} style={{ color: '#6c63ff' }} />
                <h3 className="text-2xl font-bold text-white">Message Sent!</h3>
                <p className="text-slate-400">Thanks for reaching out. I'll get back to you within 24 hours.</p>
                <button
                  onClick={() => setStatus('idle')}
                  className="mt-4 px-6 py-2 rounded-full text-sm font-medium text-white"
                  style={{ background: 'linear-gradient(135deg, #6c63ff, #ff6584)' }}
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="glass rounded-2xl p-6 flex flex-col gap-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-slate-500 mb-1 block">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                      className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-slate-600 outline-none focus:ring-1 transition-all"
                      style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}
                    />
                  </div>
                  <div>
                    <label className="text-xs text-slate-500 mb-1 block">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-slate-600 outline-none transition-all"
                      style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}
                    />
                  </div>
                </div>
                <div>
                  <label className="text-xs text-slate-500 mb-1 block">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    required
                    placeholder="What's this about?"
                    className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-slate-600 outline-none transition-all"
                    style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}
                  />
                </div>
                <div>
                  <label className="text-xs text-slate-500 mb-1 block">Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Tell me about your project..."
                    className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder-slate-600 outline-none transition-all resize-none"
                    style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)' }}
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className={clsx(
                    'flex items-center justify-center gap-2 px-8 py-4 rounded-full font-semibold text-white transition-all duration-200',
                    status === 'loading' ? 'opacity-70 cursor-not-allowed' : 'hover:scale-105'
                  )}
                  style={{ background: 'linear-gradient(135deg, #6c63ff, #ff6584)' }}
                >
                  {status === 'loading' ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                      Sending
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      Send Message
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
