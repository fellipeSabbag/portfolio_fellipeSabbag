const Tecla = document.querySelectorAll('.tecla')
const Som = [som_tecla_pom,som_tecla_clap,som_tecla_tim,som_tecla_puff,som_tecla_splash,som_tecla_toim,som_tecla_psh,som_tecla_tic,som_tecla_tom]

for (let a= 0; a < Som.length; a++) { 
    function tocaSom () {
    Som[a].play()
    }
    
    Tecla[a].onclick= tocaSom 
}


