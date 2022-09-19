import { Container } from "./styles";
import prod1 from "../../assets/prod1.jpg"
import prod2 from "../../assets/prod2.jpg"
import prod3 from "../../assets/prod3.jpg"
import prod4 from "../../assets/prod4.jpg"
import prod5 from "../../assets/prod5.jpg"
import prod6 from "../../assets/prod6.jpg"
import prod7 from "../../assets/prod7.jpg"
import prod8 from "../../assets/prod8.jpg"
import prod9 from "../../assets/prod9.jpg"

export function MainContent() {
  const products = [ {
    name: "Lorem ipsum dolor sit",
    price: "50,00",
    img: prod1
  },
  {
    name: "Lorem ipsum dolor sit",
    price: "50,00",
    img: prod2
  },
  {
    name: "Lorem ipsum dolor sit",
    price: "50,00",
    img: prod3
  },
  {
    name: "Lorem ipsum dolor sit",
    price: "50,00",
    img: prod4
  },
  {
    name: "Lorem ipsum dolor sit",
    price: "50,00",
    img: prod5
  },
  {
    name: "Lorem ipsum dolor sit",
    price: "50,00",
    img: prod6
  },
  {
    name: "Lorem ipsum dolor sit",
    price: "50,00",
    img: prod7
  },
  {
    name: "Lorem ipsum dolor sit",
    price: "50,00",
    img: prod8
  },
  {
    name: "Lorem ipsum dolor sit",
    price: "50,00",
    img: prod9
  }, ]
  return (
    <Container>
      <div className="bar">
        <span>promoção</span>
        <span>9 produtos</span>
      </div>

      <div className="products">
        {products.map((prod, index) => {
          return (
            <div key={index} className="prod">
              <div className="img-container"><img src={prod.img} /></div>
              <h1>{prod.name}</h1>
              <p>R$ <span>{prod.price}</span></p>
            </div>

          )
        })}

      </div>
    </Container>
  )
}