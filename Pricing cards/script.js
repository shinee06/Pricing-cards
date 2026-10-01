
// Get the billing toggle
const billingToggle = document.getElementById("billingToggle");

// Get Monthly and Yearly text
const monthlyText = document.getElementById("monthlyText");
const yearlyText = document.getElementById("yearlyText");

// Get all price amounts
const amounts = document.querySelectorAll(".amount");

// Get all period text
const periods = document.querySelectorAll(".period");


// Listen for toggle click
billingToggle.addEventListener("change", () => {

    // Check whether Yearly is selected
    if (billingToggle.checked) {

        // Change to Yearly
        amounts.forEach((amount) => {
            amount.textContent = amount.dataset.yearly;
        });

        // Change text colour
        yearlyText.classList.add("active");
        monthlyText.classList.remove("active");

        // Change period
        periods.forEach((period) => {
            period.textContent = "/month, billed yearly";
        });

    } else {

        // Change back to Monthly
        amounts.forEach((amount) => {
            amount.textContent = amount.dataset.monthly;
        });

        // Change text colour
        monthlyText.classList.add("active");
        yearlyText.classList.remove("active");

        // Change period
        periods.forEach((period) => {
            period.textContent = "/month";
        });
    }

});

