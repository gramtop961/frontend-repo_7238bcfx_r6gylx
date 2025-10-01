import { Mail } from 'lucide-react';
import { useState } from 'react';

export default function CTA() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  return (
    <section id="early-access" className="relative mx-auto max-w-4xl px-6 pb-20">
      <div className="rounded-2xl border border-white/10 bg-gradient-to-b from-zinc-900 to-black p-6 sm:p-10">
        <div className="mx-auto max-w-2xl text-center">
          <h3 className="text-2xl font-semibold text-white">Get early access</h3>
          <p className="mt-2 text-zinc-400">Sign up to join the private beta and we’ll reach out with an invite as we roll out access.</p>
        </div>

        {!submitted ? (
          <form onSubmit={submit} className="mx-auto mt-6 flex max-w-xl items-center gap-3">
            <div className="relative w-full">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@company.com"
                className="w-full rounded-md border border-white/10 bg-zinc-950 px-4 py-3 text-white placeholder:text-zinc-500 focus:border-blue-500 focus:outline-none"
              />
              <Mail className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500" />
            </div>
            <button type="submit" className="rounded-md bg-blue-500 px-5 py-3 font-medium text-white transition hover:bg-blue-600">Request invite</button>
          </form>
        ) : (
          <div className="mx-auto mt-6 max-w-md rounded-md border border-emerald-400/20 bg-emerald-400/10 p-4 text-center text-emerald-200">
            Thanks! We’ll be in touch soon at <span className="font-medium text-emerald-100">{email}</span>.
          </div>
        )}
      </div>

      <p className="mt-6 text-center text-xs text-zinc-500">By continuing you agree to our Terms and acknowledge our Privacy Policy.</p>
    </section>
  );
}
