//business logic
function toggleSection(sectionName) {
  var button = $('#' + sectionName)
  if (button.css('display') === 'none') {
    button.css('display', 'block');
  } else {
    button.css('display', 'none');
  }
}

function Pizza (size, sauce, cheese, topping, name){
  this.name = name;
  this.sauce = sauce;
  this.cheese = cheese;
  this.topping = topping;
  this.size = size;
}

Pizza.prototype.priceCalculator = function() {
  this.price = 10;
  if (this.size === 'medium') {
    this.price += 2;
  } else if (this.size === 'large') {
    this.price += 4;
  }
  for (var i = 0; i < this.cheese.length; i++) {
  this.price += 1;
  }
  for (var i = 0; i < this.topping.length; i++) {
  this.price += 1;
  }
}

var displayOrderResults = function() {
  $('.output').show();
}

 //interface logic
 $(document).ready(function() {
   $("form#new-pizza").submit(function(event) {
     event.preventDefault();
     var size = $('input[name=size]:checked').val();
     var sauce = $('input[name=sauce]:checked').val();
     var topping = $('input:checkbox[name=topping]:checked').map(function() {
         return this.value;
       }).get();
     var cheese = $('input:checkbox[name=cheese]:checked').map(function() {
         return this.value;
       }).get();

     newPizza.priceCalculator();

     $(".pizza").last().click(function() {
       $('#pizza-details').show();
     });
   });
 });
