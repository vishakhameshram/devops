import { LightningElement } from 'lwc';

export default class Democ2pParentComponent extends LightningElement {
    showModal = false;
     
    clickHandler(){
        this.showModal = true;
    }
    closeHandler(){
        this.showModal = false;
    }
    // response from child to tell parent that close that modal 
}