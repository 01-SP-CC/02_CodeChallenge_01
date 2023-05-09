
/*********   CODE CHALLENGE 01 **********/
 
/*
Geben Sie über eine Prompt-Anforderung eine Zahl ein.
Geben Sie über eine Prompt-Anforderung eine zweite Zahl ein.
Berechnen Sie die Summe der beiden Zahlen.
Geben Sie die Summe der Zahlen in die Konsole aus:
"Die Summe der Zahlen ist: summe"
*/

let eingabe1 = prompt("Erste Zahl eingeben: "); // Eingabe der ersten Zahl. Prompt nimmt alles als String Datentyp.
let eingabe2 =prompt("Zweite Zahl eingeben: "); // Eingabe der zweiten Zahl. Prompt nimmt alles als String Datentyp.
let zahl1 = parseInt(eingabe1); // Umwandeln des Datentyps von String -> Ganzzahl Integer/Number
let zahl2 = parseInt(eingabe2); // Umwandeln des Datentyps von String -> Ganzzahl Integer/Number
let summe = zahl1 + zahl2 // Addition der zwei Ganzzahlen.

console.log("Die Summe der Zahlen ist: " + summe); // Ausgabe der Summe als Ganzzahl.

