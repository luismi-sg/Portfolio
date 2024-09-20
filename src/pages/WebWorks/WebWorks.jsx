import './WebWorks.css';
import { proyectos } from '../../bbdd/proyectos';
import { IconArrow, IconGithub } from '../../utils/icons';
import { useNavigate, useParams } from 'react-router-dom'


export const WebWorks = ( titulo ) =>{

    

    return(
        <div className="WebWorks">
            <div className="Webworks-wrapper">
                <section className="Webworks-hero">
                    <div className="Webworks-titulo">
                        <div className='Webworks-pills'>
                            <span className='Webworks-pill'> UX/UI </span>
                            <span className='Webworks-pill'> APP </span>
                            <span className='Webworks-pill'> MOBILE </span>
                        </div>
                        <h1 className='Webworks-h1'>BeatScene app<span className='Color-lila'>.</span></h1>
                        <h2 className='Webworks-h2'>Diseño de aplicación para amantes de los conciertos y la música en vivo.</h2>
                        <div className="web-button">
                            <a href='https://thespecialone.pro/' target='blank' title='Web '>Visitar la Web 
                                <IconArrow/>
                            </a>
                            <a href='https://thespecialone.pro/' target='blank' title='Repositorio '>Ver repositorio
                                <IconGithub />
                            </a>
                        </div>
                    </div>
                </section>

                <section className="Webworks-info">
                    <div className="Info-container izquierda">
                        <h3 className="Webworks-h3"><span className='Color-lila'>OBJETIVO:</span> ¿Qué es BeatScene?</h3>
                        <p className="Webworks-p"> Es una App donde puedes compartir la experiencia de vivir tu evento músical favorito con quien tu quieras o tener la posibilidad de conocer nuevas personas con tus mismos gustos musicales y vivirla juntos.</p>
                    </div>
                    <div className="Info-container derecha">
                        <img className="Webworks-img" src="/assets/beatscene_info.webp" alt="Logo BeatScene" />
                    </div>
                </section>
                
                <section className='Webworks-grid'>
                    <article className='Grid-article'>
                        <h3 className='Webworks-h3'>BeatScene</h3>
                        <p className='Webworks-p'>Proyecto UX/UI Mobile</p>
                        <img className='Grid-image-fondo' src="/assets/beatscene_fondo1.webp" alt="" />
                    </article>
                    <article className='Grid-article flex-center'>
                        <img className="Grid-logo" src="/assets/beatscene_logo.png" alt="Logo BeatScene" />
                    </article>
                    <article className='Grid-article'>
                        <h3 className='Webworks-h3'>"Me encanta ir a conciertos y conocer gente nueva"</h3>
                        <p className='Webworks-p'><span className='Color-lila'>Dayana Villaizan - Raver</span></p>
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
            </div>
        </div>
    )
}