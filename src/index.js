import './styles/style.scss';
import 'bootstrap';
import footer from './scripts/footer';
import products from './scripts/products';
import scrollToTop from './scripts/scrollToTop';
import carousel from './scripts/carousel';
import fetchdata from './scripts/fetchdata';
import maincontent from './scripts/maincontent';
import specialoffer from './scripts/specialoffer';

function start(){

    window.addEventListener("DOMContentLoaded", function(event){
       
        fetchdata().then(response=>{
            
            products(response);
            
            carousel(response);
            maincontent(response);
            specialoffer(response);

        }).catch(err=>{
            console.log("can't load content")
        }).finally(()=>{
            console.log("content has already loaded")
        })
        scrollToTop();
        footer();
    });
    }
    start()