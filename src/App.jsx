import './App.css'
import Navbar from './shared/navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './shared/footer/Footer'

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  )
}

export default App
