import React, { useEffect, useRef, useState } from "react"

interface TypewriterTextProps {
  children: string
  speed?: number
  loop?: boolean
  className?: string
}

const TypewriterText: React.FC<TypewriterTextProps> = ({
  children,
  speed = 50,
  loop = false,
  className = "",
}) => {
  const [displayed, setDisplayed] = useState("")
  const index = useRef(0)
  const timeout = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    setDisplayed("")
    index.current = 0
    function type() {
      setDisplayed(children.slice(0, index.current + 1))
      if (index.current < children.length - 1) {
        index.current++
        timeout.current = setTimeout(type, speed)
      } else if (loop) {
        timeout.current = setTimeout(() => {
          setDisplayed("")
          index.current = 0
          type()
        }, 1000)
      }
    }
    type()
    return () => {
      if (timeout.current) clearTimeout(timeout.current)
    }
  }, [children, speed, loop])

  return <span className={className}>{displayed}</span>
}

export default TypewriterText
