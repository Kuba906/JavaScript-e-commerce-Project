export default function(items){
    const content = items;
    const btn=document.getElementById('btn-products');
    console.log(items);
    btn.addEventListener("click",()=>{
        hide();
        add(content);
    });
    
    const hide = ()=>{
        const btn=document.getElementById('btn-products');
         btn.style.display='none';


    }

    const add =(products)=>{
        const items=4;
        for( var i=0;i<items;i++)
        document.getElementById("clothes").innerHTML+=
        `<div class="col-6 col-md-3 Place"><img src="https://${products[i+8].imageUrl}" alt="">
        <p><strong>Best Seller</strong></p>
        <p>New product placeholder</p>
        <p><strong>$100.00</strong></p>
    </div>`
   
    }
}