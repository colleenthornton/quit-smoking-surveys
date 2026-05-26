module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const d = req.body || {};

  const fields = {
    'Submitted At': new Date().toISOString(),
    'Current Status': d.q1 || '',
    'Smoking Duration': d.q2 || '',
    'Quit Attempts': d.q3 || '',
    'Feeling Behind Smoking': d.q4 || '',
    'Discomfort Scale': d.q5 ? Number(d.q5) : undefined,
    'Response to Feeling': d.q6 || '',
    'Resonance Statement': d.q7 || '',
    'Methods Tried': d.q8 || '',
    'What Was Missing': d.q9 || '',
    'What Would Help': d.q10 || '',
    'Community Importance': d.q11 ? Number(d.q11) : undefined,
    'Meaningful Support': d.q12 || '',
    'Program Features': d.q13 || '',
    'Willingness to Pay': d.q14 || '',
    'Trust in Creator': d.q15 || '',
    'Additional Comments': d.q16 || '',
  };

  // Remove empty/undefined values so Airtable doesn't error
  for (const key of Object.keys(fields)) {
    if (fields[key] === '' || fields[key] === undefined) delete fields[key];
  }

  try {
    const response = await fetch(
      `https://api.airtable.com/v0/${process.env.AIRTABLE_BASE_ID}/Current%20Smokers`,
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
