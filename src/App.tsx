import { useState } from 'react'
import './App.css'
import Bienvenido from './components/bienvenido'

function App() {
  const [count, setCount] = useState(0)

  const add = () => setCount(count + 1)
  const rest = () => setCount(count - 1)

  return (
    <>
      <h1>WElcome back</h1>
      <h1>Hi docker compose and Dockerfile</h1>
      <h2>Hi hi hi hi</h2>
      <h3>Welcome</h3>
      <h3>Welcoem h4</h3>
      <h5>Hola holasaxasxasdasdasdasdasdasx</h5>
      <h6>Bienvenido oyeee</h6>
      <Bienvenido />
      <h1>Contador: {count}</h1>
      <button onClick={add}>Agregar</button>
      <button onClick={rest}>Restar</button>
    </>
  )
}

export default App
