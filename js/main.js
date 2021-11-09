/*
Visualizzare in pagina 5 numeri casuali.
Da lì parte un timer di 30 secondi.
Dopo 30 secondi l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
Consigli del giorno:
* Pensate prima in italiano.
* Dividete in piccoli problemi la consegna.
* Individuate gli elementi di cui avete bisogno per realizzare il programma.
*ricordatevi come detto che è facile che i tempi della cancellazione degli elementi in pagina, usando i prompt si sfasino ed è facile che lo vediate funzionare in modo corretto solo su Firefox. Questo è legato al funzionamento del browser e del prompt relativo.
Prompt non lo userete poi lavorando effettivamente. (o perlomeno ce lo auguriamo :sorriso_con_goccia_sudore:)
*/

//Visualizzare in pagina 5 numeri casuali x 30 secondi
const container = document.getElementById('container');
// impostiamo quanti num vogliamo generare, valore min e max rispettivamento.
let numero=5, minimo=0, massimo=10, time=5;
let numeriUser = [], numeriUguali = [];
const numeriRandom = arrayNumRandom(numero,minimo,massimo);
console.log(`i numeri random sono ${numeriRandom}`);
container.innerHTML = `i numeri da ricordare sono ${numeriRandom}`;

const clock = setInterval(()=> {
    if (time === 0){
        container.innerHTML = `inserisci ora ${numero} che ricordi`;
        // memorizziamo i numeri dell'utente
        for (let i=0; i<numero; i++){
        numeriUser.push(parseInt(prompt(`Inserisci il ${i+1} numero che ricordi: `)));
        // per ogni numero inserito dell'utente verifichiamo se è presente nell'array di numeri random
        if (numeriRandom.includes(numeriUser[i])) {
            numeriUguali.push(numeriUser[i]);
            } 
        }
        console.log(`i numeri inseriti sono ${numeriUser}`);
        console.log(`i numeri uguali sono ${numeriUguali}`); 
        container.innerHTML = `i numeri uguali sono: ${numeriUguali}`;
        clearInterval(clock);
    }else {
        console.log(--time)
    };
}, 1000);




// FUNZIONI:

// genera numero intero random
function getRandomInt(min, max){
    min = Math.ceil(min) || 0;
    max = Math.floor(max) || Number.MAX_SAFE_INTEGER;
    let result = Math.floor(Math.random() * (max - min + 1) + min);
    return result;
}

// crea array di n numeri tutti diversi
function arrayNumRandom(n, min, max){
    let arrNum = [];
    while(arrNum.length < n){
        let num = getRandomInt(min, max);
        if (!arrNum.includes(num)){
            arrNum.push(num);
        }
    }
    return arrNum
}