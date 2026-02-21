const { global } = require("styled-jsx/css");

// HOME PAGE (upload)
const uploadInput = document.getElementById("file-upload");

if (uploadInput) {
  uploadInput.addEventListener("change", e => {
    const file = e.target.files[0];
    if (!file) return;

    // Create a temporary URL for the uploaded PDF
    const url = URL.createObjectURL(file);

    // Save the PDF URL in sessionStorage
    sessionStorage.setItem("pdfURL", url);

    // Redirect to the study page
    window.location.href = "brainrot.html";
  });
}


// STUDY PAGE (PDF.js)
const viewer = document.getElementById("pdfViewer");

if (viewer) {
  const url = sessionStorage.getItem("pdfURL");
  resetTimer();
  if (!url) {
    alert("No PDF uploaded. Go back and choose a file.");
  } else {
    // Use 'src' for <embed> instead of 'data'
    viewer.src = url;
  }

  
}
var counter;
function resetTimer(){
  counter = new Date(date.getDate() + 60000);
}

function updateTimer(){
  var now = new Date();
  var diff = counter - now;
  if(diff <= 0){
    alert("Time's up! Please take a break.");
    resetTimer();
  }
  var minutes = Math.floor(diff / 60000);
  var seconds = Math.floor((diff % 60000) / 1000);
  document.getElementById("timer").textContent = minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
}
