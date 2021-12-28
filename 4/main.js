function ingExtractor(string) {
  return string
    .replace(/[^a-zA-Z ]/gi, "")
    .split(" ")
    .filter((word) => {
      if (word.match(/[aeiou]/gi).length >= "2" && word.match(/.ing/gi)) {
        return word;
      }
    });
}
console.log(ingExtractor("coming bringing Letting sing"));
console.log(ingExtractor("going Ping, king sHrink dOing"));
console.log(ingExtractor("zing went ring, ding wing SINk"));

