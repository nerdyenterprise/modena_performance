import { siteContent } from "@/data/siteContent";

export function ContactForm({ intent = siteContent.forms.defaultIntent }: { intent?: string }) {
  const { labels, submitLabel } = siteContent.forms;

  return (
    <form className="grid gap-4 bg-transparent">
      <input type="hidden" name="intent" value={intent} />
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-xs uppercase tracking-[0.22em] text-muted">
          {labels.name}
          <input className="border-b border-champagne/20 bg-transparent px-0 py-3 text-base normal-case tracking-normal text-linen outline-none focus:border-champagne" name="name" required />
        </label>
        <label className="grid gap-2 text-xs uppercase tracking-[0.22em] text-muted">
          {labels.email}
          <input className="border-b border-champagne/20 bg-transparent px-0 py-3 text-base normal-case tracking-normal text-linen outline-none focus:border-champagne" name="email" type="email" required />
        </label>
      </div>
      <label className="grid gap-2 text-xs uppercase tracking-[0.22em] text-muted">
        {labels.phone}
        <input className="border-b border-champagne/20 bg-transparent px-0 py-3 text-base normal-case tracking-normal text-linen outline-none focus:border-champagne" name="phone" />
      </label>
      <label className="grid gap-2 text-xs uppercase tracking-[0.22em] text-muted">
        {labels.message}
        <textarea className="min-h-28 border-b border-champagne/20 bg-transparent px-0 py-3 text-base normal-case tracking-normal text-linen outline-none focus:border-champagne" name="message" required />
      </label>
      <button className="mt-4 w-full bg-champagne px-6 py-4 text-xs font-semibold uppercase tracking-[0.28em] text-carbon transition hover:bg-linen sm:w-auto" type="submit">
        {submitLabel}
      </button>
    </form>
  );
}
