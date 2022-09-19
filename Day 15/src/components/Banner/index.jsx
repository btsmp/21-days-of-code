import { Container } from "./styles";
import Imagem from "../../assets/banner.png"

export function Banner() {
  return (
    <Container>
      <img src={Imagem} />
    </Container>
  )
}