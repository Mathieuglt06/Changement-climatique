let media = window.matchMedia("(max-width: 950px)");

let consequence = document.getElementById('change-js')

if(media.matches){
    consequence.innerHTML = `
        <div id="img-pertubation-ecosysteme"></div>
        <div class="info">
            <h3>Perturbation des écosystème</h3>
            <p>
                La fonte des glaces menace les écosystèmes polaires, réduisant de 13% par décennie la 
                surface de la banquise arctique. Les ours polaires, qui dépendent de la glace pour chasser, 
                ont vu leur population diminuer de 30% dans certaines régions. La fonte du <a href="https://www.geo.fr/environnement/permafrost-gaz-methane-rechauffement-climatique-53512" class="link-def">permafrost</a> 
                libère chaque année des millions de tonnes de méthane, perturbant le sol et mettant en danger la biodiversité.
            </p>
        </div>
    `
}