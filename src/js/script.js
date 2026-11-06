// TODO
//trouver l'élément d'ID "a-mettre-en-rouge"
const aMettreEnRouge = document.querySelector("#a-mettre-en-rouge")

 aMettreEnRouge.style.color = "red"

//trouver l'élément d'ID "en-rouge-suite-a-click"
const enRougeSuiteAClick = document.querySelector("#en-rouge-suite-a-click")
//Écouter les clicks sur lui pour alors le mettre en rouge.
 enRougeSuiteAClick.addEventListener("click", (evt)=>{
    enRougeSuiteAClick.style.color = "red"
});
//Trouvez tous les 'H2'
const collH2 = document.querySelectorAll("h2")

//Puis pour chacun, suite à un click,
//mettre la cible de l'événement en rouge.
collH2.forEach((elm)=>{
    elm.addEventListener("click", (evt)=>{
        evt.target.style.color = "red";
    });
});