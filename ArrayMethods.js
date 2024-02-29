
/**Arrays Methods */
let num=[1, 2, 3, 4, 35  ]
/**toString method */
let a= num.toString();
console.log(a)

/**Join method */
let arr=[23,4,5,7];
let b= arr.join("_");
console.log(b, typeof b);

/**pop method */
let array =[22, 3, 44 ,5]
array.pop();
console.log(array);

/**push method */
array.push(45);
console.log(array)

/**shift method */
array.shift()
console.log(array)

/**unshift method */
let no =[ 2, 4, 5, 6]
let d= no.unshift(78)
console.log(d, no);

/**delete array operator */
let arry= [1,2,3,4,5,6,7,8,9]
delete arry[0];
console.log(arry);

/**concat method */
let arry1= [1,2,3,4,5,6,7,8,9]
let arry2=[ 11,12,13,14,15,16,17,18,19]
let newarry= arry1.concat(arry2)
console.log(newarry)
 
/**sort method */
let number=[23,55,7,98,2,45,34,88,55,20]
let new_num = number.sort()
console.log(new_num);

/** reverse method*/
number.reverse()
console.log(number)

/**splice method */
number.splice(3,3,1023, 1456,5510,2260),
console.log(number)

/** slice method */
let newNo = number.slice(3, 5)

console.log(newNo)

/**reduceright method */
let numbers = [5, 4, 9, 6, 2];
let sum = numbers.reduceRight(myFunction);
console.log(sum)

function myFunction(a, b) {
  return a + b;
}

/**every method */
let value = [4, 43, 19, 11, 5];
let overall = value.every(everyFunction);
console.log(overall)

function everyFunction(x, index, array) {
  return x > 18;
}

/**some method */
let x = [5, 4, 9, 16, 25];
let some= x.some(someFunction);
console.log(sum)

function someFunction(value, index, array) {
  return value > 18;
}