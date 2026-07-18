import { business } from "@/lib/business";

export function CallButton({ className = "" }: { className?: string }) {
  return (
    <a
      href={business.phoneHref}
      className={`inline-flex items-center justify-center gap-2 rounded-md bg-brand-blue px-6 py-3 text-base font-semibold text-white transition hover:bg-brand-blue-dark ${className}`}
    >
      Call {business.phone}
    </a>
  );
}

export function TextButton({
  className = "",
  light = false,
}: {
  className?: string;
  light?: boolean;
}) {
  return (
    <a
      href={business.smsHref}
      className={
        light
          ? `inline-flex items-center justify-center gap-2 rounded-md border-2 border-white px-6 py-3 text-base font-semibold text-white transition hover:bg-white hover:text-ink ${className}`
          : `inline-flex items-center justify-center gap-2 rounded-md border-2 border-ink px-6 py-3 text-base font-semibold text-ink transition hover:bg-ink hover:text-white ${className}`
      }
    >
      Text for a Quote
    </a>
  );
}

export function CtaButtonGroup({
  className = "",
  light = false,
}: {
  className?: string;
  light?: boolean;
}) {
  return (
    <div className={`flex flex-col gap-3 sm:flex-row ${className}`}>
      <CallButton />
      <TextButton light={light} />
    </div>
  );
}
