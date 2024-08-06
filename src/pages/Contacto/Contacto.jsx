import { IconGithub, IconLinkedin, IconMail } from '../../utils/icons'
import './Contacto.css'

export const Contacto = () => {
    return( 
        <div className='Contacto'>
            <main className='Contacto-wrapper'>

                <div className="Contacto-info">
                    <picture className='Contacto-hand'>
                        <img className='Icon-svg' src="/assets/hand.svg" alt="Icono mano" />
                    </picture>
                    <h1>Conversamos?</h1>
                    <h2>Si te gusta mi perfil no dudes en contactarme.</h2>
                </div>

                <div className='Redes-wrapper'>
                    <ul className='Contacto-ul'>
                        <li className='Contacto-li'>
                            <a className='Redes-a contacto' href='https://www.linkedin.com/in/luismisg/' target='_blank' title='Perfil de Linkedin'><IconLinkedin/>
                            <span>Linkedin</span>
                            </a>
                        </li>
                        <li className='Contacto-li'>
                            <a className='Redes-a contacto' href='https://github.com/luismi-sg' target='_blank' title='Perfil de Github'><IconGithub/>
                            <span>Github</span>
                            </a>
                        </li>
                        <li className='Contacto-li'>
                            <a className='Redes-a contacto' href='mailto:lmsg1191@gmail.com' target='_blank' title='Perfil de Github'><IconMail/>
                            <span>lmsg1191@gmail.com</span>
                            </a>
                        </li>
                    </ul>
                </div>
                
            </main>
            
        </div>
    )
}