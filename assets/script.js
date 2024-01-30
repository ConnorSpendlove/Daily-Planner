// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

// Ensures the code doesnt run until the browser finishes rendering all html elements
$(document).ready(function() {
  // sets a const var equal to all button elements in the html
  const saveBtn = $('button')
  // event listener for the click of the button starts a function
  saveBtn.on('click', function(e) {
    e.preventDefault()
    // gets the event description put in the text area for the button pressed
    var nowPlan = $(this).siblings('.description').val();
    // gets the hour from the corresponding button that was clicked by using (this)
    var nowTime = $(this).parent().attr('id');
    console.log(nowTime);
    console.log(nowPlan);
    // sets the event to the local storage with the key of the hour it is set in
    localStorage.setItem(nowTime, nowPlan)
  })


 

   // Grabs the currentDay id from HTML and sets it to the current day using dayjs
  const dateContainer = $('#currentDay')
  const currentDate = dayjs().format('dddd, MMMM D, YYYY')
  // appends the current date to the dom
  dateContainer.append(currentDate)
  // logs the current hour
  console.log(dayjs().hour())




  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
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
  

});
