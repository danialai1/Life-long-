'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Dumbbell, 
  Utensils, 
  Calendar, 
  Clock, 
  ChevronRight, 
  Star, 
  CheckCircle2, 
  Zap, 
  MessageSquare, 
  X, 
  Send, 
  Download, 
  Menu,
  ArrowRight,
  Target,
  TrendingUp,
  Award,
  Users
} from 'lucide-react';
import Image from 'next/image';
import Markdown from 'react-markdown';

// --- Components ---

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [dotPosition, setDotPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setTimeout(() => setDotPosition({ x: e.clientX, y: e.clientY }), 50);
    };
    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  return (
    <>
      <div 
        className="custom-cursor" 
        style={{ left: `${position.x}px`, top: `${position.y}px`, transform: 'translate(-50%, -50%)' }}
      />
      <div 
        className="custom-cursor-dot" 
        style={{ left: `${dotPosition.x}px`, top: `${dotPosition.y}px`, transform: 'translate(-50%, -50%)' }}
      />
    </>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="fixed top-0 w-full z-50 glass px-6 py-4 flex justify-between items-center">
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 bg-brand-purple rounded-lg flex items-center justify-center font-bold text-xl shadow-lg shadow-brand-purple/20">D</div>
        <span className="text-xl font-bold tracking-tighter">DANIAL <span className="text-brand-teal">AI</span></span>
      </div>
      
      <div className="hidden md:flex gap-8 text-sm font-medium uppercase tracking-widest opacity-70">
        <a href="#hero" className="hover:text-brand-teal transition-colors">Home</a>
        <a href="#life" className="hover:text-brand-teal transition-colors">Life Grid</a>
        <a href="#ai-tools" className="hover:text-brand-teal transition-colors">AI Tools</a>
        <a href="#pricing" className="hover:text-brand-teal transition-colors">Pricing</a>
      </div>

      <button className="hidden md:block px-6 py-2 bg-brand-purple rounded-full text-sm font-bold hover:scale-105 transition-transform">
        JOIN NOW
      </button>

      <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
        <Menu />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-dark-bg border-b border-white/10 p-6 flex flex-col gap-4 md:hidden"
          >
            <a href="#hero" onClick={() => setIsOpen(false)}>Home</a>
            <a href="#life" onClick={() => setIsOpen(false)}>Life Grid</a>
            <a href="#ai-tools" onClick={() => setIsOpen(false)}>AI Tools</a>
            <a href="#pricing" onClick={() => setIsOpen(false)}>Pricing</a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center pt-20 px-6 overflow-hidden">
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-brand-purple/20 blur-[120px] rounded-full" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-brand-teal/20 blur-[120px] rounded-full" />
      
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center z-10 max-w-4xl"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-bold tracking-widest uppercase mb-6">
          <Zap className="w-3 h-3 text-brand-teal" />
          Limited: First 100 get free premium month
        </div>
        
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-none mb-6">
          EVOLVE YOUR <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-purple to-brand-teal">POTENTIAL</span>
        </h1>
        
        <p className="text-lg md:text-xl text-white/60 mb-10 max-w-2xl mx-auto">
          The world&apos;s first AI fitness ecosystem that visualizes your finite time to maximize your infinite results.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-10 py-4 bg-brand-purple rounded-full font-bold text-lg flex items-center gap-2 hover:shadow-xl hover:shadow-brand-purple/20 transition-all">
            START TRANSFORMATION <ChevronRight />
          </button>
          <button className="px-10 py-4 glass rounded-full font-bold text-lg hover:bg-white/10 transition-all">
            VIEW LIFE GRID
          </button>
        </div>

        <div className="mt-16 flex items-center justify-center gap-8 opacity-50 grayscale hover:grayscale-0 transition-all">
          <div className="flex items-center gap-2 font-bold"><Users className="w-5 h-5" /> 10K+ PLANS</div>
          <div className="flex items-center gap-2 font-bold"><Star className="w-5 h-5 fill-current" /> 4.9/5 RATING</div>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        className="absolute bottom-0 w-full h-1/2 pointer-events-none"
      >
        <div className="weeks-grid opacity-30">
          {Array.from({ length: 500 }).map((_, i) => (
            <div key={i} className={`week-box ${i < 150 ? 'lived' : 'future'}`} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

const LifeInWeeks = () => {
  const [age, setAge] = useState(25);
  const [healthyYears, setHealthyYears] = useState(0);
  const totalWeeks = 52 * 90;
  const livedWeeks = age * 52;
  const gainedWeeks = healthyYears * 52;

  return (
    <section id="life" className="py-24 px-6 bg-dark-bg/50">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-6">
              TIME IS <span className="text-brand-purple">FINITE.</span> <br />
              MAKE IT <span className="text-brand-teal">COUNT.</span>
            </h2>
            <p className="text-white/60 mb-8 text-lg">
              There are only 4,680 weeks in a 90-year life. This grid represents every single one of them. See how much you&apos;ve used and how much we can help you gain back through optimized health.
            </p>

            <div className="space-y-6 mb-8">
              <div>
                <label className="block text-sm font-bold uppercase tracking-widest mb-2">Your Current Age: {age}</label>
                <input 
                  type="range" min="1" max="90" value={age} 
                  onChange={(e) => setAge(parseInt(e.target.value))}
                  className="w-full accent-brand-purple"
                />
              </div>
              <button 
                onClick={() => setHealthyYears(Math.floor(Math.random() * 10) + 5)}
                className="w-full py-4 bg-brand-teal rounded-xl font-bold uppercase tracking-widest hover:shadow-lg hover:shadow-brand-teal/20 transition-all"
              >
                CALCULATE HEALTHY YEARS GAINED
              </button>
            </div>

            {healthyYears > 0 && (
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="p-6 glass rounded-2xl border-brand-teal/30"
              >
                <h3 className="text-2xl font-bold text-brand-teal mb-2">+{healthyYears} Extra Years Gained</h3>
                <p className="text-sm opacity-70">By following our AI-optimized protocols, you&apos;re projected to add {healthyYears} years of high-vitality life to your timeline.</p>
              </motion.div>
            )}
          </div>

          <div className="relative">
            <div className="weeks-grid">
              {Array.from({ length: totalWeeks }).map((_, i) => {
                let status = 'future';
                if (i < livedWeeks) status = 'lived';
                else if (i < livedWeeks + gainedWeeks) status = 'healthy-gain';
                
                return <div key={i} className={`week-box ${status}`} />;
              })}
            </div>
            <div className="mt-6 flex gap-6 text-xs font-bold uppercase tracking-widest opacity-60">
              <div className="flex items-center gap-2"><div className="w-3 h-3 bg-brand-purple rounded-sm" /> Lived</div>
              <div className="flex items-center gap-2"><div className="w-3 h-3 bg-brand-teal rounded-sm" /> Gained</div>
              <div className="flex items-center gap-2"><div className="w-3 h-3 bg-[#1a1a1a] rounded-sm" /> Future</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const AITools = () => {
  const [activeTab, setActiveTab] = useState<'workout' | 'nutrition'>('workout');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState('');
  const [email, setEmail] = useState('');
  const [showEmailCapture, setShowEmailCapture] = useState(false);

  const handleWorkoutSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResult('');
    const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(formData);
    
    try {
      const res = await fetch('/api/generate-workout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      setResult(json.text);
      setShowEmailCapture(true);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleNutritionSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResult('');
    const formData = new FormData(e.target as HTMLFormElement);
    const data = Object.fromEntries(formData);
    
    try {
      const res = await fetch('/api/generate-nutrition', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      setResult(json.text);
      setShowEmailCapture(true);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="ai-tools" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-4">AI GENERATORS</h2>
          <p className="opacity-60">Professional-grade plans generated in seconds.</p>
        </div>

        <div className="flex justify-center gap-4 mb-12">
          <button 
            onClick={() => setActiveTab('workout')}
            className={`px-8 py-3 rounded-full font-bold transition-all ${activeTab === 'workout' ? 'bg-brand-purple' : 'glass'}`}
          >
            WORKOUT
          </button>
          <button 
            onClick={() => setActiveTab('nutrition')}
            className={`px-8 py-3 rounded-full font-bold transition-all ${activeTab === 'nutrition' ? 'bg-brand-teal' : 'glass'}`}
          >
            NUTRITION
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="glass p-8 rounded-3xl border-white/5">
            {activeTab === 'workout' ? (
              <form onSubmit={handleWorkoutSubmit} className="space-y-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest mb-2 opacity-60">Goal</label>
                  <select name="goal" className="w-full bg-white/5 border border-white/10 rounded-xl p-3 outline-none focus:border-brand-purple">
                    <option value="muscle">Build Muscle</option>
                    <option value="fat-loss">Fat Loss</option>
                    <option value="strength">Pure Strength</option>
                    <option value="endurance">Endurance</option>
                  </select>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest mb-2 opacity-60">Level</label>
                    <select name="level" className="w-full bg-white/5 border border-white/10 rounded-xl p-3 outline-none">
                      <option value="beginner">Beginner</option>
                      <option value="intermediate">Intermediate</option>
                      <option value="advanced">Advanced</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest mb-2 opacity-60">Days/Week</label>
                    <input name="days" type="number" min="1" max="7" defaultValue="4" className="w-full bg-white/5 border border-white/10 rounded-xl p-3 outline-none" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest mb-2 opacity-60">Focus Area</label>
                  <input name="focus" type="text" placeholder="e.g. Legs, Upper Body, Core" className="w-full bg-white/5 border border-white/10 rounded-xl p-3 outline-none" />
                </div>
                <button disabled={loading} className="w-full py-4 bg-brand-purple rounded-xl font-bold uppercase tracking-widest hover:shadow-lg transition-all disabled:opacity-50">
                  {loading ? 'GENERATING...' : 'GENERATE WORKOUT'}
                </button>
              </form>
            ) : (
              <form onSubmit={handleNutritionSubmit} className="space-y-6">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest mb-2 opacity-60">Diet Preference</label>
                  <select name="diet" className="w-full bg-white/5 border border-white/10 rounded-xl p-3 outline-none focus:border-brand-teal">
                    <option value="omnivore">Omnivore</option>
                    <option value="vegan">Vegan</option>
                    <option value="keto">Keto</option>
                    <option value="paleo">Paleo</option>
                  </select>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest mb-2 opacity-60">Target Calories</label>
                    <input name="calories" type="number" defaultValue="2500" className="w-full bg-white/5 border border-white/10 rounded-xl p-3 outline-none" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest mb-2 opacity-60">Meals/Day</label>
                    <input name="meals" type="number" min="1" max="8" defaultValue="4" className="w-full bg-white/5 border border-white/10 rounded-xl p-3 outline-none" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest mb-2 opacity-60">Allergies / Dislikes</label>
                  <input name="allergies" type="text" placeholder="e.g. Nuts, Dairy, Fish" className="w-full bg-white/5 border border-white/10 rounded-xl p-3 outline-none" />
                </div>
                <button disabled={loading} className="w-full py-4 bg-brand-teal rounded-xl font-bold uppercase tracking-widest hover:shadow-lg transition-all disabled:opacity-50">
                  {loading ? 'GENERATING...' : 'GENERATE NUTRITION'}
                </button>
              </form>
            )}
          </div>

          <div className="glass p-8 rounded-3xl border-white/5 min-h-[400px] flex flex-col">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-bold uppercase tracking-widest text-sm opacity-60">AI Output</h3>
              {result && (
                <button 
                  onClick={() => window.print()}
                  className="flex items-center gap-2 text-xs font-bold text-brand-teal hover:underline"
                >
                  <Download className="w-3 h-3" /> PDF
                </button>
              )}
            </div>
            
            <div className="flex-1 overflow-y-auto max-h-[500px] prose prose-invert prose-sm">
              {loading ? (
                <div className="flex flex-col items-center justify-center h-full gap-4 opacity-40">
                  <div className="w-12 h-12 border-4 border-brand-purple border-t-transparent rounded-full animate-spin" />
                  <p className="animate-pulse">Analyzing your profile...</p>
                </div>
              ) : result ? (
                <Markdown>{result}</Markdown>
              ) : (
                <div className="flex flex-col items-center justify-center h-full opacity-20 text-center">
                  <Zap className="w-12 h-12 mb-4" />
                  <p>Your personalized plan will appear here.</p>
                </div>
              )}
            </div>

            <AnimatePresence>
              {showEmailCapture && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-6 p-4 bg-white/5 rounded-xl border border-white/10"
                >
                  <p className="text-xs font-bold mb-2 uppercase opacity-60">Save this plan to your email</p>
                  <div className="flex gap-2">
                    <input 
                      type="email" 
                      placeholder="Enter email" 
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="flex-1 bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm outline-none"
                    />
                    <button 
                      onClick={() => {
                        const subject = encodeURIComponent('My AI Fitness Plan');
                        const body = encodeURIComponent(result);
                        window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
                        setShowEmailCapture(false);
                      }}
                      className="px-4 py-2 bg-brand-purple rounded-lg text-xs font-bold"
                    >
                      SEND
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

const Pricing = () => {
  const tiers = [
    {
      name: 'Free',
      price: '$0',
      features: ['Basic AI Generators', 'Life Grid Access', 'Community Forum'],
      cta: 'Get Started',
      popular: false
    },
    {
      name: 'Pro',
      price: '$19',
      features: ['Unlimited AI Plans', 'Advanced Analytics', 'PDF Downloads', 'AI Coach Chat'],
      cta: 'Go Pro',
      popular: true
    },
    {
      name: 'Elite',
      price: '$39',
      features: ['1-on-1 Human Review', 'Custom Supplement Stack', 'Priority Support', 'Exclusive Workshops'],
      cta: 'Join Elite',
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-24 px-6 bg-dark-bg/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-4">PRICING TIERS</h2>
          <p className="opacity-60">Choose the level of your evolution.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {tiers.map((tier, i) => (
            <div key={i} className={`relative glass p-10 rounded-3xl border-white/5 flex flex-col ${tier.popular ? 'border-brand-purple/50 scale-105 z-10' : ''}`}>
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-brand-purple rounded-full text-[10px] font-black uppercase tracking-widest">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
              <div className="text-5xl font-black mb-6">{tier.price}<span className="text-lg opacity-40 font-medium">/mo</span></div>
              <ul className="space-y-4 mb-10 flex-1">
                {tier.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-3 text-sm opacity-70">
                    <CheckCircle2 className="w-4 h-4 text-brand-teal" /> {f}
                  </li>
                ))}
              </ul>
              <button className={`w-full py-4 rounded-xl font-bold uppercase tracking-widest transition-all ${tier.popular ? 'bg-brand-purple hover:shadow-lg shadow-brand-purple/20' : 'glass hover:bg-white/10'}`}>
                {tier.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const reviews = [
    { name: 'Marcus J.', role: 'Elite Member', text: 'The Life Grid changed my perspective. I gained 8 healthy years back.', img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=400&h=400&fit=crop' },
    { name: 'Sarah L.', role: 'Pro Member', text: 'AI Coach is like having a world-class trainer in my pocket 24/7.', img: 'https://images.unsplash.com/photo-1548690312-e3b507d17a4d?w=400&h=400&fit=crop' },
    { name: 'David K.', role: 'Free User', text: 'Even the free tools are better than most paid apps I\'ve used.', img: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop' },
    { name: 'Elena R.', role: 'Elite Member', text: 'Down 15lbs in 6 weeks. The nutrition plans are actually delicious.', img: 'https://images.unsplash.com/photo-1518310383802-640c2de311b2?w=400&h=400&fit=crop' },
    { name: 'James T.', role: 'Pro Member', text: 'Finally broke my bench press plateau thanks to the AI programming.', img: 'https://images.unsplash.com/photo-1533681018184-68bd1d8f39fe?w=400&h=400&fit=crop' },
    { name: 'Maya W.', role: 'Elite Member', text: 'The holistic approach is what I needed. Mind and body alignment.', img: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop' },
  ];

  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-4">USER SUCCESS</h2>
          <p className="opacity-60">Real transformations from our global community.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((r, i) => (
            <div key={i} className="glass p-8 rounded-3xl border-white/5 hover:border-white/10 transition-all">
              <div className="flex items-center gap-4 mb-6">
                <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-brand-teal">
                  <Image src={r.img} alt={r.name} fill className="object-cover" />
                </div>
                <div>
                  <div className="font-bold">{r.name}</div>
                  <div className="text-xs opacity-50 uppercase tracking-widest">{r.role}</div>
                </div>
              </div>
              <p className="text-sm italic opacity-80 leading-relaxed">&quot;{r.text}&quot;</p>
              <div className="mt-4 flex gap-1">
                {Array.from({ length: 5 }).map((_, j) => <Star key={j} className="w-3 h-3 fill-brand-teal text-brand-teal" />)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const AICoachChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'ai', text: 'Hello! I am your Danial AI Coach. How can I help you evolve today?' }
  ]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;
    setMessages([...messages, { role: 'user', text: input }]);
    setInput('');
    
    // Simulate AI response
    setTimeout(() => {
      setMessages(prev => [...prev, { role: 'ai', text: "That&apos;s a great question. To optimize your results, I recommend focusing on progressive overload and consistent protein intake. Would you like me to generate a specific plan for that?" }]);
    }, 1000);
  };

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 w-16 h-16 bg-brand-purple rounded-full flex items-center justify-center shadow-2xl shadow-brand-purple/40 z-40 hover:scale-110 transition-transform"
      >
        <MessageSquare className="w-8 h-8" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="fixed bottom-28 right-8 w-[350px] h-[500px] glass rounded-3xl z-50 flex flex-col overflow-hidden shadow-2xl border-white/10"
          >
            <div className="p-4 bg-brand-purple flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center font-bold text-xs">AI</div>
                <span className="font-bold text-sm">AI COACH</span>
              </div>
              <button onClick={() => setIsOpen(false)}><X className="w-5 h-5" /></button>
            </div>

            <div className="flex-1 p-4 overflow-y-auto space-y-4">
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${m.role === 'user' ? 'bg-brand-purple' : 'bg-white/10'}`}>
                    {m.text}
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 border-t border-white/10 flex gap-2">
              <input 
                type="text" 
                placeholder="Ask anything..." 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                className="flex-1 bg-white/5 rounded-full px-4 py-2 text-sm outline-none border border-white/10 focus:border-brand-purple"
              />
              <button onClick={handleSend} className="w-10 h-10 bg-brand-purple rounded-full flex items-center justify-center">
                <Send className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const Footer = () => {
  return (
    <footer className="py-16 px-6 border-t border-white/5">
      <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-12">
        <div className="col-span-2">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 bg-brand-purple rounded flex items-center justify-center font-bold">D</div>
            <span className="text-xl font-bold tracking-tighter">DANIAL <span className="text-brand-teal">AI</span></span>
          </div>
          <p className="opacity-40 text-sm max-w-xs mb-6">
            The ultimate AI-driven fitness ecosystem designed to maximize your most valuable asset: Time.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 glass rounded-full flex items-center justify-center hover:bg-white/10 transition-all"><Users className="w-4 h-4" /></a>
            <a href="#" className="w-10 h-10 glass rounded-full flex items-center justify-center hover:bg-white/10 transition-all"><Target className="w-4 h-4" /></a>
            <a href="#" className="w-10 h-10 glass rounded-full flex items-center justify-center hover:bg-white/10 transition-all"><Award className="w-4 h-4" /></a>
          </div>
        </div>

        <div>
          <h4 className="font-bold uppercase tracking-widest text-xs mb-6 opacity-60">Contact</h4>
          <ul className="space-y-4 text-sm opacity-40">
            <li>danialshakeelahmed@gmail.com</li>
            <li>+92 3XX XXXXXXX</li>
            <li>Lahore, Pakistan</li>
          </ul>
        </div>

        <div>
          <h4 className="font-bold uppercase tracking-widest text-xs mb-6 opacity-60">Legal</h4>
          <ul className="space-y-4 text-sm opacity-40">
            <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Terms of Service</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Cookie Policy</a></li>
          </ul>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-16 pt-8 border-t border-white/5 flex flex-col md:row justify-between items-center gap-4 text-[10px] font-bold uppercase tracking-[0.2em] opacity-30">
        <span>© 2026 DANIAL AI FITNESS. ALL RIGHTS RESERVED.</span>
        <span>MADE BY DANIAL AHMAD</span>
      </div>
    </footer>
  );
};

// --- Main Page ---

export default function Page() {
  return (
    <main className="selection:bg-brand-teal selection:text-white">
      <CustomCursor />
      <Navbar />
      <Hero />
      <LifeInWeeks />
      <AITools />
      <Pricing />
      <Testimonials />
      <AICoachChat />
      <Footer />
    </main>
  );
}
