class PatientCard extends HTMLElement {
    constructor() {
      super();
        this.attachShadow({ mode: "open" });
        this.state = false;
    }

    static get observedAttributes() {
        return ["name", "specie", "indate", "symptoms" ,"state"];
      }
  
    connectedCallback() {
      this.render();
    }
  
    attributeChangedCallback(propName, oldValue, newValue) {
      if (oldValue !== newValue) {
        this[propName] = propName === "state"? newValue === "true" : newValue ; 
        this.render();
      }

    }

    stateValue() {
        this.state = !this.state;
        this.render();
    }
  
    render() {
        this.shadowRoot.innerHTML = `
        <h2>Nombre: ${this.name}</h2>
        <p>Especie: ${this.specie}</p>
        <p>Síntomas: ${this.symptoms}</p>
        <p>Fecha de ingreso: ${this.indate}</p>
        <p>Atendido:</p>
        <input type="checkbox" ${this.state ? "checked" : ""} id="checkbox"> 
  
      `;
        this.shadowRoot.querySelector('#checkbox').addEventListener('change', () => this.stateValue());
    }
  }
  
  customElements.define("patient-card", PatientCard);
  export default PatientCard;