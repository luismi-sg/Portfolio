import { IconGithub, IconLinkedin, IconMail } from '../../utils/icons'
import './SobreMi.css'

export const SobreMi = () => {
    return( 
        <div className='Sobremi'>
            <div className='Sobremi-wrapper'>
                <div className="grid-wrapper">
                    <div className='Perfil-wrapper'>
                    <div className='Imagen-wrapper grid-container'>
                            <img className='Imagen-img' src="/assets/luismi-sovero-foto.webp" alt="" />
                        </div>
                        <div className="grid-container mobile">
                            <div className='Info-wrapper'>
                                <h3 className='Info-h3'>Luis Miguel SG</h3>
                                <h4 className='Info-h4'>FrontEnd Developer & UXUI Designer</h4>
                                <p>Me llaman LuisMi. Soy desarrollador FrontEnd y diseñador UX/UI con más de diez años de experiencia en la industria del diseño y un año en la creación y desarrollo de interfaces web. Mi habilidad para combinar diseño visual y funcionalidad técnica me permite desarrollar soluciones digitales estéticamente agradables y altamente usables. </p>
                            </div>
                        </div>
                        <div className="grid-container">
                        <div className='Info-wrapper'>
                                <h4 className='Info-h4'>FrontEnd Developer & UXUI Designer</h4>
                                <p>Me llaman LuisMi. Soy desarrollador FrontEnd y diseñador UX/UI con más de diez años de experiencia en la industria del diseño y un año en la creación y desarrollo de interfaces web. Mi habilidad para combinar diseño visual. </p>
                            </div>
                        </div>
                        <div className="grid-container">
                            <a className='grid-enlace' href='/assets/CV_LuisMiguel.pdf' target='_blank'  title='Abre el Curriculum de LuisMi'>
                                <span className='grid-span'>Descargar CV Descargar CV Descargar CV Descargar CV Descargar CV Descargar CV Descargar CV Descargar CV</span>
                                <span className='grid-span'>LuisMi LuisMiLuisMi LuisMi LuisMi LuisMi LuisMi LuisMi LuisMi LuisMi LuisMi LuisMi LuisMi LuisMi LuisMi LuisMi</span>
                                <span className='grid-span'>Descargar CV Descargar CV Descargar CV Descargar CV Descargar CV Descargar CV Descargar CV Descargar CV</span>
                                <span className='grid-span'>LuisMi LuisMiLuisMi LuisMi LuisMi LuisMi LuisMi LuisMi LuisMi LuisMi LuisMi LuisMi LuisMi LuisMi LuisMi LuisMi</span>
                            </a>
                        </div>
                        
                        
                    </div>
                </div>
                
            </div>
            
        </div>
    )
}