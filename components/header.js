import { component, useState } from "haunted";
import { html } from "lit-html";

const header = () => html`<h1>Snack Review</h1>`;

customElements.define("snack-review-header", component(header));
