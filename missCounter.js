// Today's date in YYYY-MM-DD
const today = new Date().toISOString().split('T')[0];

// Unique namespace to avoid conflicts (use your project name or something unique)
const namespace = 'navya-special-nikhil-project';
const dailyKey = `missCount_${today}`;
const totalKey = 'totalMissCount';

// Function to update count display
function updateCounterDisplay(id, value) {
  const el = document.getElementById(id);
  if (el) {
    el.textContent = value;
  }
}

// Update daily counter
fetch(`https://api.countapi.xyz/hit/${namespace}/${dailyKey}`)
  .then(res => res.json())
  .then(data => {
    updateCounterDisplay('miss-count', data.value);
  })
  .catch(err => {
    console.error('Daily counter error:', err);
    updateCounterDisplay('miss-count', 'Error');
  });

// Optional: Total counter (uncomment below if you want to show total forever)
// fetch(`https://api.countapi.xyz/hit/${namespace}/${totalKey}`)
//   .then(res => res.json())
//   .then(data => {
//     updateCounterDisplay('total-miss-count', data.value);
//   })
//   .catch(err => {
//     console.error('Total counter error:', err);
//     updateCounterDisplay('total-miss-count', 'Error');
//   });
