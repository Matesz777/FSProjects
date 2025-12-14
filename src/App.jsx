import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ClickCounter from './components/ClickCounter'
import ThemeToggleButton from './components/ThemeToggleButton';
import HelloFromExpress from './components/HelloFromExpress'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <ClickCounter />
        <ThemeToggleButton />
        <HelloFromExpress />
    </>
  )
}

export default App
