import { useState } from 'react'
import Start from './components/start'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <main className="App d-flex justify-content-center align-items-center">
      <Start />
    </main>
  )
}

export default App
