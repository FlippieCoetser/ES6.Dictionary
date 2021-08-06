export class Component extends HTMLElement {
    constructor() {
        super();
        const template = document.getElementById('CustomTemplate');
        const clone = template.content.cloneNode(true);
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.appendChild(clone);
    }
}
