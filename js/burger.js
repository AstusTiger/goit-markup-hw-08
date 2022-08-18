(() => {
    const refs = {
      // menu button refs
      menuBtn: document.querySelector('[data-menu-btn]'),
      menu: document.querySelector('[data-menu]'),

    };
    
    console.log(refs.menu)
    console.log(refs.menuBtn)

    refs.menuBtn.addEventListener("click", toggleMenu);
    function toggleMenu() {
      refs.menu.classList.toggle("isOpen");
    }

  })();