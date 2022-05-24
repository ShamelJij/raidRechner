let kapazitaeten = [500, 1000, 2000, 5000, 10000];
let kText = ["500GB", "1TB", "2TB", "5TB", "10TB"];
let anzahl = document.getElementById("anzahl");
let kapazitaet = document.getElementById("kapazitaet");

//kapazitaet[slider.value];

function erfassen(){
    document.getElementById("anzahlText").innerHTML = anzahl.value;
    document.getElementById("kapazitaetText").innerHTML = kText[kapazitaet.value];
}

function ausrechnen(){
    let brutto = anzahl.value * kapazitaeten[kapazitaet.value];
    document.getElementById("brutto").innerHTML = brutto;
    switch (document.getElementById("level").value){
        case "0":
            document.getElementById("netto").innerHTML = brutto;
        break;
        case "1":
            document.getElementById("netto").innerHTML = brutto/2;
        break;
        case "5":
            if(anzahl.value >= 3){
                document.getElementById("netto").innerHTML = (anzahl.value-1) * kapazitaeten[kapazitaet.value];
            }
            else{
                document.getElementById("netto").innerHTML = "Nicht genügend Platten!";
            }
        break;
        case "6":
            if(anzahl.value >= 4){
                document.getElementById("netto").innerHTML = (anzahl.value-2) * kapazitaeten[kapazitaet.value];
            }
            else{
                document.getElementById("netto").innerHTML = "Nicht genügend Platten!";
            }
        break;
        case "10":
            document.getElementById("netto").innerHTML = brutto/2;
        break;
        default:
            document.getElementById("netto").innerHTML = "jBoD";
    }
}
