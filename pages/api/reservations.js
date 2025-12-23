// Simple example API route for reservations (mock)
export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });
  const { name, email, phone, dateTime, guests } = req.body;
  if (!name || !email || !dateTime || !guests) {
    return res.status(400).json({ error: 'Missing fields' });
  }
  // Here you'd validate, save to DB or CMS, and send confirmation email.
  // This endpoint returns a mock confirmation.
  return res.status(201).json({
    success: true,
    message: 'Prenotazione ricevuta (mock). Implementa integrazione con DB/SendGrid/OpenTable.'
  });
}
