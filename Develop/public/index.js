let mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/indexDB', function (err) {

   if (err) throw err;

   console.log('Successfully connected');

});







init();

async function init() {
  if (location.search.split("=")[1] === undefined) {
    const workout = await API.getLastWorkout();
    if (workout) {
      location.search = "?id=" + workout._id;
    } else {
      document.querySelector("#continue-btn").classList.add("d-none")
    }
  }
}

