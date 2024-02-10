import {useState} from 'react';
import { AddCategory,GifGrid } from './Components';

export const GifExpertApp = () => {
  
  //Hook que controla el estado/cambio de las categorías
  //Inicializado en JJK
  const [categories, setCategories] = useState( [ 'Jujutsu Kaisen' ] );
  
  const onAddCategory = (newCategory) => {
    //Pregunta: Si la nueva categoría ya está en "categorías",
    //entonces salir de función
    if (categories.includes(newCategory)) return;

    //Crea un array copia con las categorías actuales y 
    //añade la nueva
    setCategories([newCategory, ...categories]);

    // Para q sea primero
    // setCategories('Jujutsu Kaisen', [...categories]);
     
    // setCategories(cat => [...cat, 'Valorant']);
  }

  return (
    <>
        <h1>GifExpertApp</h1>
        
        {/* Componente para trabajar el añadido de categorías
        Incluye el elemento html */}
        <AddCategory 
          onNewCategory={ event => onAddCategory(event)}
        />

        {/*Como un for, recorre las categorías y va obteniendo cada una 
        y la coloca en "category", q sirve para evaluar. Se le pasa el 
        key para evitar errores y la categoría para que el componente
        sea funcional*/}
        { 
          categories.map( (category) => 
            (<GifGrid 
              key={category} 
              category={category}/>) 
          ) 
        }
    </>
  )
}
