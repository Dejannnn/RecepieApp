import React from 'react'
import './App.css'
import Ingrident from './components/FoodForm/IngridentForm'
import IngridientList from './components/FoodList/IngridientList'
import Header from './components/Header/Header'
import Recepie from './components/Recepie/Recepie'

import {getRecipeFromChefClaude} from "./lib/ai/ai"

function App() {
  const [ingredients, setIngredients] = React.useState<string[]>(["Ingedient 1","Ingedient 2", "Ingedient 3"])
  const [showRecepie, setShowRecepie] = React.useState<boolean>(false)
  const [recepie, setRecepie] =  React.useState<string| null>(null);

  async function getRecipe() {
    try{
      const result = await getRecipeFromChefClaude(ingredients)
      setRecepie(recepie)
      setShowRecepie(true)
      
    }catch(err){
      setShowRecepie(true)
    }
    
  }
  return (
    <div className='container'>
      <Header />
      <Ingrident setIngredients={setIngredients}/>
      {!!ingredients.length && <IngridientList getRecipe={getRecipe} setShowRecepie={setShowRecepie} ingredients={ingredients}/> }
      {showRecepie && <Recepie recepie={recepie}/>}
    </div>
  )
}

export default App
