(() => {
    const refs = {
      openMenuBtn: document.querySelector("[data-menu-open]"),
      menu: document.querySelector("[data-menu]"),
      body: document.querySelector("body"),
      icon_burger: document.querySelector('.hidden-icon-burger'),
      icon_cross: document.querySelector('.hidden-icon-cross'),
      // icon_burger: document.querySelector("[hidden-icon-burger]"),
      // icon_cross: document.querySelector("[hidden-icon-cross]"),
    };
  
    refs.openMenuBtn.addEventListener("click", toggleMenu);
  
    function toggleMenu() {
      refs.menu.classList.toggle("is-hidden");
      refs.body.classList.toggle("no-scroll");
      refs.icon_burger.classList.toggle("hidden-icon");
      refs.icon_cross.classList.toggle("hidden-icon");
    }

          // Close the mobile menu on wider screens if the device orientation changes
          window.matchMedia('(min-width: 1440px)').addEventListener('change', e => {
            if (!e.matches) { return; }
            refs.menu.classList.add('is-hidden');
            refs.icon_cross.classList.add('hidden-icon');
            refs.icon_burger.classList.remove("hidden-icon");
            
          });
  })();

