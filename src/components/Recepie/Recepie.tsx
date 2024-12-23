import React, { useEffect } from "react"
import "./Recepie.css"
import Markdown from "react-markdown"

//MarkDown
type Props = {
  recepie: string | null
}

const Recepie = (props: Props) => {
  const [markdowncontnet, setMarkdownContent] = React.useState<string| null>(null)
  useEffect(() => {    
    !props.recepie && fetch("/recepieExample.md")
      .then((response) => response.text())
      .then((text) => setMarkdownContent(text));
  }, []);

  return (
    <section>
    <Markdown>{markdowncontnet}</Markdown>
    </section>
  )
}

export default Recepie