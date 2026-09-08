const toggle = document.querySelector(".nav__toggle");
const menu = document.getElementById("mobile-menu");
const year = document.getElementById("year");
const work = document.getElementById("work");
const filters = document.querySelectorAll(".filter");

if (year) year.textContent = String(new Date().getFullYear());

toggle?.addEventListener("click", () => {
  const open = toggle.getAttribute("aria-expanded") === "true";
  toggle.setAttribute("aria-expanded", String(!open));
  toggle.setAttribute("aria-label", open ? "Open menu" : "Close menu");
  menu.hidden = open;
});

menu?.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    menu.hidden = true;
    toggle?.setAttribute("aria-expanded", "false");
    toggle?.setAttribute("aria-label", "Open menu");
  });
});

filters.forEach((button) => {
  button.addEventListener("click", () => {
    const next = button.dataset.filter || "all";
    filters.forEach((item) => {
      const active = item === button;
      item.classList.toggle("is-active", active);
      item.setAttribute("aria-selected", String(active));
    });
    work.classList.toggle("is-personal", next === "personal");
    work.classList.toggle("is-corporate", next === "corporate");
  });
});
