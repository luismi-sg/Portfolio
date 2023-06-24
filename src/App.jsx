import './App.css'

import { BrowserRouter , Routes , Route , NavLink } from 'react-router-dom'

import { Contacto } from './pages/Contacto/Contacto'
import { Inicio } from './pages/Inicio/Inicio'
import { Trabajos } from './pages/Trabajos/Trabajos'
import { Fondos } from './components/Fondos/Fondos'




function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <header className='Header'>
          <nav className='Header-nav'>
            <ul className='Header-ul'>
              <li className='Header-li'><NavLink to={ '/trabajos' }> Trabajos </NavLink></li>
              <li className='Header-li'><NavLink to={ '/' }> Inicio </NavLink></li>
              <li className='Header-li'><NavLink to={ '/contacto' }> Contacto </NavLink></li>
            </ul>
          </nav>
        </header>
        <Fondos />
          <Routes>
            <Route path='/' element={ <Inicio /> }/>
            <Route path='/trabajos' element={ <Trabajos /> }/>
            <Route path='/contacto' element={ <Contacto /> } />
          </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
