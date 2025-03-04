import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import './Fondos.css'

export const Fondos = () => {

    let location = useLocation();
    const { pathname } = location
    
    useEffect(()=>{
        switch ( pathname ) {
            case '/' :
                setsIsActive(1)
                break;
            case '/contacto' :
                setsIsActive(2)
                break;
            case '/sobremi' :
                setsIsActive(1)
                break;
            case '/trabajos' :
                setsIsActive(2)
                break;
            case '/thespecialone' :
                setsIsActive(3)
                break;
            case '/beatscene' :
                setsIsActive(3)
                break;
            case '/universidad-de-lima' :
                setsIsActive(3)
                break;
        }

    }, [ location ])
    
    const [ isActive, setsIsActive ] = useState(0)

    return( 
        <div className='Fondos'>
            <div className={`Fondo-inicio ${ isActive === 0 ? 'isActive' : '' }`}>
                <div className='Video-wrapper'>
                    <video className='Video-video' preload='yes' autoPlay='on' loop='on' muted data-object-fit="cover" playsInline>
                        <source autoPlay src='/assets/Main_background_video.mp4' type="video/mp4"></source>
                    </video>
                </div>
            </div>
            <div className={`Fondo-contacto ${ isActive === 1 ? 'isActive' : '' }`}></div>
            <div className={`Fondo-trabajos ${ isActive === 2 ? 'isActive' : '' }`}></div>
            <div className={`Fondo-interna ${ isActive === 3 ? 'isActive' : '' }`}></div>
        </div>
    )
}