import { ButtonCalc } from "../ButtonCalc";
import { Container, Keys, Result } from "./styles";
import { useEffect, useState } from 'react';

export function Calculator() {
  const [ inputNumber, setInputNumber ] = useState('')
  const [ result, setResult ] = useState('')
  const [ operation, setOperation ] = useState()

  function clearAll() {
    setInputNumber('')
    setResult('')
    setOperation()
  }

  function computerNumber(e) {
    const keyPressed = e.target.innerHTML
    const inputNumberUpdated = inputNumber.concat(keyPressed)
    setInputNumber(inputNumberUpdated)
  }

  function percent() {
    const inputNumberUpdated = Number(inputNumber)
    const percent = inputNumberUpdated / 100
    setInputNumber(percent)
  }

  function backSpace() {
    const inputNumberUpdated = inputNumber.substring(0, inputNumber.length - 1)
    setInputNumber(inputNumberUpdated)
  }

  function handlerOperation(e) {
    const inputNumberUpdated = Number(inputNumber)

    setOperation(e.target.innerHTML)

    setResult(inputNumberUpdated)
    setInputNumber('')

  }

  function showResult() {
    const inputNumberUpdated = Number(inputNumber)
    const resultOfOperation = calculate(result, inputNumberUpdated, operation)
    setInputNumber(resultOfOperation)

  }

  function calculate(number1, number2, operation) {


    if (operation == '+') {
      return number1 + number2
    }

    if (operation == '-') {
      return number1 - number2
    }

    if (operation == 'x') {
      return number1 * number2
    }

    if (operation == '/') {
      return number1 / number2
    }
  }

  const keys = [ {
    value: 'AC',
    type: 'operation',
    method: clearAll,
  },
  {
    value: '<',
    type: 'operation',
    method: backSpace,
  },
  {
    value: '%',
    type: 'operation',
    method: percent,
  },
  {
    value: '/',
    type: 'operation',
    method: handlerOperation,
  },
  {
    value: 7,
    type: 'number',
    method: computerNumber,
  },
  {
    value: 8,
    type: 'number',
    method: computerNumber,
  },
  {
    value: 9,
    type: 'number',
    method: computerNumber,
  },
  {
    value: 'x',
    type: 'operation',
    method: handlerOperation,
  },
  {
    value: 4,
    type: 'number',
    method: computerNumber,
  },
  {
    value: 5,
    type: '',
    method: computerNumber,
  },
  {
    value: 6,
    type: 'number',
    method: computerNumber,
  },
  {
    value: '-',
    type: 'operation',
    method: handlerOperation,
  },
  {
    value: 1,
    type: 'number',
    method: computerNumber,
  },
  {
    value: 2,
    type: 'number',
    method: computerNumber,
  },
  {
    value: 3,
    type: 'number',
    method: computerNumber,
  },
  {
    value: '+',
    type: 'operation',
    method: handlerOperation,
  },
  {
    value: '.',
    type: '',
    method: computerNumber,
  },
  {
    value: 0,
    type: 'number',
    method: computerNumber,
  },
  {
    value: '.',
    type: 'number',
    method: computerNumber,
  },
  {
    value: '=',
    type: 'equal',
    method: showResult,
  }, ]

  return (
    <Container>
      <Result>
        {inputNumber == '' ? 0 : inputNumber}
      </Result>
      <Keys>
        {keys.map((key, index) => {
          return <button key={index} className={key.type} onClick={key.method}>{key.value}</button>
        })}
      </Keys>

    </Container>
  )
}