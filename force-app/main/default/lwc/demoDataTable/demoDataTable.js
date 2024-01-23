import { LightningElement ,track } from 'lwc';

const data = [{'ApproverName':'approver 1',"ApprovalLimit":"100"},
                {'ApproverName':'approver 2',"ApprovalLimit":"200"},
                {'ApproverName':'approver 3',"ApprovalLimit":"300"},
                {'ApproverName':'approver 4',"ApprovalLimit":"400"},
                {'ApproverName':'approver 5',"ApprovalLimit":"500"},
        ];

const columns = ['Approver Name ', "ApprovalLimit"];

export default class DemoDataTable extends LightningElement {
    fullTableData =data
    filteredData =data
    searchValue = ''
    filterby = ''
    // @track data = data;
    // @track filteredData =data;
    columns = columns;
    searchAmount(event){
        this.searchValue = event.target.value
        // const {value} = event.target
        // console.log(value)

    }
    get filterbyoption(){
        return [
            {label:'All', value:'All'},
            {label:'Approver Name', value:'Approver Name'},
            {label:'ApprovalLimit', value:'ApprovalLimit'},
            
        ]
    }
    filterbyhandler(){
        this.filterby = this.target.value;
    }

    handleFilter() {
        //this.searchValue = event.target.value
        // const {value} = event.target
        const {value} = this.searchValue
        console.log(value)
       // const filterValue = event.target.value.toLowerCase();
        //this.filteredData = data;
        if(this.filterby === 'All'){
            return Object.keys(eachObj).some(key=>{
                  return eachObj[key].toLowerCase().includes(value)
                })

        }else {
            
        }
        this.filteredData = this.fullTableData.filter(currentItem => 
            currentItem.ApprovalLimit < this.searchValue);
        console.log(appData);
         

        // this.filteredData = this.fullTableData.filter(eachObj=>{
        //    //this method return keys => Object.keys(eachObj) = [ 'Name', "Values"];
        //     return Object.keys(eachObj).some(key=>{
        //         return eachObj[key].toLowerCase().includes(value)
        //     })
        // })

    }
    
   
}