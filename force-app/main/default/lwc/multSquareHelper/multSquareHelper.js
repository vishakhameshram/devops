import { LightningElement } from 'lwc';
import {doCommonOperation} from 'c/doCommonOperation'
export default class MultSquareHelper extends LightningElement {
    cardTitle = 'sahring js code'
    multRes
    squareRes

    number1
    number2
    handlenumberOneChange(evt){
        this.number1= parseInt(evt.target.value)
    }
    handlenumberTwoChange(evt){
        this.number2 = parseInt(evt.target.value)
    }
    mult(){
        //this.multRes = this.number1*this.number2
        this.multRes = doCommonOperation(this.number1,this.number2)
    }
        Square(){
            this.squareRes = doCommonOperation(this.number1,this.number1)
        }
    }

