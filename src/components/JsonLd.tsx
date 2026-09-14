/**
 * Rendert structured data (schema.org JSON-LD) in de pagina.
 * Gebruikt voor Organization, WebSite, Service, FAQPage, Article en
 * BreadcrumbList.
 */
export default function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
