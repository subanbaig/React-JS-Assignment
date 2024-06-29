import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Input from './input'
import Image from './image'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div>
      <h1>Hello World!</h1>
      <h2>My Name is Mirza Suban Baig</h2>
      <Input /> <input type="button" value="search"/>
      <Image />
    </div>
    </>
  )
}

export default App
