// console.log("ok js");
/*
 Consegna:
 Scrivi un programma che stampi in console i numeri da 1 a 100, ma che
 per i multipli di 3 stampi “Fizz” al posto del numero
 per i multipli di 5 stampi “Buzz” al posto del numero.
 Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz” al posto del numero.
 Prima di partire a scrivere codice poniamoci qualche domanda:
 Come faccio a sapere se un numero è divisibile per un altro?
 Abbiamo visto qualcosa di particolare che possiamo usare?
 Consigli del giorno:
 Scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
 Proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"
Non complichiamoci la vita con soluzioni complesse: la strada semplice è quasi sempre la migliore
BONUS 1:
Crea un elemento che faccia da contenitore nel DOM e poi riempilo con i tuoi elementi via JS.
Puoi usare varie tecniche  (template literals, innerHTML, appendecc)
BONUS 2:
Applica stili differenti agli elementi aggiunti al DOM nel BONUS 1, a seconda che il valore inserito sia un numero, un fizz, un buzz o un fizzbuzz.
Come abbiamo visto puoi  usare varie tecniche (style , className, classList)
*/
/**
 1.fare un for ceh comprende i numeri da 1 a 100
 2.dentro il for creare un multiplo di 3 con if che stampi fizz al posto del numero
 3. dentro il for creare un altro if con multiplo di 5 che stampi buzz al posto del numero
 4. aggiungere un altro if che stampi ad ogni multiplo sia di 3 e di 5 fizzbuzz al posto del numero
 5. bonus
 */

// 1 creare un for
for (i = 1; i <= 100; i++) {
  console.log(i);
}
