import { useTranslation } from 'react-i18next';

import { useState } from 'react'
import { IconCopy, IconGithub, IconLinkedin } from '../../utils/icons'
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
                    <h1 className='Inicio-h1'> LuisMi</h1>
                    <h2 className='Inicio-h2'>{t('position')}</h2>
                </main>
                <footer>
                    <span className='Inicio-span'>
                        <a href='https://github.com/luismi-sg' target='_blank' title='Go to Github'>
                            <IconGithub/>
                        </a>
                        <a href='https://www.linkedin.com/in/luismisg/' target='_blank' title='Go to Linkedin'>
                            <IconLinkedin/>
                        </a>
                    </span>
                    <span className='Inicio-span'>
                        <strong>{emailText}</strong>
                        <button onClick={ handleClick }>
                            <IconCopy/>
                            <strong className={ toolTip ? 'isActive' : '' }> {t('mailCopy')} </strong>
                        </button>
                    </span>
                </footer>
            </div>
        </div>
    )
}
