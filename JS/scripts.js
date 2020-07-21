var add = function(number1, number2) {
  return number1 + number2;
};
$(document).ready(function() {
  $("form#add").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#add1").val());
    var number2 = parseInt($("#add2").val());
    var result = add(number1, number2);
    $("#output").text(result);
  });
});
var subtract = function(number4, number3) {
  return number4 - number3;
};
$(document).ready(function() {
  $("form#subtract").submit(function(event) {
    event.preventDefault();
    var number4 = parseInt($("#subract4").val());
    var number3 = parseInt($("#subtract3").val());
    var result = subtract(number4, number3);
    $("#output1").text(result);
  });
});
var multiply = function(number5, number6) {
  return number5 * number6;
};
$(document).ready(function() {
  $("form#multiply").submit(function(event) {
    event.preventDefault();
    var number5= parseInt($("#multiply5").val());
    var number6 = parseInt($("#multiply6").val());
    var result = multiply(number5, number6);
    $("#output2").text(result);
  });
});
var divide = function(number7, number8) {
  return number7 / number8;
};
$(document).ready(function() {
  $("form#divide").submit(function(event) {
    event.preventDefault();
    var number7 = parseInt($("#divide8").val());
    var number8 = parseInt($("#divide7").val());
    var result = divide(number7, number8);
    $("#output3").text(result);
  });
});
