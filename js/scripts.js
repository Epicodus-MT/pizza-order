function toggleSection(sectionName) {
  var button = $('#' + sectionName)
  if (button.css('display') === 'none') {
    button.css('display', 'block');
  } else {
    button.css('display', 'none');
  }
}


function Pizza(size, cheese, sauce, topping){
  this.size = size;
  this.cheese = cheese;
  this.sauce = sauce;
  this.topping = topping;
}

Pizza.prototype.priceReview = function() {
  this.price = 9;
  if(this.size === 'medium') {
    this.price +=2;
  } else if(this.size === 'large') {
    this.price +=4;
  }

  for (var i = 0; this.cheese.length; i++) {
    this price +=1;
  }

  for (var i = 0; this.topping.length; i++) {
    this price +=1;
  }
}











// $(document).ready(function() {
//   var resultLabel = $('#quiz-result');
//
//   $("#pizza-form").submit(function(event) {

//   })
// });


$(document).ready(function() {
  $('#pizza-form').submit(function(event) {
    event.preventDefault();
    $('#user-input').css('display', 'none');
    $('#output').css('display', 'block');

    var size = $('input[name=size]:checked').val();
    var sauce = $('input[name=sauce]:checked').val();
    var cheese = $('input:checkbox[name=cheese]:checked').map(function() {
        return this.number;
      }).get();
    var topping = $('input:checkbox[name=topping]:checked').map(function() {
        return this.number;
      }).get();
    var newPizza = new Pizza(size, sauce, cheese, toppings);
    newPizza.priceReview();
    });
  });
