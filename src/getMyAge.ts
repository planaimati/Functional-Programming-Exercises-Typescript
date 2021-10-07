type getMyAgeTypes = string | number | Date;

const getMyAge = (year: getMyAgeTypes) => {
  const actualYear = new Date().getFullYear();

  switch (typeof year) {
    case "string":
      return actualYear - parseInt(year);
    case "number":
      return actualYear - year;
    case "object":
      return actualYear - year.getFullYear();
  }
};


