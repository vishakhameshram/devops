import { LightningElement,api } from 'lwc';

export default class AccountManagerLDSFormCompo extends LightningElement {
    @api recordId
    handlesuccess(evt){
        this.recordId = evt.detail.id;
    }
    
}