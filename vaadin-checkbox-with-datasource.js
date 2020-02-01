import { LitElement, html } from "lit-element";
import '@vaadin/vaadin-checkbox/vaadin-checkbox-group';
import '@vaadin/vaadin-checkbox/vaadin-checkbox';

class VaadinCheckBoxWithDataSource extends LitElement {
    static get properties() {
        return {
            checkBoxItems: { type: Array }
        }
    }
    constructor() {
        super();
        this.updateComplete.then(() => {
            debugger;
            var checkBoxGroup = this.shadowRoot.querySelector("vaadin-checkbox-group");
            var checkboxList = "";
            for(let i=0;i<this.checkBoxItems.length;i++){
                checkboxList+= "<vaadin-checkbox value = '" + this.checkBoxItems[i] + "'>"+
                                     this.checkBoxItems[i] +  "</vaadin-checkbox>";
            }
            checkBoxGroup.innerHTML = checkboxList;                 
        });
        this.checkBoxItems = ["Milk", "Bananas", "Eggs"];
    }
    render() {
        return html`
            <vaadin-checkbox-group theme="vertical">
                
            </vaadin-checkbox-group>
        `;
    }
    get checkBoxGroup() {
        debugger;
        this.shadowRoot.querySelector("vaadin-checkbox-group");
    }
}
customElements.define("vaadin-checkbox-with-datasource", VaadinCheckBoxWithDataSource);