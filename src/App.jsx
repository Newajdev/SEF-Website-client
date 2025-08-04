import { Helmet } from 'react-helmet'
import './App.css'
import Navbar from './shared/navbar/Navbar'

function App() {
  return (
    <>
      <Helmet>
        <title>Shah Emdadia Freelancers'</title>
        <meta name="description" content="Shah Emdadia Freelancers Home page" />
      </Helmet>
      <Navbar></Navbar>
    </>
  )
}

export default App
