import "./Input.css"
type Props = {
    ingridientRef: any
}

function Input(props: Props) {
  return (
    <input ref={props.ingridientRef} type="text" name="ingridient" placeholder="Add ingridient" />
)
}

export default Input