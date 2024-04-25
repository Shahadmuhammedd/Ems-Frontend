import './App.css'
import { Routes } from 'react-router-dom'
import { Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Admin from './components/Admin'
import Edit from './components/Edit'
import PageNotFound from './components/PageNotFound'
import View from './components/View'
import Add from './components/Add'

function App() {
 

  return (
    <>
    <Header/>
    <Routes>
      <Route path='*' element={<Admin/>}/>
      <Route path='add/:id' element={<Add/>}/>
      <Route path='edit/:id' element={<Edit/>}/>
      <Route path='view/:id' element={<View/>}/>
      <Route path='view/:id' element={<PageNotFound/>}/>
    </Routes>

    <Footer/>
    </>
  )
}

export default App
