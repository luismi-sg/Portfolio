import { useState } from 'react'
import './Trabajos.css'
import { proyectos } from '../../bbdd/proyectos'
import { IconGithub, IconNavegar } from '../../utils/icons'
import { CardTrabajo } from '../../components/CardTrabajo/CardTrabajo'


export const Trabajos = () => {

    const [ toggleState, setToggleState] = useState(1)

    const toggleTab = (index) => {
        setToggleState(index)
    }
    
    return( 
        <div className='Trabajos'>
            <div className='Trabajos-wrapper'>
                <div className='Tabs-container'>
                    <div className='Trabajos-Tabs-wrapper'>
                        <div
                        className={ toggleState === 1 ? "Button-tabs tab-isActive" : "Button-tabs"}
                        onClick={() => toggleTab(1)}
                        >
                            <strong>Desarrollo FrontEnd</strong>
                        </div>
                        <div
                        className={ toggleState === 2 ? "Button-tabs tab-isActive" : "Button-tabs"}
                        onClick={() => toggleTab(2)}
                        >
                            <strong>Diseño UX/UI</strong>
                        </div>
                    </div>
                    <div className='Tabs-wrapper'>
                        <div className={ toggleState === 1 ? "Tabs-content content-isActive" : "Tabs-content"}>
                            <section className='Trabajos-grid'>
                                { proyectos.map(( {id , pills, img , alt , titulo , gitUrl , webUrl} ) => {
                                        if(pills.includes('Web')){
                                            return(
                                                <CardTrabajo
                                                key={id} 
                                                pills={pills}
                                                webUrl={webUrl}
                                                titulo={titulo}
                                                alt={alt}
                                                img={img}
                                                gitUrl={gitUrl}/>
                                            )
                                        }
                                    })}
                            </section>
                        </div>
                        <div className={ toggleState === 2 ? "Tabs-content content-isActive" : "Tabs-content"}>
                            <section className='Trabajos-grid'>
                                { proyectos.map(( {id , pills, img , alt , titulo , gitUrl , webUrl} ) => {
                                        if(pills.includes('UX/UI')){
                                            return(
                                                <CardTrabajo
                                                key={id} 
                                                pills={pills}
                                                webUrl={webUrl}
                                                titulo={titulo}
                                                alt={alt}
                                                img={img}
                                                gitUrl={gitUrl}/>
                                            )
                                        }
                                    })}
                            </section>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}