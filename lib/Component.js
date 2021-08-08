export class Component extends HTMLElement {
    constructor() {
        super();
        this.connected = false;
        this.root = this.attachShadow({ mode: 'closed' });
        this.addTemplate();
    }
    static get observedAttributes() {
        return Component.attributes;
    }
    get attribute() {
        return this.getAttribute('attribute');
    }
    set attribute(value) {
        this.setAttribute('attribute', value);
    }
    connectedCallback() {
        console.log('Component Connected to DOM');
        this.connected = true;
    }
    disconnectedCallback() {
        console.log('Component Disconnected from DOM');
        this.connected = false;
    }
    adoptedCallback() {
        console.log('Component Move to new DOM');
    }
    attributeChangedCallback(attribute, oldValue, newValue) {
        if (this.connected) {
            console.log('Attribute Changed After Component Connected to DOM');
        }
        ;
        if (!this.connected) {
            console.log('Attribute Defined Before Component Connected to DOM');
        }
        ;
        if (oldValue === newValue) {
            return;
        }
        switch (attribute) {
            case 'attribute':
                console.log(`Attribute Value Changed from ${oldValue} to ${newValue}`);
        }
    }
    loadTemplate() {
        this.template = document.createElement('template');
        this.template.innerHTML = `
        <head>
            <link rel="stylesheet" href="../lib/component.style.css">
        </head>
        <div id="panelId"></div>
        `;
    }
    addTemplate() {
        this.loadTemplate();
        this.root.appendChild(this.template.content.cloneNode(true));
    }
}
Component.attributes = ['attribute'];
