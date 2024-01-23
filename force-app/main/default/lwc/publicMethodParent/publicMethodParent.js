import { LightningElement } from 'lwc';

export default class PublicMethodParent extends LightningElement {
    value = 'red'

    handleChange(evt){
        this.value = evt.target.value
    }
    handleClick(){
        // from here call click methods of child Lwc
    const childRef = this.template.querySelector('c-public-method-child')
    childRef.selectedCheckboxMethod(this.value);
       
    }
}