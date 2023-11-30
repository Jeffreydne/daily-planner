$(document).ready(function () {
 //jQuery DOM variables
 const currentDay = $('#currentDay');
 const timeBlockArr = $('.time-block');
 const hour9 = $('#hour-9 .description');
 const hour10 = $('#hour-10 .description');
 const hour11 = $('#hour-11 .description');
 const hour12 = $('#hour-12 .description');
 const hour13 = $('#hour-13 .description');
 const hour14 = $('#hour-14 .description');
 const hour15 = $('#hour-15 .description');
 const hour16 = $('#hour-16 .description');
 const hour17 = $('#hour-17 .description');

  //other variables
  let now = dayjs();
 
  //functions
  // display today's date in header using dayjs() formatting. Then call fxn fillCalendar() to add any stored schedule items into the appropriate textArea
  function displayToday() {
  currentDay.text(now.format('dddd, MMMM D'));
  fillCalendar();
  }
  
  // fillCalendar() will add any schedule items located in local storage into the appropriate textArea
  function fillCalendar() {
    hour9.val(localStorage.getItem('hour-9'));
    hour10.val(localStorage.getItem('hour-10'));
    hour11.val(localStorage.getItem('hour-11'));
    hour12.val(localStorage.getItem('hour-12'));
    hour13.val(localStorage.getItem('hour-13'));
    hour14.val(localStorage.getItem('hour-14'));
    hour15.val(localStorage.getItem('hour-15'));
    hour16.val(localStorage.getItem('hour-16'));
    hour17.val(localStorage.getItem('hour-17'));
  }

  // 2 functions to replace the class to  past, and/or future - which will be called in fxn styleHours() when the div with class= "time-block" needs to be changed. A jQuery DOM element array is combined with the vanilla JS className method. The indx argument is passed so that the appropriate timeblock is changed 
  function addGreen(indx) {
    timeBlockArr[indx].className = "row time-block future";
  }
  function addGray(indx) {
    timeBlockArr[indx].className = "row time-block past";
  }
  // styleHours() to be called to add appropriate color to each timeslot by changing the class to past, present, or future as indicated by current time
  function styleHours() {
    //reset now variable (declared above)to current time using dayjs() , then use its format method to find current hour on 24 hour clock
    now = dayjs();
    let hourNow = Number(now.format('H'));
    // if time is < 0900 call addGreen in a "for loop" to color all time slots green by passing the index of each div in the array
    if(hourNow < 9) {
      for(let i = 0; i < 9; i++) {
        addGreen(i);
      }
    } 
    // if time is > 1700 call addGray on each timeblock in a "for loop" to color all time slots gray
    else if(hourNow > 17) {
      for(let i = 0; i < 9; i++) {
        addGray(i);
      }
    } 
    // if time is exactly 0900 then 9AM block is set to red and all other blocks set to green with a "for loop"
    else if (hourNow === 9) {
      timeBlockArr[0].className = "row time-block present";
      for(let i = 1; i < 9; i++) {
        addGreen(i);
      }
    } 
      // if time is exactly 1700 then 5PM block is set to red and all other blocks set to gray with a "for loop"
    else if(hourNow === 17) {
      timeBlockArr[8].className = "row time-block present";
      for(let i = 0; i < 8; i++) {
        addGray(i);
      }
    } 
      // if none of the above statements are true then time will be >= 10AM && time <= 4PM. In that case the present class will be added to the present hour's timeblock, all previous hours on planner will be made gray, and all future hours will be made green 
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
      // To find which button was pressed use event.currentTarget.parent() then store the contents of the associated text area with the name = the id attribute value using a switch statement
      let textboxParent = $(event.currentTarget).parent();

      let storageName = textboxParent.attr('id');
      
      switch (storageName) {
        case 'hour-9':
          localStorage.setItem(storageName, hour9.val());
          break;
        case 'hour-10':
          localStorage.setItem(storageName, hour10.val());
          break;
        case 'hour-11':
          localStorage.setItem(storageName, hour11.val());
          break;
        case 'hour-12':
          localStorage.setItem(storageName, hour12.val());
          break;
        case 'hour-13':
          localStorage.setItem(storageName, hour13.val());
          break;
        case 'hour-14':
          localStorage.setItem(storageName, hour14.val());
          break;
        case 'hour-15':
          localStorage.setItem(storageName, hour15.val());
          break;
        case 'hour-16':
          localStorage.setItem(storageName, hour16.val());
          break;
        case 'hour-17':
          localStorage.setItem(storageName, hour17.val());
          break;
        default: console.log('something went wrong');
      }
      styleHours();
    }
 // call styleHours() fxn on initial load to color time blocks as past, presnt and future based on current time. Will be called  on opening or refreshing page and also whenever a new item is saved to scheduler
  styleHours();

  //call fdisplayToday() function to display today's date and this function also calls fxn to fill in the text areas with any data stored in local storage
  displayToday();

  //eventListeners
  // Delegate event listener to each parent element, <div class='time-block> and use class ='.saveBtn' as 2nd argument in eventListener fxn to target each individual saveBtn. After preventing default this will call the styleHours() fxn to be sure the styling is updated to reflect current time. and it will save user's input to local storage.
  timeBlockArr.on('click', '.saveBtn', function (event) {
    event.preventDefault();
    styleHours();
    saveInput(event);
  });

});
