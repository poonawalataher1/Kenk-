function generateMealPlan() {
    // Get user inputs
    const numberOfMeals = document.getElementById("numberOfMeals").value;
    const dietPreference = document.getElementById("dietPreference").value;
    const healthSpecification = document.getElementById("healthSpecification").value;
    const calories = document.getElementById("calories").value;
    console.log(calories)

    // Make API request to Edamam Nutrition’s recipe search API
    const apiEndpoint = "https://api.edamam.com/api/recipes/v2";
    const appId = "your id"; // Replace with your Edamam app ID
    const appKey = "your key"; // Replace with your Edamam app key

    const apiRequestUrl = `${apiEndpoint}?type=public&q=${dietPreference}&health=${healthSpecification}&calories=${calories}&app_id=${appId}&app_key=${appKey}`;

    fetch(apiRequestUrl)
        .then(response => response.json())
        .then(data => {
            // Handle the data and generate the meal plan table
            const mealPlanTable = document.getElementById("mealPlanTable");

            // Clear previous meal plan
            mealPlanTable.innerHTML = "";

            // Create table headers
            const tableHeaders = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
            const headerRow = document.createElement("div");
            headerRow.className = "table-row";
            tableHeaders.forEach(day => {
                const headerCell = document.createElement("div");
                headerCell.className = "table-cell";
                headerCell.textContent = day;
                headerRow.appendChild(headerCell);
            });
            mealPlanTable.appendChild(headerRow);

            // Create table rows with recipe information
            for (let i = 0; i < numberOfMeals; i++) {
                const mealRow = document.createElement("div");
                mealRow.className = "table-row";

                // Make sure to replace "recipeData" with the actual structure of the response from Edamam API
                const recipeData = data.hits[i].recipe;

                // Add cells for each day of the week
                tableHeaders.forEach(day => {
                    const mealCell = document.createElement("div");
                    mealCell.className = "table-cell";

                    // Add meal name, image, and ingredients to the cell
                    mealCell.innerHTML = `
                        <strong>${recipeData.label}</strong><br>
                        <img src="${recipeData.image}" alt="${recipeData.label}" style="max-width: 100px;"><br>
                        <em>Ingredients:</em><br>
                        ${recipeData.ingredientLines.join("<br>")}
                    `;

                    mealRow.appendChild(mealCell);
                });

                mealPlanTable.appendChild(mealRow);
            }
        })
        .catch(error => console.error("Error fetching data from Edamam API:", error));
}
