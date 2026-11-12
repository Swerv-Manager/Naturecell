(() => {
  const initialize = () => {
    document.querySelectorAll('.nc-klub').forEach((club) => {
      const source = club.querySelector('[data-nc-club-terms]');
      const widgets = club.querySelector('.nc-klub__apps');
      if (!source || !widgets || widgets.dataset.ncTermsReady) return;
      widgets.dataset.ncTermsReady = 'true';
      const insertTerms = () => {
        widgets.querySelectorAll('.yotpo-headline[role="heading"]').forEach((heading) => {
          if (heading.textContent.trim().replace(/\s+/g, ' ') !== 'Sådan bruger du dine point') return;
          if (heading.nextElementSibling?.hasAttribute('data-nc-redemption-terms')) return;
          const notice = document.createElement('p');
          notice.className = 'nc-klub__redemption-terms';
          notice.setAttribute('data-nc-redemption-terms', '');
          notice.textContent = source.textContent.trim();
          heading.insertAdjacentElement('afterend', notice);
        });
      };
      insertTerms();
      const observer = new MutationObserver(insertTerms);
      observer.observe(widgets, { childList: true, subtree: true });
    });
  };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', initialize, { once: true });
  else initialize();
  document.addEventListener('shopify:section:load', initialize);
})();
