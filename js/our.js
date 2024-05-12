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
    if (username === "admin" && password === "123") {
        localStorage.setItem("username", username);
        window.location.href = "admin.html";

    } else if (username === "donor" && password === "123") {
        localStorage.setItem("username", username);
        window.location.href = "donor.html";
    }
    else if (username === "organization" && password === "123"){
        localStorage.setItem("username", username);
        window.location.href = "organization.html";
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

  
    const registrationForm = document.getElementById("registration-form");
    registrationForm.addEventListener("submit", function(event) {
        event.preventDefault();
        alert("Registration form submitted!");
    });

   
    const donationForm = document.getElementById("donation-form");
    donationForm.addEventListener("submit", function(event) {
        event.preventDefault();
        alert("Donation submission form submitted!");
    });
});

function filterOrganizations() {
    let input = document.getElementById('organization-search-input').value.toUpperCase();
    let table = document.getElementById('organizations-table'); 
    let tr = table.getElementsByTagName('tr');

    for (let i = 0; i < tr.length; i++) {
        let td = tr[i].getElementsByTagName('td')[0]; 
        if (td) {
            let textValue = td.textContent || td.innerText;
            if (textValue.toUpperCase().indexOf(input) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
    }


function filterDonors() {
    let input = document.getElementById('donor-search-input').value.toUpperCase();
    let table = document.getElementById('donors-table'); 
    let tr = table.getElementsByTagName('tr');

    for (let i = 0; i < tr.length; i++) {
        let td = tr[i].getElementsByTagName('td')[0];
        if (td) {
            let textValue = td.textContent || td.innerText;
            if (textValue.toUpperCase().indexOf(input) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}



function viewDetails(details) {
  
    document.getElementById('details-name').innerText = details.name;
    document.getElementById('details-type').innerText = details.type;
    document.getElementById('details-contact').innerText = details.contact;
    document.getElementById('details-description').innerText = details.description;

    document.getElementById('details-modal').style.display = "block";
}

function closeDetailsModal() {
    document.getElementById('details-modal').style.display = "none";
}

function viewDetails(details) {
    console.log("Opening modal with details:", details);
    document.getElementById('details-name').innerText = details.name;
    document.getElementById('details-type').innerText = details.type;
    document.getElementById('details-contact').innerText = details.contact;
    document.getElementById('details-description').innerText = details.description;
    document.getElementById('details-modal').style.display = 'block';
}


document.body.addEventListener('click', function(event) {
    if (event.target.matches('button.view-details')) {
        const details = {
            name: event.target.getAttribute('data-name'),
            type: event.target.getAttribute('data-type'),
            contact: event.target.getAttribute('data-contact'),
            description: event.target.getAttribute('data-description')
        };
        viewDetails(details);
    }
});

function closeDetailsModal() {
    let detailsModal = document.getElementById('details-modal');
    detailsModal.style.display = "none";
}


function deleteOrganization(button, id) {
    if (confirm('Are you sure you want to delete this organization?')) {
        let row = button.parentNode.parentNode;
        row.parentNode.removeChild(row)
    
        fetch('/delete-organization', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id: id })
        })
        .then(response => response.json())
        .then(data => {
            console.log('Delete successful', data);
        })
        .catch(error => {
            console.error('Error deleting organization:', error);
        });
    }
}
function deleteDonor(button, id) {
    if (confirm('Are you sure you want to delete this Donor?')) {
        let row = button.parentNode.parentNode;
        row.parentNode.removeChild(row)
    
        fetch('/delete-Donor', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id: id })
        })
        .then(response => response.json())
        .then(data => {
            console.log('Delete successful', data);
        })
        .catch(error => {
            console.error('Error deleting Donor:', error);
        });
    }
}


function deleteAccount() {
    if (confirm('Are you sure you want to delete this account?')) {
        console.log('Account deleted');
        
    }
}


