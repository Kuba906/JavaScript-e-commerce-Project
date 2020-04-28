import footer from './footer';
import products from './products';
import scrollToTop from './scrollToTop';


export default function(){

window.addEventListener("DOMContentLoaded", function(event){
    footer();
    products();
    scrollToTop();
});
}
