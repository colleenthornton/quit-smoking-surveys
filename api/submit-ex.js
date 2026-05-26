module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const d = req.body || {};

  const fields = {
    'Submitted At': new Date().toISOString(),
    'Time Since Quitting': d.q1 || '',
    'Previous Quit Attempts': d.q2 || '',
    'Smoking Duration': d.q3 || '',
    'Different Moment Existed': d.q4 || '',
    'Pivotal Moment': d.q5 || '',
    'Physical Withdrawal': d.q6 || '',
    'How Got Through It': d.q7 || '',
    'Real Reason for Smoking': d.q8 || '',
    'Emptiness After Quitting': d.q9 || '',
    'Methods Used': d.q10 || '',
    'Most Important Factor': d.q11 || '',
    'Community Role': d.q12 || '',
    'What Should Have Existed': d.q13 || '',
    'Message at Hardest Moment': d.q14 || '',
    'Emptiness Statement': d.q15 || '',
    'Willingness to Share': d.q16 || '',
    'Additional Comments': d.q17 || '',
  };

  for (const key of Object.keys(fields)) {
    if (fields[key] === '' || fields[key] === undefined) delete fields[key];
  }

  try {
    const response = await fetch(
      `https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/Ex-Smokers`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${process.env.AIRTABLE_TOKEN}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ fields }),
      }
    );

    if (!response.ok) {
      const errText = await response.text();
      console.error('Airtable error:', errText);
      return res.status(502).json({ error: 'Failed to save to Airtable' });
    }

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error('Server error:', err);
    return res.status(500).json({ error: 'Internal server error' });
  }
};
