// On the English privacy policy, offer the visitor's own language if there is a translation.
// Nothing is stored and nothing is sent anywhere.
(function () {
  var hint = document.getElementById("lang-hint");
  if (!hint) return;
  var wanted = (navigator.languages || [navigator.language || ""]).map(function (l) {
    return String(l).split("-")[0].toLowerCase();
  });
  for (var i = 0; i < wanted.length; i++) {
    if (wanted[i] === "en") return;
    var link = hint.querySelector('a[data-lang="' + wanted[i] + '"]');
    if (link) {
      link.hidden = false;
      hint.hidden = false;
      return;
    }
  }
})();
