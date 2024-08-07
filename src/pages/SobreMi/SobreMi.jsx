import './SobreMi.css'

export const SobreMi = () => {

    const stackFront = [ 'HTML', 'CSS', 'JavaScript', 'React' ]
    const stackBack = [ 'MongoDB', 'NodeJS', 'Express' ]

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
                            <h2 className='Info-h2'>FrontEnd Developer & UX/UI Designer</h2>
                            <p>Me llaman LuisMi. Soy desarrollador enfocado en el FrontEnd y diseñador UX/UI con más de diez años de experiencia en la industria del diseño y dos años en la creación y desarrollo de interfaces web. Mi habilidad para combinar diseño visual y funcionalidad técnica me permite desarrollar soluciones digitales estéticamente agradables y altamente usables. </p>
                        </div>
                    </div>
                    <div className="grid-container">
                        <div className='Info-wrapper Pills-wrapper'>
                            <h3 className='Info-h3'>Stack de desarrollo</h3>
                            <p>Mi experiencia me ha dotado de habilidades sólidas en diseño digital y creación de sistemas de diseño innovadores, siempre buscando la formación continua, las mejores herramientas y tendencias actuales.</p>
                            <strong>FrontEnd</strong>
                            <ul>
                                { stackFront.map( (item, index) => <li className='Stack-pill' key={ index }>{ item }</li> ) }
                            </ul>
                            <strong>BackEnd</strong>
                            <ul>
                                { stackBack.map( (item, index) => <li className='Stack-pill' key={ index }>{ item }</li> ) }
                            </ul>
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
                </section>
            </main>
        </div>
    )
}