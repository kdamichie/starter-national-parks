// const allBtns = document.querySelectorAll(".rate-button");

// allBtns.forEach((btn) => {
//   btn.addEventListener("click", (event) => {
//     const park = event.target.parentNode;
//     park.style.backgroundColor = "#c8e6c9";
//   });
// });

// Function for sorting  by name
const sortByName = (parkA, parkB) => {
  const parkAName = parkA.querySelector("h2").innerText;
  const parkBName = parkB.querySelector("h2").innerText;

  if (parkAName < parkBName) {
    return -1;
  } else if (parkAName > parkBName) {
    return 1;
  } else {
    return 0;
  }
};

// function for sorting by rating
const sortByRating = (parkA, parkB) => {
  const parkARating = parseFloat(
    parkA.querySelector(".rating-display > .value").innerText
  );
  const parkBRating = parseFloat(
    parkB.querySelector(".rating-display > .value").innerText
  );
  return parkBRating - parkARating;
};

// Function for handling the `nameSorter` click
const nameSorterClickHandler = (event) => {
  event.preventDefault();
  // 1.  Get the main element
  const main = document.querySelector("main");
  // 2. Get the list of parks
  const parksList = main.querySelectorAll(".park-display");
  // 3. Empty the main element
  main.innerHTML = "";
  // 4. Create an array
  const parksArray = Array.from(parksList);
  // 5. Sort the array
  parksArray.sort(sortByName);
  // 6. Insert each park into the DOM
  parksArray.forEach((park) => main.append(park));
};

// function to handle the ratingSorter click
const ratingSorterClickHandler = (event) => {
  event.preventDefault();
  // 1.  get the main element
  const main = document.querySelector("main");
  // 2. get the list of parks
  const parksList = main.querySelectorAll(".park-display");
  // 3. empty the main
  main.innerHTML = "";
  // 4. create an array
  const parksArray = Array.from(parksList);
  // 5. sort the array
  parksArray.sort(sortByRating);
  // 6. Insert each park into the DOM
  parksArray.forEach((park) => {
    main.appendChild(park);
  });
};

// Select the `nameSorter` link
const nameSorter = document.querySelector("#name-sorter");
// Add an event listener
nameSorter.addEventListener("click", nameSorterClickHandler);

// The code that runs once the DOM is loaded
const main = () => {
  // Select the `namesorter` link
  const nameSorter = document.querySelector("#name-sorter");

  // Add an event listener
  nameSorter.addEventListener("click", nameSorterClickHandler);

  // Select the `namesorter` link
  const ratingSorter = document.querySelector("#rating-sorter");

  // Add an event listener
  ratingSorter.addEventListener("click", ratingSorterClickHandler);
}

// Add event listener for `DOMContentLoaded`
window.addEventListener("DOMContentLoaded", main);