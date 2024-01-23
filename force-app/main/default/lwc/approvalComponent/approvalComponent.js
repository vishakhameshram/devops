import { LightningElement,wire,track } from 'lwc';
import getUserName from '@salesforce/apex/UserController.getUserName'

export default class ApprovalComponent extends LightningElement {

    @track UserName;
    handleCustomEvent(event) {
        const textVal = event.detail;
        this.UserName = textVal;
    }

}