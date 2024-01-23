import { LightningElement } from 'lwc';

export default class BmiCalculator extends LightningElement {
    height = ''
    weight = ''
    bmiValue = ''
    result = ''

    inputHandler(event){
// destructuring from event object 
        const {name,value} = event.target
        if(name === 'height'){
            this.height = value
        }
        if(name === 'weight'){
            this.weight = value
        }
        
        //this[name] = value(if you use this line abouve lines are not needed)

    }
    submitHandler(event){
        //dont refresh the page  prevent from refresh
        event.preventDefault ()
        console.log("Height",this.height)
        console.log("weight",this.weight)
        this.calculate();
    }
    calculate(){
        //BMI weight in kg /height in cm 
        //whatever you are typing in html to js its string so we are converting firsr into numbers 

        let height = Number(this.height)/100;
        let bmi = Number(this.weight)/(height*height)
        console.log("bmi value is :", bmi)
        this.bmiValue = Number(bmi.toFixed(2))
       
        if(this.bmiValue < 18.5){
            this.result = 'Underweight'

        }else if(this.bmiValue >= 18.5 && this.bmiValue <25){
            this.result = 'healthy'
        }else if(this.bmiValue >=25 && this.bmiValue <30){
            this.result = 'overweight'
        }else if(this.bmiValue >=30){
            this.result = 'Obese'
        }
        console.log('BMI value' , this.bmiValue)
        console.log('result value' , this.result)

    }
    recalculate(){
    this.height = ''
    this.weight = ''
    this.bmiValue = ''
    this.result = ''

    }

}