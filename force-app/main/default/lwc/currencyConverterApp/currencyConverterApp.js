import { LightningElement } from 'lwc';
import {countryCodeList} from 'c/countryCodeList';
import currencyConverterAssets from '@salesforce/resourceUrl/currencyConverterAssets'

export default class CurrencyConverterApp extends LightningElement {

    currencyImage = currencyConverterAssets +'/currencyConverterAssets/currency.svg'
    countryList = countryCodeList;
    countryFrom= "USD"
    countryTo = "AUD"
    result
    error
    amount = ''

    handleChange(event){
        const {name,value} = event.target
        console.log("name",name)
        console.log("value",value)
        this[name] = value
        this.result = ''
        this.error = ''
    }

    submitHandler(event){
        event.preventDefault()
        // prevent from refreshing page
        this.convert()
    }
    async convert(){
        const API_URL = `https://api.exchangerate.host/convert?from=${this.countryFrom}&to=${this.countryTo}`
        try{
            const data = await fetch(API_URL)
            //data in binary stream so we are converting it into json
            const jsonData = await data.json()
            this.result = (Number(this.amount)*jsonData.result).toFixed(2)
            console.log(jsonData)
            
        }catch(error){
            console.log(error)
            this.error= "An error occured.please try again"
        }
    }
}