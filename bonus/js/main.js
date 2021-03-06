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
const divNumeri = document.getElementById('numeri');
const divNumeriUser = document.getElementById('numeri-user');
const divTimer = document.querySelector('#timer>span');
const btn = document.getElementById('submit');
let inputs;
const formGroup = document.getElementById('form');


// impostiamo quanti num vogliamo generare, valore min e max rispettivamento.
let numero=5, minimo=1, massimo=100, time=5;
let numeriUser = [], numeriUguali = [];
const numeriRandom = arrayNumRandom(numero,minimo,massimo);
console.log(`i numeri random sono ${numeriRandom}`);//mi serve x debug
divNumeri.innerHTML = `i numeri da ricordare sono: `;

const clock = setInterval(()=> {
    divNumeri.innerHTML = `i numeri da ricordare sono: ${numeriRandom}`;
    divTimer.innerHTML = time;
    if (time === 0){
        divNumeri.innerHTML = `inserisci ora ${numero} numeri che ricordi`;
        formGroup.innerHTML =`
                <input type="text">
                <input type="text">
                <input type="text">
                <input type="text">
                <input type="text">
        `;
        clearInterval(clock);
    }else {
        divTimer.innerHTML = time--;
    };
    // prima diuscire impostiamo un riferimento ai nuovi tag input creati in precedenza
    return inputs = document.getElementsByTagName('input');
}, 1000);

// aggiungiamo evento al btn per inviare i numeri che ricorda user
btn.addEventListener('click', ()=>{
    numeriUser = [];
    for (let i=0; i<inputs.length; i++){
        numeriUser.push(parseInt(inputs[i].value));
        }
    console.log(`i numeri user sono ${numeriUser}`);//mi serve x debug

    //devo filtrare tutti in numeri contenuti in entrambi gli array e poi stamparli
    // Metodo 1
    // for (let i=0; i<numero; i++){
    //     // per ogni numero inserito dell'utente verifichiamo se è presente nell'array di numeri random
    //     //console.log(numeriRandom, numeriUser);
    //     if (numeriRandom.includes(numeriUser[i])) {
    //         numeriUguali.push(numeriUser[i]);
    //         } 
    // }

    // Metodo 2
    const n = numeriUser.filter((elem)=> {
        if(numeriRandom.includes(elem)){
            numeriUguali.push(elem);
        }
        return numeriUguali
    });
    console.log('i numeri uguali sono: ',numeriUguali);
    divNumeriUser.innerHTML = `i numeri uguali sono: ${numeriUguali}`;
    }
);

//console.log(`i numeri inseriti sono ${numeriUser}`);//mi serve x debug
//console.log(`i numeri uguali sono ${numeriUguali}`);//mi serve x debug





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