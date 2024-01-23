import { LightningElement } from 'lwc';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import ACCOUNT_NAME from '@salesforce/schema/Account.Name'
import ACCOUNT_PHONE from '@salesforce/schema/Account.Phone'
import ACCOUNT_WEBSITE from '@salesforce/schema/Account.Website'
import ACCOUNT_DESCRIPTIONS from '@salesforce/schema/Account.Description'

export default class RecordEditForm extends LightningElement {

    objectApiName = ACCOUNT_OBJECT;
    nameField = ACCOUNT_NAME
    phoneField = ACCOUNT_PHONE
    webField = ACCOUNT_WEBSITE
    descriptionField =ACCOUNT_DESCRIPTIONS
    accountId  = 'created Player Record Id Will be displyed here';

    handleSuccess(evt){
        this.accountId = evt.detail.Id;
        const event  = new ShowToastEvent({
            title :'Successfull',
            message :'PlayerCreated',
            varient :'success'
        })
        this.dispatchEvent(event)
    }
}