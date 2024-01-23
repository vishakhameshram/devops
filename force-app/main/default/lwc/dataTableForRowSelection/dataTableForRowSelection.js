import { LightningElement,api} from 'lwc';
import getRelatedContact from '@salesforce/apex/ContactController.getRelatedContact'
const columnsData =[{label:'Name', fieldName:'Name'},
                    {label:'Phone', fieldName:'Phone'}]

export default class DataTableForRowSelection extends LightningElement {
    buttonLable ='showContacts'
    @api recordId
    conData
    column = columnsData
    isDatatableVisble = false
    searchKey =''
   
    connectedCallback(){
        getRelatedContact({accrecordId:this.recordId , searchValue:this.searchKey})
        .then(result=>{
            this.conData = result;

            console.log('this.conData:' +JSON.stringify(this.conData));

        }).catch(error=>{
            console.log('error',+JSON.stringify(error));
        })

    }
    handleClick(event){
        const label = event.target.label;
        console.log('label' +JSON.stringify(label))
       
        if(label =='showContacts'){
            this.buttonLable ='HideContact';
            this.isDatatableVisble = true
        }else {
            this.buttonLable ='showContacts';
            this.isDatatableVisble = false
        }
    }
    // selectedRows are std evet we have for datatabel
    handleSelectedRow(evt){
       const selectedRow = evt.detail.selectedRows
       console.log('selectedRows:'+JSON.stringify(selectedRow))
    }

    handleChange(evt){
       this.searchKey =evt.target.value;
       console.log('this.searchKey :'+JSON.stringify(searchKey))
       console.log(error.body.message);

       getRelatedContact({accrecordId:this.recordId , searchValue:this.searchKey})
       .then(result=>{
           this.conData = result;

           console.log('this.conData:' +JSON.stringify(this.conData));

       }).catch(error=>{
           console.log('error',+JSON.stringify(error));
       })

    }
}