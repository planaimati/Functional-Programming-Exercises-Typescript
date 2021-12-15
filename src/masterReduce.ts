//types

type callbackFunctionType<T, U> = (value: T) => U;
type filterCallbackType<T, U> = (value: T) => U;
type everyCallbackType<T> = (value: T) => boolean;
type someCallbackType<T> = (value: T) => boolean;
//map

const mapArr = [1, 2, 3, 4, 5];

const callbackFunction = (value: number) => {
  return value + 2;
};

const mapFunction = <T, U>(
  arr: T[],
  callback: callbackFunctionType<T, U>
): U[] => {
  return arr.reduce((acumulator: U[], current) => {
    acumulator.push(callback(current));
    return acumulator;
  }, []);
};

console.log(mapFunction(mapArr, callbackFunction));

//filter

const filterArray = ["Mont Blanc", "Eiger", "Matterhorn", "Jungfrau"];

const filterCallback = (value: string) => {
  return value === "Eiger";
};

const filterFunction = <T, U>(
  arr: T[],
  callback: filterCallbackType<T, U>
): T[] => {
  return arr.reduce((acumulator: T[], current) => {
    if (callback(current)) {
      acumulator.push(current);
    }

    return acumulator;
  }, []);
};

console.log(filterFunction(filterArray, filterCallback));

/// every

const everyArray = [1, 2, 3, 4, 5];

const everyCallback = (value: number): boolean => {
  if (value > 2) {
    return true;
  } else {
    return false;
  }
};

const everyFunction = <T>(arr: T[], callback: everyCallbackType<T>) => {
  return arr.reduce((acumulator: boolean, current) => {
    if (!callback(current)) {
      acumulator = false;

      return acumulator;
    }

    return acumulator;
  }, true);
};

console.log(everyFunction(everyArray, everyCallback));

/// some

const someArray = [1, 2, 3, 4, 5];

const someCallback = (value: number): boolean => {
  if (value === 6) {
    return true;
  } else {
    return false;
  }
};

const someFunction = <T>(arr: T[], callback: someCallbackType<T>) => {
  return arr.reduce((accumulator, current) => {
    if (callback(current)) {
      accumulator = true;

      return accumulator;
    } else {
      accumulator = false;

      return accumulator;
    }

    return accumulator;
  }, true);
};

console.log(someFunction(someArray, someCallback));
