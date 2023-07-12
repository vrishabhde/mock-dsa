// Write a function in JavaScript called calculateSum
// that takes an array of numbers as an argument and returns
//  the sum of all the numbers in the array. For example,
//  if the input array is [1, 2, 3, 4, 5], the function should return 15.

// Q1=>
// var x = [1,2,3,4]
// function total(array){
// var sum = 0;
// for(var i=0;i<array.length;i++){
//     sum+=array[i]
// }
// console.log(sum);
// }
// total(x)

// Q2=>
// Write a function in JavaScript called isPalindrome that takes a string as an argument and returns 
// true if the string is a palindrome (reads the same forwards and backwards), and false otherwise.


// var string = "rabar";
// function palindrome(str){
//     var check = str.split("");
//     var rev = check.reverse("");
//     var merge = rev.join("");
// var flag = false;
// if(merge === str){
//     flag=true;
//     console.log("it is palindrome");
// }else{
//     console.log("not a palindrome")
// }
// }
// palindrome(string)


// Q3=>
// Write a function in JavaScript called reverseArray that takes an array as an 
// argument and returns a new array with the elements in reverse order.

// var array = [1,2,3,4,5];
// function reverseArray(a){
// var b = []
// for(var i=a.length-1;i>=0;i--){
//     b.push(a[i])

// }
// console.log(b)
// }
// reverseArray(array)



// Q4=>
// Write a function in JavaScript called removeDuplicates that takes an array as 
// an argument and returns a new array with duplicate elements removed.

// var array = [1,1,2,3,4,2,3,4,5,5];
// function removeDuplicates(a){
// console.log([(new Set(a))])
// }
// removeDuplicates(array)



// Q5=>
// Write a JavaScript function called findMissingNumber that takes 
// an array of consecutive numbers (starting from 1) with one number missing and returns the missing number.
//  The array is guaranteed to be shuffled and may contain duplicates.
// For example, given the array [2, 4, 1, 3, 6, 7, 8], the missing number is 5, 
// so the function should return 5.

// var array = [1, 2, 3, 5];

// function consecutive(a) {
//     for (var i = 0; i < a.length; i++) {
//         var c = a[i]
//         var d = a[i + 1]
//         if ((d - c) != 1) {
//             console.log(i, "consecutive term is missing here")

//         }
        
//     }
// }
// consecutive(array)



