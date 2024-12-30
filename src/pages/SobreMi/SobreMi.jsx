import './SobreMi.css'
import { useTranslation } from 'react-i18next';


export const SobreMi = () => {

    const { t } = useTranslation();
    const stackFront = [ 'Figma', 'FigJam', 'Illustrator', 'Photoshop', 'After Effects' ]
    const stackBack = [ 'HTML', 'CSS/SASS', 'JavaScript', 'React', 'Astro' ]

    return( 
        <div className='Sobremi'>
            <main className='Sobremi-wrapper'>
                <section className='Perfil-wrapper'>
                    <div className='Imagen-wrapper grid-container'>
                        <img className='Imagen-img' src="/assets/luismi-web-BN.webp" alt="Foto Luismi Sovero" />
                    </div>
                    <div className="grid-container">
                        <div className='Info-wrapper Logo-wrapper'>
                            <img  src="/assets/Logo-luismi.svg" alt="Logo LuisMi Sovero" />
                        </div>
                    </div>
                    <div className="grid-container mobile">
                        <div className='Info-wrapper'>
                            <h1 className='Info-h1'>Luis Miguel Sovero G.</h1>
                            <h2 className='Info-h2'>{t('position')}</h2>
                            <p>{t('aboutDescription')}</p>
                        </div>
                    </div>
                    <div className="grid-container">
                        <div className='Info-wrapper Pills-wrapper'>
                            <h3 className='Info-h3'>{t('aboutStackTitle')}</h3>
                            <p>{t('aboutExperience')}</p>
                            <strong>{t('aboutTitleDesigner')}</strong>
                            <ul className='Stack-ul'>
                                { stackFront.map( (item, index) => <li className='Stack-pill' key={ index }>{ item }</li> ) }
                            </ul>
                            <strong>{t('aboutTitleDeveloper')}</strong>
                            <ul>
                                { stackBack.map( (item, index) => <li className='Stack-pill' key={ index }>{ item }</li> ) }
                            </ul>
                        </div>
                    </div>
                    <div className="grid-container">
                        <a className='grid-enlace' href='/assets/CV_LuisMiguel.pdf' target='_blank'  title='Abre el Curriculum de LuisMi'>
                            <span className='grid-span'>{t('aboutDownload')}</span>
                            <span className='grid-span'>{t('aboutLuismi')}</span>
                            <span className='grid-span'>{t('aboutDownload')}</span>
                            <span className='grid-span'>{t('aboutLuismi')}</span>
                        </a>
                    </div>
                </section>
            </main>
        </div>
    )
}