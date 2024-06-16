window.addEventListener('load', function() {
  const container = document.querySelector('.header-container');
  const windowHeight = window.innerHeight;

  function checkPosition() {
    const positionFromTop = container.getBoundingClientRect().top;

    if (positionFromTop - windowHeight <= 0) {
      container.classList.add('loaded'); // Apply the loaded class to the container
    }
  }

  window.addEventListener('scroll', checkPosition);
  window.addEventListener('resize', checkPosition);

  checkPosition();
});






const rootStyles = document.querySelector(":root");
function handleWindowResize() {
  const scrollSectionWidth =
    document.querySelector(".scroll-section").clientWidth;
  rootStyles.style.setProperty(
    "--scroll-section-width",
    `${scrollSectionWidth}px`
  );
}
handleWindowResize();
window.addEventListener("resize", handleWindowResize);



document.addEventListener('DOMContentLoaded', function () {
  const burgerMenu = document.querySelector('.burger-menu');
  const menu = document.querySelector('.menu');

  burgerMenu.addEventListener('click', function () {
      menu.classList.toggle('show');
  });
});




// download resume code here

function triggerDownload() {
  const btn = document.getElementById('btn-download');
  const loadingBar = document.getElementById('loading-bar');
  const content = document.getElementById('content');

  content.innerHTML = "";
  btn.classList.add('toLoadingBar');
  loadingBar.classList.add('isLoading');

  // Simulate download process
  setTimeout(() => {
    loadingBar.classList.remove('isLoading');
    loadingBar.style.display = 'none';
    btn.innerHTML = 'Downloaded!';
    btn.classList.add('toButton');

    // Replace the URL with the path to your local file
    const resumePath = 'resume.docx'; // Path to your local resume file
    // Create an anchor element to trigger the download
    const downloadLink = document.createElement('a');
    downloadLink.href = resumePath;
    downloadLink.download = 'resume.docx'; // Change 'YourResume.docx' to the name of your resume file
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  }, 2000); // Adjust the timeout according to your preference
}