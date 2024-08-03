function addToMeal(button) {
    const foodItem = button.parentElement;
    const mealBox = document.querySelector('.meal-box');
    const newItem = foodItem.cloneNode(true);
    newItem.querySelector('button').remove(); // Remove "Add to Meal" button
    mealBox.appendChild(newItem);

    updateNutrition();
}

function updateNutrition() {
    const mealItems = document.querySelectorAll('.meal-box .food-item');
    let totalCalories = 0;
    let totalProtein = 0;

    mealItems.forEach(item => {
        // Example values, replace with actual data
        totalCalories += 100; // Replace with actual calorie value
        totalProtein += 10; // Replace with actual protein value
    });

    document.getElementById('total-calories').textContent = totalCalories;
    document.getElementById('total-protein').textContent = totalProtein;
}
