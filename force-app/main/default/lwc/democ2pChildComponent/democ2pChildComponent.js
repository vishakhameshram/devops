import { LightningElement } from 'lwc';

export default class Democ2pChildComponent extends LightningElement {
    closehandler(){
        const myEvent = new CustomEvent('close')
        this.dispatchEvent(myEvent);
    }
}