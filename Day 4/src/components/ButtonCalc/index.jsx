import { Container } from "./styles"

export function ButtonCalc(props) {
  const { value, type, func } = props
  return (
    <Container type={type} onClick={func}>
      {value}
    </Container>
  )
}