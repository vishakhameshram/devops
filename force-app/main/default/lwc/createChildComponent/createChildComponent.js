import { LightningElement,api  } from 'lwc';

export default class CreateChildComponent extends LightningElement {
   @api parentName

   childName

   @api showRoomInfo =false

   @api hotelRoomInfo = {roomName:'A-00',roomCapacity:2}
   
   clickHandlerChild(bbt){
        this.childName = bbt.target.value;
        this.dispatchEvent(new CustomEvent('childname',{detail:this.childName}))
   }
// for click tile hotel room component 
    clickHandlerforTile(){
        // from here to parent compo
        const titlclickEvent = new CustomEvent('tileclick',{detail:this.hotelRoomInfo})
        this.dispatchEvent(titlclickEvent)
    }
}