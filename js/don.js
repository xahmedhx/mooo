function filterCategory(category = "all") {
  var input = document.getElementById("myInput");
  var filter = input.value.toUpperCase();
  var ul = document.getElementById("myUL");
  var li = ul.getElementsByTagName("li");
  var additionalFiltersCloth = document.getElementById(
    "additionalFiltersCloth"
  );
  var additionalFiltersSchool = document.getElementById(
    "additionalFiltersSchool"
  ); // Assuming this element exists

  for (var i = 0; i < li.length; i++) {
    var txtValue = li[i].textContent || li[i].innerText;
    if (
      txtValue.toUpperCase().indexOf(filter) > -1 &&
      (category === "all" || li[i].className.includes("category-" + category))
    ) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }

  // Toggle display of additional filters for 'cloth'
  if (category === "cloth") {
    additionalFiltersCloth.style.display = "block";
    applyFilters_Cloth(); // Re-apply filters to show relevant items
  } else {
    additionalFiltersCloth.style.display = "none";
  }

  // Toggle display of additional filters for 'school'
  if (category === "school") {
    additionalFiltersSchool.style.display = "block";
    applyFilters_School(); // This function needs to be defined to handle school-specific filtering
  } else {
    additionalFiltersSchool.style.display = "none";
  }
}

function applyFilters_Cloth() {
  var age = document.getElementById("ageFilter").value;
  var gender = document.getElementById("genderFilter").value;
  var season = document.getElementById("seasonFilter").value;
  var li = document.getElementById("myUL").getElementsByTagName("li");

  for (var i = 0; i < li.length; i++) {
    // Extract classes for the current list item
    var classes = li[i].className.split(" ");

    // Check for age, gender, and season within the extracted classes
    var hasAge = age === "" || classes.includes(age);
    var hasGender = gender === "" || classes.includes(gender);
    var hasSeason = season === "" || classes.includes(season);

    if (
      hasAge &&
      hasGender &&
      hasSeason &&
      li[i].className.includes("category-cloth")
    ) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

function applyFilters_School() {
  var type = document.getElementById("schoolFilter").value;
  var li = document.getElementById("myUL").getElementsByTagName("li");

  for (var i = 0; i < li.length; i++) {
    var classes = li[i].className.split(" ");
    var hasType = type === "" || classes.includes(type);

    if (hasType && li[i].className.includes("category-school")) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

function showDetailsModal(title, age, gender, season, material, quantity) {
  document.getElementById("modalTitle").textContent = title;
  document.getElementById("modalType").textContent = title;
  document.getElementById("modalAge").textContent = age;
  document.getElementById("modalGender").textContent = gender;
  document.getElementById("modalSeason").textContent = season;
  document.getElementById("modalMaterial").textContent = material;
  document.getElementById("modalQuantity").textContent =
    quantity + " available";
  document.getElementById("detailsModal").style.display = "block";
}

function closeModal() {
  document.getElementById("detailsModal").style.display = "none";
}

function submitDonation() {
  var quantity = document.getElementById("donationQuantity").value;
  alert("Thank you for donating " + quantity + " units!");
  closeModal();
}

function showDetails_cloth(name, ageGroup, gender, season, material, quantity) {
  var modal = document.getElementById("infoModal");
  var modalText = document.getElementById("modalText");
  var modalContent =
    "Name: " +
    name +
    "<br>Age Group: " +
    ageGroup +
    "<br>Gender: " +
    gender +
    "<br>Season: " +
    season +
    "<br>Material: " +
    material +
    "<br>Quantity Requested: " +
    quantity;
  modalText.innerHTML = modalContent;
  modal.style.display = "block";

  // Get the element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // When the user clicks on (x), close the modal
  span.onclick = function () {
    modal.style.display = "none";
  };

  // Close the modal if user clicks anywhere outside of it
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
}

// function for stationary items
function showDetails_school_stationary(itemName, category, material, quantity) {
  // Assuming modalText is where you want to display the details:
  document.getElementById("modalText").innerHTML = `
        <strong>${itemName}</strong><br>
        Type: ${category}<br>
        
        Material: ${material}<br>
        Quantity Requested: ${quantity}
    `;
  // If using a modal, make sure to display it
  document.getElementById("infoModal").style.display = "block";
}
/// for books
function showDetails_school_books(
  itemName,
  category,
  Author,
  Language,
  Edition,
  Summary,
  quantity,
  imageName // Added parameter for image name
) {
  // Update the HTML structure to use a flexbox container for layout
  document.getElementById("modalText").innerHTML = `
      <div style="display: flex; align-items: start; justify-content: space-between;">
        <div style="flex: 1; padding-right: 20px;">  <!-- Text content -->
          <strong>${itemName}</strong><br>
          Type: ${category}<br>
          Author: ${Author}<br>
          Language: ${Language}<br>
          Edition: ${Edition}<br>
          Summary: ${Summary}<br>
          Quantity Requested: ${quantity}
        </div>
        <div style="flex: 1;"> <!-- Image container -->
          <img src="images/${imageName}" alt="${itemName}" style="max-width: 50%; height: 30+%; display: block;">
        </div>
      </div>
    `;
  // Display the modal
  document.getElementById("infoModal").style.display = "block";
}

function confirmDonationAndShowETA() {
  // Process the donation details and close the modal, or keep it open to show ETA
  console.log(
    "Donation confirmed with:",
    "Quantity:",
    document.getElementById("donationQuantity").value,
    "Transport:",
    document.getElementById("transportType").value,
    "Time Slot:",
    document.getElementById("timeSlot").value
  );

  // Calculate a fake ETA - this can be random or a simple fixed time for demonstration
  var etaMinutes = 15 + Math.floor(Math.random() * 20); // Random ETA between 15 and 35 minutes
  var etaMessage = etaMinutes + " minutes";

  // Display the ETA in the modal
  document.getElementById("etaTime").textContent = etaMessage;
  document.getElementById("etaSection").style.display = "block";
}

// Closing the modal
document.getElementsByClassName("close")[0].onclick = function () {
  var modal = document.getElementById("infoModal");
  modal.style.display = "none";
};

// Click outside the modal to close it
window.onclick = function (event) {
  var modal = document.getElementById("infoModal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// Function to close the modal
document.getElementsByClassName("close")[0].onclick = function () {
  var modal = document.getElementById("infoModal");
  modal.style.display = "none";
};
