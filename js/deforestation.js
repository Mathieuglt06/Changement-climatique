let media = window.matchMedia("(max-width: 950px)");

let eau = document.getElementById('eau-js')

if(media.matches){
    eau.innerHTML = `
        <div id="img-secheresse"></div>
        <div class="info">
            <h3>Perturbation du cycle de l'eau</h3>
            <p>
                Les forêts génèrent environ 60 % des prélèvements terrestres via l'évapotranspiration. 
                La déforestation réduit ce processus, diminuant les prélèvements et augmentant les risques de sécheresses 
                locales. Cela affecte les ressources en eau et l'agriculture, perturbant les moyens de subsistance dans ces régions.
            </p>
        </div>
    `
}