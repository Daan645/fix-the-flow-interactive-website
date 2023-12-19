// variabel voor het 

// let articleHover = document.querySelector('.articleOverlayText')
// let articleP = document.querySelector('.articleOverlayP')
// let descriptionCheck = false;

// variabel voor het 

// let articleHover = document.querySelector('.articleOverlayText')
let articleP = document.querySelector('.articleOverlayP')
let descriptionCheck = false;

function buttonClick(button) {
    // Haal de selector op uit het data-selector attribuut van de knop
    let selector = button.getAttribute('data-selector');

    // Selecteer het element met behulp van de ontvangen selector
    let articleHover = document.querySelector(selector);
    console.log(articleHover.textContent);

    if (descriptionCheck === false){
        // voeg de nieuwe class articleDescription toe
        articleHover.classList.add('articleDescription');
        // verwijder klasse articleOverlayTekst
        articleHover.classList.remove('articleOverlayText');
        articleP.innerHTML = 'Gemeente Amstelveen heeft SPATwater gevraagd om op een innovatieve, creatieve en inclusieve manier elke inwoner van Amstelveen een persoonlijk en op maat gemaakt klimaatadaptief advies te geven.';
        descriptionCheck = true;
    } else {
        articleHover.classList.add('articleOverlayText');
        // verwijder klasse articleOverlayTekst
        articleHover.classList.remove('articleDescription');
        descriptionCheck = false;
    }
}


// function buttonClick(button) {
//     // Haal de selector op uit het data-selector attribuut van de knop
//     let selector = button.getAttribute('data-selector');
//
//     // Selecteer het element met behulp van de ontvangen selector
//     let articleHover = document.querySelector(selector);
//     console.log(articleHover.textContent);
//    
//     if (descriptionCheck === false){
//         // voeg de nieuwe class articleDescription toe
//         articleHover.classList.add('articleDescription');
//         // verwijder klasse articleOverlayTekst
//         articleHover.classList.remove('articleOverlayText');
//         articleP.innerHTML= 'Gemeente Amstelveen heeft SPATwater gevraagd om op een innovatieve, creatieve en inclusieve manier elke inwoner van Amstelveen een persoonlijk en op maat gemaakt klimaatadaptief advies te geven.';
//         descriptionCheck = true;
//     } else {
//         articleHover.classList.add('articleOverlayText');
//         // verwijder klasse articleOverlayTekst
//         articleHover.classList.remove('articleDescription');
//         descriptionCheck = false;
//     // Doe iets met het geselecteerde element (bijv. log het in de console)
//     console.log(element.textContent);
// }
// let articleDescription= document.querySelector();


    
articleDescription.addEventListener('click', descriptionHandler);

// functie voor het toevoegen van een andere class
// function descriptionHandler(){
//     if (descriptionCheck === false){
//     // voeg de nieuwe class articleDescription toe
//     articleHover.classList.add('articleDescription');
//     // verwijder klasse articleOverlayTekst
//     articleHover.classList.remove('articleOverlayText');
//     articleP.innerHTML= 'Gemeente Amstelveen heeft SPATwater gevraagd om op een innovatieve, creatieve en inclusieve manier elke inwoner van Amstelveen een persoonlijk en op maat gemaakt klimaatadaptief advies te geven.';
// descriptionCheck = true;
//     } else {
//         articleHover.classList.add('articleOverlayText');
//         // verwijder klasse articleOverlayTekst
//         articleHover.classList.remove('articleDescription');
//         descriptionCheck = false;
//        
//     }
// }
//
// function reverse() {
//   
// }

