import React from 'react'
import './App.css'
import Ingrident from './components/FoodForm/IngridentForm'
import IngridientList from './components/FoodList/IngridientList'
import Header from './components/Header/Header'
import Recipe from './components/Recipe/Recipe'

import {getRecipeFromChefClaude} from "./lib/ai/ai"

function App() {
  const [ingredients, setIngredients] = React.useState<string[]>(["Ingedient 1","Ingedient 2", "Ingedient 3"])
  const [showRecipe, setShowRecipe] = React.useState<boolean>(false)
  const [recipe, setRecipe] =  React.useState<string| null>(null);

  async function getRecipe() {
    try{
      const result = await getRecipeFromChefClaude(ingredients)
      setRecipe(recipe)
      setShowRecipe(true)
      
    }catch(err){
      setShowRecipe(true)
    }
    
  }
  return (
    <div className='container'>
      <Header />
      <Ingrident setIngredients={setIngredients}/>
      {!!ingredients.length && <IngridientList getRecipe={getRecipe} ingredients={ingredients}/> }
      {showRecipe && <Recipe recipe={recipe}/>}
    </div>
  )
}

export default App
