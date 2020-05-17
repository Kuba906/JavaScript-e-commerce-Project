export default function(){
   return new Promise((resolve,reject)=>{
    fetch("https://asos2.p.rapidapi.com/products/v2/list?country=US&currency=USD&sort=freshness&lang=en-US&sizeSchema=US&offset=0&categoryId=4209&limit=48&store=US", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "asos2.p.rapidapi.com",
		"x-rapidapi-key": "9e893e2ccdmsha92eec92c2bbaafp1a6cecjsn705e5663dd46"
	}
})
.then(response => {
   return response.json();
    
})
.then(response=>{
    let items =[];
    response.products.forEach(el =>{
        items.push({
            name: el.name,
            imageUrl: el.imageUrl
        })
    })
    resolve(items);
    console.log(response);
    console.log(items);
})
.catch(err => {
	console.log(err);
});


   })
   
}