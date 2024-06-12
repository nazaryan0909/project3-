// 2. Տրված է իրական թվերի հաջորդականություն: Արտածել YES, եթե 
//  ա) դրանում դրական տարրերի քանակը ավելի մեծ է բացասական տարրերի քանակից,  
// բ) այն սիմետրիկ հաջորդականություն է,  
//  գ) այն թվաբանական պրոգրեսիա է, 
//  դ) այն երկրաչափական պրոգրեսիա է:  
// Հակառակ դեպքում արտածել NO: 
// 3. . Գտնել տրված իրական թվերի հաջորդականության փոքրագույն անդամը և տեղերով փոխել վերջին տարրի հետ:

//  ա) դրանում դրական տարրերի քանակը ավելի մեծ է բացասական տարրերի քանակից,  

// let arr = [-1,-5,-8,7,-6,8]
// let arr1 = [];
// let arr2 = [];
// for(let i = 0; i < arr.length; i++){
//    if(arr[i] > 0){
//        arr1.push(arr[i])
//    }else {
//     arr2.push(arr[i])
//    }
// }
// console.log(arr2)
// console.log(arr1)
// if(arr1.length == arr2.length){
//     console.log("havasar en")
// }else if(arr1.length > arr2.length){
//     console.log("yes")
// }else {
//     console.log("no")
// } 



// բ) այն սիմետրիկ հաջորդականություն է,  

let arr = [8,4,8,4,8];
let arr1 = [];
for(let i = arr.length-1; i >= 0; i--){
 arr1.push(arr[i])
}   
if(arr.toString() == arr1.toString()){
    console.log("yes")
}else{
    console.log("no")
}
// 3. . Գտնել տրված իրական թվերի հաջորդականության փոքրագույն անդամը և տեղերով փոխել վերջին տարրի հետ:

// let arr = [5,3,4,2,1]
// let min = arr[0];
// for(let i = 0; i< arr.length; i++){
//     if(arr[i] < 0){
//         min = arr[i]
//     }
// }

//  ա) դրանում դրական տարրերի քանակը ավելի մեծ է բացասական տարրերի քանակից,  
// let arr = [-4,8,2,6,-3,9]
// let countBa = 0;
// let countDr = 0;
// for(let i = 0; i < arr.length; i++){
//     if(arr[i] > 0){
//         countDr++
//     }else {
//         countBa++
//     }
// }
// if(countBa == countDr){
//     console.log("havasar en")
// }else if(countDr > countBa){
//     console.log("yes")
// }else {
//     console.log("no")
// }
