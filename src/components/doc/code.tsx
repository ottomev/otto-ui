import React from "react"
import { codeToHtml } from "@/app/utils/shiki"

type CodeProps = {
  code: string
  lang?: string
}

async function Code({ code, lang = "tsx" }: CodeProps) {
  const html = await codeToHtml({ code, lang })

  return <div dangerouslySetInnerHTML={{ __html: html }} />
}

export default Code as unknown as (props: CodeProps) => React.JSX.Element
