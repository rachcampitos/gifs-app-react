import {useState} from 'react'
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['One Punch'])

  const onAddCategory = (value) => {

    if(categories.includes(value)) return
    //categories.push(value)
    setCategories(categories => [value, ...categories])
  }

  return (
    <>
      <h1>GifExpertApp</h1>
      {/* input */}
      <AddCategory 
        onNewCategory={ onAddCategory }
      />
      {/* listado de gifs */}
      
        {categories.map(category => <GifGrid key={category} category={category}/>)}
      
    </>
  )
}
