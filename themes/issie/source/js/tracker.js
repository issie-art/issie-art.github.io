(function () {
  'use strict';

  var script = document.currentScript;
  if (!script) return;

  var endpoint = script.getAttribute('data-endpoint');
  if (!endpoint) return;

  var data = {
    access_time: Date.now(),
    uri: window.location.pathname
  };

  fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  }).catch(function () {
    // silent fail — tracking must never break the page
  });
})();
