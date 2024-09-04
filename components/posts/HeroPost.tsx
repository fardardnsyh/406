import Image from "next/image"
import Link from "next/link"
import DateFormatter from "../shared/DateFormatter"

interface HeroPostProps {
  title: string
  coverImage: string
  date: string
  slug: string
  excerpt: string
}

export default function HeroPost({
  title,
  coverImage,
  date,
  slug,
  excerpt,
}: HeroPostProps) {
  return (
    <section className="flex justify-center w-full border border-tertiary p-4 rounded-xl shadow-lg">
      <Link href={`/blog/${slug}`}>
        <Image
          src={coverImage}
          alt="Cover image"
          width={1000}
          height={1}
          priority={false}
          className="mx-auto mb-4"
        />
        <div className="flex flex-col gap-2">
          <p className="text-lg sm:text-2xl font-bold">{title}</p>
          <p className="text-md font-light">{excerpt}</p>
          <DateFormatter dateString={date} />
        </div>
      </Link>
    </section>
  )
}
