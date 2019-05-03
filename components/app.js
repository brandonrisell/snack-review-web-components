import { component, useState } from "haunted";
import { html } from "lit-html";

import "./header.js";
import "./snackList.js";

const app = () => {
    return html`
        <snack-review-header></snack-review-header>
        <snack-review-snack-list></snack-review-snack-list>
    `;
};

customElements.define("snack-review-app", component(app));
