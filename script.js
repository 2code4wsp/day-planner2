// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
const dateTime = new Date();
var timeDisplayEl = $('#current-date');
var taskDisplayEl = $('#hour-');
var buttonEl = $('.saveBtn');




//var positionDate = document.getElementById(#currentDate)
$(function () {
  var currentTime = $('#display-current-time')
  let currentDate = new Date().toJSON();
  console.log(dateTime);
  document.getElementById('display-current-time').textContent = dateTime;


function refreshTime() {
  const timeDisplay = document.getElementById("display-current-time");
  const dateString = new Date().toLocaleString();
  const formattedString = dateString.replace(", ", " - ");
  timeDisplay.textContent = formattedString;
}
  setInterval(refreshTime, 1000);

  
  // TODO: Add a listener for click events on the save button. This code should

for(var i = 0; i < 09; i++) {
  if (("#hour-" + i) < currentTime) {

  }else if (("#hour-" + i) === currentTime) {

  }else if (("#hour-" + i) > currentTime) {
    console.log(currentTime)
  }
}

$("#saveBtn").click(function() {
  alert('funtional');
});
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
const myTasks = ["hour-6", "hour-7", "hour-8", "hour-9", "hour-10", "hour-11", "hour-12", "hour-01", "hour-02", "hour-03", "hour-04", "hour-05", "hour-06", "hour-07", "hour-08", "hour-09",]
 function saveTasksToStorage() {
    localStorage.setItem('#hour-', JSON.stringify(myTasks));
  
  }



    
  
 


 /* // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
  
  */
});

