import { LightningElement } from 'lwc';

export default class DemoPArentComponent extends LightningElement {
    handlOnChange(evt){
        this.template.querySelector('c-demo-child-component').changeMessage(evt.target.value);
    }
    

}