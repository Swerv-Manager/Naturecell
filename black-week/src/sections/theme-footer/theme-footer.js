// theme-footer: the live footer has no JS of its own; the newsletter is Shopify's customer form, which reloads the
// page and renders "Tak for din tilmelding." / the error line under the field. The mockup does the same in place.
export default function init(root) {
  const form = root.querySelector('form[data-theme-footer-news]');
  if (!form) return;
  const input = form.querySelector('input[type="email"]');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    form.querySelectorAll('[data-theme-footer-msg]').forEach(n => n.remove());
    const ok = input.value.trim() !== '' && input.checkValidity();
    const p = document.createElement('p');
    p.setAttribute('data-theme-footer-msg', '');
    p.setAttribute('role', ok ? 'status' : 'alert');
    p.style.marginTop = '8px';
    p.textContent = ok ? 'Tak for din tilmelding.' : 'Tjek din e-mailadresse og prøv igen.';
    form.appendChild(p);
    if (ok) form.reset(); else input.focus();
  });
}
