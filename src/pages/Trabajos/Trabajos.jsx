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
            </div>
        </div>
    )
}