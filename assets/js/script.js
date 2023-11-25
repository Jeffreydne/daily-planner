
$(document).ready(function () {
  console.log("Iam working");
 //jQuery DOM variables
 const currentDday = $('#currentDay');
 const timeBlockArr = $('.time-block');
 const hour9 = $('#hour-9 .description');
 const hour10 = $('#hour-10 .description');
 const hour11 = $('#hour-11 .description');
 const hour12 = $('#hour-12 .description');
 const hour1 = $('#hour-1 .description');
 const hour2 = $('#hour-2 .description');
 const hour3 = $('#hour-3 .description');
 const hour4 = $('#hour-4 .description');
 const hour5 = $('#hour-5 .description');

 console.log(timeBlockArr);
  //other variables
  let now = dayjs();
  console.log(now);
  // planner hour to be used in styleHours fxn
  // let plannerHour;
  let hourIndx;
  //functions
  // display today's date in header
  // CONSIDER CHANGING TO DISPLAY 1ST, 2ND, 3RD, 4TH ETC AS DAY
  function displayToday() {
  currentDday.text(now.format('dddd, MMMM D'));
  }
  // 2 functions to replace the class past, and/or future which will be called in fxn styleHours() when the div with class= "time-block" needs to be changed. A jQuery DOM element array is combined with a vanilla JS method because the JS will replace all the members of the class preventing adding classes over previous classes
  function addGreen(indx) {
    timeBlockArr[indx].className = "row time-block future";
  }
  function addGray(indx) {
    timeBlockArr[indx].className = "row time-block past";
  }
  // styleHours to be called to add appropriate color to each timeslot by changing the class to past, present, or future as indicated by current time

  //CONSIDER ADDING A setInterval FXN TO CHECK FOR A NEW HOUR PERIODICALLY
  function styleHours() {
    //use dayjs() saved above in the variable now to find current hour on 24 hour clock
    let hourNow = Number(now.format('H'));
    // if time is < 0900 call addGreen in a for loop to color all time slots green
    if(hourNow < 9) {
      for(let i = 0; i < 9; i++) {
        addGreen(i);
      }
    } 
    // if time is > 1700 call addGray in a for loop to color all time slots gray
    else if(hourNow > 17) {
      for(let i = 0; i < 9; i++) {
        addGray(i);
      }
    } 
    // if time is exactly 0900 then 9AM block is set to red and all other blocks set to green with for loop
    else if (hourNow === 9) {
      timeBlockArr[0].className = "row time-block present";
      for(let i = 1; i < 9; i++) {
        addGreen(i);
      }
    } 
      // if time is exactly 1700 then 5PM block is set to red and all other blocks set to gray with for loop
    else if(hourNow === 17) {
      timeBlockArr[8].className = "row time-block present";
      for(let i = 0; i < 8; i++) {
        addGray(i);
      }
    } 
      // if none of the above statements are true then time will be >= 10AM && time <= 4PM. In that case the present call will be added to the present hour, all previous hours on planner will be made gray, and all future hours will be made green 
    else {
      timeBlockArr[hourNow - 9].className = "row time-block present";
      for(let i = 0; i < hourNow - 9; i++) {
        addGray(i);
      }
      for(let i = hourNow - 8; i < 9; i++) {
        addGreen(i);
      }
    } 
  }
  //PROBABLY NEED TO MOVE THIS
  styleHours();

  //call function to display today
  displayToday();

  //eventListeners


  // TODO: Add code to display the current date in the header of the page.
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
  


    // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
});
