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