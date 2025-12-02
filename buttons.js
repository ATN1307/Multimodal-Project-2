const whatButton = document.getElementById("what-button");
const noiseButton = document.getElementById("noise-button");
const interviewButton = document.getElementById("interview-button");

const bpPGButton = document.getElementById("bp-pg-button");
const bpMSMSButton = document.getElementById("bp-msms-button");
const bpBHSButton = document.getElementById("bp-bhs-button");

// const guestbookPGButton = document.getElementById("guestbook-pg-button");
// const guestbookMSMSButton = document.getElementById("guestbook-msms-button");
// const guestbookBHSButton = document.getElementById("guestbook-bhs-button");

const gbButton = document.getElementById("gb-button");
// file archive
const faPGButton = document.getElementById("fa-pg-button");
const faMSMSButton = document.getElementById("fa-msms-button");
const faBHSButton = document.getElementById("fa-bhs-button");

// back buttons
const backnoise = document.getElementById("back-noise");
const backpicture = document.getElementById("back-msms");
const backinterview = document.getElementById("back-interview");

const backPineglen_bp = document.getElementById("back-pineglen-bp"); // this is one building photo viewer for all but I'm far too lazy to change the name.
const backFiles = document.getElementById("back-files");

const backArcade = document.getElementById("back-arcade");

whatButton.onclick = function () {
  window.open("About_Bordeaux.html");
} 
noiseButton.onclick = function () {
  window.open("Noise.html");
}
interviewButton.onclick = function () {
  window.open("Interview.html");
}



// back clicks
backnoise.onclick = function () {
  animPut(noiseDiv,"Downloads/Laptop.mp3", commonImagePath + "pinksky.jpeg", homescreen);
}

backMsms.onclick = function () {
  animPut(msmsDiv, "windowsnt.mp3", commonImagePath + "pinksky.jpeg", homescreen);
}

backBhs.onclick = function () {
  animPut(bhsDiv, "PSX.mp3", commonImagePath + "pinksky.jpeg", homescreen);
}

// back BP
backPineglen_bp.onclick = function () {
  switch (prevLoc) {
    case 0:
      animPut(buildingPhotoViewer, "water.mp3", commonImagePath + "morning.jpg", pineglenDiv);
      break;
    case 1:
      animPut(buildingPhotoViewer, "water.mp3", commonImagePath + "afternoon.jpg", msmsDiv);
      break;
    case 2:
      animPut(buildingPhotoViewer, "water.mp3", commonImagePath + "night.jpg", bhsDiv);
      break;
  }
}

// extras
picButton.onclick = function () {
  window.open("Pictures.html");
}
// What button
whatButton.onclick = function () {
  window.open("About_Bordeaux.html");
}


