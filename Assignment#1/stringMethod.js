/**Uppercase Method */
let name="subhana";
console.log(name.toUpperCase());

/**lowercase Method */
console.log(name.toLowerCase());

/** slice method */
console.log(name.slice(1,4))/**with 2 parameters */
console.log(name.slice(2))/** with 1 parameter */

/**replace method */
console.log(name.replace("u","o"))

/**concat method */
let friend="zara"
console.log(name.concat(" is a friend of ", friend," khan"))

/**trim method */
let game ="   cricket  "
console.log(game.trim())

/**atChar Method */
let word = "my world ";
console.log(word.charAt(1));

/**at method */
let letter= word.at(4)
console.log(letter);

/** for negitive index */
console.log(word.at(-2))

/**repeat method */
let result = word.repeat(2);
console.log(result)

/**split method */
let cons ="a,b,c"
console.log(cons.split(","))

/**padStart method */
let value = "6";
let padded = value.padStart(4,"x");
console.log(padded)

/**padEnd method */
let no = "5";
let pad = no.padEnd(4,"0");
console.log(pad)