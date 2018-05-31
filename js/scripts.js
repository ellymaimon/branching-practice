$(function() {
  var userAge = 18;
  // var userAge = parseInt(prompt("Please enter your age"));

  if (userAge >= 18) {
    $(".adults").show();
  } else {
    $(".minors").show();
  }



  // event.preventDefault();

$("#animal").change(function() {
    var animal = parseInt($("#animal").val());
    console.log(animal);
    $(".wiki").hide();
    if (animal === 1) {
      $("#turtle").show();
    } else if (animal === 2) {
      $("#cat").show();
    } else if (animal === 3){
      $("#komodo").show();
    } else {
      ;
    }
  });
});
