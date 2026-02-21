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

  if (!url) {
    alert("No PDF uploaded. Go back and choose a file.");
  } else {
    // Use 'src' for <embed> instead of 'data'
    viewer.src = url;
  }
}