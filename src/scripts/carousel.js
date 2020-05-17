export default function (items) {


    const carousel = document.getElementById('carousel')
    const    content = document.getElementById('content')


     const   right = document.getElementById('right')
     const   left = document.getElementById('left');

    const padding = -500;
    var wv = carousel.offsetWidth;

    right.addEventListener('click', e => {
        carousel.scrollBy(wv + padding, 0);

    });
    left.addEventListener('click', e => {
        carousel.scrollBy(-1 * (wv + padding), 0);

    });


    window.addEventListener('resize', e => (wv = carousel.offsetWidth));
    var x=document.querySelectorAll(".replace");
    for(let i=0;i<x.length;i++){
        x[i].src=`http://${items[i].imageUrl}`;
        x[i].style.width="268px";
        x[i].style.height="338px"
      
    }
    

}