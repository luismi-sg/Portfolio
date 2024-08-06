import './App.css'

import { BrowserRouter , Routes , Route , NavLink } from 'react-router-dom'

import { Contacto } from './pages/Contacto/Contacto'
import { Inicio } from './pages/Inicio/Inicio'
import { Trabajos } from './pages/Trabajos/Trabajos'
import { Fondos } from './components/Fondos/Fondos'
import { BeatScene } from './pages/BeatScene/BeatScene'
import { Thespecialone } from './pages/TheSpecialOne/Thespecialone'
import { SobreMi } from './pages/SobreMi/SobreMi'


function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <header className='Header'>
          <nav className='Header-nav'>
            <NavLink to={ '/' }>
              <img className="Header-svg" src="/assets/Logo-luismi.svg" alt="Logo LuisMi Sovero" />
            </NavLink>
            <ul className='Header-ul'>
              <NavLink to={ '/trabajos' }>  <li className='Header-li'>Proyectos</li>  </NavLink>
              <NavLink to={ '/sobremi' }>   <li className='Header-li'> Sobre mi </li> </NavLink>
              <NavLink to={ '/contacto' }>  <li className='Header-li'> Contacto </li> </NavLink>
            </ul>
          </nav>
        </header>
        
        
        <Fondos/>
        <Routes>
          <Route path='/' element={ <Inicio /> }/>
          <Route path='/trabajos' element={ <Trabajos /> }/>
          <Route path='/sobremi' element={ <SobreMi /> } />
          <Route path='/contacto' element={ <Contacto /> } />
          <Route path='/beatscene' element={ <BeatScene /> } />
          <Route path='/thespecialone' element={ <Thespecialone /> } />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
