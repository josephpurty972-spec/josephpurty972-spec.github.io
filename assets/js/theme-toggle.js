(function () {
  var KEY = "tb-theme";
  var root = document.documentElement;

  function apply(theme) {
    if (theme === "dark") root.classList.add("theme-dark");
    else root.classList.remove("theme-dark");
  }

  var saved = null;
  try { saved = localStorage.getItem(KEY); } catch (e) {}
  if (!saved) {
    saved = (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) ? "dark" : "light";
  }
  apply(saved);

  function setIcon(btn) {
    btn.textContent = root.classList.contains("theme-dark") ? "☀️" : "🌙";
  }

  function buildButton() {
    if (document.getElementById("theme-toggle")) return;
    var btn = document.createElement("button");
    btn.id = "theme-toggle";
    btn.type = "button";
    btn.setAttribute("aria-label", "Toggle dark mode");
    setIcon(btn);
    btn.addEventListener("click", function () {
      var dark = root.classList.toggle("theme-dark");
      try { localStorage.setItem(KEY, dark ? "dark" : "light"); } catch (e) {}
      setIcon(btn);
    });
    document.body.appendChild(btn);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", buildButton);
  } else {
    buildButton();
  }
})();
