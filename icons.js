document.addEventListener("DOMContentLoaded", function() {
  const iconElements = document.querySelectorAll("icon");

  iconElements.forEach((iconElement) => {
    // Get the full class name that matches the SVG filename
    const iconClass = iconElement.classList[0];  // Example: "solar_4k-bold"

    // Construct the relative URL to the corresponding SVG file in your directory
    const svgURL = `../icons/${iconClass}.svg`;

    // Fetch and replace the <icon> tag with the corresponding SVG content
    fetch(svgURL)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.text();
      })
      .then((svgData) => {
        // Insert the SVG data into the DOM
        iconElement.innerHTML = svgData;
      })
      .catch((error) => {
        console.error("Error loading SVG:", error);
      });
  });
});
