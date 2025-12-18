console.log("Inizio esecuzione");
let d = new date();
console.log(d);
document.getElementById("saluto").innerHTML = d.getDay();
let colori = [];
let colori2 = new Array();

function elabora() {
    let numero = document.getElementById("inNumber").value;
    alert(numero);
    
    if (numero >=0 && numero <=255){
        colori.push(numero);
        document.getElementById("outText").innerHTML = "Hai inserito il numero corretto";
        document.getElementById("outText").innerHTML += "<br> i colori inseriti sono: " + colori;
        console.log(colori);
    }
    else{
        document.getElementById("error").innerHTML = "Il numero non è corretto"
    }
    
function reset(){
    document.getElementById("inNumber").value = "";
}

}

