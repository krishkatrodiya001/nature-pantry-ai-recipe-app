import ReactMarkdown from "react-markdown"

// Recipe component
export default function Recipe(props) {
    return (
        <section className="suggested-recipe-container" aria-live="polite">
            <h2>Chef Recommends:</h2>
            <ReactMarkdown>{props.recipe}</ReactMarkdown>
        </section>
    )
}