import type { FormEvent } from 'react';

const AddColorForm = () => {

const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
  
  const { addColor } = event.target as typeof event.target & {
    addColor: {value: string}
  };
  
  if(validateInput(addColor.value)){
    console.log(addColor.value);
    addColorToStorage(addColor.value); 
  }
}

const validateInput = (input: string) => (
   /^#[0-9A-F]{6}$/i.test(input) || /^#([0-9A-F]{3}){1,2}$/i.test(input)
   );

const addColorToStorage = (color: string) => {
  const items = JSON.parse(localStorage.getItem('colors') || '[]');
  const item = {
    "color": color.toUpperCase(),
    "added": true
  }
  items.push(item)
  localStorage.setItem('colors', JSON.stringify(items));
}

  return (
    <form onSubmit={event => handleSubmit(event)}>
           <input type="text" id="addColor" placeholder="Type new color (HEX)"/>
       <button type="submit">Add</button>
    </form>
  )
}

export default AddColorForm;