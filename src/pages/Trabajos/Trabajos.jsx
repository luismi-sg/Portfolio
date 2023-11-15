import { useState } from 'react'
import './Trabajos.css'


export const Trabajos = () => {

    const [ toggleState, setToggleState] = useState(1)

    const toggleTab = (index) => {
        setToggleState(index)
    }

    return( 
        <div className='Trabajos'>
            <div className='Trabajos-wrapper'>
                <h2 className='Trabajos-h2'>TRABAJOS</h2>
                <div className='Tabs-container'>
                    <div className='Trabajos-Tabs-wrapper'>
                        <div
                        className={ toggleState === 1 ? "Button-tabs tab-isActive" : "Button-tabs"}
                        onClick={() => toggleTab(1)}
                        >
                            <p>FrontEnd</p>
                        </div>
                        <div
                        className={ toggleState === 2 ? "Button-tabs tab-isActive" : "Button-tabs"}
                        onClick={() => toggleTab(2)}
                        >
                            <p>Diseño UX/UI</p>
                        </div>
                        <div
                        className={ toggleState === 3 ? "Button-tabs tab-isActive" : "Button-tabs"}
                        onClick={() => toggleTab(3)}
                        >
                            <p>Diseño Gráfico</p>
                        </div>
                    </div>
                    <div className='Tabs-wrapper'>
                        <div className={ toggleState === 1 ? "Tabs-content content-isActive" : "Tabs-content"}>
                            <section className='Trabajos-grid'>
                                <article className='Trabajos-article'>
                                    <a titulo='Proyecto Netflix Github' href='https://github.com/luismi11/Netflix-proyecto' target='_blank' >
                                        <img className='Trabajos-img' src="/assets/trabajo3_netflix.png" alt="" />
                                        <h3 className='Trabajos-h3'>NETFLIX - COPYCAT</h3>
                                    </a>
                                </article>
                                <article className='Trabajos-article'>
                                    <a titulo='Proyecto Spotify Github' href='https://github.com/luismi-sg/APP-Spotify' target='_blank' >
                                        <img className='Trabajos-img' src="/assets/trabajo2_spotify.png" alt="" />
                                        <h3 className='Trabajos-h3'>SPOTIFY - COPYCAT</h3>
                                    </a>
                                </article>
                                <article className='Trabajos-article'>
                                    <a titulo='Proyecto Pink Floyd Github' href='https://github.com/luismi11/atom-mother-web' target='_blank' >
                                        <img className='Trabajos-img' src="/assets/trabajo1_pink-floyd.png" alt="" />
                                        <h3 className='Trabajos-h3'>PINK FLOYD</h3>
                                    </a>
                                </article>
                            </section>
                        </div>
                        <div className={ toggleState === 2 ? "Tabs-content content-isActive" : "Tabs-content"}>
                            <p>SOY DOS</p>
                        </div>
                        <div className={ toggleState === 3 ? "Tabs-content content-isActive" : "Tabs-content"}>
                            <p>SOY TRES</p>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}