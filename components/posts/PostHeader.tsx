import Image from "next/image"
import PostTitle from "./PostTitle"
import DateFormatter from "../shared/DateFormatter"

interface PostHeaderProps {
  title: string
  coverImage: string
  date: string
}

export default function PostHeader({
  title,
  coverImage,
  date,
}: PostHeaderProps) {
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <Image
        alt="Cover image"
        src={coverImage}
        width={1300}
        height={44}
        className="my-4 sm:my-12"
      />
      <DateFormatter dateString={date} />
    </>
  )
}
