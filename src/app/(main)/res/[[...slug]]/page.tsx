import { redirect } from "next/navigation";
import { loadRes } from "@blog/converters";
import { Container } from "@blog/components/container";
import TranslationsProvider from "@blog/i18n/TranslationsProvider";
import { getTranslations } from "@blog/i18n/server";
import { ResPageContent } from "./ResPageContent";

export const dynamic = "force-dynamic";

export async function generateStaticParams() {
  return [
    {},
    { slug: ["faq"] },
    { slug: ["tos"] },
    { slug: ["contact"] },
    { slug: ["privacy"] },
    { slug: ["about"] },
  ];
}

interface Props {
  params: Promise<{ slug?: string[] }>;
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const slugStr = Array.isArray(slug) ? slug.join("/") : "";
  if (!slugStr) {
    return null;
  }

  const content = await loadRes(slugStr);
  if (!content) {
    return null;
  }

  return {
    title: `${content.title} | Learn`,
  };
}

export default async function ResourcePage({ params }: Props) {
  const { slug } = await params;
  const slugStr = Array.isArray(slug) ? slug[0] : "";
  if (!slugStr) {
    return redirect("/res/about");
  }

  // Route known resource slugs to the translated content component
  if (["about", "contact", "faq", "privacy", "tos"].includes(slugStr)) {
    const locale = "en"; // Or determine from params, cookies, headers
    const { resources } = await getTranslations(locale);
    const content = await loadRes(slugStr);
    return (
      <TranslationsProvider lng={locale} resources={resources}>
        <ResPageContent
          type={slugStr as any}
          contentHtml={content?.contentHtml}
        />
      </TranslationsProvider>
    );
  }

  const content = await loadRes(slugStr);
  return (
    <Container>
      <div className="prose prose-neutral mx-auto mt-6 sm:mt-8">
        {content.contentHtml && (
          <div dangerouslySetInnerHTML={{ __html: content.contentHtml }} />
        )}
      </div>
    </Container>
  );
}
