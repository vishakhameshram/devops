import { LightningElement,api } from 'lwc';

export default class CustomObjectLDSRecordForm extends LightningElement {
@api objectApiName
@api recordId

handleSuccess(evt){
    this.recordId= evt.detail.id

    }
}