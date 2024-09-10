


// To begin, solve the following classic “Fizz Buzz” problem. There are a few different ways to do this 
// - experiment with what you think is the most efficient. Once you have solved the problem, ask yourself if there could be another way; and if so, would it be better.
// Accomplish the following:
// Loop through all numbers from 1 to 100.
// If a number is divisible by 3, log “Fizz.”
// If a number is divisible by 5, log “Buzz.”
// If a number is divisible by both 3 and 5, log “Fizz Buzz.”
// If a number is not divisible by either 3 or 5, log the number.

//Part 1

// for(let i = 0; i <= 100; ++i ) {
//     if(i % 3 != 0 && i % 5 != 0){
//         console.log(i);
//     } else if (i % 3 != 0 && i % 5 == 0)  {

//         console.log("Buzz");
//     }
//     else if (i % 3 == 0 && i % 5 != 0)  {

//         console.log("Fizz");
//         }

//     else {
//         console.log("Fizz Buzz");
//     }
// }

// Declare an arbitrary number, n.
// Create a loop that searches for the next prime number, starting at n and incrementing from there.
// As soon as you find the prime number, log that number and exit the loop.

//Part 2



function nextprime(r)
{

primecals:
for(let k = r+1; k <= 2*r+1; k++)
{
if (k % 6 == 1 || (k) % 6 == 5){


let n = 2

while( n < k)
 {

    if(k % n == 0){
        // console.log("not prime "+ n + k)
        
        continue primecals; }
    else{
        null
    }
 
 
n++

 }
 console.log(k +" Is the next prime")
break
}

else{
    // console.log(k + " ---------is not Prime")

    
if (k < 2) {
    console.log("2 is the next prime");
    
    break
} 
else if (k == 2) {
    console.log("3 is the next prime");
    
    break
} 
else if (k == 3) {
    console.log("5 is the next prime");
    
 break
}

}
}
}


nextprime(1000000)

//Works

//extra code
// let n;

// n = 8;


// for(let n = 1; n < 8; n++){
// console.log(n+"outside")
// let isprime = true;

// let r = n;
// while(isprime){

// if(n==2|| n==3 || n ==5 ){
//     console.log(n+" is the next prime number")
//  break
// }
// if (n % 2 == 0) {
//     console.log(n + " Is Even, Not Prime")
// } else  if( ){
//     console.log(n+"trigger")
// }

// if(n>= 2*r+1){
//     console.log(n)
// is prime =false
// break
// }
// n++
// }
// }