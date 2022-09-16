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

function renderEntry(entry) {
  var $parentDiv = document.createElement('div');
  $parentDiv.setAttribute('data-view', entry.entries.dotw);

  var $firstChildDiv = document.createElement('div');
  $firstChildDiv.setAttribute('class', 'row');
  $parentDiv.appendChild($firstChildDiv);

  var $eventsHeader = document.createElement('h3');
  $eventsHeader.textContent = 'Scheduled Events for ' + entry.entries.dotw;
  $firstChildDiv.appendChild($eventsHeader);

  var $siblingDiv = document.createElement('div');
  $siblingDiv.setAttribute('class', 'row');
  $parentDiv.appendChild($siblingDiv);

  var $table = document.createElement('table');

  var $thead = document.createElement('thead');
  $table.appendChild($thead);

  var $tr = document.createElement('tr');
  $thead.appendChild($tr);

  var $thTime = document.createElement('th');
  $thTime.textContent = 'Time';
  $tr.appendChild($thTime);

  var $thDescription = document.createElement('th');
  $thDescription.textContent = 'Description';
  $tr.appendChild($thDescription);

  var $tbody = document.createElement('tbody');
  $table.appendChild($tbody);

  var $trBody = document.createElement('tr');
  $tbody.appendChild($trBody);

  var $tdTime = document.createElement('td');
  $tdTime.textContent = entry.entries.time;
  $trBody.appendChild($tdTime);

  var $tdDesc = document.createElement('td');
  $tdDesc.textContent = entry.entries.desc;
  $trBody.appendChild($tdDesc);

  return $parentDiv;
}
