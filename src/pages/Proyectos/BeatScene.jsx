import { useState } from 'react'
import './Proyectos.css'
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async';

export const BeatScene = () => {

    const { t } = useTranslation();

    return(
        <>
            <Helmet>
                <title>LuisMi • BeatScene</title>
                <meta name="description" content="BeatScene App UX/UI Design" />
            </Helmet>
            <div className='Interna-container'>
            <div className="Interna-wrapper">
                <section className="Interna-hero">
                    <div className="Interna-titulo">
                        <img src="assets/logo-beatScene.png" className="Interna-logo"/>
                        <h1 className='Interna-h1'>{t('beatsceneTitle')}<span className='Color-lila'>.</span></h1>
                        <h2 className='Interna-h2'>{t('beatsceneExcerpt')}</h2>
                        <ul className='Interna-pills'>
                            <li className='Interna-pill'> App </li>
                            <li className='Interna-pill'> UX/UI </li>
                            <li className='Interna-pill'> Figma </li>
                            <li className='Interna-pill'> FigJam </li>
                            <li className='Interna-pill'> Design System </li>
                            <li className='Interna-pill'> Double Diamond </li>
                        </ul>                    
                    </div>
                </section>
                <section className="Interna-info">
                    <div className="Info-container flex-2">
                        <span className='Span-Color-lila'>{t('projectObjective')} -</span>
                        <h3 className="Interna-h3">"{t('beatsceneWhatIs')}"</h3>
                    </div>
                    <div className="Info-container flex-3">
                        <p className="Interna-p"> {t('beatsceneWhatIsText')}</p>
                        <p className="Interna-p"> {t('beatsceneWhatIsText2')}</p>
                    </div>
                </section>
                <picture>
                    <source media="(max-width: 48rem)" srcSet="/assets/BeatScene-Cuestionarios-mobile.webp" type="image/webp" />
                    <img className="Interna-img" src="/assets/BeatScene-Cuestionarios.webp" alt="BeatScene Hero App" />
                </picture>

                <section className="Interna-info">
                    <div className="Info-container flex-2">
                        <span className='Span-Color-lila'>{t('projectProcess')} -</span>
                        <h3 className="Interna-h3">{t('beatsceneProcessTitle')}</h3>
                    </div>
                    <div className="Info-container flex-3">
                        <p className="Interna-p"> {t('beatsceneProcessText')}</p>
                    </div>
                </section>
                <picture>
                    <source media="(max-width: 48rem)" srcSet="/assets/BeatScene-UserPersona-mobile.webp" type="image/webp" />
                    <img className="Interna-img" src="/assets/BeatScene-UserPersona.webp" alt="BeatScene Hero App" />
                </picture>

                <section className="Interna-info">
                    <div className="Info-container flex-2">
                        <span className='Span-Color-lila'>{t('beatsceneDesign')} -</span>
                        <h3 className="Interna-h3">{t('beatsceneDesignTitle')}</h3>
                    </div>
                    <div className="Info-container flex-3">
                        <p className="Interna-p"> {t('beatsceneDesignText')}</p>
                        <p className="Interna-p"> {t('beatsceneDesignText2')}</p>
                    </div>
                </section>
                <picture>
                    <source media="(max-width: 48rem)" srcSet="/assets/BeatScene-Wireframes-mobile.webp" type="image/webp" />
                    <img className="Interna-img" src="/assets/BeatScene-Wireframes.webp" alt="BeatScene Hero App" />
                </picture>
                <section className='Interna-grid'>
                    <article className='Grid-article'>
                        <h3 className='Interna-h3'>{t('beatscenePhrase')}</h3>
                        <img className='Grid-image-fondo' src="/assets/beatscene_fondo1.webp" alt="" />
                    </article>
                    <article className='Grid-article flex-center'>
                        <img className="Grid-logo" src="/assets/beatscene_logo.png" alt="Logo BeatScene" />
                    </article>
                    <article className='Grid-article mid-padding'>
                        <picture>
                            <source media="(max-width: 48rem)" srcSet="/assets/BeatScene-Moodboard.webp" type="image/webp" />
                            <img className="Interna-img" src="/assets/BeatScene-Moodboard.webp" alt="BeatScene Hero App" />
                        </picture>
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
                <picture>
                    <source media="(max-width: 48rem)" srcSet="/assets/BeatScene-prototipo-mobile.webp" type="image/webp" />
                    <img className="Interna-img" src="/assets/BeatScene-prototipo.webp" alt="BeatScene Hero App" />
                </picture>
                <section className="Interna-info">
                    <div className="Info-container flex-2">
                        <span className='Span-Color-lila'>{t('beatsceneResult')} -</span>
                        <h3 className="Interna-h3">{t('beatsceneResultTitle')}</h3>
                    </div>
                    <div className="Info-container flex-3">
                        <p className="Interna-p"> {t('beatsceneResultText')}</p>
                        <p className="Interna-p"> {t('beatsceneResultText2')}</p>
                    </div>
                </section>
                <picture>
                    <source media="(max-width: 48rem)" srcSet="/assets/BeatScene-Flowchart-mobile.webp" type="image/webp" />
                    <img className="Interna-img" src="/assets/BeatScene-Flowchart.webp" alt="BeatScene Hero App" />
                </picture>
                <video className='Interna-img' preload='yes' autoPlay='on' loop='on' muted data-object-fit="cover" playsInline controls='on'>
                    <source media="(max-width: 960px)" autoPlay src='/assets/BeatScene-video-mobile.mp4' type="video/mp4"></source>
                    <source autoPlay src='/assets/BeatScene-video.mp4' type="video/mp4"></source>
                </video>
                <section className="Interna-info">
                    <div className="Info-container flex-2">
                        <span className='Span-Color-lila'>{t('beatsceneConclusion')} -</span>
                        <h3 className="Interna-h3">{t('beatsceneConclusionTitle')}</h3>
                    </div>
                    <div className="Info-container flex-3">
                        <p className="Interna-p"> {t('beatsceneConclusionText')}</p>
                    </div>
                </section>
                    <iframe className="Info-iframe" src="https://embed.figma.com/proto/O3tz9wXZ4tAj85Nm0DTgRi/Proyecto-Final?page-id=6%3A2&node-id=30-310&p=f&viewport=577%2C1509%2C0.2&scaling=contain&content-scaling=fixed&embed-host=share" allowFullScreen>
                    </iframe>
                <section className="Interna-info proceso">
                    <div className="info-button">
                        <a href='#'>{t('goToTop')}
                            <svg xmlns="http://www.w3.org/2000/svg" className="Trabajos-icon" viewBox="0 0 16 16">
                                <path d="M16 8A8 8 0 1 0 0 8a8 8 0 0 0 16 0m-7.5 3.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707z"/>
                            </svg>
                        </a>
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
        </>
    )
}