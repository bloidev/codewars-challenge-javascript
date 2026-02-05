function solution(number) {
  // convert the number to a roman numeral
  const romanDictionary = {
    1: "I",
    4: "IV",
    5: "V",
    9: "IX",
    10: "X",
    40: "XL",
    50: "L",
    90: "XC",
    100: "C",
    400: "CD",
    500: "D",
    900: "CM",
    1000: "M",
  };

  let result = "";
  let keys = Object.keys(romanDictionary).reverse();
  // console.log(keys);

  // iteramos las llaves del diccionario en orden descendente
  for (let i = 0; i < keys.length; i++) {
    // mientras el número sea mayor o igual a la clave actual
    while (number >= keys[i]) {
      // agregamos el valor romano correspondiente al resultado
      // y restamos la clave actual del número
      //  console.log(`Current number: ${number}`);
      //  console.log(`Adding ${romanDictionary[keys[i]]} for ${keys[i]}`);
      result += romanDictionary[keys[i]];
      //  console.log(`Current result: ${result}`);
      number -= keys[i];
      //  console.log(`Remaining number: ${number}`);
    }
  }
  return result;
}

// const result_1 = solution(1);
// const result_1000 = solution(1000);
// const result_1666 = solution(1666);
// const result_3000 = solution(3000);
const result_1990 = solution(1990);
// console.log(result_1); // should print "I"
// console.log(result_1000); // should print "M"
// console.log(result_1666); // should print "MDCLXVI"
// console.log(result_3000); // should print "MMM"
console.log(result_1990); // should print "MCMXC"
// -- output: MDCCCCLXXXX
//console.log(result_1990); // should print "MCMXC"

module.exports = { solution };
