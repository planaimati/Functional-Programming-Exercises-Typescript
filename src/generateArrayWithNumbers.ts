type arrayOfArraysCallbackFn = (x: number, y: number, z: number) => number[];

const generateArrayWithRandomNumbers = (
  howManyNumbers: number,
  min: number,
  max: number
) => {
  const arrayOfNumbers: number[] = [];
  for (let i = 0; i < howManyNumbers; i++) {
    let generatedNumber = Math.floor(Math.random() * (max - min) + min);

    arrayOfNumbers.push(generatedNumber);
  }

  return arrayOfNumbers;
};

const generateArrayOfArrays = (
  howManyArrays: number,
  howManyNumbers: number,
  min: number,
  max: number,
  func: arrayOfArraysCallbackFn
) => {
  const arrayOfArrays = [];
  for (let i = 0; i < howManyArrays; i++) {
    arrayOfArrays.push(func(howManyNumbers, min, max));
  }

  return arrayOfArrays;
};

console.log(
  generateArrayOfArrays(10, 10, 5, 10, generateArrayWithRandomNumbers)
);
