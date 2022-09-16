var $addEntry = document.querySelector('.add-entry-btn');
var $modal = document.querySelector('.modal');
var $exit = document.querySelector('.exit-x');
var $formSubmit = document.querySelector('.form-submit');

$formSubmit.addEventListener('submit', function (event) {
  event.preventDefault();
  var newEntry = {
    dotw: $formSubmit.elements['day-week'].value
  };
});

$exit.addEventListener('click', function (event) {
  $modal.classList.add('hidden');
});

$addEntry.addEventListener('click', function (event) {
  console.log('add entry detected');
  $modal.classList.remove('hidden');
});
