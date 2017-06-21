//business logic
function toggleSection(sectionName) {
  var button = $('#' + sectionName)
  if (button.css('display') === 'none') {
    button.css('display', 'block');
  } else {
    button.css('display', 'none');
  }
}


//business logic
function Pizza (size, sauce, cheese, topping){
  this.size = size;
  this.sauce = sauce;
  this.cheese = cheese;
  this.topping = topping;
}

Pizza.prototype.pizzaTotal = function() {
  this.price = 10;
  if (this.size === "medium") {
    this.price += 2;
  }else if (this.size === "large") {
    this.price += 4;
  }
  for (var i = 0; i < this.cheese.length; i++) {
    this.price += 1;
  }
  for (var i = 0; i < this.topping.length; i++) {
    this.price += 1;
  }
  return this.price;
}
//
// Pizza.prototype.result = function() {
//   return "Size" + this.size + ", Sauce" + this.sauce + ", Cheese(s)" + this.cheese + ", Topping(s)" + this.topping + "=  Price: $" + this.price;
// }


//user interface logic
$(document).ready (function () {
  var resultOrder = $('#output');

  $("form#new-pizza").submit(function (event) {
    event.preventDefault();

    // var inputtedname = $("#name").val();
    var checkedSize = $("input[name='size']:checked").val();
    var checkedSauce = $("input[name='sauce']:checked").val();
    // var checkedCheese = $("input[name='cheese']:checked").val();
    var checkedCheeses = $("input[name='cheese']:checked").map(function(index, input) {
      return $(input).val();
    }).get();
    var checkedToppings = $("input[name='topping']:checked").map(function(index, input) {
      return $(input).val();
    }).get();

    console.log ({
      'name': name,
      'size': size,
      'sauce': sauce,
      'cheese': cheese,
      'topping': topping,
    });

    var resultText = '';


    var myPizza = new Pizza(checkedSize, checkedSauce, checkedCheeses, checkedToppings);
    $(".size").append(myPizza.size);
    $(".sauce").append(myPizza.sauce);
    $(".cheese").append(myPizza.cheese.join(', '));
    $(".topping").append(myPizza.topping.join(', '));
    $(".purchase-price").append(myPizza.pizzaTotal());


    $('#new-pizza').css('display', 'none');
    $('.output').css('display', 'block');

  })
});
