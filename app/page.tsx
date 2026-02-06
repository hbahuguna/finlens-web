'use client';

import FinancialDictionary from './components/FinancialDictionary';
import MarketSimulator from './components/MarketSimulator';
import { ArticleList } from './components/Articles';
import { AuthForm } from './components/Auth';
import { Button } from './components/Button';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="glass sticky top-0 z-50 border-b border-border/50 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-primary-foreground font-bold">
              F
            </div>
            <span className="text-xl font-bold tracking-tight">FinLens</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#dictionary" className="hover:text-primary transition-colors">Dictionary</a>
            <a href="#simulator" className="hover:text-primary transition-colors">Simulator</a>
            <a href="#articles" className="hover:text-primary transition-colors">Articles</a>
            <a href="#auth">
              <Button size="sm">Sign In</Button>
            </a>
          </div>
        </div>
      </nav>

      <main className="flex-grow max-w-7xl mx-auto w-full px-6 py-12">
        {/* Hero Section */}
        <section className="mb-16 text-center animate-fade-in">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight">
            Master Your <span className="text-primary">Financial</span> Future
          </h1>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            The ultimate testbed for financial literacy. Explore our dictionary, simulate market trends, and learn the language of money.
          </p>
        </section>

        {/* Core Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div id="dictionary">
            <FinancialDictionary />
          </div>
          <div id="simulator">
            <MarketSimulator />
          </div>
        </div>

        {/* Articles Section */}
        <section id="articles" className="mb-16">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">Financial Insights</h2>
              <p className="text-foreground/60">Deep dives into market dynamics and theory.</p>
            </div>
          </div>
          <ArticleList />
        </section>

        {/* Auth Section */}
        <section id="auth" className="mb-16 pt-16 border-t border-border/30">
          <AuthForm />
        </section>

        {/* Stats Section */}
        <section className="glass rounded-2xl p-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
          {[
            { label: 'Dictionary Entries', value: '450+' },
            { label: 'Active Users', value: '12.5k' },
            { label: 'Market Assets', value: '25' },
            { label: 'Course Hours', value: '80+' },
          ].map((stat) => (
            <div key={stat.label}>
              <div className="text-3xl font-bold text-primary mb-1">{stat.value}</div>
              <div className="text-sm font-medium text-foreground/60">{stat.label}</div>
            </div>
          ))}
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-border/30 px-6 py-12 bg-secondary/20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-6 h-6 bg-primary rounded flex items-center justify-center text-primary-foreground font-bold text-xs">
                F
              </div>
              <span className="font-bold tracking-tight">FinLens</span>
            </div>
            <p className="text-sm text-foreground/60 leading-relaxed">
              Empowering the next generation of investors with deterministic knowledge and real-world simulations.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="text-sm text-foreground/60 space-y-2">
              <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Cookie Policy</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Connect</h4>
            <ul className="text-sm text-foreground/60 space-y-2">
              <li><a href="#" className="hover:text-primary transition-colors">Twitter</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">LinkedIn</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">GitHub</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-border/10 text-center text-xs text-foreground/40">
          © {new Date().getFullYear()} FinLens Project. All rights reserved.
        </div>
      </footer>

      <style jsx>{`
        /* Add any page-specific layout overrides here */
        .grid { display: grid; }
        .flex { display: flex; }
      `}</style>
    </div>
  );
}
