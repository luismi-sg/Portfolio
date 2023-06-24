import './Trabajos.css'

export const Trabajos = () => {
    return( 
        <div className='Trabajos'>
            <div className='Trabajos-wrapper'>
                <h2 className='Trabajos-h2'>TRABAJOS</h2>
                <section className='Trabajos-grid'>
                    <article className='Trabajos-article'>
                        <a titulo='Proyecto Netflix Github' href='https://github.com/luismi11/Netflix-proyecto' target='_blank' >
                            <img className='Trabajos-img' src="/assets/trabajo3_netflix.png" alt="" />
                            <h3 className='Trabajos-h3'>NETFLIX - COPYCAT</h3>
                        </a>
                    </article>
                    <article className='Trabajos-article'>
                        <a titulo='Proyecto Spotify Github' href='https://github.com/luismi11/atom-mother-web' target='_blank' >
                            <img className='Trabajos-img' src="/assets/trabajo2_spotify.png" alt="" />
                            <h3 className='Trabajos-h3'>SPOTIFY - COPYCAT</h3>
                        </a>
                    </article>
                    <article className='Trabajos-article'>
                        <a titulo='Proyecto Pink Floyd Github' href='https://github.com/luismi11/atom-mother-web' target='_blank' >
                            <img className='Trabajos-img' src="/assets/trabajo1_pink-floyd.png" alt="" />
                            <h3 className='Trabajos-h3'>PINK FLOYD</h3>
                        </a>
                    </article>
                </section>
            </div>
        </div>
    )
}