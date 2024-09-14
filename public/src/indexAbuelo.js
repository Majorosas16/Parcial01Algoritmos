import * as components from './components/indexPadre.js';

class AppContainer extends HTMLElement {

    constructor (){
        super();
        this.attachShadow({mode: 'open'}); //Para que todo se pueda ver en el DOM
    }

    connectedCallback(){
        this.render();
    }

    render(){
        this.shadowRoot.innerHTML = `
        <patients-board></patients-board>
        `
    }
}

customElements.define('app-container',AppContainer)