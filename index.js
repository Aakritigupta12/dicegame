if(performance.navigation.type == performance.navigation.TYPE_RELOAD) {
  var randomNumber1 = Math.floor((Math.random() * 6) + 1);
  var randomNumber2 = Math.floor((Math.random() * 6) + 1);

  document.querySelector("body > div > div:nth-child(2) > img").setAttribute("src", "images/dice" + randomNumber1 + ".png");
  document.querySelector("body > div > div:nth-child(3) > img").setAttribute("src", "images/dice" + randomNumber2 + ".png");

  if (randomNumber1 > randomNumber2) {
    document.querySelector("h2").innerHTML = '๐ฉPlayer 1 Wins!!';
  } else if (randomNumber1 < randomNumber2) {
    document.querySelector("h2").innerHTML = 'Player 2 Wins!!๐ฉ';
  } else {
    document.querySelector("h2").innerHTML = '๐ Draw!! ๐';
  }
}
