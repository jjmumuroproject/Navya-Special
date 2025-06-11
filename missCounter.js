// Get today's date in YYYY-MM-DD format
const today = new Date().toISOString().split('T')[0];
const namespace = 'navya-special-nikhil-v1'; // Must be unique & consistent
const dailyKey = `missCount_${today}`;
const totalKey = 'totalMissCount';

function setText(id, value) {
  const el = document.getElementById(id);
  if (el) el.textContent = value;
}

function fetchCount(key, id) {
  fetch(`https://api.countapi.xyz/hit/${namespace}/${key}`)
    .then(res => {
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return res.json();
    })
    .then(data => setText(id, data.value))
    .catch(err => {
      console.error(`(${id})`, err);
      setText(id, 'Error');
    });
}

// Fetch and update both counters
fetchCount(dailyKey, 'miss-count');
fetchCount(totalKey, 'total-miss-count');
