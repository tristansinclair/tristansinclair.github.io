import { useRouter } from "next/router";
import ErrorPage from "next/error";
import { getPostBySlug, getAllNewsletters } from "../../../lib/mdxUtils";
import Head from "next/head";
import type NewsletterType from "../../../interfaces/newsletters";
import { remark } from "remark";
import html from "remark-html";
import { PageLayout } from "../../../components/Layout";
import { ArchiveLayout } from "../../../components-tldr/ArchiveLayout";
import NavLayout from "../../../components-tldr/NavLayout";
import NavLayoutNew from "../../../components-tldr/NavLayoutNew";

const Newsletter = ({ content }: { content: string }) => {
  return <div dangerouslySetInnerHTML={{ __html: content }} />;
};

export async function markdownToHtml(markdown: string) {
  const result = await remark().use(html).process(markdown);
  return result.toString();
}

type Props = {
  post: NewsletterType;
};

Post.getLayout = function getLayout(page: any) {
  return (
    <>
      <NavLayoutNew>{page}</NavLayoutNew>
    </>
  );
};

export default function Post({ post }: Props) {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }

  console.log(post);
  return (
    <>
      <Head>
        <title>
          {post.title}
          {post.title}
        </title>
      </Head>
      <ArchiveLayout>
        <article className="max-w-none prose prose-zinc dark:prose-invert">
          <Newsletter content={post.content} />
        </article>
      </ArchiveLayout>
    </>
  );
}

type Params = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(params.slug, ["title", "date", "slug", "content"]);
  const content = await markdownToHtml(post.content || "");

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const newsletters = getAllNewsletters(["slug"]);

  return {
    paths: newsletters.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
