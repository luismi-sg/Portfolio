import './Contacto.css'

export const Contacto = () => {
    return( 
        <div className='Contacto'>
            <div className='Contacto-wrapper'>
                <h2 className='Contacto-h2'>CONTACTO</h2>
            </div>
            <div className='Redes-wrapper'>
                <ul className='Redes-ul'>
                    <li className='Redes-li'><a href='https://www.linkedin.com/in/luismisg/' target='_blank' title='Perfil de Linkedin'>LINKEDIN</a></li>
                    <li className='Redes-li'><a href='https://github.com/luismi-sg' target='_blank' title='Perfil de Github'>GITHUB</a></li>
                    <li className='Redes-li'><a href='mailto:lmsg1191@gmail.com' target='_blank' title='Enviar un correo'>EMAIL</a></li>
                </ul>
            </div>
        </div>
    )
}