import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { TrendingUp, BrainCircuit, ShieldCheck, Briefcase, ChevronRight, Activity, Cpu, X, Mail, Phone, Lock, User } from 'lucide-react';

const investmentTiers = [
  1000, 2500, 5000, 10000, 25000, 50000, 75000, 100000
];

const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('en-ZA', {
    style: 'currency',
    currency: 'ZAR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount).replace('ZAR', 'R');
};

const calculateReturn = (amount: number, percentage: number) => {
  const total = amount + (amount * (percentage / 100));
  return formatCurrency(total);
};

export default function App() {
  const [isSignUpOpen, setIsSignUpOpen] = useState(false);
  const [usernameInput, setUsernameInput] = useState('');
  const [loggedInUser, setLoggedInUser] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-50 font-sans selection:bg-emerald-500/30 selection:text-emerald-200">
      {/* Navbar */}
      <nav className="fixed top-0 w-full border-b border-white/10 bg-neutral-950/80 backdrop-blur-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
              <BrainCircuit className="w-6 h-6 text-emerald-400" />
            </div>
            <span className="font-display font-bold text-xl tracking-tight">AI Conglomerate</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-400">
            <a href="#about" className="hover:text-emerald-400 transition-colors">About</a>
            <a href="#investment-plan" className="hover:text-emerald-400 transition-colors">Investment Plan</a>
            {loggedInUser ? (
              <div className="flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 px-4 py-2 rounded-full">
                <div className="w-6 h-6 rounded-full bg-emerald-500/20 flex items-center justify-center">
                  <User className="w-3.5 h-3.5 text-emerald-400" />
                </div>
                <span className="font-semibold text-emerald-50 text-sm">{loggedInUser}</span>
              </div>
            ) : (
              <button 
                onClick={() => setIsSignUpOpen(true)}
                className="bg-emerald-500 hover:bg-emerald-400 text-neutral-950 px-5 py-2.5 rounded-full font-semibold transition-all">
                Invest Now
              </button>
            )}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-900/20 via-neutral-950 to-neutral-950 -z-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-medium mb-8"
          >
            <Activity className="w-4 h-4" />
            <span>The Future of Artificial Intelligence</span>
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-display font-bold tracking-tight mb-8"
          >
            Invest in the <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">
              AI Conglomerate
            </span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto mb-10"
          >
            Secure your stake in next-generation artificial intelligence technologies. 
            Exceptional returns powered by breakthrough AI infrastructure and enterprise solutions.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            {loggedInUser ? (
              <button 
                className="w-full sm:w-auto px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-neutral-950 rounded-full font-bold transition-all flex items-center justify-center gap-2 group">
                View Dashboard
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            ) : (
              <button 
                onClick={() => setIsSignUpOpen(true)}
                className="w-full sm:w-auto px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-neutral-950 rounded-full font-bold transition-all flex items-center justify-center gap-2 group">
                Start Investing
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            )}
            <a href="#investment-plan" className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 text-white rounded-full font-semibold transition-all backdrop-blur-sm border border-white/10 flex items-center justify-center gap-2">
              View Returns Plan
            </a>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section id="about" className="py-20 border-y border-white/5 bg-neutral-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl">
              <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center mb-6">
                <Cpu className="w-6 h-6 text-emerald-400" />
              </div>
              <h3 className="text-xl font-bold font-display mb-3">AI Infrastructure</h3>
              <p className="text-neutral-400 leading-relaxed">
                Investing directly into the compute power and data centers that will drive the next decade of AI models.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-5">
                <TrendingUp className="w-32 h-32" />
              </div>
              <div className="w-12 h-12 bg-cyan-500/10 rounded-xl flex items-center justify-center mb-6 relative z-10">
                <TrendingUp className="w-6 h-6 text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold font-display mb-3 relative z-10">Compounding Growth</h3>
              <p className="text-neutral-400 leading-relaxed relative z-10">
                Structured returns yielding up to 90% over a 5-year period, driven by high-growth technological adoption.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl">
              <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center mb-6">
                <ShieldCheck className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-bold font-display mb-3">Secure Assets</h3>
              <p className="text-neutral-400 leading-relaxed">
                Risk-mitigated portfolios backed by tangible AI enterprise contracts and intellectual property.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Plan Table */}
      <section id="investment-plan" className="py-24 relative">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-64 h-64 bg-emerald-500/20 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">5-Year Investment Plan</h2>
            <p className="text-neutral-400 max-w-2xl mx-auto text-lg">
              Projected total returns including principal capital across different time horizons. 
              Start from as little as R 1,000 and grow your wealth with AI.
            </p>
          </div>

          <div className="bg-neutral-900 border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-white/10 bg-neutral-950/50">
                    <th className="py-6 px-6 font-display font-semibold text-neutral-300 w-1/6">
                      <div className="flex items-center gap-2">
                        <Briefcase className="w-4 h-4 text-emerald-500" />
                        Investment
                      </div>
                    </th>
                    <th className="py-6 px-6 font-display font-semibold text-neutral-300">
                      <span className="block text-emerald-400 text-xs mb-1 uppercase tracking-wider font-bold">30% Return</span>
                      1 Month
                    </th>
                    <th className="py-6 px-6 font-display font-semibold text-neutral-300">
                      <span className="block text-emerald-400 text-xs mb-1 uppercase tracking-wider font-bold">45% Return</span>
                      6 Months
                    </th>
                    <th className="py-6 px-6 font-display font-semibold text-neutral-300">
                      <span className="block text-emerald-400 text-xs mb-1 uppercase tracking-wider font-bold">60% Return</span>
                      1 Year
                    </th>
                    <th className="py-6 px-6 font-display font-semibold text-neutral-300">
                      <span className="block text-emerald-400 text-xs mb-1 uppercase tracking-wider font-bold">75% Return</span>
                      2 Years
                    </th>
                    <th className="py-6 px-6 font-display font-semibold text-neutral-300">
                      <span className="block text-emerald-400 text-xs mb-1 uppercase tracking-wider font-bold">90% Return</span>
                      5 Years
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {investmentTiers.map((amount, idx) => (
                    <motion.tr 
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: idx * 0.05 }}
                      key={amount} 
                      className="hover:bg-white/[0.02] transition-colors group"
                    >
                      <td className="py-5 px-6 font-medium text-white border-r border-white/5 bg-neutral-950/20 group-hover:bg-neutral-900/50">
                        {formatCurrency(amount)}
                      </td>
                      <td className="py-5 px-6 text-neutral-400 font-mono text-sm group-hover:text-neutral-300 transition-colors">
                        {calculateReturn(amount, 30)}
                      </td>
                      <td className="py-5 px-6 text-neutral-400 font-mono text-sm group-hover:text-neutral-300 transition-colors">
                        {calculateReturn(amount, 45)}
                      </td>
                      <td className="py-5 px-6 text-neutral-400 font-mono text-sm group-hover:text-neutral-300 transition-colors">
                        {calculateReturn(amount, 60)}
                      </td>
                      <td className="py-5 px-6 text-neutral-400 font-mono text-sm group-hover:text-neutral-300 transition-colors">
                        {calculateReturn(amount, 75)}
                      </td>
                      <td className="py-5 px-6 text-emerald-400/80 font-mono text-sm font-semibold group-hover:text-emerald-400 transition-colors relative">
                        {calculateReturn(amount, 90)}
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="bg-emerald-500/10 p-6 text-center border-t border-emerald-500/20">
              <p className="text-emerald-200/80 text-sm">
                * Values shown represent the total projected return (Initial Investment + Profit). Returns are subject to market conditions in the AI sector.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA / Footer */}
      <footer className="border-t border-white/10 bg-neutral-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex flex-col items-center justify-center text-center">
            <BrainCircuit className="w-12 h-12 text-emerald-500 mb-6" />
            <h2 className="text-2xl font-display font-bold mb-4">Ready to shape the future?</h2>
            <p className="text-neutral-400 max-w-md mx-auto mb-8">
              Join thousands of investors backing the infrastructure of tomorrow.
            </p>
            {loggedInUser ? (
              <button 
                className="px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-neutral-950 rounded-full font-bold transition-all hover:scale-105 active:scale-95">
                Go to Dashboard
              </button>
            ) : (
              <button 
                onClick={() => setIsSignUpOpen(true)}
                className="px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-neutral-950 rounded-full font-bold transition-all hover:scale-105 active:scale-95">
                Create an Account
              </button>
            )}
          </div>
          <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-sm text-neutral-500">
            <p>© {new Date().getFullYear()} AI Conglomerate. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Risk Disclosure</a>
            </div>
          </div>
        </div>
      </footer>

      {/* Sign Up Modal */}
      <AnimatePresence>
        {isSignUpOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsSignUpOpen(false)}
              className="absolute inset-0 bg-neutral-950/80 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-md bg-neutral-900 border border-white/10 rounded-3xl p-8 shadow-2xl"
            >
              <button 
                onClick={() => setIsSignUpOpen(false)}
                className="absolute top-6 right-6 text-neutral-500 hover:text-white transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="mb-8">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20 mb-4">
                  <BrainCircuit className="w-6 h-6 text-emerald-400" />
                </div>
                <h2 className="text-2xl font-display font-bold mb-2">Create your account</h2>
                <p className="text-neutral-400 text-sm">Join the AI Conglomerate and start investing.</p>
              </div>

              <form className="space-y-4" onSubmit={(e) => { 
                e.preventDefault(); 
                setLoggedInUser(usernameInput || 'Investor'); 
                setIsSignUpOpen(false); 
              }}>
                <div>
                  <label className="block text-sm font-medium text-neutral-300 mb-1.5">Username</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <User className="h-5 w-5 text-neutral-500" />
                    </div>
                    <input 
                      type="text" 
                      required
                      value={usernameInput}
                      onChange={(e) => setUsernameInput(e.target.value)}
                      placeholder="e.g. Satoshi_N" 
                      className="block w-full pl-10 pr-3 py-3 border border-white/10 rounded-xl bg-neutral-950 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all font-sans"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-300 mb-1.5">Email Address</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Mail className="h-5 w-5 text-neutral-500" />
                    </div>
                    <input 
                      type="email" 
                      required
                      placeholder="you@example.com" 
                      className="block w-full pl-10 pr-3 py-3 border border-white/10 rounded-xl bg-neutral-950 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all font-sans"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-300 mb-1.5">Phone Number</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Phone className="h-5 w-5 text-neutral-500" />
                    </div>
                    <input 
                      type="tel" 
                      required
                      placeholder="+27 82 123 4567" 
                      className="block w-full pl-10 pr-3 py-3 border border-white/10 rounded-xl bg-neutral-950 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all font-sans"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-neutral-300 mb-1.5">Password</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Lock className="h-5 w-5 text-neutral-500" />
                    </div>
                    <input 
                      type="password" 
                      required
                      placeholder="••••••••" 
                      className="block w-full pl-10 pr-3 py-3 border border-white/10 rounded-xl bg-neutral-950 text-white placeholder-neutral-500 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all font-sans"
                    />
                  </div>
                </div>

                <div className="pt-2">
                  <button 
                    type="submit"
                    className="w-full flex items-center justify-center py-3.5 px-4 bg-emerald-500 hover:bg-emerald-400 text-neutral-950 rounded-xl font-bold transition-all focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:ring-offset-2 focus:ring-offset-neutral-900"
                  >
                    Complete Sign Up
                  </button>
                </div>
                
                <p className="text-center text-xs text-neutral-500 mt-4 leading-relaxed">
                  By signing up, you agree to our Terms of Service and Privacy Policy. Investments are subject to market risks.
                </p>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

