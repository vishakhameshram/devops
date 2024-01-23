import { LightningElement } from 'lwc';

export default class CreatePArentComponent extends LightningElement {
    name
    chd

    selectedHotelRoom;
    hotelRoomInfo;

    clickHandler(ent){
        this.name = ent.target.value;
    }
    
    clickParent(evt){
        this.chd = evt.detail;    
    }

    // hotel room Parent  component

    constructor(){
        super()
        this.hotelRoomInfo = [
            {roomName:'A-01',roomCapacity:2},
            {roomName:'A-02',roomCapacity:2},
            {roomName:'B-01',roomCapacity:2},
            {roomName:'B-02',roomCapacity:3},
            {roomName:'C-01',roomCapacity:4},
            {roomName:'C-02',roomCapacity:3}
        ]
        this.selectedHotelRoom = ''

    }
    ontileclickHandler(evt){

        const hotelRoom = evt.detail;
        this.selectedHotelRoom  = hotelRoom;
    }
    
    
   
}