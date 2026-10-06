// Français ou anglais : ?lang=en|fr dans l'adresse, sinon dernier choix, sinon
// langue du navigateur (français par défaut)
(function () {
  var supported = ['fr', 'en'];

  function stored() {
    try { return localStorage.getItem('mate-legal-lang'); } catch (e) { return null; }
  }

  function remember(lang) {
    try { localStorage.setItem('mate-legal-lang', lang); } catch (e) { /* navigation privée */ }
  }

  function initial() {
    var param = new URLSearchParams(location.search).get('lang');
    if (supported.indexOf(param) !== -1) return param;
    var saved = stored();
    if (supported.indexOf(saved) !== -1) return saved;
    var browser = (navigator.language || 'fr').slice(0, 2).toLowerCase();
    return browser === 'en' ? 'en' : 'fr';
  }

  function apply(lang) {
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-lang]').forEach(function (el) {
      el.hidden = el.getAttribute('data-lang') !== lang;
    });
    document.querySelectorAll('.lang-switch button').forEach(function (btn) {
      btn.setAttribute('aria-pressed', String(btn.dataset.set === lang));
    });
    var title = document.querySelector('meta[name="title-' + lang + '"]');
    if (title) document.title = title.content;
  }

  document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.lang-switch button').forEach(function (btn) {
      btn.addEventListener('click', function () {
        remember(btn.dataset.set);
        apply(btn.dataset.set);
      });
    });
    apply(initial());
  });
})();
