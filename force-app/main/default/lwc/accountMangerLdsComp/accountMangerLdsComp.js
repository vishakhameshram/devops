import { LightningElement,api,wire } from 'lwc';
import {getRecord,createRecord} from 'lightning/uiRecordApi';

//const fieldsArray = ['Account.Name','Account.Phone','Account.Website']
export default class AccountMangerLdsComp extends LightningElement {
    @api recordId;
    //@wire(getRecord,{recordId:'$recordId',fields:fieldsArray})
    @wire(getRecord,{recordId:'$recordId',layoutTypes:['Full']})
    accountRecord

// result will be available in data preperty
        get retAccountName(){
            if(this.accountRecord.data){
                return this.accountRecord.data.fields.Name.value
            }
            return undefined
        }
        get retAccountPhone(){
            if(this.accountRecord.data){
                return this.accountRecord.data.fields.Phone.value
            }
            return undefined
        }
        get retAccountWebsite(){
            if(this.accountRecord.data){
                return this.accountRecord.data.fields.Website.value
            }
            return undefined
        }

        accountName
        accountPhone
        accountWebsite

        handleAccountNamechange(evt){
            this.accountName = evt.target.value;

        }
        handleAccountPhonechange(evt){
            this.accountPhone = evt.target.value;

        }
        handleAccountWebsitechange(evt){
            this.accountWebsite = evt.target.value;

        }
        createNewAccount(){
            const fields = {'Name':this.accountName,'Phone':this.accountPhone,'Website':this.accountWebsite}
            const recordInput = {apiName:'Account',fields}
            createRecord(recordInput).then(response=>{
                this.recordId = response.id;
            }).catch(error=>{
                console.log("error while creating record", error.body.message)
            })
        }
}