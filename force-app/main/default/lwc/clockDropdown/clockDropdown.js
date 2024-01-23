import { LightningElement ,api} from 'lwc';

export default class ClockDropdown extends LightningElement {
   @api label = ' '
   @api options = []
   @api uniqueId  = ' '

//    custom event to pass value from child to parent

   changeHandler(event){
    // console.log(event.target.value)
    // console.log(this.label)
    this.callParent(event.target.value);
   }

    callParent(value){
         this.dispatchEvent(new CustomEvent('optionhandler',{
            detail:{
                label:this.label,
                value : value 
            }
        })
    )}
// public methos to clear the alarm timings or reset times
        @api 
        reset(value){
            this.template.querySelector('select').value = value
            this.callParent(value)
   }
}