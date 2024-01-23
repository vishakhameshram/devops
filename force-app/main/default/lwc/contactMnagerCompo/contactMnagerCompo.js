import { LightningElement } from 'lwc';
import getContactsListDynamically from '@salesforce/apex/ContactController.getContactsListDynamically'
import {ShowToastEvent} from 'lightning/platformShowToastEvent'

export default class ContactMnagerCompo extends LightningElement {
     get responseReceived(){
        
            return (this.contacts)?true:false
        
    }
    numberOfRecords
    contacts
    hanldechange(evt){
        this.numberOfRecords = evt.target.value;
    }
    getConDetails(){
        getContactsListDynamically({numberOfRecords:this.numberOfRecords})
        .then(response=>{
           this.contacts = response ;
           const toastEvent = new ShowToastEvent({
            title:"successful load of contacts",
            message:this.numberOfRecords+'loaded succesfully',
            variant: 'success'
           })
           this.dispatchEvent(toastEvent)

        }).catch(error=>{
            console.log(error.body.message)
            const toastEvent = new ShowToastEvent({
                title:"Error occured",
                message:error.body.message,
                variant: 'error'
               })
               this.dispatchEvent(toastEvent)

        })
    }
}