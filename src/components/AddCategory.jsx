import { useState } from "react"

export const AddCategory = ({ onNewCategory } ) => {
    const [InputValue, SetInputValue] = useState('')
    
    const onInputChange = ({target}) =>{
        SetInputValue(target.value)
    }

    const onSubmit = (event) =>{
        event.preventDefault();
        if(InputValue.trim().length<=1) return; //Solo se puede insertar si se tiene 2 o más caracteres.

        // setCategories(categories => [InputValue, ...categories])
        onNewCategory(InputValue.trim());
        SetInputValue('');
    }

    return (
        <form onSubmit={ onSubmit }>
            <input 
                type="text"
                placeholder="Buscar Gifs"
                value={InputValue}
                // onChange={(event) => onInputChange(event)}
                onChange={onInputChange}
            />
        </form>
        
    )
}
