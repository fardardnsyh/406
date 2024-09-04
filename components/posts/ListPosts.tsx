import { Post } from "@/types/post"
import DateFormatter from "../shared/DateFormatter"
import Link from "next/link"

interface ListPostsProps {
  posts: Post[]
}

export default function ListPosts({ posts }: ListPostsProps) {
  return (
    <div className="flex flex-col sm:grid grid-cols-2 gap-4">
      {posts.map((post) => (
        <Link
          href={`/blog/${post.slug}`}
          className="border border-tertiary rounded-xl shadow-lg p-2"
          key={post.slug}
        >
          <img src={post.coverImage} />
          <div className="flex flex-col gap-4 mt-2">
            <p className="font-bold text-lg">{post.title}</p>
            <p>{post.excerpt}</p>
            <DateFormatter dateString={post.date} />
          </div>
        </Link>
      ))}
    </div>
  )
}
