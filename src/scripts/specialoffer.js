export default function(products){
   var special= document.querySelectorAll(".special");

   console.log(special);
   special[0].src = `https://${products[10].imageUrl}`;
   special[1].src = `https://${products[11].imageUrl}`;
   special[2].src = `https://${products[12].imageUrl}`;
   special[3].src = `https://${products[13].imageUrl}`;

    special[0].style.height="630px";
    special[3].style.height="310px";

}