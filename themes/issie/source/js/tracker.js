(function () {
  'use strict';

  var script = document.currentScript;
  if (!script) return;

  var endpoint = script.getAttribute('data-endpoint');
  if (!endpoint) return;

  var data = {
    uri: window.location.pathname
  };

  var payload = JSON.stringify(data);

  // sendBeacon — non-blocking, fires even on page unload
  if (navigator.sendBeacon) {
    var blob = new Blob([payload], { type: 'application/json' });
    navigator.sendBeacon(endpoint, blob);
    return;
  }

  // Fallback: fetch with keepalive
  fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: payload,
    keepalive: true
  }).catch(function () {
    // silent fail — tracking must never break the page
  });
})();
