import React, { useEffect } from "react"
import "./Recipe.css"
import Markdown from "react-markdown"

//MarkDown
type Props = {
  recipe: string | null
}

const Recipe = (props: Props) => {
  const [markdowncontnet, setMarkdownContent] = React.useState<string| null>(null)
  useEffect(() => {    
    !props.recipe && fetch("/recepieExample.md")
      .then((response) => response.text())
      .then((text) => setMarkdownContent(text));
  }, []);

  return (
    <section>
    <Markdown>{markdowncontnet}</Markdown>
    </section>
  )
}

export default Recipe