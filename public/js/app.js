// const { post } = require("../../controllers/api/reviewRoutes");

$(document).foundation();
// save the review to a json file in the database by calling the post route
function saveReview(event) {
  console.log("The function Runs!");
  event.preventDefault();
  const reviewBody = document.getElementById("review");
  console.log(review.value);

  if (reviewBody) {
    const requestOptions = {
      method: "POST",
      data: JSON.stringify({ reviewBody: reviewBody }),
      headers: { "Content-Type": "application/json" },
    };
    fetch("http://localhost:3001/api/reviewRoutes", requestOptions).then(
      (response) => response.json()
    );
    //   .then((data) => (element.innerHTML = data.id));
  } else {
    alert("Please fill out the required fields");
  }
}

function displayReviews() {
  // GET request for ALL reviews
  app.get("/api/reviews", (req, res) => {
    // Log our request to the terminal
    console.info(`${req.method} request received to get reviews`);

    // Sending all reviews to the client
    return res.json(reviews);
  });
}
// ------------------------------------------
//   .then((response) => response.json())
//   .then((data) => console.log(data));
document.querySelector("#reviewBox").addEventListener("submit", saveReview);
