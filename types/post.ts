export type Post = {
  slug: string
  title: string
  date: string
  coverImage: string
  ogImage: {
    url: string
  }
  content: string
  excerpt: string
  preview?: boolean
}

export type Project = {}
