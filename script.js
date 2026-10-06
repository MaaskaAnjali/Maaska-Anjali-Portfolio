// =========================================================
// MAASKA ANJALI - PORTFOLIO JAVASCRIPT
// =========================================================


// =========================================================
// 1. DARK / LIGHT MODE
// =========================================================

const themeToggle = document.querySelector(".theme-toggle");

if (themeToggle) {
    themeToggle.addEventListener("click", () => {

        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            themeToggle.textContent = "☀️";
            localStorage.setItem("theme", "dark");
        } else {
            themeToggle.textContent = "🌙";
            localStorage.setItem("theme", "light");
        }

    });
}


// =========================================================
// 2. REMEMBER THE SELECTED THEME
// =========================================================

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {

    document.body.classList.add("dark-mode");

    if (themeToggle) {
        themeToggle.textContent = "☀️";
    }

}


// =========================================================
// 3. PROJECT FILTER
// =========================================================

const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach((button) => {

    button.addEventListener("click", () => {

        // Remove active class from all buttons
        filterButtons.forEach((btn) => {
            btn.classList.remove("active");
        });

        // Add active class to clicked button
        button.classList.add("active");

        // Get selected category
        const selectedCategory = button.dataset.filter;

        // Show or hide projects
        projectCards.forEach((card) => {

            const cardCategory = card.dataset.category;

            if (
                selectedCategory === "all" ||
                selectedCategory === cardCategory
            ) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }

        });

    });

});


// =========================================================
// 4. BOOTSTRAP CONTACT FORM VALIDATION
// =========================================================

const contactForm = document.querySelector("#contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", (event) => {

        event.preventDefault();

        // Add Bootstrap validation styling
        contactForm.classList.add("was-validated");

        // Check whether all required fields are valid
        if (!contactForm.checkValidity()) {
            return;
        }

        // Show success message
        alert("Thank you for your message, " +
              document.querySelector("#name").value.trim() +
              "! Your message has been submitted successfully.");

        // Reset form
        contactForm.reset();

        // Remove validation styling
        contactForm.classList.remove("was-validated");

    });

}


// =========================================================
// 5. CLOSE MOBILE NAVBAR AFTER CLICKING A LINK
// =========================================================

const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
const navbarCollapse = document.querySelector(".navbar-collapse");

navLinks.forEach((link) => {

    link.addEventListener("click", () => {

        if (
            window.innerWidth < 992 &&
            navbarCollapse &&
            navbarCollapse.classList.contains("show")
        ) {

            const closeButton =
                document.querySelector(".navbar-toggler");

            if (closeButton) {
                closeButton.click();
            }

        }

    });

});


// =========================================================
// 6. CURRENT YEAR
// =========================================================

const currentYear = document.querySelector("#currentYear");

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}


// =========================================================
// JAVASCRIPT COMPLETED
// =========================================================