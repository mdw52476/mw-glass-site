import Container from "./Container";

export default function Section({
  children,
  className = "",
  containerClassName = "",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`py-16 sm:py-20 ${className}`}>
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
