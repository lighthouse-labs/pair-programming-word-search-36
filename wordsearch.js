// pair programming by luwam beyin and taylor maine
const wordSearch = (letters, word) => {
  const horizontalJoin = letters.map(ls => ls.join(''));
  let wordFound = false;
  for (let l of horizontalJoin) {
    if (l.includes(word)) {
      return true;
    }
  }
  return wordFound;
};

module.exports = wordSearch;