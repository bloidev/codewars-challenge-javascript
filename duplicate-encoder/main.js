const duplicateEncode = (word) => {
    // si un caracter aparece una vez, se codifica como "("
    // si un caracter aparece mas de una vez, se codifica como ")"
    const lowerStr = word.toLowerCase();
    const charCounter = {};
    for (let char of lowerStr) {
        charCounter[char] = (charCounter[char] || 0) + 1;
    }
    word = "";
    for (let char of lowerStr) {
        if (charCounter[char] === 1) {
            word += "(";
        } else {
            word += ")";
        }
    }
    
    return word;
}

const result = duplicateEncode("Success");
console.log("Output: ",result); // Expected output: "succeSS"

module.exports = { duplicateEncode };