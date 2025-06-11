const today = new Date().toISOString().split('T')[0];
const dailyKey = `missCount_${today}`;
const totalKey = 'totalMissCount';
const baseUrl = 'https://kv.repl.co/navya-special-nikhil-v1';

// Update and show count
async function updateAndShowCount(key, elementId) {
  try {
    // Get current value
    const getRes = await fetch(`${baseUrl}/${key}`);
    let count = 0;

    if (getRes.ok) {
      const data = await getRes.json();
      count = data.value || 0;
    }

    count += 1;

    // Update value
    await fetch(`${baseUrl}/${key}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ value: count })
    });

    document.getElementById(elementId).textContent = count;
  } catch (err) {
    console.error(`${elementId} Error:`, err);
    document.getElementById(elementId).textContent = 'Error';
  }
}

// Update both counters
updateAndShowCount(dailyKey, 'miss-count');
updateAndShowCount(totalKey, 'total-miss-count');
