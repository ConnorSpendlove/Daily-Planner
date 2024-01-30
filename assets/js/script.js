// Ensures the code doesnt run until the browser finishes rendering all html elements
$(document).ready(function() {
  // sets a const var equal to all button elements in the html
  const saveBtn = $('button')
  const allEvents = $(".description")
  // event listener for the click of the button starts a function
  saveBtn.on('click', function() {
    // gets the event description put in the text area for the button pressed
    var nowPlan = $(this).siblings('.description').val();
    // gets the hour from the corresponding button that was clicked by using (this)
    var nowTime = $(this).parent().attr('id');
    console.log(nowPlan);
    console.log(nowTime);
    // sets the event to the local storage with the key of the hour it is set in
    localStorage.setItem(nowTime, nowPlan)
   
  })
  // sets the description of each hour equal to each key set up in the localStorage in the save button funciton
  $("#hour-9 .description").val(localStorage.getItem("hour-9"));
  $("#hour-10 .description").val(localStorage.getItem("hour-10"));
  $("#hour-11 .description").val(localStorage.getItem("hour-11"));
  $("#hour-12 .description").val(localStorage.getItem("hour-12"));
  $("#hour-13 .description").val(localStorage.getItem("hour-13"));
  $("#hour-14 .description").val(localStorage.getItem("hour-14"));
  $("#hour-15 .description").val(localStorage.getItem("hour-15"));
  $("#hour-16 .description").val(localStorage.getItem("hour-16"));
  $("#hour-17 .description").val(localStorage.getItem("hour-17"));

   // Grabs the currentDay id from HTML and sets it to the current day using dayjs
  const dateContainer = $('#currentDay')
  const currentDate = dayjs().format('dddd, MMMM D, YYYY')
  // appends the current date to the dom
  dateContainer.append(currentDate)
  // logs the current hour
  console.log("Current Hour: " + (dayjs().hour()))
  function addColors () {
    var currentHour = dayjs().hour()
    $(".time-block").each(function(){
      // splits the number from the id in the timeblock and converts it to a number
      // Credit to: "https://www.tutsway.com/split-string-using-jquery.php" for teaching me how to do this.
     var timePeriod = parseInt($(this).attr("id").split("-")[1]);
     
    //  if timeblock hour is less than the current hour, the past class is applied
     if(timePeriod < currentHour) {
      $(this).addClass("past");
     //  if timeblock hour is equal to the current hour, the present class is applied
     } else if (timePeriod === currentHour){
      $(this).addClass("present")
      //  if timeblock hour is greater than the current hour, the future class is applied
     } else if (timePeriod > currentHour) {
      $(this).addClass("future")
     }
    })
  }
  addColors();
});