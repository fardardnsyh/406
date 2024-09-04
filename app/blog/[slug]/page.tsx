import PostBody from "@/components/posts/PostBody"
import PostHeader from "@/components/posts/PostHeader"
import { getPostBySlug } from "@/lib/api"
import markdownToHtml from "@/lib/markdownToHtml"
import { notFound } from "next/navigation"

export default async function Post({ params }: Params) {
  const post = getPostBySlug(params.slug)

  if (!post) {
    return notFound()
  }

  const content = await markdownToHtml(post.content)

  return (
    <main className="container min-h-screen mt-12">
      <article>
        <PostHeader
          title={post.title}
          coverImage={post.coverImage}
          date={post.date}
        />
        <PostBody content={content} />
      </article>
    </main>
  )
}

type Params = {
  params: {
    slug: string
  }
}
