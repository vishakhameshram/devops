export default 
function generateData({ amountOfRecords }) {
    return [...Array(amountOfRecords)].map((_, index) => {
        return {
            name: `Name (${index})`,            
            amount: Math.floor(Math.random() * 1000)
           
        };
    }); 
}