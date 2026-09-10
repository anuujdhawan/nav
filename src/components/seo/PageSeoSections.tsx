import Link from 'next/link';

import type {
  SeoContentSection,
  SeoFaq,
  SeoLink,
  SeoTable,
} from '@/lib/marketingSeo';


type TrustSectionProps = {
  title?: string;
  points: string[];
};

export function TrustSection({
  title = 'Why Clients Contact Navigator Immigration Consultant',
  points,
}: TrustSectionProps) {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-8 text-center text-3xl font-bold text-[#436175]">{title}</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {points.map((point) => (
              <div
                key={point}
                className="rounded-2xl border border-[#436175]/10 bg-[#f8f4ea] p-6 text-[#3d4956] shadow-sm"
              >
                {point}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

type FaqSectionProps = {
  title?: string;
  items: SeoFaq[];
};

export function FaqSection({
  title = 'Frequently Asked Questions',
  items,
}: FaqSectionProps) {
  if (!items.length) {
    return null;
  }

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-8 text-center text-3xl font-bold text-[#436175]">{title}</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {items.map((faq) => (
              <article
                key={faq.question}
                className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-[#436175]/10"
              >
                <h3 className="mb-3 text-xl font-semibold text-[#223040]">{faq.question}</h3>
                <p className="text-[#4b5563]">{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

type RelatedLinksProps = {
  title?: string;
  links: SeoLink[];
};

export function RelatedLinksSection({
  title = 'Explore Related Immigration Services',
  links,
}: RelatedLinksProps) {
  if (!links.length) {
    return null;
  }

  return (
    <section className="bg-[#f8f4ea] py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-8 text-center text-3xl font-bold text-[#436175]">{title}</h2>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {links.map((link) => (
              <Link
                key={`${link.href}-${link.label}`}
                href={link.href}
                className="rounded-2xl border border-[#436175]/10 bg-white px-6 py-5 text-[#223040] shadow-sm transition-colors hover:border-[#436175] hover:text-[#436175]"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

type LocalSeoBlockProps = {
  text: string;
};

export function LocalSeoBlock({ text }: LocalSeoBlockProps) {
  return (
    <section className="bg-[#2c353f] py-10 text-white">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#f7d7be]">
            Dubai Office
          </p>
          <p className="mt-3 text-lg leading-8 text-white/90">{text}</p>
        </div>
      </div>
    </section>
  );
}

type ContentSectionsProps = {
  sections: SeoContentSection[];
};

export function ContentSections({ sections }: ContentSectionsProps) {
  if (!sections.length) {
    return null;
  }

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-2">
          {sections.map((section) => (
            <article
              key={section.title}
              className="rounded-3xl border border-[#436175]/10 bg-[#f8f4ea] p-8 shadow-sm"
            >
              <h2 className="mb-4 text-2xl font-bold text-[#436175]">{section.title}</h2>
              <p className="text-[#4b5563]">{section.body}</p>
              {section.bullets?.length ? (
                <ul className="mt-5 space-y-3 text-[#223040]">
                  {section.bullets.map((bullet) => (
                    <li key={bullet}>• {bullet}</li>
                  ))}
                </ul>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

type ComparisonTableProps = {
  title?: string;
  table: SeoTable;
};

export function ComparisonTable({
  title = 'Comparison Snapshot',
  table,
}: ComparisonTableProps) {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-8 text-center text-3xl font-bold text-[#436175]">{title}</h2>
          <div className="overflow-x-auto rounded-3xl bg-white shadow-sm ring-1 ring-[#436175]/10">
            <table className="min-w-[500px] sm:min-w-full border-collapse">
              <thead>
                <tr className="bg-[#2c353f] text-left text-white">
                  {table.columns.map((column) => (
                    <th key={column} className="px-5 py-4 text-sm font-semibold">
                      {column}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {table.rows.map((row, index) => (
                  <tr
                    key={`${row.join('-')}-${index}`}
                    className={index % 2 === 0 ? 'bg-[#f8f4ea]' : 'bg-white'}
                  >
                    {row.map((cell) => (
                      <td key={cell} className="px-5 py-4 text-sm text-[#223040]">
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}

type ComplianceNoticeProps = {
  note: string;
};

export function ComplianceNotice({ note }: ComplianceNoticeProps) {
  return (
    <section className="bg-white py-8">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-5xl rounded-2xl border border-amber-300 bg-amber-50 px-6 py-5 text-sm text-amber-900">
          {note}
        </div>
      </div>
    </section>
  );
}
