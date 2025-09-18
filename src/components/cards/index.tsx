import Card from './card';

export type CardProps = {
  title: string;
  acronym?: string | null;
  description: string;
  logoUrl?: string | null;
  link: string;
  status?: string | null;
};

export default function Cards({ items }: { items: CardProps[] }) {
  return (
    <section className="relative overflow-hidden ">
      <div className="mx-auto max-w-6xl px-4 py-6 md:px-6 md:py-8">
        <div className="mb-8 flex flex-col items-start gap-6 text-left sm:flex-row sm:items-center sm:justify-between">
          <div className="max-w-xl space-y-3">
            <p className="text-xs uppercase tracking-[0.28em]">Standards</p>
          </div>
        </div>

        <div className="grid items-stretch grid-cols-1 gap-6 md:grid-cols-1 lg:grid-cols-2">
          {items.map((item, idx) => (
            <div key={idx} className="h-full">
              <Card
                title={item.title}
                description={item.description}
                acronym={item.acronym}
                logoUrl={item.logoUrl}
                link={item.link}
                status={item.status}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
