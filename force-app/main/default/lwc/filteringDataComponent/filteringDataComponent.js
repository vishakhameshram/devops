import { LightningElement,wire } from 'lwc';
import getContactsList from '@salesforce/apex/ContactController.getContactsList'
export default class FilteringDataComponent extends LightningElement {

    headings= ['Id', "Name" , "Title" , "Email"]
    fullTableData = []
    filtererData = []
    timer 

    @wire(getContactsList)
    contactHandler({data,error}){
        if(data){
            console.log(data)
            this.fullTableData = data
            this.filtererData = data
        }
        if(error){
            console.log(error)
        }
    }
    filterHandler(event){

        const {value} = event.target
        window.clearTimeout(this.timer)
        if(value){
            this.timer = window.setTimeout(()=>{
                console.log(value)
                this.filtererData = this.fullTableData.filter(eachObj=>{
                    return Object.keys(eachObj).some(key=>{
                        return eachObj[key].toLowerCase().includes(value)
                    })
                })

            },500)
            
        }else{
            this.filtererData = [...this.fullTableData]
        }
       
        
    }
}