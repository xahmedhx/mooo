function filterCategory(category = "all") {
  var input = document.getElementById("myInput");
  var filter = input.value.toUpperCase();
  var ul = document.getElementById("myUL");
  var li = ul.getElementsByTagName("li");
  var additionalFiltersCloth = document.getElementById("additionalFiltersCloth");
  var additionalFiltersSchool = document.getElementById("additionalFiltersSchool");
  var toyDonationSection = document.getElementById("toyDonationSection");

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

  additionalFiltersCloth.style.display = category === "cloth" ? "block" : "none";
  additionalFiltersSchool.style.display = category === "school" ? "block" : "none";
  toyDonationSection.style.display = category === "toys" ? "block" : "none";
  foodDonationSection.style.display = category === "food" ? "block" : "none";
  medicalDonationSection.style.display = category === "medical" ? "block" : "none"; 
}

function applyFiltersToys() {
  // Implement toy filtering logic here
}

function showToyDetailsModal() {
  // Implement logic to show toy details modal
}

function confirmToyDonationAndShowETA() {
  // Implement logic for toy donation confirmation and ETA
}
document.querySelector("#myBtnContainer button:nth-child(3)").addEventListener("click", function() {
  filterCategory('cloth');
});

document.querySelector("#myBtnContainer button:nth-child(2)").addEventListener("click", function() {
  filterCategory('toys');
});

// Function to populate the list of food donation requests
function populateFoodRequests() {
  // Use AJAX or fetch to retrieve food donation data from the server
  // Loop through the data and dynamically create HTML elements to represent each food item
  // Append these elements to the foodRequestsList ul element
}

// Function to filter food donation requests by category
// Function to filter food donation requests by category
function filterFoodRequests(category) {
  const foodItems = document.querySelectorAll('.food-item');
  
  // Loop through all food items
  foodItems.forEach(item => {
    // Check if the food item belongs to the selected category
    if (item.classList.contains(category)) {
      // Show the food item
      item.style.display = 'block';
    } else {
      // Hide the food item if it doesn't belong to the selected category
      item.style.display = 'none';
    }
  });
}


// Function to display details of a selected food item
function showFoodDetails(itemName, quantityRequired) {
  // Populate the foodDetailsModal with details of the selected food item
  // Include item name and quantity required
}

// Event listener to trigger the display of food details when a food item is clicked
document.addEventListener('click', function(event) {
  if (event.target.classList.contains('food-item')) {
    const itemName = event.target.textContent.trim();
    const quantityRequired = event.target.getAttribute('data-quantity');
    showFoodDetails(itemName, quantityRequired);
  }
});

// Function to handle quantity selection for food donations
function selectQuantity() {
  // Implement logic to allow donors to choose the quantity of a specific food item
  // This could be an input field or dropdown menu
}

// Call the populateFoodRequests function when the page loads
window.onload = function() {
  populateFoodRequests();
};
// Function to handle quantity selection for food donations
function confirmDonation() {
  // Get the selected quantity
  const quantity = document.getElementById('donationQuantity').value;
  
  // Perform any additional actions, such as sending the donation information to the server
  
  // Close the modal
  closeFoodDetailsModal();
}

// Function to close the food details modal
function closeFoodDetailsModal() {
  const modal = document.getElementById('foodDetailsModal');
  modal.style.display = 'none';
}
function showFoodDetails(itemName, quantityRequired) {
  const modal = document.getElementById('foodDetailsModal');
  const itemNameElement = document.getElementById('foodItemName');
  const quantityElement = document.getElementById('foodItemQuantity');
  
  // Populate modal with food item details
  itemNameElement.textContent = itemName;
  
  // Check if the food item is fruits and vegetables (assumed to be in KG)
  if (itemName.toLowerCase().includes('fruit') || itemName.toLowerCase().includes('vegetable')) {
    quantityElement.textContent = `Quantity Required: ${quantityRequired} KG`;
  } else {
    quantityElement.textContent = `Quantity Required: ${quantityRequired} units`;
  }
  
  // Display the modal
  modal.style.display = 'block';
}






function applyFilters_Cloth() {
  var age = document.getElementById("ageFilter").value;
  var gender = document.getElementById("genderFilter").value;
  var season = document.getElementById("seasonFilter").value;
  var li = document.getElementById("myUL").getElementsByTagName("li");

  for (var i = 0; i < li.length; i++) {
    var classes = li[i].className.split(" ");
    var hasAge = age === "" || classes.includes(age);
    var hasGender = gender === "" || classes.includes(gender);
    var hasSeason = season === "" || classes.includes(season);

    if (hasAge && hasGender && hasSeason && li[i].className.includes("category-cloth")) {
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
  document.getElementById("modalQuantity").textContent = quantity + " available";
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

  var span = document.getElementsByClassName("close")[0];

  span.onclick = function () {
    modal.style.display = "none";
  };

  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
}

function showDetails_school_stationary(itemName, category, material, quantity) {
  document.getElementById("modalText").innerHTML = `
        <strong>${itemName}</strong><br>
        Type: ${category}<br>
        Material: ${material}<br>
        Quantity Requested: ${quantity}
    `;
  document.getElementById("infoModal").style.display = "block";
}

function showDetails_school_books(itemName, category, Author, Language, Edition, Summary, quantity, imageName) {
  document.getElementById("modalText").innerHTML = `
      <div style="display: flex; align-items: start; justify-content: space-between;">
        <div style="flex: 1; padding-right: 20px;">
          <strong>${itemName}</strong><br>
          Type: ${category}<br>
          Author: ${Author}<br>
          Language: ${Language}<br>
          Edition: ${Edition}<br>
          Summary: ${Summary}<br>
          Quantity Requested: ${quantity}
        </div>
        <div style="flex: 1;">
          <img src="images/${imageName}" alt="${itemName}" style="max-width: 50%; height: 30+%; display: block;">
        </div>
      </div>
    `;
  document.getElementById("infoModal").style.display = "block";
}

function confirmDonationAndShowETA() {
  console.log(
    "Donation confirmed with:",
    "Quantity:",
    document.getElementById("donationQuantity").value,
    "Transport:",
    document.getElementById("transportType").value,
    "Time Slot:",
    document.getElementById("timeSlot").value
  );

  var etaMinutes = 15 + Math.floor(Math.random() * 20);
  var etaMessage = etaMinutes + " minutes";

  document.getElementById("etaTime").textContent = etaMessage;
  document.getElementById("etaSection").style.display = "block";
}

document.getElementsByClassName("close")[0].onclick = function () {
  var modal = document.getElementById("infoModal");
  modal.style.display = "none";
};

window.onclick = function (event) {
  var modal = document.getElementById("infoModal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

// Sample data for medical supply requests (replace with your actual data)
// Function to populate the list of medical supply donation requests
function populateMedicalRequests() {
  // Use AJAX or fetch to retrieve medical donation data from the server
  // Loop through the data and dynamically create HTML elements to represent each medical item
  // Append these elements to the medicalRequestsList ul element
}

// Function to filter medical supply donation requests by type and category
function filterMedicalRequests(type, category) {
  const medicalItems = document.querySelectorAll('.medical-item');
  
  // Loop through all medical items
  medicalItems.forEach(item => {
    // Check if the medical item belongs to the selected type and category
    if (item.classList.contains(type) && item.classList.contains(category)) {
      // Show the medical item
      item.style.display = 'block';
    } else {
      // Hide the medical item if it doesn't belong to the selected type or category
      item.style.display = 'none';
    }
  });
}

// Function to display details of a selected medical supply
function showMedicalDetails(name, details, imageSrc, quantity) {
  // Populate the medicalDetailsModal with details of the selected medical supply
}

// Function to handle donation confirmation for medical supplies
function confirmMedicalDonation() {
  // Get the selected quantity
  const quantity = document.getElementById('donationQuantity').value;
  
  // Perform any additional actions, such as sending the donation information to the server
  
  // Close the modal
  closeMedicalDetailsModal();
}

// Function to close the medical supply details modal
function closeMedicalDetailsModal() {
  const modal = document.getElementById('medicalDetailsModal');
  modal.style.display = 'none';
}

// Event listener to trigger the display of medical supply details when a medical item is clicked
document.addEventListener('click', function(event) {
  if (event.target.classList.contains('medical-item')) {
    const name = event.target.textContent.trim();
    const details = event.target.getAttribute('data-details');
    const imageSrc = event.target.getAttribute('data-image');
    const quantity = event.target.getAttribute('data-quantity');
    showMedicalDetails(name, details, imageSrc, quantity);
  }
});

// Initial population of medical supply requests list
populateMedicalRequests();

document.querySelector("#myBtnContainer button:nth-child(5)").addEventListener("click", function() {
  filterCategory('medical');
});

//////////////////////////////////
/////////////////














