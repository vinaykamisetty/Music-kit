var noOfButtons = document.querySelectorAll(".drum").length;
for (var i = 0; i < noOfButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var buttonInnerHtml = this.innerHTML;
    makeSound(buttonInnerHtml);

    buttonAnimation(buttonInnerHtml);
  });
}

document.addEventListener("keydown", function (event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(key) {
  switch (key) {
    case "v":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "i":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;
    case "n":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "a":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "y":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "v":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "k":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;

    default:
      console.log(buttonInnerHtml);
      break;
  }
}

function buttonAnimation(currentKey) {
  var newAnimation = document.querySelector("." + currentKey);
  newAnimation.classList.add("pressed");
  setTimeout(function () {
    newAnimation.classList.remove("pressed");
  }, 100);
}
