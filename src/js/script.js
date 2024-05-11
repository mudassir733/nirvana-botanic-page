// --------SideBar for Newsletter---------
const menuBtn = document.querySelector(".menu-div");
const overlay = document.querySelector(".overlay");
const sideBar = document.querySelector(".side-bar");
const closeBtn = document.querySelector(".close-sidebar");

function overlayAndSideBar() {
  menuBtn.addEventListener("click", () => {
    overlay.classList.remove("visibility-overlay");
    sideBar.classList.remove("visibility-sidebar");
  });

  closeBtn.addEventListener("click", () => {
    overlay.classList.add("visibility-overlay");
    sideBar.classList.add("visibility-sidebar");
  });

  // when click on the window to close the sidebar and remove the overlay
  window.onclick = function (event) {
    if (event.target === overlay) {
      overlay.classList.add("visibility-overlay");
      sideBar.classList.add("visibility-sidebar");
    }
  };
}
overlayAndSideBar();

// --------SideBar for Newsletter end---------

// --------Sticky header--------
const header = document.querySelector(".header");

// adding class in header while scrolling down the window
window.onscroll = function () {
  if (window.pageYOffset > 10) {
    header.classList.add("sticky-header");
  } else {
    header.classList.remove("sticky-header");
  }
};
// --------Sticky header end--------

// --------SideBar for Small Devices---------
const hamburger = document.querySelector(".menu-bar");
const sidebarOverlay = document.querySelector(".sidebar-overlay");
const leftSideBar = document.querySelector(".left-sidebar");

hamburger.addEventListener("click", () => {
  sidebarOverlay.classList.add("overlay-visible");
  leftSideBar.classList.add("sidebar-visible");
});

window.onclick = (event) => {
  if (event.target === sidebarOverlay) {
    sidebarOverlay.classList.remove("overlay-visible");
    leftSideBar.classList.remove("sidebar-visible");
  }
};
// --------SideBar for Small Devices end---------
