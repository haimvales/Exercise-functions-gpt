import { filtarr, initialLibrary } from "./db.js";  
import input from 'analiza-sync' ;

console.log(11111111111111111);
// console.clear()
console.table(initialLibrary)
filtarr(initialLibrary)
console.table(initialLibrary);

export let name_arr = initialLibrary.map(elemnt => elemnt.title);
console.table(name_arr);

export let  name_arr_string = name_arr.toString()
console.log(name_arr_string);

export let name_join_string = name_arr.join(" - ")
console.log(name_join_string);

initialLibrary.unshift({ id: 100, title: "java script ", author: "w3 ", year: 2001, quantity: 3 })
console.table(initialLibrary)

initialLibrary.shift()
console.table(initialLibrary)

for (let i = 0;i<initialLibrary.length;i++){
    initialLibrary[i].quantity += 1
}
console.table(initialLibrary)

let obj_result = initialLibrary.find(value => value.year == 1979)
console.log(obj_result);

let obj_result_index = initialLibrary.findIndex(value => value.title == "Pride and Prejudice")
console.log(obj_result_index);

let istrue = initialLibrary.some(value => value.year < 1990)
console.log(istrue);

initialLibrary.sort(function (a, b){return a.year - b.year})
console.table(initialLibrary);

let key = Object.keys(initialLibrary.find(value => value.title == "Harry Potter"))
console.table(key);

key = key.reverse();
console.table(key);

let new_initialLibrary = [...initialLibrary]
new_initialLibrary.reverse()
console.table(new_initialLibrary);

let new2_initialLibrary =  Array.from((initialLibrary))
new2_initialLibrary.pop()
console.table(new2_initialLibrary);

console.table(initialLibrary);

let last = initialLibrary.at(-1)
console.table(last)

console.table(initialLibrary.valueOf())

console.table(initialLibrary.slice(0,3))

initialLibrary.forEach(element => {
    console.log(element.title,element.author)
});

let a = { id: 90, title: "20", author: " Orwell", year: 1772, quantity: 1 }
let b = { id: 91, title: " and ", author: "Jane ", year: 2025, quantity: 12 }

console.table(initialLibrary)
initialLibrary.splice(2,1,a,b)
console.table(initialLibrary)




// [...arr.keys()]

let ask = Number(input("clear 0 or 1"))
if (ask === 1)
    console.clear()





// let a = initialLibrary[5]
// console.log(a);

// let b = isFinite(a.year) && isFinite(a.id)
// console.log(b);


