import './App.css'

import { BrowserRouter , Routes , Route , NavLink } from 'react-router-dom'

import { Contacto } from './pages/Contacto/Contacto'
import { Inicio } from './pages/Inicio/Inicio'
import { Trabajos } from './pages/Trabajos/Trabajos'
import { Fondos } from './components/Fondos/Fondos'
import { BeatScene } from './pages/BeatScene/BeatScene'
import { Thespecialone } from './pages/TheSpecialOne/Thespecialone'




function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <header className='Header'>
          <nav className='Header-nav'>
            <ul className='Header-ul'>
              <li className='Header-li'><NavLink to={ '/trabajos' }> Proyectos </NavLink></li>
              <li className='Header-li'>
                <NavLink to={ '/' }>
                  <img className="Header-svg" src="/assets/Logo-luismi.svg" alt="Logo Luis Miguel Sovero" />
                </NavLink></li>
              <li className='Header-li'><NavLink to={ '/contacto' }> Contacto </NavLink></li>
            </ul>
          </nav>
        </header>
        <Fondos />
          <Routes>
            <Route path='/' element={ <Inicio /> }/>
            <Route path='/trabajos' element={ <Trabajos /> }/>
            <Route path='/contacto' element={ <Contacto /> } />
            <Route path='/beatscene' element={ <BeatScene /> } />
            <Route path='/thespecialone' element={ <Thespecialone /> } />
          </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
