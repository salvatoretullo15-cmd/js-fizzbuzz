console.log("hello-world");

//Scrivi un programma che stampi i numeri da 1 a 100,
//ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
//Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.


for (let i=0; i<=100; i++) {
    if ( i % 3 == 0) {
        console.log("FIZZ");
        
    } 
    if ( i % 5 == 0) {
        console.log("BUZZ");
        
    }
    if ( i % 3 % 5 == 0) {
        console.log("FIZZBUZZ")
    }
    console.log(i);
    
}