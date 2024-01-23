import { LightningElement } from 'lwc';
import AlarmClockAssets from '@salesforce/resourceUrl/AlarmClockAssets'


export default class AlarmClockApp extends LightningElement {
    clockImage = AlarmClockAssets+'/AlarmClockAssets/clock.png'
    ringtone =  new Audio(AlarmClockAssets+'/AlarmClockAssets/Clocksound.mp3')
    currentTime = ''
    hours = []
    minutes= []
    meridiens = ['AM','PM']

    isAlarmTriggerd = false

    hoursSelected
    minSelected
    meredianSelected

    alarmTime
    isAlarmSet = false

    

    get isFieldNotSelected(){
        return !(this.hoursSelected && this.minSelected && this.meredianSelected)

    }
    // for annimation of alarm clock 
    get shakeImage(){
        return this.isAlarmTriggerd ? 'shake' :''
    }

    connectedCallback(){
        //inside it cause once component inserted into dom
        this.createHoursOptions()
        this.createMinutesOptions()
        this.currentTimeHandler()
    }
        currentTimeHandler(){
            setInterval(() => { 

            let dateTime = new Date()
            let  hour = dateTime.getHours() //get hours etirns hours in 0 to 23
            let minute = dateTime.getMinutes()
            let sec = dateTime.getSeconds()
            let AMPM = "AM"
            if(hour == 0){
                hour = 12
            }else if(hour>=12){
                hour = hour -12
                AMPM = "PM"
            }
            hour = hour<10 ? "0"+hour:hour
            minute = minute<10 ? "0"+minute:minute
            sec = sec<10 ?"0"+sec:sec


            this.currentTime = `${hour} :${minute}: ${sec}  ${AMPM}`
                if(this.alarmTime === `${hour}:${minute} ${AMPM}`){
                    console.log("Alarm triggered")
                    this.isAlarmTriggerd = true
                    this.ringtone.play()
                    this.ringtone.loop = true
                }
            }, 1000);
   
        }

        createHoursOptions(){
            for(let i =1;i<=12;i++){
                let val = i<10 ? "0"+i : i
                this.hours.push(val)
            }
        }

        createMinutesOptions(){
            for(let i =0;i<=59;i++){
                let val = i<10 ? "0"+i : i
                this.minutes.push(val)
            }
        }

        optionhandler(event){
            const {label,value} = event.detail;
            if(label === 'Hours(hr)'){
                this.hoursSelected = value;
            }
            else if(label === 'Minute'){
                this.minSelected = value;
            }
            else if(label === 'AM/PM' ){
                this.meredianSelected = value
            }
            else{

            }
            console.log('this.hoursSelected ' ,this.hoursSelected )
            console.log('this.minSelected ' ,this.minSelected )
            console.log('this.meredianSelected ' ,this.meredianSelected )
        }
        setAlarmHandler(){
            this.alarmTime = `${this.hoursSelected}:${this.minSelected} ${this.meredianSelected}`
            this.isAlarmSet = true

        }
        //reseting values
        clearAlarmHandler(){
            this.isAlarmSet = false
            this.alarmTime = ''
            this.isAlarmTriggerd = false
            this.ringtone.pause()

           const elements = this.template.querySelectorAll('c-clock-dropdown')
           // whatever it return it return node like array 
           // so first we will convert to array 
           // from array each element calling reset method

           Array.from(elements).forEach(element=>{
            element.reset('')
           })

        }


    }
