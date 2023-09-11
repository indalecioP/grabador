import { useState } from 'react'
import './App.css'

let frases = ['hola', 'yo soy español', 'buenos días']

let escucha = new webkitSpeechRecognition();

escucha.lang = 'es-Es'
escucha.continuous = true
escucha.interimResults = false

function App() {
  const [count, setCount] = useState(0)
  const [num,setNum] = useState(0)

  escucha.onresult = (event) => {
    const results = event.results
    console.log(results)
    const frase = results[results.length - 1][0].transcript
    if (frase == frases[count]) { setCount(count + 1) }
  }
  
  return (
    <div>
      <h1>jaja</h1>
      <p>{frases[count]}</p>
      <p>{num}</p>
      <button onClick={()=>setNum(num + 1)}>num</button>
      <button onClick={()=>setCount(count + 1)}>num</button>
      <button onClick={()=>grabar()}>grabar</button>
      <button onClick={()=>abort()}>abort</button>
    </div>
  )
  
}

const grabar = () => { escucha.start() }

const abort = () => { escucha.abort() }

export default App
