const submit = document.getElementById('generate');
const refresh = document.getElementById('refresh');

submit.addEventListener('click',
    function() {
        document.getElementById('generate').innerHTML = "Rigenera";

        // Dati passeggero
        let name_passenger = document.getElementById('name').value;
        console.log(`L'utente si chiama ${name_passenger}`);

        // Distanza da percorrere
        let distance = document.getElementById('distance').value;
        console.log(`L'utente deve percorrere ${distance}Km`);

        // Fascia d'età del passeggero
        let age = document.getElementById('age').value;
        console.log(`L'utente rientra nella categoria sconto ${age}`);

        // In caso di errore
        if(!name_passenger && !distance) {
            alert('ERRORE! Si prega di inserire i dati per generare il suo biglietto');
            location.reload();
        } 
        else if(!distance) {
            alert('Per favore, inserire la distanza');
            location.reload();
        }
        else if(!name_passenger) {
            alert('Per favore, inserire nome e cognome del passeggero');
        }
        else if(isNaN(distance)) {
            alert("Il valore inserito non è un numero! Per favore, inserire correttamente i valori richiesti");
            location.reload();
        }

        // Calcolo prezzi biglietti
        const km_price = 0.21;
        const full_price_ticket = distance * km_price;
        const ticket = full_price_ticket.toFixed(2);
        console.log(`Il prezzo intero del biglietto è: ${ticket}€`);

        
        // Calcolo sconto Under18
        let ticket_under = full_price_ticket * 0.80;
        let ticket_d_under = ticket_under.toFixed(2);
        console.log(`Il prezzo del biglietto per Under 18 è: ${ticket_d_under}€`);

        // Calcolo sconto Over65
        let ticket_over = full_price_ticket * 0.60;
        let ticket_d_over = ticket_over.toFixed(2);
        console.log(`Il prezzo del biglietto per Over 65 è: ${ticket_d_over}€`);
    }    
);

refresh.addEventListener('click',
    function() {
        console.log('Aggiorno la pagina');
        location.reload();
    }
)

// // Output prezzo biglietto del treno con sconti
// if(age < 18) {
//     alert(`Complimenti! Hai diritto allo sconto per Under 18. Il prezzo del biglietto è di ${ticket_d_under}€`);
// }
// else if(age > 65) {
//     alert(`Complimenti! Hai diritto allo sconto per Over 65. Il prezzo del biglietto è di ${ticket_d_over}€`);
// }
// else {
//     alert(`Il prezzo del biglietto è di ${ticket}€`);
// }