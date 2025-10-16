/*
 Questo script calcola il prezzo di un biglietto del treno in base alla distanza e applica sconti per minori e over 65.
 Definisce il costo al chilometro, gli sconti applicabili e aggiunge un listener al bottone di calcolo.
*/
const prezzoKm = 0.21;
const scontoMinorenni = prezzoKm - (prezzoKm * 0.2);
const sconto65 = prezzoKm - (prezzoKm * 0.4);
const bottone = document.getElementById('calcoloBtn');


bottone.addEventListener('click', function () {
    let kmInput = document.getElementById('kmInput').value;
    let etaInput = document.getElementById('etaInput').value;
    let kmTotali = Number(kmInput);
    let etaPasseggero = Number(etaInput);

    if (kmTotali <=0 || etaPasseggero <= 0) {
        console.log("Inserisci un valore valido");
        return;
    }
})
