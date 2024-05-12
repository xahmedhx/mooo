function filterCategory(category = "all") {
  var input = document.getElementById("myInput");
  var filter = input.value.toUpperCase();
  var ul = document.getElementById("myUL");
  var li = ul.getElementsByTagName("li");
  var additionalFiltersCloth = document.getElementById("additionalFiltersCloth");
  var additionalFiltersSchool = document.getElementById("additionalFiltersSchool");
  var toyDonationSection = document.getElementById("toyDonationSection");
  var toyDonationSection = document.getElementById("teachingPostsSection");

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
  teachingPostsSection.style.display = category === "teachingPostsSection" ? "block" : "none";
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



// Function to filter food donation requests by category
// Function to filter food donation requests by category
// Function to filter food requests based on category
function filterFoodRequests(category) {
  const foodItems = document.querySelectorAll('.category-food');
  
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


// Event listener to trigger the display of food details when a food item is clicked
document.addEventListener('click', function(event) {
  if (event.target.classList.contains('info-btn')) {
    const listItem = event.target.closest('.category-food');
    const itemName = listItem.querySelector('a').textContent.trim();
    const category = listItem.classList[1]; // Assumes that the category is the second class
    const quantity = itemName.match(/\d+/)[0]; // Extracts the quantity from the item name
    const imageURL = listItem.querySelector('a').getAttribute('data-image');
    const price = parseInt(event.target.getAttribute('data-price')); // Assuming data-price attribute contains the price
    showFoodDetails(itemName, category, quantity, imageURL, price);
  }
});

// Function to handle quantity selection for food donations


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






function applyFiltersToys() {
  var age = document.getElementById("ageFilterToys").value;
  var gender = document.getElementById("genderFilterToys").value;
  var category = document.getElementById("categoryFilterToys").value;
  var toyList = document.getElementById("toyRequestsList").getElementsByTagName("li");

  for (var i = 0; i < toyList.length; i++) {
    var classes = toyList[i].className.split(" ");
    var ageClass = age === "children" ? "age-children" : "age-adult";
    var hasAge = age === "" || classes.includes(ageClass);
    var hasGender = gender === "" || classes.includes("gender-" + gender);
    var hasCategory = category === "" || classes.includes(category);

    if (hasAge && hasGender && hasCategory) {
      toyList[i].style.display = "";
    } else {
      toyList[i].style.display = "none";
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
// Function to filter medical supply requests based on type and category
function filterMedicalRequests() {
  const type = document.getElementById("typeFilterMedical").value;
  const category = document.getElementById("categoryFilterMedical").value;
  const medicalItems = document.querySelectorAll('.category-medical');
  
  // Loop through all medical supply items
  medicalItems.forEach(item => {
    const itemType = item.classList.contains('medical-devices') ? 'equipment' :
                     item.classList.contains('medication') ? 'medication' :
                     item.classList.contains('medical-equipment') ? 'equipment' : 'consumables'; // Assuming consumables as default
    const itemCategory = item.classList[1]; // Assuming category is the second class
  
    // Check if the medical supply item matches the selected type and category
    const typeMatch = type === '' || itemType === type;
    const categoryMatch = category === '' || itemCategory === category;
  
    // Show the medical supply item if it matches the selected type and category
    if (typeMatch && categoryMatch) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}

// Function to display details of a selected medical supply item
function showDetails_medical(itemName, category, details, imageURL, quantity) {
  const modal = document.getElementById("medicalDetailsModal");
  const itemNameElement = modal.querySelector("#medicalItemName");
  const itemDetailsElement = modal.querySelector("#medicalItemDetails");
  const itemImageElement = modal.querySelector("#medicalItemImage");
  const itemQuantityElement = modal.querySelector("#medicalItemQuantity");

  itemNameElement.textContent = itemName;
  itemDetailsElement.textContent = details;
  itemImageElement.src = imageURL;
  itemQuantityElement.textContent = `Quantity: ${quantity}`;
  modal.style.display = "block";
}

// Close the medical supply details modal
function closeMedicalDetailsModal() {
  const modal = document.getElementById("medicalDetailsModal");
  modal.style.display = "none";
}

// Event listener for applying filters when the filter dropdowns change
document.getElementById("typeFilterMedical").addEventListener("change", filterMedicalRequests);
document.getElementById("categoryFilterMedical").addEventListener("change", filterMedicalRequests);

// Event listener to trigger the display of medical supply details when a 'Info' button is clicked
document.addEventListener('click', function(event) {
  if (event.target.classList.contains('info-btn')) {
    const listItem = event.target.closest('.category-medical');
    const itemName = listItem.querySelector('a').textContent.trim();
    const category = listItem.classList[1]; // Assuming category is the second class
    const details = listItem.querySelector('a').getAttribute('data-details');
    const imageURL = listItem.querySelector('a').getAttribute('data-image');
    const quantity = parseInt(event.target.getAttribute('data-quantity')); // Assuming data-quantity attribute contains the quantity
    showDetails_medical(itemName, category, details, imageURL, quantity);
  }
});

// Close the medical supply details modal when the close button is clicked
document.querySelector(".close").addEventListener("click", closeMedicalDetailsModal);


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


document.querySelector("#myBtnContainer button:nth-child(5)").addEventListener("click", function() {
  filterCategory('medical');
});
// Function to show toy details modal
function showDetails_toy(name, category, age, gender, imageURL, quantity) {
  // Populate the modal with toy details
  const modal = document.getElementById("toyDetailsModal");
  modal.innerHTML = `
    <div class="modal-content">
      <span class="close" onclick="closeToyDetailsModal()">&times;</span>
      <h2>${name}</h2>
      <p><strong>Category:</strong> ${category}</p>
      <p><strong>Age:</strong> ${age}</p>
      <p><strong>Gender:</strong> ${gender}</p>
      <img src="${imageURL}" alt="${name}" class="toy-image">
      <p><strong>Quantity Available:</strong> ${quantity}</p>
      <!-- Add more details here as needed -->
    </div>
  `;
  modal.style.display = "block";
}

// Function to close toy details modal
function closeToyDetailsModal() {
  const modal = document.getElementById("toyDetailsModal");
  modal.style.display = "none";
}


//////////////////////////////////
/////////////////
// Event listener to trigger filtering when filter dropdowns change
document.getElementById("toyAgeFilter").addEventListener("change", applyFiltersToys);
document.getElementById("toyGenderFilter").addEventListener("change", applyFiltersToys);
document.getElementById("toyCategoryFilter").addEventListener("change", applyFiltersToys);

// Event listener to trigger display of toy details when 'Info' button is clicked
document.querySelectorAll('.info-btn').forEach(function(button) {
  button.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default behavior of the button
    showToyDetailsModal(); // Call function to show toy details modal
  });
});
function editAccount() {
  document.getElementById('account-info').style.display = 'none';
  document.getElementById('edit-form').style.display = 'block';

  // Populate the edit form with current account information
  document.getElementById('new-name').value = document.getElementById('name').innerText;
  document.getElementById('new-email').value = document.getElementById('email').innerText;
}

function cancelEdit() {
  document.getElementById('account-info').style.display = 'block';
  document.getElementById('edit-form').style.display = 'none';
}

function saveChanges() {
  // Update account information with values from the edit form
  var newName = document.getElementById('new-name').value;
  var newEmail = document.getElementById('new-email').value;

  document.getElementById('name').innerText = newName;
  document.getElementById('email').innerText = newEmail;

  // Hide the edit form and show the updated account information
  document.getElementById('account-info').style.display = 'block';
  document.getElementById('edit-form').style.display = 'none';
}

function deleteAccount() {
  if (confirm("Are you sure you want to delete your account?")) {
      // Perform delete action here, like clearing Local Storage or showing a confirmation message
      alert("Account deleted successfully.");
  }
}


// Function to filter teaching posts by category
function filterTeachingPosts(category) {
  const teachingPosts = document.querySelectorAll('.category-teaching');
  
  // Loop through all teaching posts
  teachingPosts.forEach(post => {
    // Check if the teaching post belongs to the selected category
    if (post.classList.contains(category)) {
      // Show the teaching post
      post.style.display = 'block';
    } else {
      // Hide the teaching post if it doesn't belong to the selected category
      post.style.display = 'none';
    }
  });
}

// Function to display details of a selected teaching post
function showTeachingPostDetails(title, subject, area, governorate, students) {
  const modal = document.getElementById('teachingPostDetailsModal');
  const titleElement = document.getElementById('teachingPostTitle');
  const detailsElement = document.getElementById('teachingPostDetails');
  
  // Populate modal with teaching post details
  titleElement.textContent = title;
  detailsElement.textContent = `Subject: ${subject}, Area: ${area}, Governorate: ${governorate}, Number of Students: ${students}`;
  
  // Display the modal
  modal.style.display = 'block';
}

// Function to close the teaching post details modal
function closeTeachingPostDetailsModal() {
  const modal = document.getElementById('teachingPostDetailsModal');
  modal.style.display = 'none';
}

// Event listener to trigger the display of teaching post details when a teaching post is clicked
document.addEventListener('click', function(event) {
  if (event.target.classList.contains('info-btn')) {
    const listItem = event.target.closest('.category-teaching');
    const title = listItem.querySelector('a').textContent.trim();
    const subject = listItem.classList[1]; // Assumes that the subject is the second class
    const area = listItem.classList[2]; // Assumes that the area is the third class
    const governorate = listItem.classList[3]; // Assumes that the governorate is the fourth class
    const students = parseInt(listItem.getAttribute('data-students')); // Assuming data-students attribute contains the number of students
    showTeachingPostDetails(title, subject, area, governorate, students);
  }
});

// Function to handle fulfillment of a teaching post
function fulfillTeachingPost() {
  // Perform actions to fulfill the teaching post, such as notifying the organization
  
  // Close the modal
  closeTeachingPostDetailsModal();
}

// Call the function to populate teaching posts when the page loads
window.onload = function() {
  // Populate teaching posts (Assuming you have a function named populateTeachingPosts)
  populateTeachingPosts();
};














// Function to toggle the visibility of the teaching posts section
function toggleTeachingPostsSection() {
  var section = document.getElementById("teachingPostsSection");
  if (section.style.display === "none") {
    section.style.display = "block";
  } else {
    section.style.display = "none";
  }
}

