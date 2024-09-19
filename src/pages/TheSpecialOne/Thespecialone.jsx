import './Thespecialone.css'

export const Thespecialone = () =>{
    return(
        <div className="Thespecialone">
            <div className="Interna-wrapper">
                <section className="Interna-hero">
                    <div className="Interna-titulo">
                        <div className='Interna-pills'>
                            <span className='Interna-pill'> UX/UI </span>
                            <span className='Interna-pill'> WEB </span>
                            <span className='Interna-pill'> BLOG </span>
                            <span className='Interna-pill'> MAGAZINE </span>
                        </div>
                        <h1 className='Interna-h1'>The Special One<span className='color-thespecialone'>.</span></h1>
                        <h2 className='Interna-h2'>Diseño y Desarrollo de Web Magazine sobre Futbol y actualidad. </h2>
                        <div className="info-button">
                            <a href='https://thespecialone.pro/' target='blank' title='Web The Special One'>Visitar la Web 
                                <svg xmlns="http://www.w3.org/2000/svg" className="Trabajos-icon" viewBox="0 0 16 16">
                                    <path d="M0 8a8 8 0 1 0 16 0A8 8 0 0 0 0 8zm5.904 2.803a.5.5 0 1 1-.707-.707L9.293 6H6.525a.5.5 0 1 1 0-1H10.5a.5.5 0 0 1 .5.5v3.975a.5.5 0 0 1-1 0V6.707l-4.096 4.096z"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                    <picture>
                        <source media="(max-width: 960px)" srcSet="/assets/thespecialone_hero-mobile.webp" type="image/webp" />
                        <img className="Interna-img" src="/assets/thespecialone_hero.webp" alt="BeatScene Hero App" />
                    </picture>
                </section>
                <section className="Interna-info">
                    <div className="Info-container">
                        <h3 className="Interna-h3"><span className='color-thespecialone'>OBJETIVO:</span> ¿Qué es?</h3>
                        <p className="Interna-p"> Es una web Magazine enfocada en la actualidad y las últimas noticias del mundo del fútbol, desarrollada con el fin de compartir uno de mis más grandes intereses como es el fútbol. El tono de voz de la web está basada en la actitud y personalidad de Mourinho, un referente como entrenedor y conocedor del deporte rey. </p>
                    </div>
                    <div className="Info-container">
                        <h3 className="Interna-h3"><span className='color-thespecialone'>PROCESO:</span> El Diseño y Desarrollo</h3>
                        <p className="Interna-p">La Interfaz de la web está diseñada en Figma, utilicé un sistema de diseño y los principios del Diseño Atómico. Para el Desarrollo de la web utilice la combinación del CMS Wordpress y el builder Elementor PRO, ya que es lo más optimo para este tipo de Blog/Magazine el cual recibirá entradas y contenido constantemente.</p>
                    </div>
                </section>
                <section className='Interna-grid'>
                    <article className='Grid-article color-thespecialone'>
                        <h3 className='Interna-h3'>The Special One</h3>
                        <p className='Interna-p'>Proyecto Blog Web</p>
                        <img className='Grid-image-fondo' src="/assets/thespecialone_fondo1.webp" alt="" />
                    </article>
                    <article className='Grid-article flex-center'>
                        <img className="Grid-logo" src="/assets/thespecialone_logo.svg" alt="Logo The Special One web" />
                    </article>
                    <article className='Grid-article'>
                        <h3 className='Interna-h3'>Herramientas</h3>
                        <div className='Interna-pills color-thespecialone'>
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
                            <span className='autoSlide-span color-white'>The Special One The Special One The Special One The Special One The Special One </span>
                            <span className='autoSlide-span color-thespecialone'>Somos Haters. Cero Hipocresía. Somos Haters. Cero Hipocresía. Somos Haters. Cero Hipocresía.</span>
                            <span className='autoSlide-span color-white'>The Special One The Special One The Special One The Special One The Special One</span>
                            <span className='autoSlide-span color-thespecialone'>Somos Haters. Cero Hipocresía. Somos Haters. Cero Hipocresía. Somos Haters. Cero Hipocresía.</span>
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
                    <div className="Info-container izquierda">
                        <h3 className="Interna-h3"><span className='color-thespecialone'>RESULTADO FINAL:</span> La Web</h3>
                        <p className="Interna-p"> El diseño moderno y la funcionalidad del CMS permiten que la web sea manejable por EDITORES o CREADORES de contenido. La idea del proyecto es conseguir tráfico web y en un futuro utilizarla para agregarle MEDIA ADS, para ello se ha aplicado una estrategia SEO en la web que permita optimizarla en cara a los buscadores actuales. </p>
                    </div>
                    
                </section>
            </div>
            <div className='Interna-Banner thespecialone-banner'>
                <div className="Banner-wrapper">
                    {/* <div className="Banner-works">
                        <div className="work-prev">

                        </div>
                        <div className="work-next">
                            
                        </div>
                    </div> */}
                    <div className="Banner-info">
                        <div className="info-wrapper">
                            <div className="info-info">
                                <h2 className="info-h2">Si sientes que podemos trabajar juntos, conversemos.</h2>
                            </div>
                            <div className="info-button">
                                <a href='/contacto'>Contáctame 
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