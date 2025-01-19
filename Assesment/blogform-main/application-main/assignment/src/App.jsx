import './App.css'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Addblog from './Addblog'
import Home1 from './Home1'
function App() {
  return (
    <>
    <br></br><br></br><br></br><br></br>
      <Navbar></Navbar> 
     
      <Routes> 
        <Route path="/hom" element={<Home1/>}/>
        <Route path="/ss" element={<Addblog/>}/>
      </Routes>

    </>
  )

}

export default App
