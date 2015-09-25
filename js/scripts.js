// X bottles of beer on the wall
// X bottles of beer
// Take one down, pass it around
// X-1 bottles of beer on the wall
//
// X-1 bottles of beer on the wall
// ...
// Take one down, pass it around
// 0 bottles of beer on the wall

var getBottles = function(amount) {
   var verses = createVerses(amount);
   return createSong(bottlesAmount); ;

function createSong(verseArray) {
return verseArray.join(""); }

function createVerse(bottlesAmount, i) {
  var bottles1 = " bottles of absinthe on the wall ";
  var bottles2 = " bottles of absinthe, take a slug and pass it down, ";
  var bottles3 = " bottles of absinthe on the wall. ";
  var lastBottle = " No more bottles of absinthe on the wall, go to the grave, you cannot drink more absinthe "

bottlesAmount.push(i + bottles1 + i + bottles2 + (i - 1) + bottles3); bottlesAmount.push(lastBottle);
}

function createVerses(amount)
{ var bottlesAmount = []; for(var i = amount; i > 0; i--) { createVerse(bottlesAmount, i);
} return bottlesAmount; }



$(document).ready(function() {
  $("form#bottles").submit(function() {
    var amount = parseInt($("input#amount").val());
    var bottlesAmount = getBottles(amount);

    $(".results").show();
    $(".absinthe").text(bottlesAmount);
     event.preventDefault();

  });
});
