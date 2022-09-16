var $addEntry = document.querySelector('.add-entry-btn');
var $modal = document.querySelector('.modal');
var $dayOfWeek = document.querySelector('#day-week');
var $time = document.querySelector('#time');
var $exit = document.querySelector('.exit-x');
var $formSubmit = document.querySelector('.form-submit');

$formSubmit.addEventListener('submit', function (event) {
  event.preventDefault();
  var newEntry = {
    dotw: $formSubmit.elements['day-week'].value,
    time: $formSubmit.elements.time.value,
    desc: $formSubmit.elements.description.value,
    dataID: data.nextEntryId
  };
  data.nextEntryId++;
  data.entries.unshift(newEntry);
  console.log(data);
  $modal.classList.add('hidden');
  $formSubmit.reset();
});

$exit.addEventListener('click', function (event) {
  $modal.classList.add('hidden');
});

$addEntry.addEventListener('click', function (event) {
  console.log('add entry detected');
  $modal.classList.remove('hidden');
});

$dayOfWeek.addEventListener('input', function (event) {
  $time.focus();
  console.log($time.elements);
});

//      <div data-view="sunday-view">
//         <div class="row">
//           <h3>Scheduled Events for Sunday</h3>
//         </div>
//         <div class="row">
//           <table>
//             <thead>
//               <tr>
//                 <th>Time</th>
//                 <th>Description</th>
//               </tr>
//             </thead>
//             <tbody>
//               <tr>
//                 <td>10:00</td>
//                 <td>Description test</td>
//               </tr>
//             </tbody>
//           </table>
//         </div>
function renderEntry(event){
  var parentDiv = document.createElement('div')
  parentDiv.setAttribute('data-view', event.day)
  var
}
