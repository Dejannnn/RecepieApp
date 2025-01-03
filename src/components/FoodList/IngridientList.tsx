import Button from "../Button/Button"
import "./IngridientList.css"
type Props = {
  ingredients: string[]
  getRecipe: () => Promise<void>;
}

const IngridientList = (props: Props) => {
  const ingredientsListItems = props.ingredients.map((ingredient, index) => (
    <li key={ingredient+index}>{ingredient}</li>
))

return (
  <section className="list">
      
        <h2>Ingredients on hand:</h2>
        <ul className="ingredients-list" aria-live="polite">{ingredientsListItems}</ul>
        <div className="get-recipe">
        {props.ingredients.length > 3 && <div className="get-recipe-container">
            <div>
                <h3>Ready for a recipe?</h3>
                <p>Generate a recipe from your list of ingredients.</p>
            </div>
            <Button className = {"orange"} onClick={() => {props.getRecipe()}}>Get a recipe</Button>
        </div>}
        </div>
  </section>
)
}

export default IngridientList