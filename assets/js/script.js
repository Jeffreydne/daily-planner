
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
// CONSIDER CHANGING TO DISPLAY 1ST, SND, 3RD, 4TH ETC AS DAY
function displayToday() {
currentDday.text(now.format('dddd, MMMM D'));
}
// 3 functions to replace the class past, present or future which will be called if that needs to be changed. A jQuery DOM element is combined with a vanilla JS method because the JS will replace all the members of the class preventing adding classes over previous classes
function addGreen() {
  timeBlockArr[0].className = "row time-block future";
}
function addRed() {
  timeBlockArr[4].className = "row time-block present";
}
function addGray() {
  timeBlockArr[6].className = "row time-block past";
}
addRed();
addGreen();
addGray();
// function styleHours() {
//   let hourNow = Number(now.format('H'));
//     if(hourNow < 9) {
//       let greenIndexStart = 0;
//       let greenIndxLimit = 9;
//     } else if(hourNow > 17) {
//       let grayIndexStart = 0;
//       let grayIndexLimit = 9;
//     } else if (hourNow === 9) {
//       let redIndex = 0;
//       // let grayIndexStart = 0;
//       // let grayIndexLimit = hourNow - 9;
//       let greenIndexStart = 1;
//       let greenIndxLimit = 9;
//     } else if(hourNow === 17) {
//       let redIndex = 8;
//       let grayIndexStart = 0;
//       let grayIndexLimit = 9;
//     } else (hourNow < 17) {
//       let redIndex = hourNow - 9;
//       let grayIndexStart = 0;
//       let grayIndexLimit = hourNow - 9;
//       let greenIndexStart = hourNow - 8;
//       let greenIndxLimit = 9;
//     } 


    // else {
    //   let redIndex = hourNow + 3;
    // }
  // $.each(timeBlockArr, function( i, value) {

    // plannerHour = Number(timeBlockArr[i]['id'].replace('hour-', ''));
    // console.log(plannerHour, timeBlockArray[i]);

    // if(plannerHour < hourNow) {
    //   timeBlockArr[i].addClass('past');
    // } else if(plannerHour > hourNow) {
    //   timeBlockArr[i].addClass('future');
    // } else {
    //   timeBlockArr[i].addClass('present');
    // }


  // });


//   console.log(hourNow);
// }
//ERASE domQues- used only for confirmation
console.log(timeBlockArr[0]['id']);
function domQues() {
console.log(hour9.val());
}
//PROBABLY NEED TO MOVE THIS
// styleHours();

//call function to display today
displayToday();

//ERASE domQues- used only for confirmation
domQues();
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
