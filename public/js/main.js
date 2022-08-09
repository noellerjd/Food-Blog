const revButton = document.getElementsByClassName('review-button');
const revDiv = document.getElementsByClassName('review-recipe-form');

revButton.onclick = function () {
    if (revDiv.style.display !== "none") {
      revDiv.style.display = "none";
    } else {
      revButton.style.display = "block";
    }
  }
