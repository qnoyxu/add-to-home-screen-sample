window.addEventListener('load', () => {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
      .register('js/service-worker.js')
      .then(registration => console.log('registered', registration))
  }
});
