import {useState} from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifApp = () => {

    const [categories, setCategories] = useState([ 'One Punch']);

    const onAddCategory = (newCategory) => {

        if(categories.includes(newCategory)) return;
        //si el input es igual,no guarda nada

        setCategories([newCategory, ...categories])
       
    }


  return (
    <>
        <h1>Gif App con React!</h1>

        <AddCategory onNewCategory={(value) => onAddCategory(value)} />


        { categories.map( (category) =>
            
            <GifGrid key={category}

                category={category}
            />

        )}
    
    </>
  )
}
