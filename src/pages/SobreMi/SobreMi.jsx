import './SobreMi.css'
import { useTranslation } from 'react-i18next';


export const SobreMi = () => {

    const { t } = useTranslation();
    const stackFront = [ 'Figma', 'FigJam', 'Adobe XD', 'Maze', 'Illustrator', 'Photoshop', 'After Effects', 'Lightroom' ]
    const stackBack = [ 'HTML', 'CSS/SASS', 'Tailwind', 'JavaScript', 'React', 'Astro', 'MongoDB' , 'NodeJS', 'ExpressJS', 'GitHub' ]

    return( 
        <div className='Sobremi'>
            <main className='Sobremi-wrapper'>
                <section className='Perfil-section'>
                    <div className='Perfil-wrapper grid-1'>
                        <div className='grid-container' style={{gridArea: 'box-1'}}>
                            <img className='Imagen-img' src="/assets/luismi-web-BN.webp" alt="Foto Luismi Sovero" />
                        </div>
                        <div className="grid-container " style={{gridArea: 'box-2'}}>
                            <div className='Info-wrapper'>
                                <img className="Info-logo" src="/assets/Logo-luismi.svg" alt="Logo LuisMi" />
                            </div>
                        </div>
                        <div className="grid-container" style={{gridArea: 'box-3'}}>
                            <div className='Info-wrapper'>
                                <h1 className='Info-h1'>Luis Miguel Sovero G.</h1>
                                <h2 className='Info-h2'>{t('position')}</h2>
                                <p className='Info-p'>{t('aboutDescription1')}</p>
                                <p className="Info-p">{t('aboutDescription2')}</p>
                            </div>
                        </div>
                        <div className="grid-container phrase" style={{gridArea: 'box-4'}}>
                            <div className='Info-wrapper phrase'>
                                <h3 className='Info-phrase'>"{t('aboutPhrase')}".</h3>
                                <p>- Charles Eames -</p>
                            </div>
                        </div>
                        <div className="grid-container" style={{gridArea: 'box-5'}}>
                            <a className='grid-enlace' href='/assets/CV_LuisMiguel.pdf' target='_blank'  title='Abre el Curriculum de LuisMi'>
                                <span className='grid-span'>{t('aboutDownload')}</span>
                                <span className='grid-span'>{t('aboutLuismi')}</span>
                                <span className='grid-span'>{t('aboutDownload')}</span>
                                <span className='grid-span'>{t('aboutLuismi')}</span>
                            </a>
                        </div>
                    </div>
                </section>
                <section className='Perfil-section'>
                    <div className='Perfil-wrapper grid-2'>
                        <div className="grid-container" style={{gridArea: 'box-1'}}>
                            <div className='Info-wrapper'>
                                <h2 className='Info-h2'>{t('aboutExperience')}</h2>
                                <h3 className='Info-h3'>AU Consultores | 2023 - 2024</h3>
                                <p className='Info-p'>{t('Experience1')}</p>
                                <hr/>
                                <h3 className='Info-h3'>Universidad de Lima | 2020 - 2022</h3>
                                <p className='Info-p'>{t('Experience2')}</p>
                                <hr/>
                                <h3 className='Info-h3'>MU Marketing & Content Lab | 2017 - 2019</h3>
                                <p className='Info-p'>{t('Experience3')}</p>
                            </div>
                        </div>
                        <div className="grid-container" style={{gridArea: 'box-2'}}>
                            <div className='Info-wrapper Pills-wrapper'>
                                <h2 className='Info-h2'>Herramientas</h2>
                                <strong className="Info-strong">{t('aboutTitleDesigner')}</strong>
                                <ul className='Stack-ul'>
                                    { stackFront.map( (item, index) => <li className='Stack-pill' key={ index }>{ item }</li> ) }
                                </ul>
                                <strong className="Info-strong">{t('aboutTitleDeveloper')}</strong>
                                <ul>
                                    { stackBack.map( (item, index) => <li className='Stack-pill' key={ index }>{ item }</li> ) }
                                </ul>
                            </div>
                        </div>
                        <div className='grid-container gradient' style={{gridArea: 'box-3'}}>
                            <div className='Info-wrapper'>
                                <picture>
                                    <img className="Info-icon" src="/assets/hand-white.svg" alt="Icono mano" />
                                </picture>
                                <h3 className='Info-h3-gradient'>{t('aboutExtra')}</h3>
                                <p className='Info-p'>{t('aboutExtraText')}</p>
                            </div>
                        </div>
                        <div className='grid-container' style={{gridArea: 'box-4'}}>
                            <img className='Imagen-img' src="/assets/more-hobbies-2.webp" alt="Foto Luismi Sovero" />
                        </div>
                        <div className='grid-container' style={{gridArea: 'box-5'}}>
                            <img className='Imagen-img' src="/assets/more-hobbies-1.webp" alt="Foto Luismi Sovero" />
                        </div>
                        <div className='grid-container' style={{gridArea: 'box-6'}}>
                            <img className='Imagen-img' src="/assets/more-hobbies-3.webp" alt="Foto Luismi Sovero" />
                        </div>
                    </div>
                </section>
            </main>
        </div>
    )
}