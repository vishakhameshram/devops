import { LightningElement } from 'lwc';
import getUserName from '@salesforce/apex/UserController.getUserName'
export default class ChildComponentTwo extends LightningElement {

    searchKey=''
    userNames

    searchHandler(event){
        this.searchKey = event.target.value

        let name2 = " "

    //     const selectEvent2 = new CustomEvent('mycustomeventTwo', {
    //         detail: name2
    //     });
    //    this.dispatchEvent(selectEvent2);

        getUserName({searchKey:this.searchKey})
        
            .then(result =>{
                this.userNames = result 
                this.name2 = result

                        const selectEvent2 = new CustomEvent('mycustomeventTwo', {
                            detail: name2
                        });
                        this.dispatchEvent(selectEvent2);

            }).catch(error=>{
                console.error(error)
            })

    }
    
}