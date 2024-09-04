export default function Footer() {
  return (
    <div className="flex flex-col gap-6 justify-center container sm:p-12 pt-12">
      <p className="text-center text-md sm:text-lg sm:leading-8">
        Developed using Next.js, styled with TailwindCSS and built in Visual
        Studio Code.
      </p>
      <span className="text-center text-sm text-secondary">
        © 2024 Alex Melia
      </span>
    </div>
  )
}
