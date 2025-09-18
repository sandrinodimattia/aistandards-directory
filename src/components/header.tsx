'use client';

import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-200/70 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 md:px-6">
        <Link href="/" className="flex items-center gap-3 text-neutral-900">
          <span className="font-mono text-xs text-slate-800 block">
            aistandards.directory
          </span>
        </Link>
      </div>
    </header>
  );
}
