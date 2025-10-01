import { ShieldCheck, Lock, KeyRound, Server } from 'lucide-react';

const Feature = ({ icon: Icon, title, desc }) => (
  <div className="rounded-xl border border-white/10 bg-zinc-900/50 p-5">
    <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-md bg-emerald-400/10 ring-1 ring-inset ring-emerald-400/30">
      <Icon className="h-5 w-5 text-emerald-300" />
    </div>
    <h3 className="text-white">{title}</h3>
    <p className="mt-1 text-sm text-zinc-400">{desc}</p>
  </div>
);

export default function TrustSection() {
  return (
    <section id="trust" className="mx-auto max-w-6xl px-6 py-20">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="bg-gradient-to-b from-white to-zinc-400 bg-clip-text text-3xl font-semibold text-transparent">Built for trust</h2>
        <p className="mt-3 text-zinc-400">Hardware‑backed keys, audited infrastructure, and privacy by design. We sweat the details so you don’t have to.</p>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Feature icon={ShieldCheck} title="FIDO2/WebAuthn" desc="Native biometrics with phishing‑resistant security keys." />
        <Feature icon={Lock} title="End‑to‑end" desc="Attestation, challenge signing, and replay protection baked in." />
        <Feature icon={KeyRound} title="No secrets at rest" desc="Ephemeral tokens, short TTLs, and scoped permissions." />
        <Feature icon={Server} title="SOC2 & GDPR" desc="Region control, data minimization, and audit trails." />
      </div>
    </section>
  );
}
