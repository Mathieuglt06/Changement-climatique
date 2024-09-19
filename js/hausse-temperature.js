let media = window.matchMedia("(max-width: 950px)");

let meteo = document.getElementById('meteo-js');
let sante = document.getElementById('sante-js');

if(media.matches){
    meteo.innerHTML = `
        <div id="img-ouragan"></div>    
        <div class="info">
            <h3>Événements météorologiques extrêmes</h3>
            <p>
                Les hausses de température augmentent la fréquence des événements extrêmes. Depuis 1980, 
                ces catastrophes ont triplé. Les vagues de chaleur sont 30 fois plus probables, et les sécheresses 
                extrêmes ont augmenté de 50%. Les pertes économiques liées à ces événements s'élèvent à environ 
                2 900 milliards de dollars entre 2000 et 2019.
            </p>
        </div>
    `
    sante.innerHTML = `
        <div id="img-sante"></div>
        <div class="info">
            <h3>Impacts sur la santé humaine</h3>
            <p>
                Entre 2000 et 2016, 125 millions de personnes supplémentaires ont été exposées à des vagues de chaleur. 
                Les températures élevées augmentent les maladies cardiovasculaires et respiratoires, avec des vagues de 
                chaleur ayant causé 70 000 décès en Europe en 2003. Le changement climatique favorise aussi la propagation 
                de maladies comme le paludisme.
            </p>
        </div>
    `
}