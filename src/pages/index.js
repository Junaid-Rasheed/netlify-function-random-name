import React from "react"
import { useEffect } from "react"
import { useState } from "react"

export default function Home() {
  const [data, setdata] = useState("")

  const working = async () => {
    const work = await fetch(".netlify/functions/hello")
    const response = await work.json()
    setdata(response)
  }
  useEffect(async () => {
    working()
  }, [])

  return (
    <div>
      Hello {data.message}!<br />
      <button onClick={working}>Change Name </button>
    </div>
  )
}
