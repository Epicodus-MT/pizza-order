//business logic
function toggleSection(sectionName) {
  var button = $('#' + sectionName)
  if (button.css('display') === 'none') {
    button.css('display', 'block');
  } else {
    button.css('display', 'none');
  }
}

//interface logic
// $(document).ready(function() {
//
//  $("#pizza-form").submit(function(event) {
//
//    $('#user-input').css('display', 'none');
//    $('#output').css('display', 'block');
//  })
// });
