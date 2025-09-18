export default function Footer() {
  return (
    <footer className="sticky bottom-0 w-full border-t border-neutral-200 bg-neutral-50/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 text-sm text-neutral-600 md:px-6">
        <span className="font-medium text-neutral-800">
          Standards for Agentic AI
        </span>
        <a
          href="https://github.com/sandrinodimattia/aistandards-directory"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 text-neutral-700 transition hover:text-neutral-900"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M12 0a12 12 0 0 0-3.79 23.4c.6.11.82-.26.82-.58v-2.23c-3.34.73-4.05-1.61-4.05-1.61-.55-1.41-1.35-1.79-1.35-1.79-1.1-.75.08-.74.08-.74 1.22.09 1.87 1.25 1.87 1.25 1.08 1.85 2.83 1.32 3.52 1 .11-.78.42-1.32.76-1.63-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.16 0 0 1-.32 3.28 1.23a11.4 11.4 0 0 1 5.98 0c2.27-1.55 3.27-1.23 3.27-1.23.66 1.64.24 2.86.12 3.16.78.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.49 5.92.43.37.81 1.09.81 2.2v3.25c0 .32.22.7.83.58A12 12 0 0 0 12 0" />
          </svg>
          <span>GitHub</span>
        </a>
      </div>
    </footer>
  );
}
