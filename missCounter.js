// Today's date in YYYY-MM-DD format
const today = new Date().toISOString().split('T')[0];

// Unique namespace (must be different per project)
const namespace = 'navya-special-nikhil-v1';
const dailyKey = `missCount_${today}`;
const totalKey = 'totalMissCount';

// Utility function to update counter text
function setText(id, value) {
  const el = document.getElementById(id);
  if (el) el.textContent = value;
}

// Function to safely fetch and handle API
function hitCountApi(key, elementId) {
  const url = `https://api.countapi.xyz/hit/${namespace}/${key}`;

  fetch(url)
    .then(res => {
      if (!res.ok) throw new Error(`HTTP error ${res.status}`);
      return res.json();
    })
    .then(data => setText(elementId, data.value))
    .catch(error => {
      console.error(`Error updating ${elementId}:`, error);
      setText(elementId, 'Error');
    });
}

// Update today's counter
hitCountApi(dailyKey, 'miss-count');

// Update total counter
hitCountApi(totalKey, 'total-miss-count');
