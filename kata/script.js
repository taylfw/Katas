
'use strict'
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
/*
function arrayDiff(a, b) {
    let c = [];
    if(b.length === 0){
        console.log(a);
        return a;
    }
    for(let i = 0; i < a.length; i++){
        if (a.length < b.length){
            for(let j = 0; j < a.length; j++){
                if (a[i] !== b[j]){
                    c.push(a[i]);
                }
            }
            console.log(c);
            return c
        } else if (a.length > b.length && b.length <= 1){
            for(let j = 0; j < b.length; j++){
                if (a[i] !== b[j]){
                    c.push(a[i]);
                } 
            }
        } else if (a.length > b.length && b.length > 1) {
            for(let j = 0; j < b.length; j++){
                if (a[i] === b[j]){
                    a.pop(a[i]);
                } 
            }
            c = a;

        }
    }  
    console.log(c);
    return c;
    
    
}


arrayDiff([1], [4,5,6])
arrayDiff([3,3,3,3,4], [3])
arrayDiff([1,8,2], [])
arrayDiff([1,2,2], [2])
arrayDiff([18, -11, -18, 19, -10, 19, -16], [-18, 18, -10]) //Should return [-11, 19, 19, -16]
arrayDiff([-17,-13,9,8,-2,0,-2,-1,-6,10,20,19,4,-8,8,-17,0,-5,-10,0],[-17,-5,8,4,0])

*/

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
/*
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
  */
//  Write a function that will find all the anagrams of a word from a list. You will be given two inputs a word and an array with words. You should return an array of all the anagrams or an empty array if there are none.

//anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']) => ['aabb', 'bbaa']


// function anagrams(word, words) {
//     const dicedWord = word.split('').sort()
//     const anagarr = [];
//         words.forEach(element => {
//             let test = element.split('').sort()
//             if (test.join() === dicedWord.join()){
//                 anagarr.push(element);

//             } 
//         });
//         console.log(anagarr);
//         return anagarr;
// }
// anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']);
// anagrams('racer', ['crazer', 'carer', 'racar', 'caers', 'racer']);
// anagrams('laser', ['lazing', 'lazy',  'lacer']);

/*



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// A string is considered to be in title case if each word in the string is either (a) capitalised (that is, only the first letter of the word is in upper case) or (b) considered to be an exception and put entirely into lower case unless it is the first word, which is always capitalised.

// Write a function that will convert a string into title case, given an optional list of exceptions (minor words). The list of minor words will be given as a string with each word separated by a space. Your function should ignore the case of the minor words string -- it should behave in the same way even if the case of the minor word string is changed.

// ###Arguments (Haskell)

// First argument: space-delimited list of minor words that must always be lowercase except for the first word in the string.
// Second argument: the original string to be converted.
// ###Arguments (Other languages)

// First argument (required): the original string to be converted.
// Second argument (optional): space-delimited list of minor words that must always be lowercase except for the first word in the string. The JavaScript/CoffeeScript tests will pass undefined when this argument is unused.
*/

// function titleCase(title, minorWords) {

    
//     if (title === ''){
//         return title
//     } else {
//         const dicedText = title.split(' ');

//     for (let i = 0; i < dicedText.length; i++) {
//         //Drop everything in the title array to lowercase
//         dicedText[i] = dicedText[i].toLowerCase();
//         if (minorWords){
//             const dontUse = minorWords.split(' ');
//             for (let j = 0; j < dontUse.length; j++) {
//                 dontUse[j] = dontUse[j].toLowerCase();
//                 // console.log(dontUse[j] + ' <--to that');
//                 if (dicedText[i] === dicedText[0]){
//                     dicedText[i] = dicedText[i].charAt(0).toUpperCase() + dicedText[i].slice(1);
//                 } else if (dicedText[i].toLowerCase() === dontUse[j].toLowerCase()){
//                     dicedText[i] = dicedText[i].toLowerCase()
//                     break
//                 } else {
//                     dicedText[i] = dicedText[i].charAt(0).toUpperCase() + dicedText[i].slice(1);
                    
//                 }
    
//             } 
//         } else {
//             dicedText[i] = dicedText[i].charAt(0).toUpperCase() + dicedText[i].slice(1);
//         }
        
//     }

//     console.log(dicedText.join(' '));
//     return dicedText.join(' ')
    
     
// }
    
    
// };


// //Testing the function
// titleCase('')
// titleCase('of a clash an the of KINGS', 'of a an the')
// titleCase('THE WIND IN THE WILLOWS', 'The In')
// titleCase('the quick brown fox')

// function sumTwoSmallestNumbers(numbers) {
//     const arr = numbers.sort(function(a, b){return a-b;});
//     return arr[0] + arr[1]
// };


// sumTwoSmallestNumbers([5, 8, 12, 19, 22]);
// sumTwoSmallestNumbers([15, 28, 4, 2, 43]);
// sumTwoSmallestNumbers([3, 87, 45, 12, 7]);
// sumTwoSmallestNumbers([23, 71, 33, 82, 1]);
// sumTwoSmallestNumbers([52, 76, 14, 12, 4]);

//This function should return the length of the smallest word in a given string.
// function findShort(s){
//     const arr = s.split(' ');
//     let numArr = [];
//     let i;
//     for (i = 0; i < arr.length; i++) {
//         let num = arr[i].length;
//         numArr.push(num);
//     }
//     numArr = numArr.sort(function(a, b){return a-b});
    
//     console.log(numArr[0]);
// };

// findShort("bitcoin take over the world maybe who knows perhaps");
// findShort("Keep your face always toward the sunshine and shadows will fall behind you.");
// findShort("Re-examine all that you have been told... dismiss that which insults your soul.");

////////////////////////////////////////////////////////////////////////////////////////////////
//Roman Numerals Encoder
////////////////////////////////////////////////////////////////////////////////////////////////

// Create a function taking a positive integer as its parameter and returning a string containing the Roman Numeral representation of that integer.

// Modern Roman numerals are written by expressing each digit separately starting with the left most digit and skipping any digit with a value of zero. In Roman numerals 1990 is rendered: 1000=M, 900=CM, 90=XC; resulting in MCMXC. 2008 is written as 2000=MM, 8=VIII; or MMVIII. 1666 uses each Roman symbol in descending order: MDCLXVI.
/*
Symbol    Value
I          1
V          5
X          10
L          50
C          100
D          500
M          1,000


//The function below looks like Erik Carl's "very hungry caterpillar", this is intentional.
function solution(number){
    let n = number;
    const romanNum = [];
    
    while (n > 0) {
        if (n >= 1000) {
            n = n - 1000;
            romanNum.push('M');
        } else if (n >= 900){
            n = n - 900;
            romanNum.push('CM');
        } else if (n >= 500) {
            n = n - 500;
            romanNum.push('D');
        } else if (n >= 400){
            n = n - 400;
            romanNum.push('CD');
        } else if (n >= 100) {
             n = n - 100;
            romanNum.push('C');
        } else if (n >= 90){
            n = n - 90;
            romanNum.push('XC');
        } else if (n >= 50) {
            n = n - 50;
            romanNum.push('L');
        } else if (n >= 40){
            n = n - 40;
            romanNum.push('XL');
        } else if (n >= 10) {
            n = n - 10;
            romanNum.push('X');
        }else if (n >= 9){
            n = n - 9;
            romanNum.push('IX');
        } else if (n >= 5) {
            n = n - 5;
            romanNum.push('V');
        }else if (n === 4){
            n = n - 4;
            romanNum.push('IV');
        }else if (n >= 1) {
             n = n - 1;
            romanNum.push('I');
        }
    }
    console.log(romanNum.join(''));
  };

  

  for (let i = 1; i<101; i++) {
    if (Number.isInteger(i/3) && Number.isInteger(i/5)) {
        console.log('FizzBuzz')
    } else if (Number.isInteger(i/3)){
        console.log('Fizz')
    } else if (Number.isInteger(i/5)){
        console.log('Buzz')   
    } else {
        console.log(i);
        console.log(solution(i))
    }
    
};
*/

//Complete the solution so that it splits the string into pairs of two characters. If the string
//contains an odd number of characters then it should be replaced with an underscore('_')

// function solution(str){
//     const arr = [...str]
//     let arrNew = []
    
    
//     console.log(arrNew);
// };


// solution("abcdef");

/*

function findUniq(arr) {
    arr = arr.sort();
    const start = arr[0];
    const mid = arr[1];
    const end = arr[arr.length - 1];
    if (start !== mid && mid === end) {
        console.log(start);
        return start;
    } else if (start === mid && mid !== end) {
        console.log(end);
        return (end)
    }


}


findUniq([ 0, 1, 0 ]);
findUniq([ 1, 1, 1, 2, 1, 1 ]);
findUniq([  3, 10, 3, 3, 3 ]);

*/
/*
//Number functions
function zero() {}
function one() {}
function two() {}
function three() {}
function four() {}
function five() {
    return 5
}
function six() {}
function seven(times) { 
    
}
function eight() {}
function nine() {}

//Operator functions
function plus() {}
function minus() {}
function times() {
    
}
function dividedBy() {}





seven(times(five())); 
// four(plus(nine())); 
// eight(minus(three())); 
// six(dividedBy(two())); 

*/

// function dec2bin(dec) {
//     console.log((dec >>> 0).toString(2));
// }

// dec2bin(128)
// dec2bin(255)
// dec2bin(168)
// dec2bin(1)

/*

function meeting(s) {
    let n = [];
    console.log(s.split(';'));
    const arr = s.split(';');
    for (let i = 0; i < arr.length; i++){
        const [firstName, lastName] = arr[i].toUpperCase().split(':')
        console.log('(' + lastName + ', ' + firstName + ')' );
        n.push('(' + lastName + ', ' + firstName + ')' );
    }
    console.log(n.sort().join(''));
    
}


meeting("Alexis:Wahl;John:Bell;Victoria:Schwarz;Abba:Dorny;Grace:Meta;Ann:Arno;Madison:STAN;Alex:Cornwell;Lewis:Kern;Megan:Stan;Alex:Korn")



function int32ToIp(int32){
    
    const binN = (int32 >>> 0).toString(2);
    const arrA = binN.split('')
    const arrB = [];
    const arrIp = [];

    for (let i = 0; i < arrA.length; i++) {
        if (Number.isInteger(i / 8) && i > 0 && i < 32) {
            arrB.push('.')
        }else{
            arrB.push(arrA[i]);
        }
    }

    const arrC = arrB.join('').split('.');

    for (let n = 0; n < arrC.length; n++) {
        let x = arrC[n]
        arrIp.push(parseInt(x, 2));
    }
    while (arrIp.length < 4) {
        arrIp.unshift('0')
    };
    console.log(arrIp.join('.'));
}


int32ToIp(2154959208)
int32ToIp(0)
int32ToIp(2130706433)

*/
/*
function pigIt(str){
    const words = str.split(' ');
    const dnu = ['!', '.', '?', ':', ';', '"', "'", '(', ')', ',', '<', '>']
    const pigArr = []
    for(let i = 0; i < words.length; i++){
         let arr = words[i].split('');
         let first = arr[0];
         arr.push(first);
         arr.shift();
         arr.push('ay')

         pigArr.push(arr.join(''))      
    }
    console.log(pigArr.join(' '));
    return pigArr.join(' ');
}


pigIt('Pig latin is cool')
pigIt('Frank Rules !')
*/

// const divisors = function(n){
//     const arr = []; 
    
//     for(let i = 0; i < n; i++ ){
//         if (n % i === 0 ){
//             let tempNum = n/i
//             arr.push(tempNum)
//         }
//     }
//     arr.push(1)

//     const answer = arr.length
//     console.log(answer, arr);
//     return answer

// }


// divisors(4)
// divisors(5)
// divisors(12)
// divisors(30)

// function DNAStrand(dna){
    
//     const newArr = [];
//     const obj = {
//         'T' : 'A',
//         'A' : 'T',
//         'C' : 'G',
//         'G' : 'C',
//     } 
//     const dicedText = dna.split('')

//     for(let i = 0; i < dicedText.length; i++){
//         newArr.push(obj[dicedText[i]]);
//     }
    
//     let newStrand = newArr.join('');
//     return newStrand;

//   }

// DNAStrand ("ATTGC") // return "TAACG"
// DNAStrand ("GTAT") // return "CATA" 


//Kata from July 17th, 2021
// function solution(number){
//     let arr = []
//     let sumArr = []
//     if(number <= 0){
//         return 0
//     }
//     for(i = 0; i < number; i++){
//         arr.push(i)
//     }
//     for(i = 0; i < arr.length; i++) {
//         if(arr[i] % 3 === 0 || arr[i] % 5 === 0){
//             sumArr.push(arr[i])
//         }
//     }
    
//     let sumNum = sumArr[0]
//     for(i = 1; i < sumArr.length; i++){
//         sumNum += sumArr[i]
//     }
    
//     return sumNum
//   }

