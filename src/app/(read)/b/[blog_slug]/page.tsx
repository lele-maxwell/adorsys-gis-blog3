import { Container } from "@blog/components/container";
import { redirect } from "next/navigation";
import { loadBlog } from "@blog/converters";
import { getAllBlogs } from "@blog/server/blog/api";
import Display from "@blog/components/display";
import { CoursesLink } from "./CoursesLink";

export const dynamic = "force-dynamic";

export async function generateStaticParams() {
  const pages = await getAllBlogs();
  return pages.map((blog_slug) => ({ blog_slug }));
}

interface Props {
  params: Promise<{ blog_slug: string }>;
}

export async function generateMetadata({ params }: Props) {
  const { blog_slug } = await params;
  if (!blog_slug) {
    return null;
  }

  try {
    const { course } = await loadBlog(blog_slug);
    if (!course || !course.title) {
      return { title: `${blog_slug} | adorsys GIS` };
    }
    return {
      title: `${course.title} | adorsys GIS`,
    };
  } catch {
    // Gracefully fall back when course metadata cannot be loaded
    return { title: `${blog_slug} | adorsys GIS` };
  }
}

export default async function SingleBlogPage({ params }: Props) {
  const { blog_slug } = await params;
  if (!blog_slug) {
    return redirect("/");
  }

  try {
    const { course, slides } = await loadBlog(blog_slug);
    return (
        <Container>
            {slides?.content && (
                <Suspense fallback={<Skeleton className="h-64 w-full mb-8" />}>
                    <Display data={slides.content}/>
                </Suspense>
            )}

            {course?.content && (
                <article className='prose prose-neutral lg:prose-xl mx-auto mt-8'>
                    <div dangerouslySetInnerHTML={{__html: course.content}}/>
                </article>
            )}
        </Container>
    );
      <Container>
        <div className="mb-4 flex justify-end">
          <CoursesLink />
        </div>
        {slides && <Display data={slides.content} />}

        {course.content && (
          <article className="prose prose-neutral md:prose-lg lg:prose-xl mx-auto mt-6 sm:mt-8 px-2 sm:px-0">
            <div dangerouslySetInnerHTML={{ __html: course.content }} />
          </article>
        )}
      </Container>
    );
  } catch {
    return (
      <Container>
        <div className="hero min-h-[60vh] bg-base-200 rounded-2xl mt-6">
          <div className="hero-content text-center">
            <div className="max-w-2xl">
              <h1 className="text-3xl font-extrabold md:text-5xl">
                This course does not exist yet
              </h1>
              <p className="mx-auto mt-3 max-w-xl opacity-80">
                Please check the link or try again later.
              </p>
              <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
                <a className="btn btn-outline" href={`/b/${blog_slug}`}>
                  Reload
                </a>
                <a className="btn btn-primary" href="/">
                  Return Home
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    );
  }
}
