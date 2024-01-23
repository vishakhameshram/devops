import { LightningElement } from 'lwc';
import getAccountsFiltered from '@salesforce/apex/AccountController.getAccountsFiltered'
export default class DemoApexImperativeWithParam extends LightningElement {
    accounts
    searchKey = ' ';
    timer
    searchhandler(event){
        this.searchKey = event.target.value;
       this.timer =  setTimeout(()=>{
            this.callApex();
        },2000)
        
    }

    callApex(){
        getAccountsFiltered({searchKey:this.searchKey})
        .then(result=>{
            this.accounts = result;
        })
        .catch(error=>{
            console.error(error);
        })

    }
}