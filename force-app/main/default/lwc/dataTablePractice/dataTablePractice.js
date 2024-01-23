import { LightningElement,track,wire } from 'lwc';
import getContacts from '@salesforce/apex/ContactController.getContacts'
//  columns = [{label:'Name',fieldName:'Name'},
//                 {label:'Id',fieldName:'Id'},
//                 {label:'Title',fieldName:'Title'}
//]
export default class DataTablePractice extends LightningElement {
    @track columns =  [{label:'Name',fieldName:'Name'},
                        {label:'Id',fieldName:'Id'},
                        {label:'Title',fieldName:'Title'}
                      ]
   @track data = []
   
    @wire(getContacts)
        contactsdetails(result){
            if(result.data){
                this.data = result.data;
            }
            else if(result.error){
                console.log("error",error)
            }
            
    }
}