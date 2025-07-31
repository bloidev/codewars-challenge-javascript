const createPhoneNumber = (numbers) =>{
  if (!Array.isArray(numbers) || numbers.length !== 10) {
    throw new Error('Invalid input');
  }
  const format = '(xxx) xxx-xxxx';
  let index = 0;
  return format.replace(/x/g, () => numbers[index++]);
}

console.debug(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));
console.debug(createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]));
console.debug(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]));

module.exports = { createPhoneNumber };