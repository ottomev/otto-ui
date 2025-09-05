"use client"

import ScrollableCardStack from "../ui/ScrollableCardStack"

export default function ScrollableCardStackDemo() {
  const cardData = [
    {
      id: "siriorb",
      name: "Edu Calvo",
      handle: "@educalvolpz",
      avatar: "https://github.com/ottomev.png",
      video:
        "https://res.cloudinary.com/dyzxnud9z/video/upload/ottoui/siriorb.mp4",
      href: "https://x.com/educalvolpz",
    },
    {
      id: "richpopover",
      name: "Edu Calvo",
      handle: "@educalvolpz",
      avatar: "https://github.com/ottomev.png",
      video:
        "https://res.cloudinary.com/dyzxnud9z/video/upload/ottoui/richpopover.mp4",
      href: "https://x.com/educalvolpz",
    },
    {
      id: "sparkbites",
      name: "Edu Calvo",
      handle: "@educalvolpz",
      avatar: "https://github.com/ottomev.png",
      video:
        "https://res.cloudinary.com/dyzxnud9z/video/upload/ottoui/sparkbites.mp4",
      href: "https://x.com/educalvolpz",
    },
    {
      id: "svgl",
      name: "Pheralb",
      handle: "@pheralb",
      avatar: "https://github.com/pheralb.png",
      video:
        "https://res.cloudinary.com/dyzxnud9z/video/upload/ottoui/svgl.mp4",
      href: "https://x.com/pheralb",
    },
  ]

  return (
    <div className="mx-auto w-full max-w-md">
      <ScrollableCardStack
        items={cardData}
        cardHeight={384}
        perspective={1200}
        transitionDuration={200}
        className="mx-auto"
      />
    </div>
  )
}
