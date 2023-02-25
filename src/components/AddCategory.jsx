import {useState} from 'react';

export const AddCategory = ({onNewCategory}) => {

    const [InputValue, setInputValue] = useState('');

    const onInputChange = ({target}) => {
        setInputValue(target.value);
    }

    const onSubmit = (event) => {
      event.preventDefault();

      if(InputValue.trim().length <= 1) return;
      //si no hay nada escrito,no deja almacenar nada

      //setCategories(categories => [InputValue, ...categories]);
      //almacena los nuevos datos y mantiene los otros

      onNewCategory( InputValue.trim());

      setInputValue('');
      //para refrescar el input y quede vacio
    }

  return (
    <form onSubmit={(event) => onSubmit(event)}>
      <input 
        type="text" 
        placeholder="buscar gifs"
        value={InputValue}
        onChange={onInputChange}
      />
    </form>
   
  )
}
