import { LightningElement ,api} from 'lwc';

export default class PublicMethodChild extends LightningElement {
    value = ["red"]

    options = [
        {label: 'Red marker', value :'red'},
        {label: 'blue marker', value :'blue'}
    ]
    @api selectedCheckboxMethod(checkboxValue){
        const checknbpx = this.options.find(checkbox =>{
            return checkbox.value == checkboxValue.value
        })
        if(checknbpx){
            this.value = checknbpx.value;
        }
    }

    //createNewAccount(){}
}