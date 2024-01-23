import { LightningElement,api,wire } from 'lwc';
import {CurrentPageReference} from 'lightning/navigation'
import {fireEvent} from 'c/pubsub';
 export default class HotelRoom extends LightningElement {

    // this is publisher

     @api hotelRoomInfo = {roomName:'A-00',roomCapacity:'2'}

     @api showRoomInfo= false

     @wire(CurrentPageReference)pageReference


     clickHandler(){

          const tileClickevent = new CustomEvent('tileClick',{detail:this.hotelRoomInfo})
          this.dispatchEvent(tileClickevent)

          //generate and dispatch Applivaction event
          // make call to fire event

          fireEvent(this.pageReference,'pubsubtileclick',this.hotelRoomInfo)

          

     }
}