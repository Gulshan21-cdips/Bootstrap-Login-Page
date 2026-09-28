document.addEventListener("DOMContentLoaded", () => {

    const loginForm = document.getElementById("loginForm");
    const email = document.getElementById("email");
    const password = document.getElementById("password");
    const togglePassword = document.getElementById("togglePassword");
    const alertFeedback = document.getElementById("alertFeedback");


    function showAlert(message, isSuccess = false) {

        alertFeedback.style.display = "block";

        alertFeedback.style.background = isSuccess
            ? "rgba(34, 197, 94, 0.1)"
            : "rgba(239, 68, 68, 0.1)";

        alertFeedback.style.borderColor = isSuccess
            ? "rgba(34, 197, 94, 0.2)"
            : "rgba(239, 68, 68, 0.2)";

        alertFeedback.style.color = isSuccess
            ? "#86efac"
            : "#fca5a5";

        alertFeedback.textContent = message;
    }


    // PASSWORD SHOW / HIDE
    togglePassword.addEventListener("click", () => {

        const type =
            password.getAttribute("type") === "password"
                ? "text"
                : "password";

        password.setAttribute("type", type);

        togglePassword.classList.toggle("bi-eye");
        togglePassword.classList.toggle("bi-eye-slash");

    });


    // LOGIN FORM
    loginForm.addEventListener("submit", (event) => {

        event.preventDefault();

        alertFeedback.style.display = "none";

        const emailValue = email.value.trim();
        const passwordValue = password.value.trim();

        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


        // EMAIL VALIDATION
        if (!emailPattern.test(emailValue)) {

            showAlert("Please enter a valid email address.");

            email.classList.add("is-invalid");

            email.focus();

            return;

        } else {

            email.classList.remove("is-invalid");

        }


        // PASSWORD VALIDATION
        if (passwordValue.length < 6) {

            showAlert(
                "Password must be at least 6 characters long."
            );

            password.classList.add("is-invalid");

            password.focus();

            return;

        } else {

            password.classList.remove("is-invalid");

        }


        // SUCCESS
        showAlert(
            "Welcome back to ÉLIXIR! Redirecting...",
            true
        );


        setTimeout(() => {

            loginForm.reset();

            alertFeedback.style.display = "none";

        }, 2500);

    });


    // GOOGLE BUTTON
    document
        .getElementById("googleBtn")
        .addEventListener("click", () => {

            showAlert(
                "Google authentication service will open shortly.",
                true
            );

        });


    // FORGOT PASSWORD
    document
        .getElementById("forgotPasswordBtn")
        .addEventListener("click", (event) => {

            event.preventDefault();

            showAlert(
                "Password recovery link sent if account exists.",
                true
            );

        });


    // SIGNUP
    document
        .getElementById("signupBtn")
        .addEventListener("click", (event) => {

            event.preventDefault();

            showAlert(
                "Redirecting to account creation...",
                true
            );

        });

});