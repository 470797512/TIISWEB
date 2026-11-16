/* Scheduled homepage announcements. Use ISO 8601 timestamps with an explicit
   timezone offset in the HTML. The end is exclusive; no rebuild is needed. */
(() => {
  document.querySelectorAll('[data-announcement]').forEach(banner => {
    const start = Date.parse(banner.dataset.startsAt);
    const end = Date.parse(banner.dataset.endsAt);
    if (!Number.isFinite(start) || !Number.isFinite(end) || end <= start) return;

    const key = `tiis:announcement:${banner.dataset.announcement}:${start}:${end}`;
    let dismissed = false;
    let timer;
    try { dismissed = sessionStorage.getItem(key) === 'dismissed'; } catch (_) {
      // Storage may be blocked. Dismissal still works for this page visit.
    }

    function update() {
      window.clearTimeout(timer);
      const now = Date.now();
      banner.hidden = dismissed || now < start || now >= end;
      if (dismissed || now >= end) return;
      const nextBoundary = now < start ? start : end;
      timer = window.setTimeout(update, Math.min(nextBoundary - now, 2147483647));
    }

    banner.querySelector('[data-announcement-dismiss]')?.addEventListener('click', () => {
      dismissed = true;
      try { sessionStorage.setItem(key, 'dismissed'); } catch (_) { /* Optional storage. */ }
      update();
      // Keep keyboard focus in the page when its close button disappears.
      const nextLink = banner.nextElementSibling?.querySelector('a[href], button');
      nextLink?.focus({ preventScroll: true });
    });

    // Recheck after a suspended tab or back/forward cache restoration.
    document.addEventListener('visibilitychange', update);
    window.addEventListener('pageshow', update);
    update();
  });
})();
