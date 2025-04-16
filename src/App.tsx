import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Home from './componets/Home'
import TailButton from './UI/TailButton'
import Subway from './componets/Subway'
import Login from './componets/Login'
import Nav from './componets/Nav'
import TodoList from './componets/TodoList'
import TsxTest from './componets/TsxTest'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex-col'>
      <BrowserRouter>
        <header className='flex justify-center items-center w-2/3 min-h-20 bg-green-400 mx-auto'>
        <div className='w-full'>
          <Nav></Nav>
        </div>
           
        </header>
        <main className='flex justify-center items-center w-2/3 h-screen  mx-auto'>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Subway" element={<Subway />} />
            <Route path="/TodoList" element={<TodoList />} />
            <Route path="/TsxTest" element={<TsxTest />} />
          </Routes>

        </main>
        <footer className='w-2/3 min-h-20 bg-black mx-auto'>

        </footer >
      </BrowserRouter>
    </div>
  )
}

export default App
