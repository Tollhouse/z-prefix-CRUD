import { Routes, Route, Link, useNavigate } from 'react-router-dom'
import './App.css'
import Login from '../components/Login'
import Item from '../components/Item'
import Myinventory from '../components/Myinventory'
import Fullinventory from '../components/Fullinventory'
import Newuser from '../components/Newuser'
import Createitem from '../components/Createitem'

function App() {

  return (
    <>
      <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/Fullinventory' element={<Fullinventory />} />
          <Route path='/Myinventory/:id' element={<Myinventory />} />
          <Route path='/Newuser' element={<Newuser />} />
          <Route path='/Item/:id' element={<Item />} />
          <Route path='/Createitem/:id' element={<Createitem />} />
      </Routes>
    </>
  )
}

export default App
