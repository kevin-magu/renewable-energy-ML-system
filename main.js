// Function to close the resource report
function closeResourceReport() {
    document.querySelector(".report-page").style.display = "none";
}

// Function to open the resource report
function openResourceReport() {
    // Assuming you have a placeholder for the predicted value
    let predictedValue = parseFloat(document.getElementById('predictedValue').value);
    console.log(predictedValue);

    const resourceType = document.getElementById("resource-type").value;
    const currentResources = parseFloat(document.getElementById("resource-quantity").value);
    const initialBedCount = 200; // Set your desired initial number of beds
    const predictionYears = parseInt(document.getElementById("year").value);

    // Validate input values
    if (isNaN(predictedValue) || isNaN(currentResources) || isNaN(predictionYears)) {
        console.error("Invalid input. Please enter valid numeric values.");
        return;
    }

    // Calculate the resources needed for each year
    const resourcesPerYear = Math.round(predictedValue / predictionYears);

    // Initialize an empty array to store the report sentences
    let reportSentences = [];

    for (let year = 1; year <= predictionYears; year++) {
        // Create a sentence for each year and push it to the array
        let sentence = `In ${new Date().getFullYear() + year}, you may need ${resourcesPerYear} ${resourceType}.`;
        reportSentences.push(sentence);
    }

    // Display the generated report in your report content
    const reportContentElement = document.querySelector(".report-content");
    reportContentElement.textContent = reportSentences.join('\n');

    // Show the report page
    const resourceReport = document.querySelector(".report-page");
    resourceReport.style.display = "block";

    // Add a class for animation (assuming you have CSS animations defined)
    resourceReport.classList.add("slide-in");
}
