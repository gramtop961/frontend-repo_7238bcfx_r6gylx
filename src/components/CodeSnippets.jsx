import { Copy } from 'lucide-react';
import { useState } from 'react';

const Snippet = ({ label, code }) => {
  const [copied, setCopied] = useState(false);
  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(code.trim());
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch {}
  };
  return (
    <div className="relative rounded-lg border border-white/10 bg-zinc-900/60 p-4 text-left">
      <div className="mb-2 text-xs uppercase tracking-wide text-zinc-400">{label}</div>
      <pre className="whitespace-pre-wrap break-words text-xs leading-relaxed text-zinc-200">
        <code>{code.trim()}</code>
      </pre>
      <button onClick={onCopy} className="absolute right-3 top-3 inline-flex items-center gap-2 rounded-md bg-white/10 px-2 py-1 text-xs text-white backdrop-blur transition hover:bg-white/20">
        <Copy className="h-3.5 w-3.5" /> {copied ? 'Copied' : 'Copy'}
      </button>
    </div>
  );
};

export default function CodeSnippets() {
  const jsSnippet = `// 1. Install SDK\nnpm i @blueauth/js\n\n// 2. One-line login\nimport { login } from '@blueauth/js'\nawait login()`;

  const reactSnippet = `import { useEffect } from 'react'\nimport { init, login } from '@blueauth/react'\n\nuseEffect(() => {\n  init({ projectId: process.env.BLUEAUTH_PROJECT_ID })\n}, [])\n\n<button onClick={() => login()}>Sign in</button>`;

  const nodeSnippet = `import express from 'express'\nimport { verify } from '@blueauth/server'\n\nconst app = express()\napp.post('/verify', async (req, res) => {\n  const session = await verify(req.body)\n  res.json(session)\n})`;

  return (
    <section id="code" className="relative mx-auto max-w-6xl px-6 py-16">
      <div className="mb-8 flex items-center justify-between">
        <h2 className="text-xl font-semibold text-white sm:text-2xl">Drop‑in, one‑line auth</h2>
        <span className="text-xs text-zinc-400">Copy and ship</span>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <Snippet label="JavaScript" code={jsSnippet} />
        <Snippet label="React" code={reactSnippet} />
        <Snippet label="Node" code={nodeSnippet} />
      </div>
    </section>
  );
}
