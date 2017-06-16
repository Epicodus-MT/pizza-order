//business logic
// function toggleSection(sectionName) {
//   var button = $('#' + sectionName)
//   if (button.css('display') === 'none') {
//     button.css('display', 'block');
//   } else {
//     button.css('display', 'none');
//   }
// }


//business logic
function Pizza (size, sauce, cheese, topping){
  this.size = size;
  this.sauce = sauce;
  this.cheese = cheese;
  this.topping = topping;
  this.price = 10;
}

Pizza.prototype.isPizzaTotal = function() {
  if (this.size === "medium") {
    this.price += 2;
  }else if (this.size === "large") {
    this.price += 4;
  }

  // for ...

  return this.price;
}

//user interface logic
$(document).ready (function () {
  debugger;
  $("form#new-pizza").submit(function (event) {
    event.preventDefault();

    // $("#purchase span").each(function() {
    //   $(this).empty();
    // });

    // var inputtedname = $("input#name").val();
    var checkedSize = $("input[name='size']:checked").val();
    var checkedSauce = $("input[name='sauce']:checked").val();
    var checkedCheese = $("input[name='cheese']:checked").val();
    var checkedTopping = $("input[name='topping']:checked").val();



    var myPizza = new Pizza(checkedSize, checkedSauce, checkedCheese, checkedTopping);
    $(".size").append(myPizza.size);
    $(".sauce").append(myPizza.sauce);
    $(".cheese").append(myPizza.cheese);
    $(".topping").append(myPizza.topping);
    $(".price").append(myPizza.isPizzaTotal());


  })
});
