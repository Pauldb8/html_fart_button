function makeFart() {
  var number = Math.floor(Math.random() * 5) + 1
  var audio = new Audio('fart-0' + number + '.mp3');
  audio.play();
}

