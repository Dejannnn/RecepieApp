import { useRef } from "react"
import "./IngridientForm.css"
import Input from "../Input/Input";
import Button from "../Button/Button";
type Props = {
  setIngredients: React.Dispatch<React.SetStateAction<string[]>>;
}

const Ingrident = (props: Props) => {
  const ingridientRef = useRef<HTMLInputElement | null>(null);
  
  const addIngrdient = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (ingridientRef.current?.value == "" || ingridientRef.current?.value == null){
      return
    }

    let value: string = ingridientRef.current?.value
    props.setIngredients(prevState => [...prevState, value]);
    ingridientRef.current.value= ""
  }

  return (
    <div className='form'>
      <form className="add-igridients" onSubmit={addIngrdient}>
        <Input ingridientRef={ingridientRef} />
        <Button>Add Ingrident</Button>
      </form>
    </div>
  )
}

export default Ingrident