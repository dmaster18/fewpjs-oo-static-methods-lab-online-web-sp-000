class Formatter {
  //add static methods here
  static capitalize(string) {
    let capitalizedString = string.charAt(0).toUpperCase() + string.slice(1);
    return capitalizedString;
  }

  static sanitize(string) {
    let sanitizedString = string.replace(/[^A-Za-z0-9-']+/g, ' ');
    return sanitizedString;
  }

  static titleize(string) {
    let sentenceArray = string.split(" ");
    function capitalizeFirstWord(word) {
      if (word === "a" || word === "an" || word === "but" || word === "of" || word === "and" || word === "for" || word === "at" || word === "by" || word === "from") {
        return word;
      } else {
        let capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1);
        return capitalizedWord;
      }
    }
    let titleizedArray = sentenceArray.map(capitalizeFirstWord);
    let titlizedSentence = titleizedArray.join(" ");
    return titlizedSentence;
  }

}
