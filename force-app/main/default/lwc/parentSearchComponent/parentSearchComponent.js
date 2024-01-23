import { LightningElement ,track} from 'lwc';

export default class ParentSearchComponent extends LightningElement {
  
    @track UserName;
    @track approverName;
    handleCustomEvent(event) {
        const textVal = event.detail;
        this.UserName = textVal;
    }

    handleCustomEventtwo(event){
        const textVal2 = event.detail;
        this.approverName = textVal2;
    }
  
}