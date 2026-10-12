/* Shared behaviour for every page */
(function () {
  // Mobile menu
  var toggle = document.querySelector(".menu-toggle");
  var links = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", function () {
      var open = links.classList.toggle("open");
      toggle.classList.toggle("open", open);
      toggle.setAttribute("aria-expanded", open);
    });
  }

  // Scroll-reveal animation
  var items = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
      });
    }, { threshold: 0.12 });
    items.forEach(function (el) { io.observe(el); });
  } else {
    items.forEach(function (el) { el.classList.add("in"); });
  }

  // Animated skill bars (about page)
  var bars = document.querySelectorAll(".bar > i");
  if (bars.length && "IntersectionObserver" in window) {
    var bo = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) { e.target.style.width = e.target.dataset.level + "%"; bo.unobserve(e.target); }
      });
    }, { threshold: 0.4 });
    bars.forEach(function (b) { bo.observe(b); });
  } else {
    bars.forEach(function (b) { b.style.width = b.dataset.level + "%"; });
  }

  // Footer year
  var y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();

  // Contact form: opens the visitor's email app with the message filled in.
  // Change the address below to your own.
  var form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var to = "prosperousroberts077669@gmail.com";
      var name = form.name.value.trim();
      var email = form.email.value.trim();
      var msg = form.message.value.trim();
      var subject = encodeURIComponent("Portfolio message from " + name);
      var body = encodeURIComponent(msg + "\n\n— " + name + " (" + email + ")");
      window.location.href = "mailto:" + to + "?subject=" + subject + "&body=" + body;
      document.getElementById("form-note").textContent = "Opening your email app…";
    });
  }
})();
