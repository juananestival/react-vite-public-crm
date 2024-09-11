import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import  MainScreen  from './views/MainScreen'
import Customers from './views/Customers'
import Customer from './components/Customer'
import Cases from "./views/Cases";
import Case from "./components/Case";




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<MainScreen />} /> */}
          <Route path="/customers" element={<Customers />} />
          <Route path="/customers/customer/:id" element={<Customer/>} />
          <Route path="/cases" element={<Cases />} />
          <Route path="/cases/case/:id" element={<Case/>} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
