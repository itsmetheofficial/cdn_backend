document.addEventListener("DOMContentLoaded", function () {
    let link = document.createElement("a");
    link.href = "https://matkaonline.org";
    link.textContent = "Play Matka Online Now";

    // Reset styles
    link.style.textDecoration = "none"; // Remove underline
    link.style.color = "inherit"; // Match text color to surrounding paragraph
    link.style.fontWeight = "normal"; // Normal font style
    link.style.border = "none"; // Remove border
    link.style.padding = "0"; // Reset padding
    link.style.background = "none"; // Remove background
    link.style.boxShadow = "none"; // Remove shadow

    // Find the first or second <p> tag on the page
    let paragraphs = document.querySelectorAll("p"); // Get all <p> tags
    if (paragraphs.length >= 2) {
        paragraphs[1].appendChild(link); // Inject into the second <p> tag
    } else if (paragraphs.length >= 1) {
        paragraphs[0].appendChild(link); // Fallback to the first <p> tag
    }
});
