export default function (){

    const footerYearContainer = document.getElementById('place-tochange');
    footerYearContainer.innerHTML = new Date().getFullYear();
}