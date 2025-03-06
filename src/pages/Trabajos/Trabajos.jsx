import './Trabajos.css'
import { CardTrabajo } from '../../components/CardTrabajo/CardTrabajo'
import { useTranslation } from 'react-i18next';
import useListProjects  from '../../hooks/proyectos';

export const Trabajos = () => {

    const listProjects = useListProjects();
    const { t } = useTranslation();
    
    return( 
        <div className='Trabajos'>
            <div className='Trabajos-wrapper'>
                <div className='Tabs-container'>
                    <section className='Trabajos-grid'>
                        { listProjects.map(( {id, pills, img, alt, titulo, description, gitUrl , webUrl} ) => {
                                return(
                                    <CardTrabajo
                                    key={id} 
                                    pills={pills}
                                    webUrl={webUrl}
                                    titulo={titulo}
                                    description={description}
                                    alt={alt}
                                    img={img}
                                    gitUrl={gitUrl}/>
                                )
                            })}
                    </section>
                </div>
                {/* <div className='Misc-container'>
                    <div className='Misc-header'>
                        <h3>Otros trabajos</h3>
                    </div>
                    <section className='Misc-grid'>
                        <div className='Misc-item' style={{gridArea: 'misc-1'}}>
                            <img className='Misc-img' src="/assets/beatscene_info.webp"/>
                        </div>
                        <div className='Misc-item' style={{gridArea: 'misc-2'}}>
                            <img className='Misc-img' src="/assets/beatscene_info.webp"/>
                        </div>
                        <div className='Misc-item' style={{gridArea: 'misc-3'}}>
                            <img className='Misc-img' src="/assets/beatscene_info.webp"/>
                        </div>
                        <div className='Misc-item' style={{gridArea: 'misc-4'}}>
                            <img className='Misc-img' src="/assets/beatscene_info.webp"/>
                        </div>
                        <div className='Misc-item' style={{gridArea: 'misc-5'}}>
                            <img className='Misc-img' src="/assets/beatscene_info.webp"/>
                        </div>
                        <div className='Misc-item' style={{gridArea: 'misc-6'}}>
                            <img className='Misc-img' src="/assets/beatscene_info.webp"/>
                        </div>
                        <div className='Misc-item' style={{gridArea: 'misc-7'}}>
                            <img className='Misc-img' src="/assets/beatscene_info.webp"/>
                        </div>
                    </section>
                </div> */}
            </div>
        </div>
    )
}