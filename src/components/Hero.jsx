import { ArrowRight, Fingerprint } from 'lucide-react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[88vh] w-full overflow-hidden bg-black">
      {/* 3D Scene */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft gradient overlays that don't block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_10%,rgba(37,99,235,0.35),transparent_60%)]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[88vh] max-w-7xl flex-col px-6">
        {/* Nav */}
        <header className="flex items-center justify-between py-6">
          <a href="#" className="group inline-flex items-center gap-2 text-white">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-blue-500/20 ring-1 ring-inset ring-blue-400/40">
              <Fingerprint className="h-4 w-4 text-blue-300" />
            </span>
            <span className="font-semibold tracking-tight">BlueAuth</span>
          </a>
          <nav className="hidden items-center gap-6 text-sm text-zinc-300 md:flex">
            <a href="#code" className="hover:text-white">Docs</a>
            <a href="#trust" className="hover:text-white">Security</a>
            <a href="#early-access" className="rounded-md bg-white/10 px-4 py-2 font-medium text-white backdrop-blur transition hover:bg-white/20">Get early access</a>
          </nav>
        </header>

        <div className="mx-auto mt-10 grid w-full flex-1 place-items-center text-center">
          <div className="max-w-3xl">
            <div className="mx-auto mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-zinc-300 backdrop-blur">
              <div className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
              WebAuthn + FIDO2 • SOC2-ready
            </div>
            <h1 className="bg-gradient-to-b from-white to-zinc-400 bg-clip-text text-5xl font-semibold leading-tight text-transparent sm:text-6xl">
              Auth that disappears.
            </h1>
            <p className="mt-5 text-balance text-zinc-300">
              Passwordless biometric login for the modern stack. Ship secure sign‑in with a single line of code and let identity fade into the background.
            </p>
            <div className="mt-8 flex items-center justify-center gap-3">
              <a href="#early-access" className="inline-flex items-center gap-2 rounded-md bg-blue-500 px-5 py-3 font-medium text-white shadow/50 shadow-blue-500/30 transition hover:bg-blue-600">
                Get early access
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#code" className="inline-flex items-center gap-2 rounded-md bg-white/10 px-5 py-3 font-medium text-white backdrop-blur transition hover:bg-white/20">
                View code snippets
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
