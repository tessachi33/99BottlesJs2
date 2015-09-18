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
   for(var i = amount; i > 0; i--) {
    var bottlesAmount = i + " bottles of absinthe on the wall " + i + " bottles of absinthe, take a slug and pass it down, " + (i -1) + " bottles of absinthe on the wall. " + " No more bottles of absinthe on the wall, go to the grave you cannot drink more absinthe ";
    }

  return bottlesAmount ;
};

$(document).ready(function() {
  $("form#bottles").submit(function() {
    var amount = parseInt($("input#amount").val());

    $(".results").show();
    $(".absinthe").text(getBottles);
     event.preventDefault();

  });
});
