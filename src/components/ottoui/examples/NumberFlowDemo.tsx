"use client"

import React, { useState } from "react"

import NumberFlow from "@/components/ottoui/ui/NumberFlow"

const NumberFlowDemo = () => {
  const [value, setValue] = useState(0)
  return <NumberFlow value={value} onChange={setValue} />
}

export default NumberFlowDemo
