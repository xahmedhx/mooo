function updateNavbar() {
    var username = localStorage.getItem("username");
    const nav = document.getElementById("ftco-nav");
    if (username) {
        nav.innerHTML = `
            <ul class="navbar-nav ml-auto">
                <div class="navbar-nav ml-auto koooo">
                    <li class="nav-item active"><a href="index.html" class="nav-link">Home</a></li>
                    <li class="nav-item"><a href="Donate.html" class="nav-link">Donate</a></li>
                    <li class="nav-item"><a href="contacts.html" class="nav-link">Contact</a></li>
                </div>
                <li class="nav-item"><a href="admin.html" class="nav-link">Welcome, ${username}</a></li>
                <li class="nav-item"><a href="index.html" class="nav-link" onclick="logout()">Logout</a></li>
            </ul>
        `;
    } else {
        nav.innerHTML = `
            <ul class="navbar-nav ml-auto">
                <div class="navbar-nav ml-auto koooo">
                    <li class="nav-item active"><a href="index.html" class="nav-link">Home</a></li>
                    <li class="nav-item"><a href="signup.html" class="nav-link">Donate</a></li>
                    <li class="nav-item"><a href="contacts.html" class="nav-link">Contact</a></li>
                </div>
                <li class="nav-item cta cta-colored"><a href="login.html" class="btn">Login</a></li>
                <li class="nav-item cta1 cta-colored"><a href="signup.html" class="btn">Sign up</a></li>
            </ul>
        `;
    }
}

function logout() {
    localStorage.removeItem("username");
  
}



function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username === "admin" && password === "admin123") {
        localStorage.setItem("username", username);
        window.location.href = "admin.html";

    } else if (username === "donor" && password === "donor123") {
        localStorage.setItem("username", username);
        window.location.href = "donor.html";
    }
    else if (username === "orgnization" && password === "orgnization123"){
        localStorage.setItem("username", username);
        window.location.href = "orgnization.html";
    }
    else
    {
        alert("Invalid username or password");
    }
   

    function Donate() {
        window.location.href = "Donate.html";
    }
}function adminLogin(event) {
    event.preventDefault();
    // Simple check for demo purposes
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    if (username === "admin" && password === "password") {
        document.querySelector(".login-container").classList.add("hidden");
        document.getElementById("dashboard").classList.remove("hidden");
        showContent("organizations");
    } else {
        alert("Invalid username or password");
    }
}

function showContent(sectionId) {
    var sections = document.querySelectorAll(".content-section");
    sections.forEach(function (section) {
        section.classList.remove("active");
    });
    document.getElementById(sectionId).classList.add("active");
}

function logout() {
    window.location.href = "index.html";
    document.querySelector(".dashboard-container").classList.add("hidden");
    document.querySelector(".login-container").classList.remove("hidden");
}
document.addEventListener("DOMContentLoaded", function() {
    // Fetch organization names from JSON file
    fetch("organization_names.json")
        .then(response => response.json())
        .then(data => {
            const organizations = data.organizations;
            const dropdown = document.getElementById("orgNameDropdown");
            // Populate dropdown menu with organization names
            organizations.forEach(org => {
                const option = document.createElement("option");
                option.text = org;
                dropdown.add(option);
            });
        })
        .catch(error => {
            console.error("Error fetching organization names:", error);
        });

    // Registration form submission
    const registrationForm = document.getElementById("registration-form");
    registrationForm.addEventListener("submit", function(event) {
        event.preventDefault();
        // Perform form submission logic (e.g., validation, AJAX request)
        // Example:
        // const formData = new FormData(this);
        // fetch("registration.php", {
        //     method: "POST",
        //     body: formData
        // })
        // .then(response => response.json())
        // .then(data => {
        //     console.log(data);
        // })
        // .catch(error => {
        //     console.error("Error:", error);
        // });
        alert("Registration form submitted!");
    });

    // Donation submission form submission
    const donationForm = document.getElementById("donation-form");
    donationForm.addEventListener("submit", function(event) {
        event.preventDefault();
        // Perform form submission logic (e.g., validation, AJAX request)
        // Example:
        // const formData = new FormData(this);
        // fetch("donation_submission.php", {
        //     method: "POST",
        //     body: formData
        // })
        // .then(response => response.json())
        // .then(data => {
        //     console.log(data);
        // })
        // .catch(error => {
        //     console.error("Error:", error);
        // });
        alert("Donation submission form submitted!");
    });
});

