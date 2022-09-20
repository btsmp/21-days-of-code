interface Data {
  status: number
  data: []
}



export async function fetchAgents() {
  const url = 'https://valorant-api.com/v1/agents?isPlayableCharacter=true'
  const response = await fetch(url)
  const data: Data = await response.json()
  const agents = data.data

  return agents

}

