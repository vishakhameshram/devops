import { LightningElement ,wire} from 'lwc';
import getAccount from'@salesforce/apex/TestAccountClass.getAccount'
import methodNaupdateDetails from '@salesforce/apex/TestAccountClass.methodNaupdateDetails'
const columns = [
    {label:'Name', fieldName:'Name',editable:true},
    {label:'Website', fieldName:'Website',editable:true},
    {label:'Phone', fieldName:'Phone',editable:true},
    {label:'Type', fieldName:'Type',editable:true},
]
export default class LwcInlineEditing extends LightningElement {
    columns= columns
    data = []
    saveDraftValues = []

    @wire(getAccount)
    accountData(result){
        if(result.error)
        {
            this.data =undefined
        }else if(result.data){
            this.data =result.data
        }
    }
    handleSave(evt){
        // lwc datatable is std way thats why we use draftvalues 
        const updatedField  = evt.detail.draftValues;
        //because sending data from lwc to apex 
        console.log('updatedField: '+JSON.stringify(updatedField))
        // imperative methods is used

        methodNaupdateDetails ({accountData:updatedField})
        
            .then(response=>{
                console.log("response"+JSON.stringify(response))
            })
            .catch(error=>{
                console.error("error:"+JSON.stringify(error))
            })

    }
}