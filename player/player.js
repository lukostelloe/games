const pauseResume = document.getElementById("pause/resume");
let first = true;
let second = false;
let third = false;

///////

const previous = (document.getElementById("previous").disabled = "true");
const next = (document.getElementById("next").disabled = "true");

//////////////////////////////////////PLAY///////////////////////////

function play() {
  if (first == true) {
    video1.currentTime = 0;
    if (video1.paused) {
      video1.play();
      pauseResume.innerHTML = "PAUSE";
    }
  } else if (second == true) {
    video2.currentTime = 0;
    if (video2.paused) {
      video2.play();
      pauseResume.innerHTML = "PAUSE";
    }
  } else if (third == true) {
    video3.currentTime = 0;
    if (video3.paused) {
      video3.play();
      pauseResume.innerHTML = "PAUSE";
    }
  }
}

///////////////////////PAUSERESUME////////////////////////////

function playPause() {
  if (first == true) {
    if (video1.paused) {
      video1.play();
      pauseResume.innerHTML = "PAUSE";
    } else {
      video1.pause();
      pauseResume.innerHTML = "RESUME";
    }
  } else if (second == true) {
    if (video2.paused) {
      video2.play();
      pauseResume.innerHTML = "PAUSE";
    } else {
      video2.pause();
      pauseResume.innerHTML = "RESUME";
    }
  } else if (third == true) {
    if (video3.paused) {
      video3.play();
      pauseResume.innerHTML = "PAUSE";
    } else {
      video3.pause();
      pauseResume.innerHTML = "RESUME";
    }
  }
}

//////////////////////////STOP////////////////////

function stop() {
  if (first == true) {
    video1.currentTime = 0;
    if (video1.play()) {
      video1.pause();
      pauseResume.innerHTML = "";
    }
  } else if (second == true) {
    video2.currentTime = 0;
    if (video2.play()) {
      video2.pause();
      pauseResume.innerHTML = "";
    }
  } else if (third == true) {
    video3.currentTime = 0;
    if (video3.play()) {
      video3.pause();
      pauseResume.innerHTML = "";
    }
  }
}

///////////////NEXT BUTTON//////////////////////

function next() {
  console.log(video1.style.display);
  console.log(video2.style.display);
  console.log(video3.style.display);
  if (video1.style.display === "block") {
    video1.style.display = "none";
    video2.style.display = "block";
    video1.currentTime = 0;
    video1.pause();
    second = true;
    first = false;
  } else if (video2.style.display === "block") {
    video2.style.display = "none";
    video3.style.display = "block";
    video2.currentTime = 0;
    video2.pause();
    third = true;
    second = false;
  } else if (video3.style.display === "block") {
    video1.style.display = "block";
    video3.style.display = "none";
    video3.currentTime = 0;
    video3.pause();
    first = true;
    third = false;
  }
}

///////////////PREVIOUS BUTTON////////////////////////

function previous() {
  if (video1.style.display === "block") {
    video1.style.display = "none";
    video3.style.display = "block";
    video1.currentTime = 0;
    video1.pause();
    third = true;
    first = false;
  } else if (video2.style.display === "block") {
    video1.style.display = "block";
    video2.style.display = "none";
    video2.currentTime = 0;
    video2.pause();
    first = true;
    second = false;
  } else if (video3.style.display === "block") {
    video2.style.display = "block";
    video3.style.display = "none";
    video3.currentTime = 0;
    video3.pause();
    second = true;
    third = false;
  }
}
