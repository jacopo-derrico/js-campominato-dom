/* 
-Il computer deve generare 16 numeri casuali nello stesso range della difficoltà prescelta: le bombe. Attenzione: Nell’array delle bombe non potranno esserci due numeri uguali.
-In seguito l'utente clicca su una cella: se il numero è presente nella lista dei numeri generati - abbiamo calpestato una bomba - la cella si colora di rosso e la partita termina. Altrimenti la cella cliccata si colora di azzurro e l'utente può continuare a cliccare sulle altre celle.
-La partita termina quando il giocatore clicca su una bomba o quando raggiunge il numero massimo possibile di numeri consentiti (ovvero quando ha rivelato tutte le celle che non sono bombe).
-Al termine della partita il software deve comunicare il punteggio, cioè il numero di volte che l’utente ha cliccato su una cella che non era una bomba.
*/
let playBtn = document.getElementById('playBtn')
let gridHTML = document.getElementById('grid')
let difficultySelection = document.getElementById('difficulty')

gridHTML.innerHTML = "<h2>Scegli una difficoltà e comincia a giocare!"


function generateGrid(number, name) {
    for (let i = 1; i <= number; i++) {
        let box = document.createElement('div')

        box.classList.add('box', name)

        box.innerHTML = `<span>${[i]}</span>`

        box.addEventListener('click', function () {
            this.classList.toggle('box-active')
            console.log(`Cella numero: ${[i]}`)
        })

        gridHTML.append(box)
    }
}

playBtn.addEventListener('click', function () {

    gridHTML.innerHTML = ""

    let difficultyValue = difficultySelection.value

    if (difficultyValue === 'easy') {
        return generateGrid(100, 'box-easy')
    } else if (difficultyValue === 'medium') {
        return generateGrid(81, 'box-medium')
    } else {
        return generateGrid(49, 'box-hard')
    }
})