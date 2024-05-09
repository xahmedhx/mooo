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

function deleteRow(button) {
    if (confirm('Are you sure you want to delete this organization?')) {
        var row = button.parentNode.parentNode.parentNode; // button -> div -> td -> tr
        row.parentNode.removeChild(row); // Remove the <tr> from the table body
    }
    }

    function filterTable() {
        var input = document.getElementById('searchBar');
        var filter = input.value.toUpperCase();
        var table = document.getElementById('Table');
        var tr = table.getElementsByTagName('tr');
      
        for (var i = 1; i < tr.length; i++) { // Start at 1 to skip the table header
            var td = tr[i].getElementsByTagName('td')[0]; // Get the first column
            if (td) {
                var txtValue = td.textContent || td.innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    tr[i].style.display = '';
                } else {
                    tr[i].style.display = 'none';
                }
            }       
        }
    }

//////view details organization////////////////////////////////
document.addEventListener("DOMContentLoaded", function() {
    var modal = document.getElementById("detailsModal");
    var span = document.querySelector(".modal .close");

    // Function to open modal with details, populated dynamically based on arguments
    window.viewDetailsOrganization = function(name, type, email, phone, actions) {
        var modalContent = document.getElementById("modalContent");
        modalContent.innerHTML = `<h2 style="color: #f86f2d;">Organization details</h2>`+`<strong style="font-weight: bold;">Name:</strong> ${name}<br>` +
                                 `<strong style="font-weight: bold;">Type:</strong> ${type}<br>` +
                                 `<strong style="font-weight: bold;">Email:</strong> ${email}<br>` +
                                 `<strong style="font-weight: bold;">Phone:</strong> ${phone}<br>` +
                                 `<strong style="font-weight: bold;">Actions:</strong> ${actions}`;
        modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, also close it
    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    }
});
 ///////////view details donor////////////////////////////////
document.addEventListener("DOMContentLoaded", function() {
    var modal = document.getElementById("detailsModal");
    var span = document.querySelector(".modal .close");

    // Function to open modal with details, populated dynamically based on arguments
    window.viewDetails= function(name, type, email, phone) {
        var modalContent = document.getElementById("modalContent");
        modalContent.innerHTML = `<h2 style="color: #f86f2d;">Donor details</h2>`+`<strong style="font-weight: bold;">Name:</strong> ${name}<br>` +
                                 `<strong style="font-weight: bold;">Type:</strong> ${type}<br>` +
                                 `<strong style="font-weight: bold;">Email:</strong> ${email}<br>` +
                                 `<strong style="font-weight: bold;">Phone:</strong> ${phone}<br>`;
        modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, also close it
    window.onclick = function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    }
});

////////////////////////////////////////////////////////////////

function moveToApproved(button) {
    var row = button.closest('tr'); // More robust way of getting the row
    var submissionType = row.cells[0].textContent.trim(); // Get the type from the first cell

    var targetTable = (submissionType === "Organization") ? document.getElementById('Table').querySelector('tbody') :
                      (submissionType === "Donor") ? document.getElementById('table1').querySelector('tbody') : null;

    if (targetTable) {
        // Move the row to the appropriate table
        targetTable.appendChild(row);
        // Optionally change the row, for example, clear the actions
        row.cells[4].innerHTML = '<span>Approved</span>';
    } else {
        console.error('No target table found for:', submissionType);
    }
}

function deleteRow(button) {
    var row = button.closest('tr'); // Get the row
    row.remove(); // Remove the row
}






