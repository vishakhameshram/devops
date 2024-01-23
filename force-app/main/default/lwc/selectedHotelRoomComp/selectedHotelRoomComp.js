import { LightningElement ,wire} from 'lwc';
// while implementing application event subscriber and publiser compo must have current page reference
// we need to import from lightning / naviagtion
// this compo is subscriber Componet 
import {CurrentPageReference} from 'lightning/navigation';
import { registerListener,unregisterListener } from 'c/pubsub';
export default class SelectedHotelRoomComp extends LightningElement {
//using @wire consuming current page ref which retutn ref page on which compo rendered.
    @wire (CurrentPageReference)pageRef
    selectedRoom = {}

    connectedCallback(){
        registerListener('pubsubtileclick',this.hotelRoomSelectHandler,this)
    }


    disconnectedCallback(){
        //unsubscribe
        unregisterListener('pubsubtileclick',this.hotelRoomSelectHandler,this)
    }

    // listener to application event 
    hotelRoomSelectHandler(data){
        this.selectedRoom = data
    }
}