export type Faq = { question: string; answer: string };

export default function FaqList({ faqs }: { faqs: Faq[] }) {
  return (
    <dl className="divide-y divide-line">
      {faqs.map((faq) => (
        <details key={faq.question} className="group py-5" itemScope itemProp="mainEntity" itemType="https://schema.org/Question">
          <summary
            className="flex cursor-pointer list-none items-center justify-between gap-4 text-left font-display text-lg font-medium text-ink"
            itemProp="name"
          >
            {faq.question}
            <span className="shrink-0 text-2xl text-brand-blue transition group-open:rotate-45">
              +
            </span>
          </summary>
          <div itemScope itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
            <p itemProp="text" className="mt-3 leading-relaxed text-slate">
              {faq.answer}
            </p>
          </div>
        </details>
      ))}
    </dl>
  );
}
