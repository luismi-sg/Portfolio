import { useState } from 'react'
import './BeatScene.css'

export const BeatScene = () => {
    return(
        <div className='BeatScene'>
            <div className="Interna-wrapper">
                <section className="Interna-hero">
                    <div className="Interna-titulo">
                        <div className='Interna-pills'>
                            <span className='Interna-pill'> UX/UI </span>
                            <span className='Interna-pill'> APP </span>
                            <span className='Interna-pill'> MOBILE </span>
                        </div>
                        <h1 className='Interna-h1'>BeatScene app<span className='Color-lila'>.</span></h1>
                        <h2 className='Interna-h2'>Diseño de aplicación para amantes de los conciertos y la música en vivo. </h2>
                    </div>
                    <picture>
                        <source media="(max-width: 960px)" srcSet="/assets/beatscene_hero-mobile.webp" type="image/webp" />
                        <img className="Interna-img" src="/assets/beatscene_hero.webp" alt="BeatScene Hero App" />
                    </picture>
                    
                </section>
                <section className="Interna-info">
                    <div className="Info-container izquierda">
                        <h3 className="Interna-h3"><span className='Color-lila'>OBJETIVO:</span> ¿Qué es BeatScene?</h3>
                        <p className="Interna-p"> Es una App donde puedes compartir la experiencia de vivir tu evento músical favorito con quien tu quieras o tener la posibilidad de conocer nuevas personas con tus mismos gustos musicales y vivirla juntos.</p>
                    </div>
                    <div className="Info-container derecha">
                        <img className="Interna-img" src="/assets/beatscene_info.webp" alt="Logo BeatScene" />
                    </div>
                </section>
                <section className='Interna-grid'>
                    <article className='Grid-article'>
                        <h3 className='Interna-h3'>BeatScene</h3>
                        <p className='Interna-p'>Proyecto UX/UI Mobile</p>
                        <img className='Grid-image-fondo' src="/assets/beatscene_fondo1.webp" alt="" />
                    </article>
                    <article className='Grid-article flex-center'>
                        <img className="Grid-logo" src="/assets/beatscene_logo.png" alt="Logo BeatScene" />
                    </article>
                    <article className='Grid-article'>
                        <h3 className='Interna-h3'>"Me encanta ir a conciertos y conocer gente nueva"</h3>
                        <p className='Interna-p'><span className='Color-lila'>Dayana Villaizan - Raver</span></p>
                    </article>
                    <article className='Grid-article autoSlide'>
                        <div className='autoSlide-wrapper'>
                            <span className='autoSlide-span'>BeatScene BeatScene BeatScene BeatScene BeatScene BeatScene BeatScene BeatScene BeatScene</span>
                            <span className='autoSlide-span'>Comparte tu música y disfruta de conciertos Comparte tu música y disfruta de conciertos </span>
                            <span className='autoSlide-span'>BeatScene BeatScene BeatScene BeatScene BeatScene BeatScene BeatScene BeatScene BeatScene</span>
                            <span className='autoSlide-span'>Comparte tu música y disfruta de conciertos Comparte tu música y disfruta de conciertos </span>
                        </div>
                    </article>
                </section>
                <section className="Interna-info proceso">
                    <div className="Info-container derecha">
                        <picture>
                            <source media="(max-width: 960px)" srcSet="/assets/BeatScene-sistemadiseno-mobile.webp" type="image/webp" />
                            <img className="Interna-img" src="/assets/BeatScene-sistemadiseno.webp" alt="Logo BeatScene" />
                        </picture>
                    </div>
                    <div className="Info-container izquierda">
                        <h3 className="Interna-h3"><span className='Color-lila'>PROCESO:</span> El Diseño</h3>
                        <p className="Interna-p"> El proceso para diseñar la app empezó con un estudio completo e investigación en la experiencia de usuario, para luego seguir con los pasos necesarios para diseñar la interfaz. Desarrollando un sistema de diseño solido, con wireframes y una estructura enfocada en la interactividad del usuario con la app.</p>
                    </div>
                </section>
                <section className="Interna-info resultado">
                    <div className="Info-container izquierda">
                        <h3 className="Interna-h3"><span className='Color-lila'>RESULTADO FINAL:</span> BeatScene</h3>
                        <p className="Interna-p"> La App fue enteramente diseñada en Figma, el prototipo fue testeado con la herramienta Maze y se hicieron cambios dentro del interfaz según el feedback de los constantes testeos y feedbacks de los posibles usuarios.</p>
                    </div>
                    <div className="Info-container derecha">
                        <video className='Interna-img' preload='yes' autoPlay='on' loop='on' muted data-object-fit="cover" playsInline controls='on'>
                            <source media="(max-width: 960px)" autoPlay src='/assets/BeatScene-video-mobile.mp4' type="video/mp4"></source>
                            <source autoPlay src='/assets/BeatScene-video.mp4' type="video/mp4"></source>
                        </video>
                    </div>
                    
                </section>
            </div>
            <div className='Interna-Banner'>
                <div className="Banner-wrapper">
                    {/* <div className="Banner-works">
                        <div className="work-prev">

                        </div>
                        <div className="work-next">
                            
                        </div>
                    </div> */}
                    <div className="Banner-info">
                        <div className="info-wrapper">
                            <div className="info-info">
                                <h2 className="info-h2">Si sientes que podemos trabajar juntos, conversemos.</h2>
                            </div>
                            <div className="info-button">
                                <a href='/contacto'>Contáctame 
                                <svg xmlns="http://www.w3.org/2000/svg" className="Trabajos-icon" viewBox="0 0 16 16">
                                    <path d="M0 8a8 8 0 1 0 16 0A8 8 0 0 0 0 8zm5.904 2.803a.5.5 0 1 1-.707-.707L9.293 6H6.525a.5.5 0 1 1 0-1H10.5a.5.5 0 0 1 .5.5v3.975a.5.5 0 0 1-1 0V6.707l-4.096 4.096z"/>
                                </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}