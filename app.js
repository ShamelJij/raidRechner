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
            netto = brutto;
        break;
        case "1":
            netto = brutto/2;
        break;
        case "5":
            if(anzahl.value >= 3){
                netto = (anzahl.value-1) * kapazitaeten[kapazitaet.value];
            }
            else{
                netto = 0;
            }
        break;
        case "6":
            if(anzahl.value >= 4){
                netto = (anzahl.value-2) * kapazitaeten[kapazitaet.value];
            }
            else{
                netto = 0;
            }
        break;
        case "10":
            netto = brutto/2;
        break;
        default:
            netto = "jBoD";
    }
        if(netto > 0 )
        {
            document.getElementById("netto").innerHTML = netto + " TB"
        }else{
            document.getElementById("netto").innerHTML = "Nicht genügend Platten!";
        }
    let effizienz = netto/brutto*100;
    effizienz = effizienz.toFixed(2);
    document.getElementById("effizienz").innerHTML = effizienz;
}
