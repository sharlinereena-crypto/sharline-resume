// ===== Theme toggle: dark by default, persisted =====
(function () {
  const root = document.documentElement;
  const toggle = document.getElementById("themeToggle");
  const stored = localStorage.getItem("theme");
  // Default to dark unless the user previously chose light.
  root.setAttribute("data-theme", stored === "light" ? "light" : "dark");

  toggle.addEventListener("click", () => {
    const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
  });
})();

// ===== Collapsible panels & accordion (click to open) =====
(function () {
  const panels = document.querySelectorAll("[data-panel]");

  function setOpen(panel, open) {
    panel.classList.toggle("open", open);
    const head = panel.querySelector(".panel-head, .acc-head");
    if (head) head.setAttribute("aria-expanded", String(open));
  }

  panels.forEach((panel) => {
    const head = panel.querySelector(".panel-head, .acc-head");
    if (!head) return;

    // Honor any aria-expanded="true" set in markup as the initial state.
    setOpen(panel, head.getAttribute("aria-expanded") === "true");

    head.addEventListener("click", () => {
      const willOpen = !panel.classList.contains("open");
      // Accordion behavior: within an .accordion, only one open at a time.
      const group = panel.closest(".accordion");
      if (group && willOpen) {
        group.querySelectorAll("[data-panel].open").forEach((p) => {
          if (p !== panel) setOpen(p, false);
        });
      }
      setOpen(panel, willOpen);
    });
  });
})();

// ===== Scroll reveal =====
(function () {
  const items = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    items.forEach((el) => el.classList.add("visible"));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("visible");
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.12 }
  );
  items.forEach((el) => io.observe(el));
})();

// ===== Scroll-spy nav highlight =====
(function () {
  const links = Array.from(document.querySelectorAll(".topnav a"));
  const map = new Map();
  links.forEach((l) => {
    const sec = document.querySelector(l.getAttribute("href"));
    if (sec) map.set(sec, l);
  });
  if (!("IntersectionObserver" in window) || map.size === 0) return;

  const spy = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          links.forEach((l) => l.classList.remove("active"));
          const link = map.get(e.target);
          if (link) link.classList.add("active");
        }
      });
    },
    { rootMargin: "-45% 0px -50% 0px" }
  );
  map.forEach((_, sec) => spy.observe(sec));
})();
