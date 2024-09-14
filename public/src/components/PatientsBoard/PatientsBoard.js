// import '../PatientCard/PatientCard.js'
import { PatientCard } from "../indexPadre.js";
    
class PatientsBoard extends HTMLElement {

    constructor (){
        super();
        this.attachShadow({mode: 'open'}); 
        this.addPatients = [];
    }

    connectedCallback(){
        this.render();
    }

    render(){
        this.shadowRoot.innerHTML=`
        <h2>Añadir paciente peludo</h2>
        <form class="form">
            <p>Nombre:</p>
            <input type = "text" placeholder="Lukas" class= "input-name" required>
            <p>Especie:</p>
            <input type = "text" placeholder="Poodle" class= "input-specie" required>
            <p>Fecha de ingreso:</p>
            <input type = "date" class= "input-inDate" required>
            <p>Síntomas:</p>
            <input type = "text" class= "input-symptoms" required>
            <button>Añadir</button>

            <div class="added-container">
            <h1>No atendidos</h1>
            </div>

            <div class="confirm-container">
            <h1>Atendidos</h1>
            </div>
        </form>
        `
        this.shadowRoot.querySelector('.form').addEventListener("submit", (e) => {
            e.preventDefault(); 
            
        const name = this.shadowRoot.querySelector('.input-name').value
        const spc = this.shadowRoot.querySelector('.input-specie').value 
        const symp = this.shadowRoot.querySelector('.input-symptoms').value 
        const date = this.shadowRoot.querySelector('.input-inDate').value

        this.addPatients.push ({ name, spc, symp, date, state:false });

        this.addPatient ({ name, spc, symp, date, state:false })
        this.shadowRoot.querySelector('.form').reset();
            
        });

        this.addPatients.forEach(element => this.addPatient(element))
    }

    addPatient ({ name, spc, symp, date, state }) {
        
        const patientContainer = this.shadowRoot.querySelector('.added-container')
        patientContainer.innerHTML += `
        <patient-card name="${name}" specie="${spc}" symptoms="${symp}" indate="${date}" state="${state}"></patient-card>
        `

        const keep = PatientCard.state
    
        keep=this.shadowRoot.querySelector('#checkbox').value

        console.log(keep);

        if (keep === true){
            const patientContainer = this.shadowRoot.querySelector('.confirm-container')
            patientContainer.innerHTML += `
            <patient-card name="${name}" specie="${spc}" symptoms="${symp}" indate="${date}" state="${state}"></patient-card>
            `
        }
    }
}

customElements.define('patients-board',PatientsBoard);
export default PatientsBoard;