import { useState } from 'react'
import './Proyectos.css'
import { useTranslation } from 'react-i18next';

export const BeatScene = () => {

    const { t } = useTranslation();

    return(
        <div className='Interna-container'>
            <div className="Interna-wrapper">
                <section className="Interna-hero">
                    <div className="Interna-titulo">
                        <ul className='Interna-pills'>
                            <li className='Interna-pill'> UX/UI </li>
                            <li className='Interna-pill'> APP </li>
                            <li className='Interna-pill'> DESIGN SYSTEM </li>
                            <li className='Interna-pill'> FIGMA </li>
                        </ul>
                        <h1 className='Interna-h1'>{t('beatsceneTitle')}<span className='Color-lila'>.</span></h1>
                        <h2 className='Interna-h2'>{t('beatsceneExcerpt')}</h2>
                    </div>
                    <div className="Info-container derecha">
                        <picture>
                            <source media="(max-width: 960px)" srcSet="/assets/beatscene_hero-mobile.webp" type="image/webp" />
                            <img className="Interna-img" src="/assets/beatscene_hero.webp" alt="BeatScene Hero App" />
                        </picture>
                    </div>
                </section>
                <section className="Interna-info">
                    <div className="Info-container izquierda">
                        <h3 className="Interna-h3"><span className='Color-lila'>{t('projectObjective')}:</span> {t('beatsceneWhatIs')}</h3>
                        <p className="Interna-p"> {t('beatsceneWhatIsText')}</p>
                    </div>
                    <div className="Info-container derecha">
                        <img className="Interna-img" src="/assets/beatscene_info.webp" alt="Logo BeatScene" />
                    </div>
                </section>
                <section className='Interna-grid'>
                    <article className='Grid-article'>
                        <h3 className='Interna-h3'>{t('beatsceneTitle')}</h3>
                        <p className='Interna-p'>{t('beatsceneSubtitle')}</p>
                        <img className='Grid-image-fondo' src="/assets/beatscene_fondo1.webp" alt="" />
                    </article>
                    <article className='Grid-article flex-center'>
                        <img className="Grid-logo" src="/assets/beatscene_logo.png" alt="Logo BeatScene" />
                    </article>
                    <article className='Grid-article'>
                        <h3 className='Interna-h3'>"{t('beatscenePhrase')}"</h3>
                        <p className='Interna-p'><span className='Color-lila'>Dayana Villaizan - Raver</span></p>
                    </article>
                    <article className='Grid-article autoSlide'>
                        <div className='autoSlide-wrapper'>
                            <span className='autoSlide-span'>{t('beatsceneslide1')}</span>
                            <span className='autoSlide-span'>{t('beatsceneslide2')}</span>
                            <span className='autoSlide-span'>{t('beatsceneslide1')}</span>
                            <span className='autoSlide-span'>{t('beatsceneslide2')}</span>
                        </div>
                    </article>
                </section>
                <section className="Interna-info proceso">
                    <div className="Info-container derecha">
                        <iframe className="Info-iframe" src="https://embed.figma.com/proto/O3tz9wXZ4tAj85Nm0DTgRi/Proyecto-Final?page-id=6%3A2&node-id=30-310&p=f&viewport=577%2C1509%2C0.2&scaling=contain&content-scaling=fixed&embed-host=share" allowFullScreen></iframe>
                    </div>
                    <div className="Info-container">
                        <h3 className="Interna-h3"><span className='Color-lila'>{t('projectProcess')}:</span> {t('beatsceneProcessTitle')}</h3>
                        <p className="Interna-p">{t('beatsceneProcessText')}</p>
                    </div>
                </section>
                <section className="Interna-info resultado">
                    <div className="Info-container">
                        <h3 className="Interna-h3"><span className='Color-lila'>{t('beatsceneResult')}:</span> {t('beatsceneTitle')}</h3>
                        <p className="Interna-p"> {t('beatsceneResultText')}</p>
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
                    <div className="Banner-info">
                        <div className="info-wrapper">
                            <div className="info-info">
                                <h2 className="info-h2">{t('infoContactText')}</h2>
                            </div>
                            <div className="info-button">
                                <a href='/contacto'>{t('infoContact')} 
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