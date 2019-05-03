import { component, useState } from "haunted";
import { html } from "lit-html";

const snack = ({ name }) => {
    const [score, setScore] = useState(0);

    const handleIncrement = () => setScore(currentScore => currentScore + 1);
    const handleDecrement = () => setScore(currentScore => currentScore - 1);

    return html`
        <li>
            ${name}
            <button @click=${handleDecrement}>-</button>
            ${score}
            <button @click=${handleIncrement}>+</button>
        </li>
    `;
};

snack.observedAttributes = ['name'];

customElements.define("snack-review-snack", component(snack));
