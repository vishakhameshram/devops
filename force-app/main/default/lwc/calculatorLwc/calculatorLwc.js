import { LightningElement } from 'lwc';

export default class CalculatorLwc extends LightningElement {
    firstNumber
    secondNumber
    result

    handleFirstNumber(evt){
        this.firstNumber = evt.target.value;
    }
    handleFecondNumber(evt){
        this.secondNumber = evt.target.value;
    }
    Addition(){
        this.result = this.firstNumber + this.secondNumber;
    }
    Multiply(){
        this.result = this.firstNumber*this.secondNumber;   
    }
    divide(){
        this.result = this.firstNumber / this.secondNumber;
    }
    Subtract(){
        this.result = this.firstNumber - this.secondNumber;
    }
}