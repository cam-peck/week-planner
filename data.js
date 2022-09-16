var data = {
  entries: [],
  editing: null,
  nextEntryId: 1
};

window.addEventListener('beforeunload', function (event) {
  var dataJSON = JSON.stringify(data);
  this.localStorage.setItem('week-planner-items', dataJSON);
});

var previousData = localStorage.getItem('week-planner-items');
if (previousData !== null) {
  data = JSON.parse(previousData);
}
