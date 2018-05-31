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

  // amusement rides
  var height = parseInt(prompt("How tall are you in feet? (Please round)"));

  if(height >= 10) {
    $("#rollercoaster, #scrambler").addClass("highlight");
  } else if(height > 4) {
    $("#rollercoaster").addClass("highlight");
  }
  if(height >= 3 && height <= 7) {
    $("#ferris-wheel").addClass("highlight");
  }
  if(height < 7) {
    $("#bumper-carts").addClass("highlight");
  }

});
