import { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { MainContent } from "./components/MainContent";
import { fetchAgents } from "./utils/fetchAgents";

interface AgentProps {
  displayName: string
  fullPortrait: string
}


export function App() {

  const [agentsToShow, setAgentsToShow] = useState<AgentProps[]>([])

  async function getAgents() {
    const agents = await fetchAgents()
    setAgentsToShow(agents)
  }

  useEffect(() => {
    getAgents()
  }, [])
  return (
    <div className="grid grid-flow-row h-screen">
      <Header />
      <div className="overflow-scroll">
        <MainContent agents={agentsToShow} />
      </div>
    </div>
  )
}