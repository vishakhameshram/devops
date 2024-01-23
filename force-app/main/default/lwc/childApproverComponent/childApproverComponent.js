import { LightningElement ,api} from 'lwc';
import getUserName from '@salesforce/apex/UserController.getUserName'

export default class ChildApproverComponent extends LightningElement {

    list = [{"name":"user1","email":"abc@gmail.com"}]
    searchKey=''
    userNames

    searchHandler(event){
            this.searchKey = event.target.value

            const name = event.target.value

            const selectEvent = new CustomEvent('mycustomevent', {
                detail: name
        });
       this.dispatchEvent(selectEvent);


        getUserName({searchKey:this.searchKey})
        
            .then(result =>{
                this.userNames = result 

            }).catch(error=>{
                console.error(error)
            })

    }

}