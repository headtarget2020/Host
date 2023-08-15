const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");
const browserFrame = document.getElementById("browserFrame");

searchButton.addEventListener("click", function () {
    const searchTerm = searchInput.value;
    const searchUrl = "https://www.google.com/search?q=" + encodeURIComponent(searchTerm);
    browserFrame.src = searchUrl;
});
