import { Helmet } from 'react-helmet'
import './App.css'
import Navbar from './shared/navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './shared/footer/Footer'

function App() {
  return (
    <>
      <Helmet>
        <title>Shah Emdadia Freelancers'</title>
        <meta name="description" content="Shah Emdadia Freelancers Home page" />
      </Helmet>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
      
    </>
  )
}

export default App
