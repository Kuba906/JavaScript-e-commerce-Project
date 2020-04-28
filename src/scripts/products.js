export default function(){
    const btn=document.getElementById('btn-products');
    btn.addEventListener("click",()=>{
        hide();
        add();
    });

    const hide = ()=>{
        const btn=document.getElementById('btn-products');
         btn.style.display='none';


    }

    const add =()=>{
        const items=4;
        for( var i=0;i<items;i++)
        document.getElementById("clothes").innerHTML+=
        `<div class="col-6 col-md-3 Place"><img src="https://via.placeholder.com/309x390" alt="">
        <p><strong>Best Seller</strong></p>
        <p>New product placeholder</p>
        <p><strong>$100.00</strong></p>
    </div>`
   
    }
}