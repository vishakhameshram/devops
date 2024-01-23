import { LightningElement } from 'lwc';
const API_KEY = 'd4340688126e0136570934345cc49413'
export default class WeatherApp extends LightningElement {

    cityName = ''
    loadingText = ''
    isError = false
// this is to dipslay the error and success loading on ui
    get loadingClasses(){
        
        return this.isError ? 'error-msg':'success-msg' 
    }
    searchHandler(event){
        this.cityName =event.target.value
    }
    submitHandler(event){
        // prevent refreshing 
        event.preventDefault()
        this.fetchData();

    }
    fetchData(){
        this.isError = false
        this.loadingText = 'Fetching Weather details';
        console.log("cityName",this.cityName);
        // inside this we will call our API
        const URL = `https://api.openweathermap.org/data/2.5/weather?q=${this.cityName}&units=metric&appid=${API_KEY}`
        //fetch methods will return a result in binary stream we need to covert 
        //it into json and as it is asysnchronous it will return into then and catch

        fetch(URL).then(res=>res.json()).then(result=>{
            console.log(JSON.stringify(result))
            this.loadingText = ''
            this.weatherDetails(result)
        }).catch(error=>{
            console.log('something went wrong');
            this.loadingText = 'something went wrong';
            this.isError = true
        })
    }
    //todisplay error and details 
    weatherDetails(info){
        if(info.cod === '404'){
            this.loadingText = `${this.cityName} isn't valid city name`;
            this.isError = true
        }else{
            this.loadingText = ''
        }

    }
}