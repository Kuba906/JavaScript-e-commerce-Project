import footer from './footer';
import products from './products';
import scrollToTop from './scrollToTop';
import carousel from './carousel';

export default function(){

window.addEventListener("DOMContentLoaded", function(event){
    footer();
    products();
    scrollToTop();
    carousel();
});
}
