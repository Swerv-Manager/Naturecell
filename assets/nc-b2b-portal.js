(() => {
  for (const root of document.querySelectorAll('[data-b2b-portal]')) {
    if (root.dataset.ready) continue;
    root.dataset.ready = 'true';
    const form = root.querySelector('[data-b2b-order]');
    const button = root.querySelector('[data-submit]');
    const status = root.querySelector('[data-status]');
    form.addEventListener('submit', async event => {
      event.preventDefault();
      if (button.disabled) return;
      const items = [];
      const expected = new Map();
      for (const input of form.querySelectorAll('[data-variant]')) {
        input.setCustomValidity('');
        if (input.disabled) continue;
        const quantity = Number(input.value);
        const total = quantity + Number(input.dataset.inCart);
        const min = Number(input.dataset.minimum);
        const step = Number(input.dataset.increment);
        const max = input.dataset.maximum ? Number(input.dataset.maximum) : null;
        if (!Number.isInteger(quantity) || quantity < 0 || (quantity > 0 && (total < min || total % step !== 0 || (max !== null && total > max)))) {
          input.setCustomValidity(input.dataset.invalid);
          input.reportValidity();
          return;
        }
        if (quantity > 0) { items.push({ id: Number(input.dataset.variant), quantity }); expected.set(Number(input.dataset.variant), total); }
      }
      if (!items.length) { status.textContent = root.dataset.empty; return; }
      button.disabled = true;
      status.textContent = root.dataset.working;
      try {
        const response = await fetch(root.dataset.addUrl, { method: 'POST', headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' }, body: JSON.stringify({ items }) });
        const result = await response.json();
        if (!response.ok) throw new Error(result.description || result.message || '');
        const cartResponse = await fetch(root.dataset.cartUrl + '.js', { headers: { 'Accept': 'application/json' }, cache: 'no-store' });
        if (!cartResponse.ok) throw new Error('');
        const cart = await cartResponse.json();
        for (const [id, quantity] of expected) {
          const actual = cart.items.filter(item => item.variant_id === id).reduce((sum, item) => sum + item.quantity, 0);
          if (actual < quantity) throw new Error('');
        }
        window.location.assign(root.dataset.cartUrl);
      } catch (error) {
        status.textContent = root.dataset.error + (error.message ? " " + error.message : "");
      }
    });
    form.addEventListener('input', event => { if (event.target.matches('[data-variant]')) event.target.setCustomValidity(''); });
  }
})();
