import { useTranslation } from 'react-i18next';
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { IconGithub, IconLinkedin, DownloadIcon, IconMail, IconNavegar} from '../../utils/icons'
import './Inicio.css'

export const Inicio = () => {

    const { t } = useTranslation();
    const emailText = 'lmsg1191@gmail.com'

    const [ toolTip , setToolTip ] = useState(false)
    
    const handleClick = () => {
        navigator.clipboard.writeText(emailText)

        setToolTip(!toolTip)

        setTimeout(() => {
            setToolTip(false)
        }, 800)
    }

    return( 
        <div className='Inicio'>
            <div className='Inicio-wrapper'>
                <main>
                    <div className='Inicio-content'>
                        <h1 className='Inicio-h1'>LuisMi<span className="purple">.</span></h1>
                        <h2 className='Inicio-h2'>{t('position')}</h2>
                        <p className='Inicio-p'>{t('background')}</p>
                    </div>
                    <footer>
                        <p className="Inicio-p purple">{t('getintouch')}</p>
                        <span className='Inicio-span'>
                            <a className='Works-dot' href='https://github.com/luismi-sg' target='_blank' title='Go to Github'>
                                <IconGithub/>
                            </a>
                            <a className='Works-dot' href='https://www.linkedin.com/in/luismisg/' target='_blank' title='Go to Linkedin'>
                                <IconLinkedin/>
                            </a>
                            <button className='Works-dot' onClick={ handleClick } title='Copy Email'>
                                <IconMail/>
                                <strong className={ toolTip ? 'isActive' : '' }> {t('mailCopy')} </strong>
                            </button>
                            <a className='Works-dot' href='/assets/CV_LuisMiguel.pdf' target='_blank'  title='Abre el Curriculum de LuisMi'>
                                <DownloadIcon/>
                            </a>
                        </span>
                    </footer>
                </main>
                <aside>
                    <div className='Works-slider'>
                        <div className='Works-wrapper' id="works1">
                            <div className='Works-article' >
                                <img className='Works-img' src="./assets/BeatScene-mini.webp" alt="" loading='lazy' />
                                <div className='Works-text'>
                                    <img src="assets/logo-beatScene.png" className="Works-logo"/>
                                    <h2 className='Works-h2'>{t('sliderName1')}</h2>
                                    <p className='Works-p'>{t('description1')}</p>
                                    <Link className='Works-icon' to='/beatscene' title='Beatscene'>
                                        <IconNavegar/>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className='Works-wrapper' id="works2">
                            <div className='Works-article'>
                                <div className='Works-text'>
                                    <img src="assets/logo-SpecialOne.png" className="Works-logo"/>
                                    <h2 className='Works-h2'>{t('sliderName2')}</h2>
                                    <p className='Works-p'>{t('description2')}</p>
                                    <Link className='Works-icon' to='/thespecialone' title='The Special One'>
                                        <IconNavegar/>
                                    </Link>
                                </div>
                                <img className='Works-img' src="./assets/SpecialOne-mini.webp" alt="" loading='lazy' />
                            </div>
                        </div>
                        <div className='Works-wrapper' id="works3">
                            <div className='Works-article'>
                                <img className='Works-img' src="./assets/BeApolo-mini.webp" alt="" loading='lazy' />
                                <div className='Works-text'>
                                    <img src="assets/logo-Beapolo.png" className="Works-logo"/>
                                    <h2 className='Works-h2'>{t('sliderName3')}</h2>
                                    <p className='Works-p'>{t('description3')}</p>
                                    <Link className='Works-icon' to='https://beapolo.io/' target="_blank" title='Web BeApolo'>
                                        <IconNavegar/>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className='Works-wrapper' id="works4">
                            <div className='Works-article more'>
                                <div className='Works-more'>
                                    <h3 className='Works-h3'>{t('workingOn')}</h3>
                                    <p className='Works-p'>{t('workingOnText')}</p>
                                    <div className='Works-footer'>
                                        <p className="Inicio-p purple">{t('workingOnButton')}</p>
                                        <Link className='Works-icon' to='/sobremi' title='All Works'><IconNavegar/></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='Works-bar'>
                        <div className='Works-navigation'>
                            <a href='#works1' className='Works-dot'>
                                <img src="assets/logo-beatScene-mini.png"/>
                            </a>
                            <a href='#works2' className='Works-dot'>
                                <img src="assets/logo-SpecialOne-mini.png"/>
                            </a>
                            <a href='#works3' className='Works-dot'>
                                <img src="assets/logo-Beapolo-mini.png"/>
                            </a>
                            <a href='#works4' className='Works-dot'>
                                <img src="assets/logo-Quotes.png"/>
                            </a>
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    )
}
