import {useState} from 'react'
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () =>{
    const [categories, setCategories] = useState(['One Punch Man']);
    
    const onAddCategory = (newCategory) =>{
        //.push no se puede utilizar porque hará una mutación
        if (categories.includes(newCategory)) return;
        setCategories([newCategory, ...categories])
        // setCategories(categories.concat(newCategory));

        // setCategories(cat => [...cat, 'Super Smash Bros Ultimate'])
    }
    
    return (
        <>
            <h1>GifExpertApp</h1>   

            <AddCategory 
                // setCategories={setCategories}
                onNewCategory={(value) => onAddCategory(value)}
            />

            {
                categories.map((category) =>(
                    <GifGrid key={category} category={category}/>
                ))
            }
                
        </>
    )
}