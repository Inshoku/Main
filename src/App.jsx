import './App.css'
import Home from './pages/Home'
import Menu from './pages/Menu'
import About from './pages/About'
import Notfound from './pages/Notfound'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
  <Router>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/menu' element={<Menu/>}/>
      <Route path='/about' element={<About/>}/> 
      <Route path='*' element={<Notfound/>}/>
    </Routes>
  </Router>
  )
}

export default App