function updateNavbar() {
    const username = localStorage.getItem("username");
    const nav = document.getElementById("ftco-nav");
    if (username) {
        nav.innerHTML = `
            <ul class="navbar-nav ml-auto">
                <div class="navbar-nav ml-auto koooo">
                    <li class="nav-item active"><a href="index.html" class="nav-link">Home</a></li>
                    <li class="nav-item"><a href="Donate.html" class="nav-link">Donate</a></li>
                    <li class="nav-item"><a href="contacts.html" class="nav-link">Contact</a></li>
                </div>
                <li class="nav-item"><a href="profile.html" class="nav-link">Welcome, ${username}</a></li>
                <li class="nav-item"><a href="#" class="nav-link" onclick="logout()">Logout</a></li>
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
    updateNavbar();
}

window.onload = updateNavbar;

function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username === "admin" && password === "admin123") {
        localStorage.setItem("username", username);
        window.location.href = "index.html";
    } else {
        alert("Invalid username or password");
    }
}