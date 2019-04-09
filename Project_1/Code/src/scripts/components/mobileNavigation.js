// https://www.sitepoint.com/understanding-module-exports-exports-node-js/
module.exports = {
  init() {
    this.menuBtnListener();
  },
  menuBtnListener() {
    let self = this;
    let menu = document.getElementById('menu');
    let logoBtn = document.getElementById('logoButton');
    let focusOut = document.getElementById('focusOut');

    menu.addEventListener('click', function () {
        self.mobileSidebar();
      }),

      logoBtn.addEventListener('click', function () {
        self.mobileSidebar();
      }),

      focusOut.addEventListener('click', function () {
        self.mobileSidebar();
      })
  },
  mNavStatus: false,
  mobileSidebar() {
    let getNavMenu = document.getElementById('navigation');
    let getFocusOut = document.getElementById('focusOut');

    if (this.mNavStatus === false) {
      getNavMenu.classList.add('-active');
      getFocusOut.classList.add('-active');
      this.mNavStatus = true;
    } else if (this.mNavStatus === true) {
      getNavMenu.classList.remove('-active');
      getFocusOut.classList.remove('-active');
      this.mNavStatus = false;
    }
  }
}