import { LightningElement } from 'lwc';
const BOOK_URL = 'https://www.googleapis.com/books/v1/volumes?q='

export default class BookApp extends LightningElement {

    query ='Man'
    books
    timer
    connectedCallback(){
        this.fetchBookData()
    }
    fetchBookData(){
        // fetch apiss 
            fetch(BOOK_URL + this.query)
            .then(respose=>respose.json())
            .then(data=>{
                console.log(data)
                this.books = data
            })
            .catch(error=>console.log(error))

    }
    fetchBooksHandler(event){
        this.query = event.target.value
    //just clear to clear reduce server call    
        //window.clearTimeout(this.timer)
// just to delya few sec
        this.timer =  setTimeout(()=>{
            this.fetchBookData
        },1000)
    }
}