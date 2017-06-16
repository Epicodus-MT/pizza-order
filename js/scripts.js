 //interface logic
$(document).ready(function() {
  var resultLabel = $('#quiz-result');

  $("#pizza-form").submit(function(event) {
    $('#user-input').css('display', 'none');
    $('#output').css('display', 'block');
  })
});

//business logic
function toggleSection(sectionName) {
  var button = $('#' + sectionName)
  if (button.css('display') === 'none') {
    button.css('display', 'block');
  } else {
    button.css('display', 'none');
  }
}
