// Client-side form handler for /learn booking form
document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('booking-form');
  if (!form) return;

  form.addEventListener('submit', async function (e) {
    e.preventDefault();
    const data = new FormData(form);
    const payload = Object.fromEntries(data.entries());

    try {
      const res = await fetch(form.action, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      const json = await res.json();
      const msg = document.getElementById('booking-message');
      if (res.ok) {
        if (msg) {
          msg.classList.remove('hidden');
          msg.textContent = 'Booking sent — check your email for confirmation.';
        }
        form.reset();
      } else {
        if (msg) {
          msg.classList.remove('hidden');
          msg.classList.remove('text-green-400');
          msg.classList.add('text-red-400');
          msg.textContent = json.error || 'Submission failed';
        }
      }
    } catch (err) {
      const msg = document.getElementById('booking-message');
      if (msg) {
        msg.classList.remove('hidden');
        msg.classList.remove('text-green-400');
        msg.classList.add('text-red-400');
        msg.textContent = 'Submission error';
      }
    }
  });
});
