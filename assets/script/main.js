/*
 Questo script calcola il prezzo di un biglietto del treno in base alla distanza e applica sconti per minori e over 65.
 Definisce il costo al chilometro, gli sconti applicabili e aggiunge un listener al bottone di calcolo.
*/
const prezzoKm = 0.21;
const scontoMinorenni = 0.2;
const sconto65 = 0.4;
const bottone = document.getElementById('calcolaBtn');


bottone.addEventListener('click', function () {
    let kmInput = document.getElementById('kmInput').value;
    let etaInput = document.getElementById('etaInput').value;
    let kmTotali = Number(kmInput);
    let etaPasseggero = Number(etaInput);

    if (kmTotali <=0 || etaPasseggero <= 0) {
        console.log("Inserisci un valore valido");
        return;
    }

    let prezzoBase = kmTotali * prezzoKm;
    let scontoApplicato = 0;
    let tipoSconto = "Nessuno sconto";

    if (etaPasseggero < 18) {
        scontoApplicato = prezzoBase * scontoMinorenni;
        tipoSconto = "Sconto minorenni (20%)"
    } else if (etaPasseggero >= 65) {
        scontoApplicato = prezzoBase * sconto65;
        tipoSconto = "Sconto over 65 (40%)"
    }

    let prezzoFinale = prezzoBase - scontoApplicato;

    const prezzoFormattato  = prezzoFinale.toFixed(2);
    const importoFormattato = scontoApplicato.toFixed(2);

    let outputHtml = `
    <h2>Riepilogo Biglietto</h2> 
    <p><strong>Distnza da percorrere:</strong> ${kmTotali}</p>
    <p><strong>Età del passeggero:</strong> ${etaPasseggero}</p>
    
    `

    /* console.log("Km da percorrere:", kmTotali);
    console.log("Età del passeggero:", etaPasseggero);
    console.log("Prezzo base (senza sconti):", prezzoBase.toFixed(2), "€");
    console.log("Sconto applicato:", tipoSconto);
    console.log("Importo dello sconto:", scontoApplicato.toFixed(2), "€");
    console.log("PREZZO FINALE:", prezzoFinale.toFixed(2), "€"); */
})
