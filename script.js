document.getElementById("registrationForm").addEventListener("submit", function(event) {

    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let age = document.getElementById("age").value;
    let course = document.getElementById("course").value;
    let password = document.getElementById("password").value;

    let message = document.getElementById("message");

    if (name === "" || email === "" || age === "" || course === "" || password === "") {
        message.style.color = "red";
        message.innerText = "Please fill all fields!";
    }

    else if (!email.includes("@") || !email.includes(".")) {
        message.style.color = "red";
        message.innerText = "Enter a valid email!";
    }

    else if (age < 1 || age > 100) {
        message.style.color = "red";
        message.innerText = "Enter a valid age!";
    }

    else if (password.length < 6) {
        message.style.color = "red";
        message.innerText = "Password must be at least 6 characters!";
    }

    else {
        message.style.color = "green";
        message.innerText = "Registration Successful!";

        document.getElementById("registrationForm").reset();
    }

});