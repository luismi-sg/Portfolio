import { Link } from 'react-router-dom'
import { IconGithub, IconNavegar } from '../../utils/icons'
import './CardTrabajo.css'

export const CardTrabajo = ({ id, pills, img, alt, titulo, description, gitUrl , webUrl }) => {
    return(
        <article key = { id } className='Trabajos-article'>
            <a href={webUrl} title={titulo} className='Trabajos-a' target='_blank'>
                <img className='Trabajos-img' src={ img } alt={ alt } loading='lazy' />
            </a>
            <aside className="Trabajos-content">
                <div className='Trabajos-pills'>
                    {
                    pills.map((pill , i) => <span key = { i } className='Trabajos-pill'> { pill } </span>)
                    }
                </div>
                <div className="Trabajos-info">
                    <h3 className='Trabajos-h3'>{titulo}</h3>
                    <p className='Trabajos-p'>{description}</p>
                    <div className="Trabajos-rrss">
                        { gitUrl && 
                        <Link className='Trabajos-icon' to={gitUrl} target='_blank' title='Github'>
                            <IconGithub/>
                        </Link>}
                        { webUrl &&
                        <Link className='Trabajos-icon' to={webUrl} title='WebPage'>
                            <IconNavegar/>
                        </Link>}
                    </div>
                </div>
            </aside>
        </article>
    )
}