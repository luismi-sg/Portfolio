import { useState } from 'react'
import './Trabajos.css'


export const Trabajos = () => {

    const [ toggleState, setToggleState] = useState(1)

    const toggleTab = (index) => {
        setToggleState(index)
    }
    const proyectosLm = [
        {
            id: "0",
            img : "/assets/trabajo3_netflix.png",
            alt : "Miniature Netflix App",
            titulo : "Netflix-project",
            gitUrl : "https://github.com/luismi-sg/Netflix-proyecto",
            webUrl : "https://netflix-proyecto.vercel.app/",
        },
        {
            id: "1",
            img : "/assets/trabajo2_spotify.png",
            alt : "Miniature Spotify App",
            titulo : "Spotify-project",
            gitUrl : "https://github.com/luismi-sg/APP-Spotify",
            webUrl : "https://spotify-proyecto.vercel.app/",
        },
        {
            id: "2",
            img : "/assets/trabajo1_pink-floyd.png",
            alt : "Miniature Web Pink Floyd",
            titulo : "Web Pink Floyd",
            gitUrl : "https://github.com/luismi-sg/atom-mother-web",
            webUrl : "https://atom-mother-web.netlify.app/",
        },
    ]
    const uxuiLm = [
        {
            id: "4",
            img : "/assets/trabajo4_beatscene.webp",
            alt : "Miniature BeatScene App",
            titulo : "BeatScene App",
            gitUrl : "#",
            webUrl : "/beatscene",
        }
    ]


    return( 
        <div className='Trabajos'>
            <div className='Trabajos-wrapper'>
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
                            <p>UX/UI Design</p>
                        </div>
                        <div
                        className={ toggleState === 3 ? "Button-tabs tab-isActive" : "Button-tabs"}
                        onClick={() => toggleTab(3)}
                        >
                            <p>Design</p>
                        </div>
                    </div>
                    <div className='Tabs-wrapper'>
                        <div className={ toggleState === 1 ? "Tabs-content content-isActive" : "Tabs-content"}>
                            <section className='Trabajos-grid'>
                            { proyectosLm && proyectosLm.map( ({id , img , alt , titulo , gitUrl , webUrl}) => 
                                <article key = { id } className='Trabajos-article' >
                                    <img className='Trabajos-img' src={ img } alt={ alt } loading='lazy'/>
                                    <div className="Trabajos-info">
                                        <h3 className='Trabajos-h3'>{titulo}</h3>
                                        <div className="Trabajos-rrss">
                                            <a className='Redes-a' href={gitUrl} target='_blank' title='Github'>
                                                <svg xmlns="http://www.w3.org/2000/svg" className="Redes-icon" viewBox="0 0 16 16">
                                                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                                                </svg>
                                            </a>
                                            <a className='Redes-a' href={webUrl} target='_blank' title='WebPage'>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="Redes-icon" viewBox="0 0 16 16">
                                                <path d="M0 8a8 8 0 1 0 16 0A8 8 0 0 0 0 8zm5.904 2.803a.5.5 0 1 1-.707-.707L9.293 6H6.525a.5.5 0 1 1 0-1H10.5a.5.5 0 0 1 .5.5v3.975a.5.5 0 0 1-1 0V6.707l-4.096 4.096z"/>
                                            </svg>
                                            </a>
                                        </div>
                                    </div>
                                </article>
                            ) }
                            </section>
                        </div>
                        <div className={ toggleState === 2 ? "Tabs-content content-isActive" : "Tabs-content"}>
                        <section className='Trabajos-grid'>
                            { uxuiLm && uxuiLm.map( ({id , img , alt , titulo , gitUrl , webUrl}) => 
                                <article key = { id } className='Trabajos-article' >
                                    <img className='Trabajos-img' src={ img } alt={ alt } loading='lazy'/>
                                    <div className="Trabajos-info">
                                        <h3 className='Trabajos-h3'>{titulo}</h3>
                                        <div className="Trabajos-rrss">
                                            <a className='Redes-a' href={webUrl} title='WebPage'>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="Redes-icon" viewBox="0 0 16 16">
                                                <path d="M0 8a8 8 0 1 0 16 0A8 8 0 0 0 0 8zm5.904 2.803a.5.5 0 1 1-.707-.707L9.293 6H6.525a.5.5 0 1 1 0-1H10.5a.5.5 0 0 1 .5.5v3.975a.5.5 0 0 1-1 0V6.707l-4.096 4.096z"/>
                                            </svg>
                                            </a>
                                        </div>
                                    </div>
                                </article>
                            ) }
                            </section>
                        </div>
                        <div className={ toggleState === 3 ? "Tabs-content content-isActive" : "Tabs-content"}>
                            <p>Graphic Design Under Construction...</p>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}