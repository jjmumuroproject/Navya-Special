// Get today's date in YYYY-MM-DD format
const today = new Date().toISOString().split('T')[0];

// Use a unique namespace to avoid collision with others on countapi.xyz
const namespace = 'navya-special-nikhil-project';
const dailyKey = `missCount_${today}`;
const totalKey = 'totalMissCount';

// Fetch daily counter (increments automatically)
fetch(`https://api.countapi.xyz/hit/${namespace}/${dailyKey}`)
  .then(res => res.json())
  .then(data => {
    document.getElementById('miss-count').textContent = data.value;
  })
  .catch(err => {
    console.error('Daily counter error:', err);
    document.getElementById('miss-count').textContent = 'Error';
  });

// Fetch total counter (increments automatically)
fetch(`https://api.countapi.xyz/hit/${namespace}/${totalKey}`)
  .then(res => res.json())
  .then(data => {
    document.getElementById('total-miss-count').textContent = data.value;
  })
  .catch(err => {
    console.error('Total counter error:', err);
    document.getElementById('total-miss-count').textContent = 'Error';
  });
