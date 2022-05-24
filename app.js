let kapazitaet = [500, 1000, 2000, 5000, 10000];
let kText = ["500GB", "1TB", "2TB", "5TB", "10TB"]
//kapazitaet[slider.value];

function ausrechnen(){
    let anzahl = document.getElementById("anzahl").value;
    document.getElementById("anzahlText").innerHTML = anzahl;
    let kapazitaet = document.getElementById("kapazitaet").value;
    document.getElementById("kapazitaetText").innerHTML = kText[kapazitaet];


}