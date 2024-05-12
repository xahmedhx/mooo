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
  );
  var additionalFiltersBloodDonation = document.getElementById(
    "additionalFiltersBloodDonation"
  );
  var additionalFiltersToys = document.getElementById("additionalFiltersToys");
  var additionalFiltersFood = document.getElementById("additionalFiltersFood"); // Added for food
  var additionalFiltersMedicalCases = document.getElementById(
    "additionalFiltersMedicalCases"
  );
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

  // Toggle display of additional filters
  additionalFiltersCloth.style.display =
    category === "cloth" ? "block" : "none";
  additionalFiltersSchool.style.display =
    category === "school" ? "block" : "none";
  additionalFiltersBloodDonation.style.display =
    category === "blood" ? "block" : "none";
  additionalFiltersToys.style.display = category === "toys" ? "block" : "none";
  additionalFiltersFood.style.display = category === "food" ? "block" : "none";
  additionalFiltersMedicalCases.style.display =
    category === "medical-cases" ? "block" : "none";
  // Conditionally re-apply filters to show relevant items
  if (category === "cloth") {
    applyFilters_Cloth();
  }
  if (category === "school") {
    applyFilters_School();
  }
  if (category === "blood") {
    applyFilters_BloodDonation();
  }
  if (category === "toys") {
    applyFiltersToys();
  }
  if (category === "food") {
    applyFiltersFood();
  } // This function needs to be defined to handle food-specific filtering
  if (category === "medical-cases") {
    applyFiltersMedicalCases();
  }
}

function applyFiltersFood() {
  // Retrieve the selected type from the dropdown.
  var type = document.getElementById("typeFilter-food").value;
  var ul = document.getElementById("myUL");
  var li = ul.getElementsByTagName("li");

  // Iterate through each list item in the UL.
  for (var i = 0; i < li.length; i++) {
    // Split the class names of the item and store them in an array.
    var classes = li[i].className.split(" ");
    // Determine if the list item should be displayed based on the type filter.
    var hasType = type === "" || classes.includes(type);

    // Toggle the display of the list item based on the filter match.
    if (hasType && li[i].className.includes("category-food")) {
      li[i].style.display = ""; // Show the item if it matches the filter.
    } else {
      li[i].style.display = "none"; // Hide the item if it does not match the filter.
    }
  }
}

function applyFiltersToys() {
  var age = document.getElementById("ageFilterToys").value;
  var gender = document.getElementById("genderFilterToys").value;
  var category = document.getElementById("categoryFilterToys").value;
  var toyList = document
    .getElementById("toyRequestsList")
    .getElementsByTagName("li");

  for (var i = 0; i < toyList.length; i++) {
    var classes = toyList[i].className.split(" ");

    // Filter checks: ensure to match the exact age, gender, and category from the dropdowns
    var hasAge = age === "" || classes.includes("age-" + age); // Match against `age-3`, `age-5`, etc.
    var hasGender = gender === "" || classes.includes("gender-" + gender); // Match against `gender-male`, `gender-female`, `gender-unisex`
    var hasCategory =
      category === "" || classes.includes("category-toy " + category); // Match against `category-toy board-games`, etc.

    if (hasAge && hasGender && hasCategory) {
      toyList[i].style.display = "";
    } else {
      toyList[i].style.display = "none";
    }
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
function applyFilters_BloodDonation() {
  var governorate = document.getElementById("governorateFilter").value;
  var area = document.getElementById("areaFilter").value;
  var hospital = document.getElementById("hospitalFilter").value;

  // Get all the list items from the unordered list
  var ul = document.getElementById("myUL");
  if (!ul) {
    console.error("The UL element with ID 'myUL' does not exist.");
    return; // Stop the function if the UL doesn't exist
  }
  var li = ul.getElementsByTagName("li");

  // Debugging logs
  console.log("Selected filters:", governorate, area, hospital);

  for (var i = 0; i < li.length; i++) {
    // Check each class list for matches
    var classes = li[i].className.split(" ");
    console.log("Li #" + i + " classes:", classes);

    var hasGovernorate = governorate === "" || classes.includes(governorate);
    var hasArea = area === "" || classes.includes(area);
    var hasHospital = hospital === "" || classes.includes(hospital);

    console.log(
      "Li #" + i,
      "Matches Governorate:",
      hasGovernorate,
      "Area:",
      hasArea,
      "Hospital:",
      hasHospital
    );

    // Determine if the item should be displayed
    if (
      hasGovernorate &&
      hasArea &&
      hasHospital &&
      li[i].className.includes("category-blood-donation")
    ) {
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

function showDetails_food(itemName, category, weight, imageUrl, quantity) {
  var modalText = document.getElementById("modalText");
  var modal = document.getElementById("infoModal");

  // Construct the content to be displayed in the modal
  var modalContent = `
    <strong>Name:</strong> ${itemName}<br>
    <strong>Category:</strong> ${category}<br>
    <strong>Weight:</strong> ${weight}<br>
    <strong>Quantity Available:</strong> ${quantity}<br>
    <img src="${imageUrl}" alt="Image of ${itemName}" style="width:100%; max-width:300px;">
  `;

  // Set the innerHTML of the modalText to the modalContent
  modalText.innerHTML = modalContent;

  // If using a modal, make sure to display it
  modal.style.display = "block";
}

function showDetails_blood_donation(
  patientName,
  bloodType,
  hospitalName,
  area,
  governorate,
  address
) {
  document.getElementById("modalText").innerHTML = `
        <strong>Patient Name: ${patientName}</strong><br>
        Blood Type: ${bloodType}<br>
        Hospital Name: ${hospitalName}<br>
        Area: ${area}<br>
        Governorate: ${governorate}<br>
        Hospital Address: ${address}<br>
        <button onclick="showHospitalMap('${area}', '${governorate}')">Show Location</button>
    `;
  document.getElementById("infoModal").style.display = "block";
  showHospitalMap(area, governorate); // Initialize the map when the modal is shown
}

function showHospitalMap(area, governorate) {
  var map = L.map("modalMap").setView([30.0444, 31.2357], 13); // Example coordinates, update these based on real data

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "© OpenStreetMap contributors",
  }).addTo(map);

  // Initialize a marker for the hospital based on dynamically fetched coordinates
  L.marker([30.0444, 31.2357])
    .addTo(map) // Example coordinates, update these
    .bindPopup("Hospital Location")
    .openPopup();

  // Add event listener to allow adding more markers on map click
  map.on("click", function (e) {
    map.eachLayer(function (layer) {
      if (layer instanceof L.Marker) {
        map.removeLayer(layer);
      }
    });
    L.marker(e.latlng)
      .addTo(map)
      .bindPopup("You clicked the map at " + e.latlng.toString())
      .openPopup();
  });
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
function closeModal() {
  // Hide the modal
  document.getElementById("infoModal").style.display = "none";

  // Hide and clear the ETA section
  document.getElementById("etaSection").style.display = "none";
  document.getElementById("etaTime").textContent = "";

  // Optionally reset form values
  document.getElementById("donationQuantity").value = "";
  document.getElementById("transportType").value = "";
  document.getElementById("timeSlot").value = "";
}

function showDetails_toy(name, category, age, gender, imageUrl, quantity) {
  var modalText = document.getElementById("modalText");
  var modal = document.getElementById("infoModal");

  // Construct the content to be displayed in the modal
  var modalContent = `
    <strong>Name:</strong> ${name}<br>
    <strong>Category:</strong> ${category}<br>
    <strong>Age Group:</strong> ${age}+<br>
    <strong>Gender:</strong> ${gender}<br>
    <strong>Quantity Available:</strong> ${quantity}<br>
    <img src="${imageUrl}" alt="${name}" style="width:100%; max-width:300px;">
  `;

  // Set the innerHTML of the modalText to the modalContent
  modalText.innerHTML = modalContent;

  // If using a modal, make sure to display it
  modal.style.display = "block";
}