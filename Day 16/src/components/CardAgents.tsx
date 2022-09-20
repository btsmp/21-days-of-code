interface AgentProps {
  key: string
  name: string
  img: string
}



export function CardAgent(props: AgentProps) {

  const { name, img } = props

  return (
    <div className="flex flex-col items-center justify-center border-2 border-black rounded-2xl overflow-hidden">
      <div className="w-96">
        <img src={img} alt={`Imagem de ${name} `} />
      </div>
      <h1 className="bg-[#111] w-full text-center p-2 mt-3 font-semibold text-white">{name}</h1>

    </div>
  )


}