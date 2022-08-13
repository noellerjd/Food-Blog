const { post } = require("../../controllers/api/reviewRoutes");

$(document).foundation();
// save the review to a json file in the database by calling the post route
function saveReview(event) {
  console.log("hello");
  event.preventDefault();
  const review = document.getElementById("review").val();
  console.log(review);
  if (review) {
    const requestOptions = {
      method: "POST",
      body: JSON.stringify({ review }),
      headers: { "Content-Type": "application/json" },
    };
    fetch("http://localhost:3001/api/reviewRoutes", requestOptions)
      .then((response) => response.json())
      .then((data) => (element.innerHTML = data.id));
  } else {
    alert("Please fill out the required fields");
  }
}

// ------------------------------------------
//   .then((response) => response.json())
//   .then((data) => console.log(data));
document
  .querySelector(".accordian-content")
  .addEventListener("submit", saveReview);
