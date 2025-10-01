import Hero from './components/Hero';
import CodeSnippets from './components/CodeSnippets';
import TrustSection from './components/TrustSection';
import CTA from './components/CTA';

export default function App() {
  return (
    <div className="min-h-screen bg-black font-inter text-white">
      <Hero />
      <CodeSnippets />
      <TrustSection />
      <CTA />
      <footer className="mx-auto max-w-6xl px-6 py-10 text-xs text-zinc-500">
        © {new Date().getFullYear()} BlueAuth, Inc. All rights reserved.
      </footer>
    </div>
  );
}
