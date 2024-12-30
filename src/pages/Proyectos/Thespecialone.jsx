import './Proyectos.css'
import { useTranslation } from 'react-i18next';

export const Thespecialone = () =>{

    const { t } = useTranslation();

    return(
        <div className="Interna-container">
            <div className="Interna-wrapper">
                <section className="Interna-hero">
                    <div className="Interna-titulo">
                        <ul className='Interna-pills'>
                            <li className='Interna-pill'> UX/UI </li>
                            <li className='Interna-pill'> WEB </li>
                            <li className='Interna-pill'> BLOG </li>
                            <li className='Interna-pill'> MAGAZINE </li>
                        </ul>
                        <h1 className='Interna-h1'>{t('specialTitle')}<span className='Color-lila'>.</span></h1>
                        <h2 className='Interna-h2'>{t('specialText')}</h2>
                        <div className="info-button">
                            <a href='https://thespecialone.top/' target='blank' title='Web The Special One'>{t('projectVisit')}
                                <svg xmlns="http://www.w3.org/2000/svg" className="Trabajos-icon" viewBox="0 0 16 16">
                                    <path d="M0 8a8 8 0 1 0 16 0A8 8 0 0 0 0 8zm5.904 2.803a.5.5 0 1 1-.707-.707L9.293 6H6.525a.5.5 0 1 1 0-1H10.5a.5.5 0 0 1 .5.5v3.975a.5.5 0 0 1-1 0V6.707l-4.096 4.096z"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div className="Info-container derecha">
                        <picture>
                            <source media="(max-width: 960px)" srcSet="/assets/thespecialone_hero-mobile.webp" type="image/webp" />
                            <img className="Interna-img" src="/assets/thespecialone_hero.webp" alt="BeatScene Hero App" />
                        </picture>
                    </div>
                </section>
                <section className="Interna-info">
                    <div className="Info-container">
                        <h3 className="Interna-h3"><span className='Color-lila'>{t('projectObjective')}:</span> {t('specialWhatIs')}</h3>
                        <p className="Interna-p">{t('specialWhatIsText')} </p>
                    </div>
                    <div className="Info-container">
                        <h3 className="Interna-h3"><span className='Color-lila'>{t('projectProcess')}:</span> {t('specialDesign')}</h3>
                        <p className="Interna-p">{t('specialDesignText')}</p>
                    </div>
                </section>
                <section className='Interna-grid'>
                    <article className='Grid-article Color-lila'>
                        <h3 className='Interna-h3'>{t('specialTitle')}</h3>
                        <p className='Interna-p'>{t('specialSubtitle')}</p>
                        <img className='Grid-image-fondo' src="/assets/thespecialone_fondo1.webp" alt="" />
                    </article>
                    <article className='Grid-article flex-center'>
                        <img className="Grid-logo" src="/assets/thespecialone_logo.svg" alt="Logo The Special One web" />
                    </article>
                    <article className='Grid-article'>
                        <h3 className='Interna-h3'>{t('specialTools')}</h3>
                        <div className='Interna-pills Color-lila'>
                            <span className='Interna-pill'> ILLUSTRATOR </span>
                            <span className='Interna-pill'> FIGMA </span>
                            <span className='Interna-pill'> WORDPRESS </span>
                            <span className='Interna-pill'> CSS </span>
                            <span className='Interna-pill'> ELEMENTOR PRO </span>
                            <span className='Interna-pill'> MAILCHIMP </span>
                        </div>
                    </article>
                    <article className='Grid-article autoSlide'>
                        <div className='autoSlide-wrapper'>
                            <span className='autoSlide-span color-white'>{t('specialslide1')}</span>
                            <span className='autoSlide-span Color-lila'>{t('specialslide2')}</span>
                            <span className='autoSlide-span color-white'>{t('specialslide1')}</span>
                            <span className='autoSlide-span Color-lila'>{t('specialslide2')}</span>
                        </div>
                    </article>
                </section>
                <section className="Interna-info proceso">
                    <div className="Info-container derecha">
                        <picture>
                            <source media="(max-width: 960px)" srcSet="/assets/thespecialone-sistemadiseno-mobile.webp" type="image/webp" />
                            <img className="Interna-img" src="/assets/thespecialone-sistemadiseno.webp" alt="Logo BeatScene" />
                        </picture>
                    </div>
                    <div className="Info-container">
                        <h3 className="Interna-h3"><span className='Color-lila'>{t('projectResult')}:</span> {t('specialResultTitle')}</h3>
                        <p className="Interna-p"> {t('specialResultText')} </p>
                    </div>
                    
                </section>
            </div>
            <div className='Interna-Banner thespecialone-banner'>
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