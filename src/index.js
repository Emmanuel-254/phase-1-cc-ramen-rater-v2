// index.js

// Sample ramen data (you can replace this with a real data source)
const ramens = [
  {
    id: 1,
    name: "Shoyu Ramen",
    restaurant: "Tokyo Ramen",
    imageUrl: "../assets/ramen/naruto.jpg",
    rating: 8,
    comment: "Delicious!",
  },
  {
    id: 2,
    name: "Miso Ramen",
    restaurant: "Osaka Ramen",
    imageUrl: "../assets/ramen/nirvana.jpg",
    rating: 9,
    comment: "Very flavorful!",
  },
  {
    id: 3,
    name: "Tonkotsu Ram",
    restaurant: "Kyoto Ramen",
    imageUrl: "../assets/ramen/gyukotsu.jpg",
    rating: 7,
    comment: "A bit too salty for my taste",
  },
  {
    id: 4,
    name: "Shio Ramen",
    restaurant: "Hokkaido Ramen",
    imageUrl: "../assets/ramen/kojiro.jpg",
    rating: 6,
    comment: "Not bad, but not great",
  },
];

// Callbacks
const handleClick = (ramen) => {
  // Display ramen details when clicked
  const detailImage = document.querySelector(".detail-image");
  const nameDisplay = document.querySelector(".name");
  const restaurantDisplay = document.querySelector(".restaurant");
  const ratingDisplay = document.getElementById("rating-display");
  const commentDisplay = document.getElementById("comment-display");

  detailImage.src = ramen.imageUrl;
  nameDisplay.textContent = ramen.name;
  restaurantDisplay.textContent = ramen.restaurant;
  ratingDisplay.textContent = ramen.rating;
  commentDisplay.textContent = ramen.comment;
};

const addSubmitListener = () => {
  const form = document.getElementById("new-ramen");
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const ramenName = event.target.name.value;
    const ramenRestaurant = event.target.restaurant.value;
    const ramenImageUrl = event.target.image.value;
    const ramenRating = event.target.rating.value;
    const ramenComment = event.target["new-comment"].value;

    // Create a new ramen object
    const newRamen = {
      id: ramens.length + 1,
      name: ramenName,
      restaurant: ramenRestaurant,
      imageUrl: ramenImageUrl,
      rating: ramenRating,
      comment: ramenComment,
    };

    // Add the new ramen to the array and refresh the display
    ramens.push(newRamen);
    displayRamens(); // Refresh the displayed ramen list
    form.reset(); // Reset form fields
  });
};

const displayRamens = () => {
  const ramenMenu = document.getElementById("ramen-menu");
  ramenMenu.innerHTML = ""; // Clear existing ramen items

  ramens.forEach((ramen) => {
    const ramenItem = document.createElement("div");
    ramenItem.classList.add("ramen-item");
    ramenItem.innerHTML = `
      <h3>${ramen.name}</h3>
      <img src="${ramen.imageUrl}" alt="${ramen.name}" />
    `;
    ramenItem.addEventListener("click", () => handleClick(ramen));
    ramenMenu.appendChild(ramenItem);
  });
};

const main = () => {
  displayRamens(); // Invoke displayRamens here
  addSubmitListener(); // Invoke addSubmitListener here
};

main();

// Export functions for testing
export { displayRamens, addSubmitListener, handleClick, main };
