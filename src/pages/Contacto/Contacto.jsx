import { DownloadIcon, IconGithub, IconLinkedin, IconMail } from '../../utils/icons'
import './Contacto.css'
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet-async'

export const Contacto = () => {

    const { t } = useTranslation();

    return (
        <>
            <Helmet>
                <title>LuisMi • Contact</title>
                <meta name="description" content="Contact Luis Miguel Sovero" />
            </Helmet>
            <div className='Contacto'>
                <main className='Contacto-wrapper'>

                    <div className="Contacto-info">
                        <picture className='Contacto-hand'>
                            <img className='Icon-svg' src="/assets/hand.svg" alt="Icono mano" />
                        </picture>
                        <h1> {t('contactTitle')} </h1>
                        <h2> {t('contactText')} </h2>
                    </div>

                    <div className='Redes-wrapper'>
                        <ul className='Contacto-ul'>
                            <li className='Contacto-li'>
                                <a className='Redes-a contacto' href='/assets/CV_LuisMiguel.pdf' target='_blank' title='CV Luismi'>
                                    <DownloadIcon />
                                    <span>Resume</span>
                                </a>
                            </li>
                            <li className='Contacto-li'>
                                <a className='Redes-a contacto' href='https://www.linkedin.com/in/luismisg/' target='_blank' title='Linkedin Profile'>
                                    <IconLinkedin />
                                    <span>Linkedin</span>
                                </a>
                            </li>
                            <li className='Contacto-li'>
                                <a className='Redes-a contacto' href='https://github.com/luismi-sg' target='_blank' title='Github Profile'>
                                    <IconGithub />
                                    <span>Github</span>
                                </a>
                            </li>
                            <li className='Contacto-li'>
                                <a className='Redes-a contacto' href='mailto:lmsg1191@gmail.com' target='_blank' title='Github Profile'>
                                    <IconMail />
                                    <span>lmsg1191@gmail.com</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </main>
            </div>
        </>
    )
}