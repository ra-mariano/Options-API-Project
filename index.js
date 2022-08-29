function logger(input) {
  console.log(input)
}

logger("what up?")

var allStockTickers = []
let stockClose = [34,56,667]

/*

fetch("https://api.polygon.io/v3/reference/options/contracts?contract_type=call&expiration_date=2022-08-12&limit=1000&apiKey=cLF1bDGQqSqiF8iTmAsZ8Fppjbp48x6e")
.then(res => res.json())
.then(data => {
 
  //document.getElementById("results").innerHTML = JSON.stringify(data, null, 2)

  data.results.map(x => {
  if (allStockTickers.indexOf(x.underlying_ticker) == -1) {
    allStockTickers.push(x.underlying_ticker)}
    else return
  })

  document.getElementById("results").innerHTML = JSON.stringify(allStockTickers)

  if (data.next_url) {
    fetch(data.next_url.concat("&apiKey=cLF1bDGQqSqiF8iTmAsZ8Fppjbp48x6e"))
    .then(res => res.json())
  .then(data => {
    data.results.map(x => {
      if (allStockTickers.indexOf(x.underlying_ticker) == -1) {
        allStockTickers.push(x.underlying_ticker)}
        else return
      })

      document.getElementById("results").innerHTML = JSON.stringify(allStockTickers)
   
     

    })
  } 

})

*/


function getTickers(endpoint) {

  fetch(endpoint)
  .then(res => res.json())
  .then(data => {

  if (data.next_url == false) {
    return
  }

  else {
      data.results.map(x => {
      if (allStockTickers.indexOf(x.underlying_ticker) == -1) {
        allStockTickers.push(x.underlying_ticker)}
        else return
      })
    
      document.getElementById("results").innerHTML = JSON.stringify(allStockTickers)
    
     getTickers(data.next_url.concat("&apiKey=cLF1bDGQqSqiF8iTmAsZ8Fppjbp48x6e"))
       
         
    
        }

        for (let i=0; i<allStockTickers.length; i++) {

        // let looper = allStockTickers[i]
  
        fetch("https://api.polygon.io/v2/aggs/ticker/"+allStockTickers[i]+"/prev?adjusted=true&apiKey=cLF1bDGQqSqiF8iTmAsZ8Fppjbp48x6e")
  .then(res => res.json())
    .then(data => {
  
      console.log(data.results[0].c)
      
      })
        }
      }) 

    }





 





getTickers("https://api.polygon.io/v3/reference/options/contracts?underlying_ticker.lt=B&contract_type=call&expiration_date=2022-09-02&limit=1000&apiKey=cLF1bDGQqSqiF8iTmAsZ8Fppjbp48x6e")


/*console.log(allStockTickers)


console.log(allStockTickers.length)

   for (let i=0; i<allStockTickers.length; i++) {

console.log(allStockTickers.length)
    console.log(allStockTickers[i])
     
fetch("https://api.polygon.io/v2/aggs/ticker/"+looper+"/prev?adjusted=true&apiKey=cLF1bDGQqSqiF8iTmAsZ8Fppjbp48x6e")
.then(res => res.json())
  .then(data => {

    console.log(data.results[0].c)

  })

   }
  }*/






