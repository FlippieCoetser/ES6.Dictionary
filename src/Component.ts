export class Component extends HTMLElement {
    static get observedAttributes(): string[] {
        return Component.attributes;
    }

    static attributes: string[] = ['attribute'];

    public connected: boolean = false;
    public root: ShadowRoot;
    public template: HTMLTemplateElement;

    constructor() { 
        super();
        this.root = this.attachShadow({mode: 'closed'});
        this.addTemplate();
    }

    get attribute(): string {
        return this.getAttribute('attribute');
    }

    set attribute(value: string) {
        this.setAttribute('attribute', value);
    }

    public connectedCallback(): void {
        console.log('Component Connected to DOM');
        this.connected = true;
    }

    public disconnectedCallback(): void {
        console.log('Component Disconnected from DOM');
        this.connected = false;
    }

    public adoptedCallback(): void {
        console.log('Component Move to new DOM');
    }

    public attributeChangedCallback(attribute: string, 
                                    oldValue: string, 
                                    newValue: string): void {
        
        if (this.connected) { 
            console.log('Attribute Changed After Component Connected to DOM')
        };
        if (!this.connected) { 
            console.log('Attribute Defined Before Component Connected to DOM')
        };

        if (oldValue === newValue) { 
            return 
        }

        switch (attribute) {
            case 'attribute':
                console.log(`Attribute Value Changed from ${oldValue} to ${newValue}`)
        }
    }

    public loadTemplate() {
        this.template = document.createElement('template')
        this.template.innerHTML = `
        <head>
            <link rel="stylesheet" href="../lib/component.style.css">
        </head>
        <div id="panelId"></div>
        `
    }

    public addTemplate() {
        this.loadTemplate()
        this.root.appendChild(this.template.content.cloneNode(true));
    }
}