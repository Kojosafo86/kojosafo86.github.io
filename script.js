// Count-up animation for the metrics strip, triggered once per element
// when it scrolls into view. No dependencies.

document.addEventListener('DOMContentLoaded', () => {
  const metrics = document.querySelectorAll('.metric');
  if (!metrics.length) return;

  const formatNumber = (value, decimals) => {
    if (decimals > 0) return value.toFixed(decimals);
    return Math.round(value).toLocaleString('en-GB');
  };

  const animate = (el) => {
    const target = parseFloat(el.dataset.target || '0');
    const decimals = parseInt(el.dataset.decimals || '0', 10);
    const prefix = el.dataset.prefix || '';
    const suffix = el.dataset.suffix || '';
    const countEl = el.querySelector('.count');
    if (!countEl) return;

    const duration = 1200;
    const start = performance.now();

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      countEl.textContent = `${prefix}${formatNumber(target, decimals)}${suffix}`;
      return;
    }

    const step = (now) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
      const current = target * eased;
      countEl.textContent = `${prefix}${formatNumber(current, decimals)}${suffix}`;
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animate(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.4 });

  metrics.forEach((el) => observer.observe(el));

  // LinkedIn placeholder: until a real URL is set, clicking it explains
  // rather than 404s.
  document.querySelectorAll('[data-linkedin-placeholder]').forEach((el) => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      alert('Add your LinkedIn profile URL in index.html — search for data-linkedin-placeholder.');
    });
  });
});
