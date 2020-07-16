import './styles/style.scss';
import 'bootstrap';
import footer from './scripts/footer';
import products from './scripts/products';
import scrollToTop from './scripts/scrollToTop';
import carousel from './scripts/carousel';
import fetchdata from './scripts/fetchdata';
import maincontent from './scripts/maincontent';
import specialoffer from './scripts/specialoffer';
import hideloader from './scripts/loader';
import load from './scripts/load';


function start() {

    window.addEventListener("DOMContentLoaded", function(event) {

        fetchdata().then(response => {

            products(response);

            carousel(response);
            maincontent(response);
            specialoffer(response);

        }).catch(err => {
            alert("can't load content");
        }).finally(() => {
            console.log("content has already loaded")
            hideloader();
            load();
        })
        scrollToTop();
        footer();
    });
}
start()