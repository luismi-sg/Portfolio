import './Contacto.css'

export const Contacto = () => {
    return( 
        <div className='Contacto'>
            <div className='Contacto-wrapper'>
                <h2 className='Contacto-h2'>CONTACTO</h2>
            </div>
            <div className='Redes-wrapper'>
                <ul className='Redes-ul'>
                    <li className='Redes-li'><a href='#' title='#'>LINKEDIN</a></li>
                    <li className='Redes-li'><a href='#' title='#'>GITHUB</a></li>
                    <li className='Redes-li'><a href='#' title='#'>EMAIL</a></li>
                </ul>
            </div>
        </div>
    )
}