export default function(items){
    var y=document.querySelectorAll(".maincontent")
console.log(y);
for(let i=0;i<y.length;i++){
    y[i].src=`http://${items[i+15].imageUrl}`;
}


}