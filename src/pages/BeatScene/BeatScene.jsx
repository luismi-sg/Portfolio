import { useState } from 'react'
import './BeatScene.css'

export const BeatScene = () => {
    return(
        <div className='BeatScene'>
            <div className="Interna-wrapper">
                <section className="Interna-hero">
                    <img className="Interna-img" src="/assets/beatscene_hero.webp" alt="BeatScene Hero App" />
                    <div className="Interna-titulo">
                        <h1 className='Interna-h1'>BeatScene app<span className='Color-lila'>.</span></h1>
                        <h2 className='Interna-h2'>Aplicación para amantes de los conciertos y la música en vivo. </h2>
                    </div>
                </section>
                <section className="Interna-info">
                    <div className="Info-container derecha">
                        <img className="Interna-img" src="/assets/beatscene_info.webp" alt="Logo BeatScene" />
                    </div>
                    <div className="Info-container izquierda">
                        <h3 className="Interna-h3"> ¿Qué es BeatScene?</h3>
                        <p className="Interna-p"> Es una App donde puedes compartir la experiencia de vivir tu evento músical favorito con quien tu quieras o tener la posibilidad de conocer nuevas personas con tus mismos gustos musicales y vivirla juntos.</p>
                    </div>
                </section>
                <section className='Interna-grid'>
                    <article className='Grid-article'>
                        <h3 className='Interna-h3'>BeatScene</h3>
                        <p className='Interna-p'>Proyecto UX/UI</p>
                        <img className='Grid-image-fondo' src="/assets/beatscene_fondo1.webp" alt="" />
                    </article>
                    <article className='Grid-article'>
                        <h3 className='Interna-h3'>"Me encanta ir a conciertos y conocer gente nueva"</h3>
                        <p className='Interna-p'><span className='Color-lila'>Proyecto UX/UI</span></p>
                    </article>
                    <article className='Grid-article flex-center'>
                        <img className="Grid-logo" src="/assets/beatscene_logo.png" alt="Logo BeatScene" />
                    </article>
                    <article className='Grid-article'>

                    </article>
                </section>
            </div>
        </div>
    )
}