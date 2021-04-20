var limit = 100;
var numeroBombe = 16; 

var maxTentativi = limit - numeroBombe;  // quindi saranno 84
var arrBombe = bombsGenerator(numeroBombe,limit); // per prima cosa creo una funzione che mi generi le bombe
var arrNumeriGiocati = []; // dove salvo tutti i tentativi. mi serve anche come contatore

// il ciclo gira fino a quando non si verifica la condizione di gioco finito
var gioco_finito = false;
while(gioco_finito === false){

  var number = parseInt(prompt("Inserici un numero"));

  if(arrNumeriGiocati.includes(number) === true) { // verifico che il numero non sia presente dentro arrNumeriGiocati

     alert("Attenzione! Il numero è già stato inserito.\nRiprova!")

  }else if(arrBombe.includes(number) === true) { // verifico che il numero non sia fra le bombe. se è presente finsce il gioco

     alert("Hai perso!\nHai fatto "+ arrNumeriGiocati.length + " tentativi");
     console.log("Tentativi fatti: ("+arrNumeriGiocati.length+") "+ arrNumeriGiocati.join() + "\nIl numero che ti ha fatto perdere è stato il "+ number);
     gioco_finito = true;

  }else if( number > limit ){ // il numero non deve essere supriore al limite (100)

    alert("Attenzione! Il numero è superiore a "+limit+".\nRiprova!")

  }else if( number < 1 ){ // il numero non deve essere inveriore  a 1

    alert("Attenzione! Il numero è inferiore a 1.\nRiprova!")

  }else if( isNaN(number) === true ){ // il numero deve essere un numero

    alert("Attenzione! Non hai inserto un numero.\nRiprova!")

  }
  else{ // se il numero giocato è valido lo aggiungo alla lita (arrNumeriGiocati)

    arrNumeriGiocati.push(number); // aggingo quindi il lumero estratto dentro l'array con lo storico di tutte le giocate
    if(maxTentativi === arrNumeriGiocati.length) // controllo se i numeri estratti sono uguali al numero di tentativi possibili
    {
      alert("HAI VINTO!!");
      gioco_finito = true;
    }

  }
}



// creo una funzione che mette in un array la lista delle bombe
function bombsGenerator(numBombs, max){
  var arrBombs = []; // creo un array per memorizzare le bombe

  // creo un ciclo che aggiunge le bombe nell'array e si ferma quando ne ha trovate numBombs
  // ATTENZIONE! le bombe devono essere tutte diverse
  while(arrBombs.length < numBombs){
    // estraggo la bomba
    var bomb = getRandomNumber(max);
    if(arrBombs.includes(bomb) === false) // se non trovo bombs dentro a arrBombs è la condizione per aggiungerlo
    {
      arrBombs.push(bomb);
    }
  }

  return arrBombs;
  
}

// generatore di numeri random
function getRandomNumber(max){
  // restituisco un numero random con limite max
  return Math.ceil(Math.random() * max);
}