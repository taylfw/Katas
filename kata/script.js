
// function digital_root(n) {
//     let num = n;
//     let total = 0;

//     while (num) {
//         total += num % 10;
//         num = Math.floor(num/10); 
//         console.log(num, total);
//     }
    
//     if (total > 9) {
//         let secondTotal = digital_root(total);
//         return secondTotal;
        
//     } else if (total <= 9 ) {
//         return total;
//     } 
    


//   };

// console.log(digital_root(456)); 
// console.log(digital_root(16));


/////////////////////////////////////////////////////////////////
// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b.
/////////////////////////////////////////////////////////////////

// function arrayDiff(a, b) {
//     let i;
//     let j;
//     let c = [];
//     a.sort()
//     b.sort()
//     for (i = 0; i < a.length; i ++) {
//         for (j = 0; j < b.length; j++) {
            
//             if (a[i] === b[j]) {
//                 console.log(a[i]);
//             } else if (a[i] !== b[j]){
//                 console.log(a[i] + ' is not in b');
//                 c.push(a[i]);
//             } 
//         }
//     }
//     if (b[0] == undefined) {
//         for (i = 0; i < a.length; i ++) {
//             for (j = 0; j <= b.length; j++) {
//                 if (a[i] === b[j]) {
//                     console.log(a[i]);
//                 } else if (a[i] !== b[j]){
//                     console.log(a[i] + ' is not in b');
//                     c.push(a[i]);
//                 } 
//             }
//         }

//     }
    
//     // console.log(a);
//     // console.log(b);
//     console.log(c);
    
//     }


// arrayDiff([1], [4,5,6])
// arrayDiff([3,3,3,3,4], [3])
// arrayDiff([1,8,2], [])
// arrayDiff([1,2,2], [2])
// arrayDiff([-2,-16,-16,-1,-11,-6,-9,18,3,-19,-5,0,-5,18,9,-2,16],[-16,-9,-6,18,-1,-19,3,-5,-2,-11,16]) //Should return [0, 9]



// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

/*
function decendingOrder(n) {

    let num = n;
    let total = 0;
    let a = [];

    while (num) {
        total = num % 10;
        num = Math.floor(num/10); 
        a.push(total)
    }

    a.sort(function(a, b){return b-a})
    let desOrd = a.join("");
    desOrd = Number(desOrd);
    console.log(desOrd);
    return desOrd

};


decendingOrder(0);
decendingOrder(174829237);
decendingOrder(123456789);
*/
// Create a function called _if which takes 3 arguments: a boolean value bool and 2 functions (which do not take any parameters): func1 and func2

// When bool is truth-ish, func1 should be called, otherwise call the func2.
/*
function _if(bool, func1, func2) {
    if (bool) {
        func1();
    } else {
        func2();

    }
}
*/

// Welcome.

// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

function alphabetPosition(text) {
    const alph = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    const alphBig = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    const dicedText = text.split('')
    const numberText = [];
    
    for(let i = 0; i<dicedText.length; i++) {
        for(let j = 0; j < 26; j++) {
            if(dicedText[i] === alph[j]) {
                // console.log(alph.indexOf(alph[j]) + 1)
                let n = alph.indexOf(alph[j]) + 1
                numberText.push(n);
            } else if (dicedText[i] === alphBig[j]){
                // console.log(alphBig.indexOf(alphBig[j]) + 1);
                let n = alphBig.indexOf(alphBig[j]) + 1
                numberText.push(n);
            }
        }
        
    }
    console.log(numberText.join(' '));
    return numberText.join(' ');
  }

  alphabetPosition("The sunset sets at twelve o' clock.");