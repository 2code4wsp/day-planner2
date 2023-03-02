// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(document).ready(function () {
  const dateTime = new Date();

  // var currentTime = $('#display-current-time')
  let currentDate = new Date().toJSON();
  console.log(dateTime);
  document.getElementById('display-current-time').textContent = dateTime;

  setInterval(updateTime, 15000);

  function updateTime() {
    var currentTime = dayjs().hour();
 
    $('.time-block').each(function () {
      var timeBlockTime = parseInt($(this).attr('id').split('-')[1])
      
      if (timeBlockTime < currentTime) {
        $(this).addClass('past')
      } else if (timeBlockTime === currentTime) {
        $(this).removeClass('past')
        $(this).addClass('present')
      } else {
        $(this).removeClass('past')
        $(this).removeClass('present')
        $(this).addClass('future')
      }
    })
  }
  // TODO: Add a listener for click events on the save button. This code should
updateTime()

$(".saveBtn").click(function() {
  var text = $(this).siblings('.description').val();
  var time = $(this).parent().attr('id')

  console.log('text', text)
  console.log('time', time)
  localStorage.setItem(time, text)
});


$('#hour-6 .description').val(localStorage.getItem('hour-6'));
$('#hour-7 .description').val(localStorage.getItem('hour-7'));
$('#hour-8 .description').val(localStorage.getItem('hour-8'));
$('#hour-9 .description').val(localStorage.getItem('hour-9'));
$('#hour-10 .description').val(localStorage.getItem('hour-10'));
$('#hour-11 .description').val(localStorage.getItem('hour-11'));
$('#hour-12 .description').val(localStorage.getItem('hour-12'));
$('#hour-13 .description').val(localStorage.getItem('hour-13'));
$('#hour-14 .description').val(localStorage.getItem('hour-14'));
$('#hour-15 .description').val(localStorage.getItem('hour-15'));
$('#hour-16 .description').val(localStorage.getItem('hour-16'));
$('#hour-17 .description').val(localStorage.getItem('hour-17'));
$('#hour-18 .description').val(localStorage.getItem('hour-18'));
$('#hour-19 .description').val(localStorage.getItem('hour-19'));

  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be

 /* // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time? DONE
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page. DONE!
  
  */
});

