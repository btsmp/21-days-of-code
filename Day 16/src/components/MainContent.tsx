import { useState, useEffect } from "react"
import { fetchAgents } from "../utils/fetchAgents"
import { CardAgent } from "./CardAgents"

interface AgentProps {
  uuid: string
  displayName: string
  fullPortrait: string
}


export function MainContent(props: any) {

  const { agents } = props

  return (
    <main className="px-14 py-3 grid grid-cols-5 gap-4">
      {agents.map((agent: AgentProps, index: number) => {
        return (
          <CardAgent key={agent.uuid} name={agent.displayName} img={agent.fullPortrait} />
        )
      })}
    </main>
  )
}