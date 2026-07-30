// RackCheck landingspagina's — formulierafhandeling (Web3Forms)
async function handleSubmit(e) {
  e.preventDefault();
  const btn = document.getElementById('submitBtn');
  const form = document.getElementById('contactForm');
  btn.innerHTML = 'Versturen...';
  btn.style.pointerEvents = 'none';
  const data = new FormData(form);
  try {
    const res = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: data });
    const json = await res.json();
    if (json.success) {
      btn.innerHTML = 'Verzonden ✓ Wij nemen snel contact op.';
      btn.style.background = '#16a34a';
      form.reset();
    } else {
      btn.innerHTML = 'Er ging iets mis. Probeer opnieuw.';
      btn.style.background = '#dc2626';
      btn.style.pointerEvents = 'auto';
    }
  } catch {
    btn.innerHTML = 'Er ging iets mis. Probeer opnieuw.';
    btn.style.background = '#dc2626';
    btn.style.pointerEvents = 'auto';
  }
}
