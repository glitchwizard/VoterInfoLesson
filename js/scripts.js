//alert

$(document).ready(function(event) {
    var age = prompt("What is your current age?");
    //console.log("Age is: " + age);
    age = parseInt(age);

    if (age >= 18) {
      $("#OfAge").show();
    } else if (age < 18) {
      $("#TooYoung").show();
    } else {
      alert("You didnt enter a number");
    };

    event.preventDefault();
});
