"use client"

import { useEffect, useRef, useState } from "react"

export function useInView(options?: IntersectionObserverInit) {
  const ref = useRef<HTMLDivElement>(null)
  const optionsRef = useRef(options)
  const [isInView, setIsInView] = useState(false)

  // Store latest options in ref to avoid dependency issues
  useEffect(() => {
    optionsRef.current = options
  }, [options])

  useEffect(() => {
    if (!ref.current) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting)
      },
      {
        threshold: 0.1,
        ...optionsRef.current,
      },
    )

    observer.observe(ref.current)

    return () => {
      observer.disconnect()
    }
    // Intentionally exclude options from dependencies to prevent unnecessary observer recreation
    // Options are accessed via ref to always use the latest values
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return { ref, isInView }
}
