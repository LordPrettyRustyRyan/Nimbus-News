import './App.css'
import Navbar from './myComponents/Navbar'
import Home from './myComponents/Home'
import Footer from './myComponents/Footer'
import Business from './myComponents/Business'
import Sports from './myComponents/Sports'
import Technology from './myComponents/Technology'
import Science from './myComponents/Science'
import Health from './myComponents/Health'
import General from './myComponents/General'

function App() {

  return (
    <>
      <Navbar/>
        <div id="content-wrapper">
          <Home/>
          <General/>
          <Business/>
          <Sports/>
          <Technology/>
          <Science/>
          <Health/>
          <Footer/>
        </div>
    </>
  )
}

export default App
