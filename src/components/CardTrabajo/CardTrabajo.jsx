import { IconGithub, IconNavegar } from '../../utils/icons'
import { useNavigate } from 'react-router-dom'
import './CardTrabajo.css'
import { useState } from 'react'

export const CardTrabajo = ({ id , pills, img , alt , titulo , gitUrl , webUrl }) => {

    // const navigate = useNavigate()
    // const playHandler = ( webUrl ) => {
    //     navigate(`/webworks`)
    // }

    return(
        <article key = { id } className='Trabajos-article'>
            <a href={webUrl} title={titulo} className='Trabajos-a' target='_blank'>
                <img className='Trabajos-img' src={ img } alt={ alt } loading='lazy' />
            </a>
            <div className='Trabajos-pills'>
                {
                pills.map((pill , i) => <span key = { i } className='Trabajos-pill'> { pill } </span>)
                }
            </div>
            <div className="Trabajos-info">
                <h3 className='Trabajos-h3'>{titulo}</h3>
                <div className="Trabajos-rrss">
                    { gitUrl && 
                    <a className='Trabajos-icon' href={gitUrl} target='_blank' title='Github'>
                        <IconGithub className="Trabajos-icon"/>
                    </a>}
                    { webUrl &&
                    <a className='Trabajos-icon' href={webUrl} target='_blank' title='WebPage'>
                        <IconNavegar className="Trabajos-icon"/>
                    </a>}
                </div>
            </div>
        </article>
    )
}