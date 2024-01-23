import { LightningElement,wire } from 'lwc';
import SAMPLEMC from '@salesforce/messageChannel/SampleMessageChannel__c';
import {subscribe, MessageContext, APPLICATION_SCOPE} from 'lightning/messageService';
export default class LmsComponentX extends LightningElement {
    recievedMessage 
    @wire(MessageContext)
    context

    connectedCallback(){
        this.subscribeMessage()
    }

    subscribeMessage(){
        //subscribe(messageContext ,messagechannel, listener, subscribeOptions )
        //subscribe(messageContext: Object, messageChannel: Object,
        // listener: Function, subscriberOptions?: Object): Object
        subscribe(this.context, SAMPLEMC ,(message)=>{this.handleMessage(message)},{scope:APPLICATION_SCOPE})
    }
    handleMessage(message){
        this.recievedMessage = message.lmsData.value ? message.lmsData.value : 'NO Message Published'
    }
   
}