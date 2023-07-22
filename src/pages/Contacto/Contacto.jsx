import './Contacto.css'

export const Contacto = () => {
    return( 
        <div className='Contacto'>
            <h2 className='Contacto-h2'>CONTACTO</h2>
            <div className='Contacto-wrapper'>
                <div className='Perfil-wrapper'>
                    <div className='Imagen-wrapper'>
                        <img className='Imagen-img' src="/assets/luismi-sovero-foto.webp" alt="" />
                    </div>
                    <div className='Info-wrapper'>
                        <h3 className='Info-h3'>Luis Miguel Sovero</h3>
                        <p className='Info-p'>✅ Estudiando Desarrollo y Diseño Web en CEI - Centro de Estudios de Innovación, Madrid.</p>
                        <p className='Info-p'>✅ Apuntando a desenvolverme en el ámbito laboral como Frontend Developer. </p>
                        <p className='Info-p'>✅ Diseñador UX/UI. Experiencia basada en el desarrollo de interfaces.</p>
                        <p className='Info-p'>✅ Habilidades como React, JavaScript, HTML, CSS, Figma.
                        </p>
                    </div>
                </div>
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