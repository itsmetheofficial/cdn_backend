document.addEventListener("DOMContentLoaded", function () {
    let link = document.createElement("a");
    link.href = "https://matkaonline.org";
    link.textContent = "Play Matka Online";
    link.style.textDecoration = "none"; // Remove underline
    link.style.color = "inherit"; // Match text color to surrounding paragraph
    link.style.fontWeight = "normal"; // Normal font style

    let targetParagraph = document.querySelector(".inject-link");
    if (targetParagraph) {
        targetParagraph.appendChild(link);
    }
});
