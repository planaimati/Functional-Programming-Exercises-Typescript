const inputArray = [
  "Mont Blanc",
  "Eiger",
  "Matterhorn",
  "Jungfrau",
  "Monch",
  "Weisshorn",
  "Grand Combin",
  "Adamello",
  "Gran Paradiso",
  "Titlis",
  "Ortler",
  "Liskamm",
  "Breithorn",
  "Marmolada",
  "Weissmies",
];

const findPhraseInArray = (data: string[], phrase: string) => {
  const result = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i] === phrase) {
      result.push({ index: i, word: phrase });

      return result;
    } else if (i === data.length - 1) {
      return `słowo ${phrase} nie znajduje się w tablicy`;
    }
  }
};
