


// To begin, solve the following classic “Fizz Buzz” problem. There are a few different ways to do this 
// - experiment with what you think is the most efficient. Once you have solved the problem, ask yourself if there could be another way; and if so, would it be better.
// Accomplish the following:
// Loop through all numbers from 1 to 100.
// If a number is divisible by 3, log “Fizz.”
// If a number is divisible by 5, log “Buzz.”
// If a number is divisible by both 3 and 5, log “Fizz Buzz.”
// If a number is not divisible by either 3 or 5, log the number.

//Part 1

for(let i = 0; i <= 100; ++i ) {
    if(i % 3 != 0 && i % 5 != 0){
        console.log(i);
    } else if (i % 3 != 0 && i % 5 == 0)  {

        console.log("Buzz");
    }
    else if (i % 3 == 0 && i % 5 != 0)  {

        console.log("Fizz");
        }

    else {
        console.log("Fizz Buzz");
    }
}




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


nextprime(1100)

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


// Part 3
let counter_c = 0

let counter_n =0

let b_counter = 0

 let test_string = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26"

//let test_string = "Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232"


let text=""



for (let i_t =0; i_t < test_string.length; i_t++)
{
    // console.log(test_string[i_t])
    text += test_string[i_t] ;

    if (test_string[i_t] ==",")
        {

    counter_c += 1
            
            // if(b_counter > counter_c )
            //     {
            //         b_counter += 1
            //         break
            //     }
    

    }

 

   if (test_string[i_t] =="\n")
    {

    counter_n += 1

}



}

// console.log(counter_c)
// console.log(counter_n)
console.log(text)


// // Add 1 to count since each initial row has a free cell

let true_count_cells = counter_c + counter_n

// console.log(true_count_cells)

let cells ={}
let text2 =""
let cellcount = 0
let escapechar ="\n"
let fulltext =""
let text3 = ""

console.log("-----------------------------------------")
// for (let x = 0; x <=true_count_cells-18; x++){
    // console.log(x);
    // cells += "cell"+x+","

    outerloop:
    for (let x = 0; x <= test_string.length; x++){
    let internal_counter = 0;
   
     text2 =""
    //console.log(x + "outer")
    // console.log(test_string[x] + " Hello")
    // console.log(true_count_cells)
    
        for (let i_t =x; i_t <= test_string.length; i_t++)
        {

                // if( cellcount > true_count_cells ){
                //     break

                // }

            //   console.log(x+"second")
                text2 += test_string[i_t] 

                

                if (test_string[i_t+1] =="," || test_string[i_t+1] =="\n" || test_string[i_t+1] ==undefined  )
                    {   

                        // console.log(text2)
                        // cell+cellcount
                        internal_counter += 1
                        i_t += 1
                       
                        x = i_t 
                        
                        // console.log(x+"xflag")

                        if( test_string[i_t] =="\n"){
                         
                            cells[+cellcount] =text2 //+ escapechar
 
                             text2 += " "
                             fulltext += text2 //+escapechar
                             cellcount += 1

                            text3 += "cell"+cellcount+"="+"'"+text2+"'" +"; "
                            continue outerloop;
                        } 
                        else{
                            cells[cellcount] =text2
                             text2 += " "
                        fulltext += text2 
                        cellcount += 1
                        
                            text3 += "cell"+cellcount+"="+"'"+text2+"'" +"; "
                        continue outerloop;
                        }

                        // console.log(x + "inner")
                        if( internal_counter <= i_t && internal_counter <=2)
                            {
            
                           


                            // console.log(text2)
                            // console.log(i_t)
                            // console.log(internal_counter+"flag")

                            }
                    }

                // console.log(text2)
                // console.log(fulltext)
            }

    




        }    


// console.log(text3)
//         console.log(cells[0])        
//         console.log(cells)
//         console.log((cells))

// console.log(fulltext)

// eval("let q = 8; console.log(q+6); let x= 5")
    

console.log(cells[0], cells[1], cells[2], cells[3]);
console.log(cells[4], cells[5], cells[6], cells[7]);
console.log(cells[8], cells[9], cells[10], cells[11]);
console.log(cells[12], cells[13], cells[14], cells[15]);
console.log(cells[16], cells[17], cells[18], cells[19]);


console.log("-----------------------------------------")

eval(text3) //there's probably a better way to set a list of variables, was trying not to use an array


// for (let i = 0; i < 4; i++) {
//     let start = i * 4 + 1;
//     console.log(`console.log(cell${start}, cell${start + 1}, cell${start + 2}, cell${start + 3});`);
// To generate the requested format from console.log(cell1, cell2, cell3, cell4);

console.log(cell1, cell2, cell3, cell4);
console.log(cell5, cell6, cell7, cell8);
console.log(cell9, cell10, cell11, cell12);
console.log(cell13, cell14, cell15, cell16);
console.log(cell17, cell18, cell19, cell20);