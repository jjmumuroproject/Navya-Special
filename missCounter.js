const today = new Date().toISOString().split('T')[0]; // Get current date in YYYY-MM-DD format
const missCountKey = `missCount_${today}`; // Unique key for today's counter

// Retrieve the current count from localStorage or initialize it
let missCount = localStorage.getItem(missCountKey);
if (!missCount) {
    missCount = 0;
}
missCount = parseInt(missCount) + 1; // Increment the count
localStorage.setItem(missCountKey, missCount); // Save the updated count

// Update the counter display
document.getElementById('miss-count').textContent = missCount;