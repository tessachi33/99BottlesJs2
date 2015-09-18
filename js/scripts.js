// X bottles of beer on the wall
// X bottles of beer
// Take one down, pass it around
// X-1 bottles of beer on the wall
//
// X-1 bottles of beer on the wall
// ...
// Take one down, pass it around
// 0 bottles of beer on the wall

var getBottles = function(amount){
   for(var i = amount; i > 0; i--){
    var bottles =(i + " bottles of absinthe on the wall " + i + " bottles of absinth, take a slug and pass it down " + (i -1) + " bottles of absinthe " + " no more bottles of absinthe on the wall, go to the grave you cannot drink more absinthe ");
    }
  }

  return bottles;
};

$(document).ready(function() {
  $("form#bottle").submit(function() {
    var amount = ($("input#amount").val());
    $(".song").text(bottles);
    $("#results").show();
    event.preventDefault();

  });
});
