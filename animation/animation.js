document.addEventListener("DOMContentLoaded", function() {
    const toggleMenu = document.getElementById("toggleMenu");
    const menu = document.querySelector(".menu");

    toggleMenu.addEventListener("click", function() {
        menu.classList.toggle("active");
    });
});


document.addEventListener("DOMContentLoaded", function() {
    const accordionItems = document.querySelectorAll(".accordion-item");

    accordionItems.forEach(item => {
        const header = item.querySelector(".accordion-header");

        header.addEventListener("click", () => {
            // Toggle the active class to expand/collapse accordion item
            item.classList.toggle("active");

            // Collapse other accordion items
            accordionItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains("active")) {
                    otherItem.classList.remove("active");
                }
            });
        });
    });
});

function updateProgress() {
    let progressValue = document.getElementById("progressValue").value;
    let progressBar = document.getElementById("progressBar");

    progressBar.style.setProperty('--progress-width', progressValue + '%');
}

