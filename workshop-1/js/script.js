console.log(eersteVariabele);

// plak hier de 3 bovenstaande variabelen aan elkaar, met spaties
var voornaam = "Owen "; // wijzig dit in jouw eigen voornaam
var tussenvoegsel = " "; // wijzig dit in jouw eigen eventuele tussenvoegsel
var achternaam = "Law"; // wijzig dit in jouw eigen achternaam
var volledigeNaam = voornaam + tussenvoegsel + achternaam;

document.write("Mijn naam is: ", volledigeNaam);

// bereken hier jouw leeftijd op basis van de eerder ingevulde geboortegegevens.
var geboortedag = "3"; // je geboortedag
var geboortemaand = "Juni"; // je geboortemaand
var geboortejaar = "2006"; // je geboortejaar
var huidig_jaartal = "2022"// het huidige jaar;
var leeftijd = huidig_jaartal -= geboortejaar;

document.write("<br>")
document.write("Mijn leeftijd is: ", leeftijd);

// bereken hier hoeveelste dag van dit kalenderjaar het is
var dag_van_het_jaar = 0;

function myFunction(){
        // check hier dmv een boolean of jouw woonplaats gelijk is aan "Utrecht"
    
        var straat = "Porta Basilica"; // je straat;
        var huisnummer = "29"; // je huisnummer;
        var woonplaats = "Houten"; // je woonplaats;
        var woonachtig_in_utrecht = "Utrecht";
    
        if (woonplaats === woonachtig_in_utrecht) {
            document.write("<br>");
            document.write("Woont redelijk in de buurt ");
        } else {
            document.write("<br>");
            document.write("Woont niet in de buurt van Utrecht");
        }
}


// bereken hier het totaalbedrag als iedere student 2 frikandelbroodjes zou kopen
var aantal_studenten_in_deze_klas = 23;
var kosten_van_frikandelbroodje = 1.76;
var totale_lunchkosten = aantal_studenten_in_deze_klas *= kosten_van_frikandelbroodje *= 2;

document.write("<br>")
document.write("Totale lunch kosten: ", totale_lunchkosten);

var eersteVariabele = "test";

/* toon de waardes hieronder op het scherm gescheiden door het html: '<br>' element voor een nieuwe-regel
  bijvoorbeeld:
  document.write("Voornaam: " + voornaam);
  document.write("<br>");
  document.write("Achternaam: " + achternaam);
  enzovoorts, zorg dat alle bovenstaande variabelen op het scherm komen
*/

myFunction()