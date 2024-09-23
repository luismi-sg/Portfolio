import './App.css'

import { BrowserRouter , Routes , Route , NavLink } from 'react-router-dom'

import { Contacto } from './pages/Contacto/Contacto'
import { Inicio } from './pages/Inicio/Inicio'
import { Trabajos } from './pages/Trabajos/Trabajos'
import { Fondos } from './components/Fondos/Fondos'
import { BeatScene } from './pages/BeatScene/BeatScene'
import { Thespecialone } from './pages/TheSpecialOne/Thespecialone'
import { SobreMi } from './pages/SobreMi/SobreMi'
import { WebWorks } from './pages/WebWorks/WebWorks'

import { useTranslation } from 'react-i18next';
import './i18n';


function App() {

  const { t, i18n } = useTranslation();
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    document.documentElement.setAttribute('lang', lng);  // Cambiar el atributo lang en el HTML
  };
  return (
    <BrowserRouter>
      <div className="App">
        <header className='Header'>
          <nav className='Header-nav'>
            <NavLink to={ '/' }>
              <img className="Header-svg" src="/assets/Logo-luismi.svg" alt="Logo LuisMi Sovero" />
            </NavLink>
            <ul className='Header-ul'>
              <NavLink to={ '/trabajos' }>  <li className='Header-li'>{t('projects')}</li>  </NavLink>
              <NavLink to={ '/sobremi' }>   <li className='Header-li'>{t('about')}</li> </NavLink>
              <NavLink to={ '/contacto' }>  <li className='Header-li'>{t('contact')}</li> </NavLink>
            </ul>
            <div className='Button-wrapper'>
              <button className='Header-button' onClick={() => changeLanguage('en')}>EN</button>
              <button className='Header-button' onClick={() => changeLanguage('es')}>ES</button>
            </div>
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
          <Route path='/webworks' element={ <WebWorks titulo="titulo"/> } />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
