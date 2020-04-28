export default function(){
    const arrow=document.getElementById("arrow-top");
    const viewheight = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);


    const hide=()=>{
        const vh=window.pageYOffset;
        if(vh<= 0.5*viewheight) arrow.style.display="none";
        else arrow.style.display="block";


    }
    window.addEventListener('scroll', hide);

    const GoTop=()=>{
        window.scrollTo({top: 0});
    }
    arrow.addEventListener('click',GoTop);



}