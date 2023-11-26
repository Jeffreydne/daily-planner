
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
 
  //functions
  // display today's date in header using dayjs() formatting. 
  // CONSIDER CHANGING TO DISPLAY 1ST, 2ND, 3RD, 4TH ETC AS DAY
  function displayToday() {
  currentDday.text(now.format('dddd, MMMM D'));
  }
  // 2 functions to replace the class to  past, and/or future - which will be called in fxn styleHours() when the div with class= "time-block" needs to be changed. A jQuery DOM element array is combined with a vanilla JS method because the JS will replace all the members of the class preventing adding classes over previous classes
  function addGreen(indx) {
    timeBlockArr[indx].className = "row time-block future";
  }
  function addGray(indx) {
    timeBlockArr[indx].className = "row time-block past";
  }
  // styleHours to be called to add appropriate color to each timeslot by changing the class to past, present, or future as indicated by current time

  //CONSIDER ADDING A setInterval FXN TO CHECK FOR A NEW HOUR PERIODICALLY
  function styleHours() {
    //IS RESET NEEDED?? Probably not -if not delete this comment & reset now = dayjs() below

    //reset now variable to current time then 
    // use dayjs() saved above in the variable now to find current hour on 24 hour clock
    now = dayjs();
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

  //saveInput fxn called by button click below. Saves user's input into local Storage
  function saveInput(event) {
    // console.log("this is input");

  
      $(event.currentTarget).parent().children().val("Hello");
  
  

    console.log(event.currentTarget);
    // .children[1].val("Working?")
    
  }
  //PROBABLY NEED TO MOVE THIS
  styleHours();

  //call function to display today
  displayToday();

  //eventListeners
// Delegate event listener to the parent element, <div class='time-block> and use class ='.saveBtn' as 2nd argument in eventListener fxn to target each individual saveBtn. After preventing default this will call the style hours xn to be sure the styling is updated to reflect current time. and it will save user's input to local storage.
timeBlockArr.on('click', '.saveBtn', function (event) {
  event.preventDefault();
  styleHours();
  saveInput(event);

  // get letter from clicked letter button's `data-letter` attribute and use it for display

  // displayLetterEl.text($(event.target).attr('data-letter'));
  // displayEl.append(displayLetterEl);

});


 
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
