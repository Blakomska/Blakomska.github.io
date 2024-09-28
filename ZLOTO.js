

function getData() {
    let url = "https://api.nbp.pl/api/cenyzlota/today/"
    fetch(url)
        .then(response => response.json())
        .then(response => {
            console.log('Response', response)
            const rates = response[0].cena;
            document.getElementById("kupno").innerHTML = rates

            const rates2 = rates * 1.0152;
            const string2 = parseFloat(rates2.toFixed(2));
            document.getElementById("sprzedaz").innerHTML = string2

        })
}

//dane historyczne
const data_biezaca1 = new Date();
const dni1 = data_biezaca1.getDate();
let miesiace1;
function daty() {
    if (data_biezaca1.getMonth() < 10) {
        miesiace1 = "0" + (data_biezaca1.getMonth() + 1)
    } else {
        miesiace1 = (data_biezaca1.getMonth() + 1)
    }
    const rok1 = data_biezaca1.getFullYear();

    function getHistoricalData(rok1, miesiace1, dni1) {

        let url = "https://api.nbp.pl/api/cenyzlota/" + rok1 + "-" + miesiace1 + "-" + (dni1 - 3) + "/" + rok1 + "-" + miesiace1 + "-" + dni1 + "/"
        fetch(url)
            .then(response => response.json())
            .then(response => {
                console.log('Response1', response)
                const rates1 = response[2].cena;
                const rates2 = response[1].cena;
                const rates3 = response[0].cena;
                const dates1 = response[2].data;
                const dates2 = response[1].data;
                const dates3 = response[0].data;
                document.getElementById("kupno1").innerHTML = rates1
                document.getElementById("kupno2").innerHTML = rates2
                document.getElementById("kupno3").innerHTML = rates3
                document.getElementById("data1").innerHTML = dates1
                document.getElementById("data2").innerHTML = dates2
                document.getElementById("data3").innerHTML = dates3


                const rates_przeliczone1 = rates1 * 1.0152;
                const string1 = parseFloat(rates_przeliczone1.toFixed(2));
                document.getElementById("sprzedaz1").innerHTML = string1

                const rates_przeliczone2 = rates2 * 1.0152;
                const string2 = parseFloat(rates_przeliczone2.toFixed(2));
                document.getElementById("sprzedaz2").innerHTML = string2

                const rates_przeliczone3 = rates3 * 1.0152;
                const string3 = parseFloat(rates_przeliczone3.toFixed(2));
                document.getElementById("sprzedaz3").innerHTML = string3
            })
    }
    getHistoricalData(rok1, miesiace1, dni1);
}


//Ustawienie daty do wyświetlenia
const data_biezaca = new Date();
const dni = data_biezaca.getDate();
let miesiace;
if (data_biezaca.getMonth() < 10) {
    miesiace = "0" + (data_biezaca.getMonth() + 1)
} else {
    miesiace = (data_biezaca.getMonth() + 1)
}
const rok = data_biezaca.getFullYear();
document.getElementById('currentDate').innerHTML = dni + '/' + (miesiace) + '/' + rok;
document.getElementById('currentDate1').innerHTML = rok + '-' + (miesiace) + '-' + dni;








