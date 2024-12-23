import "./Button.css"

type Props = {
    children: string
    className?: string
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void; // Correct onClick type

}

function Button(props: Props) {
  return (
    <button className={props.className} onClick={props.onClick}>{props?.children}</button>
  )
}

export default Button