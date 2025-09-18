import Cards from '@/components/cards';
import Squares from '@/components/squares';

import standards from '@/data/standards.json';

export default function Home() {
  return (
    <div className="flex-1">
      <section className="relative isolate overflow-hidden border-b border-neutral-200 bg-gradient-to-b from-white via-indigo-50/60 to-white text-neutral-900">
        <div className="absolute inset-0 -z-10 bg-indigo-50/60">
          <Squares
            speed={0.01}
            squareSize={35}
            direction="diagonal"
            borderColor="#e0e7ff"
            hoverFillColor="#e0e7ff"
          />
        </div>
        <div className="mx-auto flex max-w-5xl flex-col items-center gap-10 px-4 py-12 text-center md:px-6 sm:py-12 md:py-16 lg:py-28">
          <div className="space-y-6">
            <h1 className="mx-auto max-w-3xl text-4xl font-semibold tracking-tight text-neutral-900 sm:text-5xl md:text-6xl bg-clip-text">
              Standards for the{' '}
              <span className="bg-gradient-to-r from-indigo-700 via-violet-400 to-indigo-500 bg-clip-text text-transparent">
                Agentic Era
              </span>
            </h1>
            <p className="mx-auto max-w-2xl text-base text-neutral-600 sm:text-lg">
              Discover the emerging standards and protocols which will define
              how we build, integrate and connect agentic AI workloads.
            </p>
          </div>
        </div>
      </section>
      <Cards items={standards} />
    </div>
  );
}
