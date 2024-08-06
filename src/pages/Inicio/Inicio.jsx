import { useState } from 'react'
import { IconCopy, IconGithub, IconLinkedin } from '../../utils/icons'
import './Inicio.css'

export const Inicio = () => {

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
                    <h1 className='Inicio-h1'> LuisMi </h1>
                    <h2 className='Inicio-h2'>FrontEnd Developer & UX/UI Designer</h2>
                </main>
                <footer>
                    <span className='Inicio-span'>
                        <a href='https://github.com/luismi-sg' target='_blank' title='Ir a Perfil Github'>
                            <IconGithub/>
                        </a>
                        <a href='https://www.linkedin.com/in/luismisg/' target='_blank' title='Ir a Perfil de Linkedin'>
                            <IconLinkedin/>
                        </a>
                    </span>
                    <span className='Inicio-span'>
                        <strong>{emailText}</strong>
                        <button onClick={ handleClick }>
                            <IconCopy/>
                            <strong className={ toolTip ? 'isActive' : '' }>{"Email copiado"}</strong>
                        </button>
                    </span>
                </footer>
            </div>
        </div>
    )
}
