import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';
import PropTypes from 'prop-types';

export const GifGrid = ({category}) => {
    
    //Instancia de custom hook que trae las imagenes
    //y ayuda con la condicional para mostrar el mensaje
    // de "Cargando..." o no
    const {images, isLoading} = useFetchGifs(category);

    return (
    <>
        <h3>{category}</h3>

        {/*Evaluación de booleano que muestra un pequeño mensaje.
        Se puede trabajar de diferentes maneras, al menos lo que
        se puede mostrar como seña de que está cargando */}
        {
            isLoading && (<h2>Cargando...</h2>)
        }       

        <div className="card-grid">
            {
            images.map( (image) => (
                <GifItem 
                    key={image.id}
                    {...image}
                />
                ) )
            }
        </div>
    </>
)
}

GifGrid.propTypes = {
    category: PropTypes.string.isRequired
}
