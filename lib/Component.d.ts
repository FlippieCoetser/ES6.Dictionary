export declare class Component extends HTMLElement {
    static get observedAttributes(): string[];
    static attributes: string[];
    connected: boolean;
    root: ShadowRoot;
    template: HTMLTemplateElement;
    constructor();
    get attribute(): string;
    set attribute(value: string);
    connectedCallback(): void;
    disconnectedCallback(): void;
    adoptedCallback(): void;
    attributeChangedCallback(attribute: string, oldValue: string, newValue: string): void;
    loadTemplate(): void;
    addTemplate(): void;
}
