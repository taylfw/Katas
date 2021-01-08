
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

function titleCase(title, minorWords) {

    
    if (title === ''){
        return title
    } else {
        const dicedText = title.split(' ');

    for (let i = 0; i < dicedText.length; i++) {
        //Drop everything in the title array to lowercase
        dicedText[i] = dicedText[i].toLowerCase();
        if (minorWords){
            const dontUse = minorWords.split(' ');
            for (let j = 0; j < dontUse.length; j++) {
                dontUse[j] = dontUse[j].toLowerCase();
                // console.log(dontUse[j] + ' <--to that');
                if (dicedText[i] === dicedText[0]){
                    dicedText[i] = dicedText[i].charAt(0).toUpperCase() + dicedText[i].slice(1);
                } else if (dicedText[i].toLowerCase() === dontUse[j].toLowerCase()){
                    dicedText[i] = dicedText[i].toLowerCase()
                    break
                } else {
                    dicedText[i] = dicedText[i].charAt(0).toUpperCase() + dicedText[i].slice(1);
                    
                }
    
            } 
        } else {
            dicedText[i] = dicedText[i].charAt(0).toUpperCase() + dicedText[i].slice(1);
        }
        
    }

    console.log(dicedText.join(' '));
    return dicedText.join(' ')
    
     
}
    
    
};
//Note to Frank. Only the last word in the donotuse array is working correctly.

//Testing the function
titleCase('')
titleCase('of a clash an the of KINGS', 'of a an the')
titleCase('THE WIND IN THE WILLOWS', 'The In')
titleCase('the quick brown fox')






























