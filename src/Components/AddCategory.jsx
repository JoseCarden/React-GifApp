import { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({onNewCategory}) => {
  
  //Hook para controlar el valor que se está colocando en el
  //input
  const [inputValue, setInputValue] = useState('');

  //Recoge el evento de cambio en el input y toma al mismo (al 
  //txt/input) como el "target". De el se obtiene el valor para
  //que se haga un "seguimiento" a lo que se está tecleando
  const onInputChange = ({target}) =>
    setInputValue(target.value);

  const onSubmit = (event) =>{
    //evitar recarga de pagina tras el "enter"
    event.preventDefault();

    //evaluar q se halla más de un caracter
    if (inputValue.trim().length <= 1) return;

    //Devuelve el valor escrito sin espacios al final y inicio
    onNewCategory(inputValue.trim());

    //limpiar el input luego de presionar "enter"
    setInputValue('');
  }
  
  return (
    <form onSubmit={onSubmit} aria-label='form'>
        <input
            type="text"
            placeholder="Buscar gifs"
            value={inputValue}
            onChange={onInputChange}
        />
    </form>
  )
}

AddCategory.propTypes = {
  onNewCategory: PropTypes.func.isRequired
}
