document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username === "admin" && password === "password") {
        document.getElementById("message").innerText = "Login successful! Redirecting...";
        setTimeout(function() {
            window.location.href = "welcome.html"; // Redirect to welcome page
        }, 2000); // 2 seconds delay
    } else {
        document.getElementById("message").innerText = "Invalid username or password";
    }
});
