import { getPostContent } from "@/lib/getPostContent";
import getPostMetadata from "@/lib/getPostMetadata";
import Markdown from "markdown-to-jsx";

const posts = getPostMetadata();

//Converting posts to static pages
export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
    
  const { slug } = params

  const post = posts.find(post => post.slug === slug)

    if (!post) {
        return {
            title: 'Post Not Found'
        }
    }

    return {
        title: post.title,
        description: post.description,
    }
}

export default function Page(props: any) {
    
    const slug = props.params.slug;
    const post = getPostContent(slug);
    
    return(
        <div>
            <h1 className="font-bold text-3xl text-green-700">{post.data.title}</h1>
            <h2 className="mt-6 font-bold text-xl">{post.data.description}</h2>
            <article className="prose lg:prose-xl">
            <Markdown>
                {post.content}
            </Markdown>
            </article>
        </div>
    )
}