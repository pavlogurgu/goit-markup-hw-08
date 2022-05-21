(() => {
    const refs = {
      openMenuBtn: document.querySelector(".burger-button"),
      closeMenuBtn: document.querySelector(".burger-button-close"),
      menu: document.querySelector(".mob-menu"),
    };
  
    refs.openMenuBtn.addEventListener("click", toggleMenu);
    refs.closeMenuBtn.addEventListener("click", toggleMenu);
  
    function toggleMenu() {
      refs.menu.classList.toggle("is-hidden");
    }
  })();