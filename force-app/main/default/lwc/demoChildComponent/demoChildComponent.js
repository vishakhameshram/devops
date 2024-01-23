import { LightningElement,api,track  } from 'lwc';

export default class DemoChildComponent extends LightningElement {
    //passing data frorm parent to child 
   @api msgToDisplay
    @api cardHeading 
   @track message

    @api changeMessage(strString){
        this.message = strString.toUpperCase();
    }
}