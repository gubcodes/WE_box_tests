// // getting the properties of the html Box
// let getBox = document.getElementById("Box"); // TODO: move this into the echoLoop function where the parameter coming in is the ID
// let Box = getBox.getBoundingClientRect();
// // console.log(Box);

// // getting the properties of the viewport
// // console.log(window.innerWidth, window.innerHeight);
// let viewportWidth = (window.innerWidth - Box.width);
// let viewportHeight = (window.innerHeight - Box.height);

// declaring variables ahead of loop
let createDiv;
let divWidth;
let divHeight;
let divTop;
let divLeft;
let getDiv;
let getBox;
let Box;
let viewportWidth;
let viewportHeight;
let divToRemove;

// setting up to control timing of loop
const sleep = (time) => {
  return new Promise((resolve) => setTimeout(resolve, time))
}

// loop to create echoes
// const echoLoop = async (currentElement) => {
async function echoLoopIn (currentElement) {
  // getting the properties of the html Box
  console.log(currentElement);
  getBox = document.getElementById(currentElement);
  Box = getBox.getBoundingClientRect();
  viewportWidth = (window.innerWidth - Box.width);
  viewportHeight = (window.innerHeight - Box.height);
  for(let i = 99; i >= 1; i--) {
    await sleep(10); // adjust to control loop timing
    if (i % 3 == 0) {
      createDiv = document.createElement('div');
      divWidth = (Box.width + ((viewportWidth / 100) * i));
      divHeight = (Box.height + ((viewportHeight / 100) * i));
      divTop = (Box.top - ((Box.top / 100) * i));
      divLeft = (Box.left - ((Box.left / 100) * i));
      createDiv.setAttribute("class", "echoes");
      createDiv.setAttribute("id", "number" + i);
      createDiv.style.width = divWidth + 'px';
      createDiv.style.height = divHeight + 'px';
      createDiv.style.top = divTop + 'px';
      createDiv.style.left = divLeft + 'px';
      document.body.appendChild(createDiv);
      // await sleep(100);
      // getDiv = document.getElementById("number" + i);
      // getDiv.classList.add("echoesFade");
    }
  }
  echoLoopOut();
  console.log('done: in');
}

// loop to undo echoes
async function echoLoopOut () {
  await sleep(100);
    // getting the properties of the html Box
    // console.log(currentElement);
    // getBox = document.getElementById(currentElement);
    // Box = getBox.getBoundingClientRect();
    // viewportWidth = (window.innerWidth - Box.width);
    // viewportHeight = (window.innerHeight - Box.height);

    // WORKS:
    // for(let i = 1; i <= 99; i++) {
    //   await sleep(10); // adjust to control loop timing
    //   if (i % 3 == 0) {
    //     divToRemove = document.getElementById("number" + i);
    //     divToRemove.remove();
    //   }
    // }

    // WORKS (opposite way from the function above):
    for(let i = 99; i >= 1; i--) {
      await sleep(10); // adjust to control loop timing
      if (i % 3 == 0) {
        divToRemove = document.getElementById("number" + i);
        divToRemove.remove();
      }
    }
    console.log('done: out');
  }