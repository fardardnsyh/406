export type Technology = {
  name: string
}

export type Link = {
  type: string
  url: string
}

export type Project = {
  title: string
  description: string
  image: string
  url: string
  technologies: Technology[]
  links?: Link[]
}
