document.body.style.height = '2000px';
// counter until 100, then back to 0
let b = 0;


function task_1() {
  setInterval(function() {
    console.log(b);
    b++;
    if (b > 100) {
      b = 0;
    }
  }, 120);
}

//--------TASK 2--------------------------------
let i = 0;

let timerGo;
function task_2() {
  timerGo = setInterval(function() {
  if (i === 4) {
    i = 0;
  }
  i++;
  console.log(i);
  document.getElementById("myImg").setAttribute('src', 'img/' + 'runner' + [i] + '.png');


  }, 120);
}
function stop() {
  clearInterval(timerGo);
}


//--------TASK 3--------------------------------

let a = 0;
let circle = document.createElement("div");
let place = document.getElementById("place");
place.appendChild(circle);
var timer;

function myTimer() {
  timer = setInterval(task_3, 60);
}

function task_3() {
  if (a < 300) {
    circle.setAttribute("style", "width: 200px; height:200px; background-color:red; border-radius:100px; position:absolute;   top: 140px; left:" + [a] + "px");
    a++;
  } else {
    clearInterval(timer);
  }
  console.log(a);
}



//--------TASK 4--------------------------------

window.onscroll = function() {
  scrollFunction();
}

function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    document.getElementById("popup").style.display = "block";
  } else {
    document.getElementById("popup").style.display = "none";
  }
}


//--------TASK 5--------------------------------

document.body.addEventListener("keyup", function(event) { // keyup event is fired when a key is released.
  if (event.keyCode === 13) { // 13 is a code of ENTER
    console.log("hi");
    alert("bravo");
  } else {
    alert("Try again");
  }
});

//--------TASK 6--------------------------------
window.addEventListener("resize", function() {
  let r = document.getElementById("div2").clientWidth;
  document.getElementById("div1").style.height = r +"px";
  //document.getElementById("div2").style.width;
  console.log(document.getElementById("div1").style.height);
  console.log(document.getElementById("div2").clientWidth);

});










//--------TASK 7--------------------------------
window.onload = function() {
  if (confirm("Do you know a bit already about Javascript?")) {
    console.log("OK!");
  } else {
    console.log("It is not ok!");
  }
}
//--------TASK 8--------------------------------
function transform() {
  let arr = "The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?";

  console.log(arr.replace(/e/g, "o").replace(/E/g, "O"));
}
//--------TASK 9--------------------------------
function arrays() {
  let cl = {
    coucou: "hello",
    comment: "how",
    va: "are",
    tu: "you"
  };
  let arrKeys = Object.getOwnPropertyNames(cl);
  let arrValues = Object.values(cl);
  console.log(arrKeys);
  console.log(arrValues);
}

//--------TASK 10--------------------------------
function sortBuses() {
  let line = [];
  let buses = ["line n°1", "bus n°24", "tramway n°3", "line n°2", "bus n°20", "tramway n°312", "line n°130", "bus n°28", "tramway n°20", "line n°101"];

  //Get only Lines
  for (let i = 0; i < buses.length; i++) {
    if ( buses[i][0] == "l") {
      line.push(buses[i]);
    }
  }
  //console.log(line);
  //console.log(line.sort());
  // Line = ["line n°1", "line n°101", "line n°130", "line n°2"]

  // Sorting manipulations
  let a = line[0];
  let b = line[1];
  let c = line[2];
  let d = line[3];
  let aa = a.slice(7);  // cut text Line N
  let bb = b.slice(7);  // cut text Line N
  let cc = c.slice(7);  // cut text Line N
  let dd = d.slice(7);  // cut text Line N
  let sortArr = [];  //Create new array with only numbers
  sortArr.push(aa);  //Create new array with only numbers
  sortArr.push(bb);  //Create new array with only numbers
  sortArr.push(cc);  //Create new array with only numbers
  sortArr.push(dd);  //Create new array with only numbers

  //console.log(sortArr); //result of new array

  //Functon for our sorting
  function sortNumber(a, b) {
    return a - b;
  }

  sortArr.sort(sortNumber);  // sorting new array
  //console.log(sortArr);

  //Adding text back Line
  let finalArr = []; // Answer
  let elemOfArr;
  for(let i = 0; i<sortArr.length; i++){
    elemOfArr = "line n°" + sortArr[i]; // get the element of array
    finalArr.push(elemOfArr); // push the element of Array in answer array
  }
console.log(finalArr); //Answer
}
