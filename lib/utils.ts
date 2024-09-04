"use client"
import { useEffect, useState, useRef, MutableRefObject } from "react"

export function useIntersectionObserver(
  options: IntersectionObserverInit
): [MutableRefObject<HTMLParagraphElement | null>, boolean] {
  const [isIntersecting, setIsIntersecting] = useState(false)
  const ref = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry], observerInstance) => {
      if (entry.isIntersecting) {
        setIsIntersecting(true)
        observerInstance.unobserve(entry.target)
      }
    }, options)

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [options])

  return [ref, isIntersecting]
}
