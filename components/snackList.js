import { component, useState } from "haunted";
import { html } from "lit-html";

import "./snack.js";

const snackList = () => {
    const [snackList, setSnackList] = useState([]);
    const [newSnackName, setNewSnackName] = useState("");

    const handleNameChange = event => setNewSnackName(event.target.value);
    const handleButtonClick = () =>
        setSnackList(currentSnackList => [...currentSnackList, newSnackName]);

    return html`
        <ul>
            ${snackList.map(snack => html`<snack-review-snack name="${snack}"></snack-review-snack>`)}
        </ul>
        <input type="text" @keyup=${handleNameChange} />
        <button @click=${handleButtonClick}>New Snack</button>
    `;
};

customElements.define("snack-review-snack-list", component(snackList));
