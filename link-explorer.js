document.addEventListener("DOMContentLoaded", function () {
    // Define an array with URLs and multiple anchor text variations for each URL
    //anchor texts should be realted and should be in the same context and should be less than 3 so even if it changes it should not be a problem
    const linksData = [
        // {
        //     targetUrl: "https://developer360.in",
        //     anchorTexts: ["Satta Matka Developer", "Matka Developer"]
        // },
        // {
        //     targetUrl: "https://matkaresult.net",
        //     anchorTexts: ["Matka Result", "Kalyan Result"]
        // },
    ];

    // Find the first or second <p> tag
    let paragraphs = document.querySelectorAll("p");

    if (paragraphs.length >= 1) {
        // Choose the paragraph where links will be added
        let targetParagraph = paragraphs[1] || paragraphs[0]; // Use second <p> tag if available, otherwise the first

        // Loop through the linksData array and create links
        linksData.forEach((linkData) => {
            // Randomly select an anchor text from the available options
            const randomAnchorText = linkData.anchorTexts[Math.floor(Math.random() * linkData.anchorTexts.length)];

            // Create a link element
            let link = document.createElement("a");
            link.href = linkData.targetUrl; // Set the URL
            link.textContent = randomAnchorText; // Set the random anchor text

            // Apply styles for a natural appearance
            link.style.textDecoration = "none"; // Remove underline
            link.style.color = "inherit"; // Match text color to surrounding paragraph
            link.style.fontWeight = "normal"; // Normal font style
            link.style.border = "none"; // Remove border
            link.style.padding = "0"; // Reset padding
            link.style.background = "none"; // Remove background
            link.style.boxShadow = "none"; // Remove shadow

            // Add a space after each link for readability
            let space = document.createTextNode(" ");

            // Append the link and space to the target paragraph
            targetParagraph.appendChild(link);
            targetParagraph.appendChild(space);
        });
    }
});
