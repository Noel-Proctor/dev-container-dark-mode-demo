import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import DarkModeToggle from './DarkModeToggle'

function App() {
  const [count, setCount] = useState(0)

  return (

    <div className='p-4 bg-white min-h-screen dark:bg-gray-900 dark:text-white'>

      <DarkModeToggle></DarkModeToggle>
      <h1 className='text-2xl'>Welcome to Dark Mode App</h1>
      <p>This is an example app showing how to implement dark mode using tailwind css.</p>
    </div>



  )
}

export default App
