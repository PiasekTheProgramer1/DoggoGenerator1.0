function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
var slowa = [
  "Wiesz że Doggo powstał w 2010",
  "A wiesz że dogge ma swoją walute o nazwie DogeCoin",
  "Kryptowaluta Dogecoin powstała w 2014",
  "Prawdziwy Pieseł teraz jest chory",
  "Doge po polsku to pieseł",
];
var button = document.querySelector(".button");
console.log(button);
var h2 = document.querySelector(".h2");
console.log(h2);
button.onclick = function () {
  h2.innerHTML = slowa[getRandomInt(slowa.length)];
};
