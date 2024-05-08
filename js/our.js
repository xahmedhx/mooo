document.addEventListener('DOMContentLoaded', function() {
    updateNavbar();
    attachEventListeners();
});
        function updateNavbar() {
            const username = localStorage.getItem("username");
            const nav = document.getElementById("ftco-nav");
            if (username=== "admin") {
                nav.innerHTML = `
                    <ul class="navbar-nav ml-auto">
                        <div class="navbar-nav ml-auto koooo">
                            <li class="nav-item active"><a href="index.html" class="nav-link">Home</a></li>
                            <li class="nav-item"><a href="donate.html" class="nav-link">Donate</a></li>
                            <li class="nav-item"><a href="contacts.html" class="nav-link">Contact</a></li>
                        </div>
                        <li class="nav-item"><a href="admin.html" class="nav-link">Welcome, ${username}</a></li>
                        <li class="nav-item"><a href="#" class="nav-link" onclick="logout()">Logout</a></li>
                    </ul>
                `;
            } else if(username=== "donor") {
                nav.innerHTML = `
                    <ul class="navbar-nav ml-auto">
                        <div class="navbar-nav ml-auto koooo">
                            <li class="nav-item active"><a href="index.html" class="nav-link">Home</a></li>
                            <li class="nav-item"><a href="donate.html" class="nav-link">Donate</a></li>
                            <li class="nav-item"><a href="contacts.html" class="nav-link">Contact</a></li>
                        </div>
                        <li class="nav-item"><a href="donor.html" class="nav-link">Welcome, ${username}</a></li>
                        <li class="nav-item"><a href="#" class="nav-link" onclick="logout()">Logout</a></li>
                    </ul>
                `;

            }else if (username=== "organization"){
                nav.innerHTML = `
                <ul class="navbar-nav ml-auto">
                    <div class="navbar-nav ml-auto koooo">
                        <li class="nav-item active"><a href="index.html" class="nav-link">Home</a></li>
                        <li class="nav-item"><a href="donate.html" class="nav-link">Donate</a></li>
                        <li class="nav-item"><a href="contacts.html" class="nav-link">Contact</a></li>
                    </div>
                    <li class="nav-item"><a href="organization.html" class="nav-link">Welcome, ${username}</a></li>
                    <li class="nav-item"><a href="#" class="nav-link" onclick="logout()">Logout</a></li>
                </ul>
            `;
            }else{
                nav.innerHTML = `
                    <ul class="navbar-nav ml-auto">
                        <div class="navbar-nav ml-auto koooo">
                            <li class="nav-item active"><a href="index.html" class="nav-link">Home</a></li>
                            <li class="nav-item"><a href="donate.html" class="nav-link">Donate</a></li>
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
            updateNavbar();
            window.location.href = "index.html";
        }



function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username === "admin" && password === "admin123") {
        localStorage.setItem("username", username);
        window.location.href = "index.html";

    } else if (username === "donor" && password === "donor123") {
        localStorage.setItem("username", username);
        window.location.href = "index.html";
    }
    else if (username === "organization" && password === "organization123"){
        localStorage.setItem("username", username);
        window.location.href = "index.html";
    }
    else
    {
        alert("Invalid username or password");
    }
    updateNavbar();
}

function showContent(sectionId) {
    var sections = document.querySelectorAll(".content-section");
    sections.forEach(function (section) {
        section.classList.remove("active");
    });
    document.getElementById(sectionId).classList.add("active");
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
        alert("Registration form submitted!");
    });

    // Donation submission form submission
    const donationForm = document.getElementById("donation-form");
    donationForm.addEventListener("submit", function(event) {
        event.preventDefault();
    alert("Donation submission form submitted!");
    });
});

