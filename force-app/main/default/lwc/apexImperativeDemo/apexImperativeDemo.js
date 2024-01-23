import { LightningElement } from 'lwc';
import getContactsList from '@salesforce/apex/ContactControlle.getContactsList'
export default class ApexImperativeDemo extends LightningElement {
    contacts 
    handleClick(){
        getContactsList()
        .then(result=>{
            this.contacts = result 
        }).catch(error=>{
            console.error(error);
        })

    }
}