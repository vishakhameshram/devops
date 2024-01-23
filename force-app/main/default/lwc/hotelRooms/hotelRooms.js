import { LightningElement } from 'lwc';

export default class HotelRooms extends LightningElement {
    hotelRoomInfo = [
        {roomName:'A-01',roomCapacity:2},
        {roomName:'A-02',roomCapacity:2},
        {roomName:'B-01',roomCapacity:2},
        {roomName:'B-02',roomCapacity:3},
        {roomName:'C-01',roomCapacity:4},
        {roomName:'C-02',roomCapacity:3}
    ]
    // event can be in lwc via child to parent then use composition 
    
}