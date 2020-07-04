function over() {
  const menuBtn = document.querySelector(".menu-btn");
  const menu = document.querySelector(".navv");
  const menuNav = document.querySelector(".nav-links");
  const navItems = document.querySelectorAll(".nab");

  let showMenu = false;

  menuBtn.addEventListener("click", toggleMenu);

  function toggleMenu() {
    if (!showMenu) {
      menuBtn.classList.add("close");
      menu.classList.add("show");
      menuNav.classList.add("show");
      navItems.forEach((item) => item.classList.add("show"));

      showMenu = true;
    } else {
      menuBtn.classList.remove("close");
      menu.classList.remove("show");
      menuNav.classList.remove("show");
      navItems.forEach((item) => item.classList.remove("show"));

      showMenu = false;
    }
  }
}
