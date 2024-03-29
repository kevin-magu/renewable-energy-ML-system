document.getElementById("generate-report").addEventListener("click", function() {
    const predictionType = document.getElementById("prediction-type").value;
    const resourceType = document.getElementById("resource-type").value;
    const resourceQuantity = parseFloat(document.getElementById("resource-quantity").value);
    const selectedYear = parseFloat(document.getElementById("year").value);

    const reportContent = document.getElementById("report-content");
    const loader = document.getElementById("loader");

    // Check if the input values are valid
    if (isNaN(resourceQuantity) || isNaN(selectedYear) || selectedYear < 2025 || selectedYear > 2050) {
        reportContent.textContent = "Please enter valid values.";
        return;
    }

    // Clear the previous report
    reportContent.textContent = "";

    // Show the loader
    loader.style.display = "block";

    // Simulate loading time (7 seconds in this example)
    setTimeout(function() {
        loader.style.display = "none";

        // Generate resource comparison report for each year
        for (let year = 2025; year <= selectedYear; year++) {
            // Replace this with your actual resource prediction data
            const predictedResourceValue = getPredictedResourceValue(predictionType, resourceType, year);

            if (predictedResourceValue === null) {
                reportContent.textContent += `Year ${year}: Data not available\n`;
            } else {
                const resourceNeeded = Math.max(0, Math.round(predictedResourceValue) - Math.round(resourceQuantity)); // Round to whole numbers
                reportContent.textContent += `, Year ${year}: ${resourceNeeded} ${resourceType} needed\n`;
            }
            reportContent.textContent += "\n"; // Add a newline after each year's entry
        }
    }, 7000); // Simulate 7 seconds of loading time
});

// Replace this with your actual data retrieval function
function getPredictedResourceValue(predictionType, resourceType, year) {
    // Simulate data retrieval (replace with your actual data)
    // Example: return predictedResourceData[predictionType][resourceType][year];
    return 35 + Math.random() * 20; // Random value for demonstration
}
