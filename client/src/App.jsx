import { Routes, Route, Link, useNavigate } from 'react-router-dom'
import './App.css'
import Login from '../components/Login'
import Myinventory from '../components/Myinventory'
import Fullinventory from '../components/Fullinventory'
import Newuser from '../components/Newuser'

function App() {

  return (
    <>
      <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/Fullinventory' element={<Fullinventory />} />
          <Route path='/Myinventory/:id' element={<Myinventory />} />
          <Route path='/Newuser' element={<Newuser />} />
      </Routes>
    </>
  )
}

export default App
