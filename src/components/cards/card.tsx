import Link from 'next/link';

type CardProps = {
  title: string;
  description: string;
  acronym?: string | null;
  logoUrl?: string | null;
  link: string;
  status?: string | null;
};

export default function Card({
  title,
  description,
  acronym,
  logoUrl,
  link,
  status,
}: CardProps) {
  return (
    <Link href={link} className="block h-full" target="_blank">
      <div className="group h-full min-h-[220px] flex flex-col hover:outline-[3px] hover:outline-gray-200 rounded-lg border border-gray-400 bg-white p-6 shadow-lg shadow-slate-300/70 hover:shadow-3xl">
        <div className="mb-6 flex items-start justify-between gap-4">
          <div className="flex items-center gap-3">
            {logoUrl && (
              <img src={logoUrl} alt={title} width={40} height={40} />
            )}
            <div>
              <h4 className="text-base font-semibold text-neutral-900 tracking-tight">
                {title}
              </h4>
              {acronym && (
                <div className="text-xs uppercase tracking-wide text-slate-500">
                  {acronym}
                </div>
              )}
            </div>
          </div>
        </div>
        <p className="mb-3 text-sm text-neutral-700 line-clamp-10">
          {description}
        </p>
        {status && (
          <div className="pt-1 inline-flex items-center gap-1 text-xs font-medium tracking-wide text-slate-600 mb-2">
            <span className="px-1.5 py-0.5 rounded bg-red-100 text-neutral-700 border border-red-200">
              {status}
            </span>
          </div>
        )}
        <div className="mt-auto ">
          <div className="text-xs tracking-wide text-slate-500">{link}</div>
        </div>
      </div>
    </Link>
  );
}
