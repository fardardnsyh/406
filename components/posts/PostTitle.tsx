import { ReactNode } from "react"

type Props = {
  children?: ReactNode
}
export default function PostTitle({ children }: Props) {
  return <h1 className="text-2xl sm:text-5xl font-bold">{children}</h1>
}
