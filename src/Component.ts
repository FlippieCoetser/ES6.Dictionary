export class Component extends HTMLElement {
    constructor() {
        super();

        // https://stackoverflow.com/questions/33749235/can-one-include-templates-in-a-html-file-similar-to-css
        // https://www.html5rocks.com/en/tutorials/webcomponents/imports/
        const template = <HTMLTemplateElement>document.getElementById('CustomTemplate');
        const clone = template.content.cloneNode(true)

        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(clone);
    }
}