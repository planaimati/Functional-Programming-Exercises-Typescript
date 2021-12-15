// tablica na potrzeby zadań

const exampleArray = [1, 2, 3, 4, 5];

// type

type forEachCallbackType<T> = (value: T) => void;
type mapFnCallbackType<T, U> = (value: T) => U;
type everyFnCallbackType<T> = (value: T) => boolean;
type someFnCallbackType<T> = (value: T) => boolean;
type reduceFnCallbackType<T> = (initial: T, value: T) => T;
type filterFnCallbackType<T> = (value: T) => T;

//.forEach

const forEachFn = <T>(
  array: Array<T>,
  callback: forEachCallbackType<T>
): void => {
  for (let i = 0; i < array.length; i++) {
    callback(array[i]);
  }
};

//.map

const mapFn = <T, U>(array: Array<T>, callback: mapFnCallbackType<T, U>) => {
  let newArray = [];

  for (let item of array) {
    newArray.push(callback(item));
  }

  return newArray;
};

//.entries

const entriesFn = <T>(array: Array<T>) => {
  let iterator = {};

  for (let i = 0; i < array.length; i++) {
    iterator = {
      ...iterator,
      [i]: [i, array[i]],
    };
  }
  return iterator;
};

//.every

const everyFn = <T>(array: T[], callback: everyFnCallbackType<T>) => {
  let results = [];

  for (let item of array) {
    results.push(callback(item));
  }

  if (results.includes(false)) {
    return false;
  } else return true;
};

//.some

const someFn = <T>(array: T[], callback: someFnCallbackType<T>) => {
  let results = [];

  for (let item of array) {
    results.push(callback(item));
  }

  if (results.includes(true)) {
    return true;
  } else return false;
};

//.reduce

const reduceFn = <T>(
  array: T[],
  callback: reduceFnCallbackType<T>,
  initial: T
) => {
  let result = initial;

  for (let item of array) {
    result = callback(result, item);
  }

  return result;
};

//.filter

const filterFn = <T>(array: T[], callback: filterFnCallbackType<T>) => {
  const resultsArr: T[] = [];

  for (let item of array) {
    if (callback(item)) {
      resultsArr.push(item);
    }
  }
};

//
