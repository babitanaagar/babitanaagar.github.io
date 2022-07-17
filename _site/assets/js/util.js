window.onscroll = scrollFunction;
scrollOffset = 0;
lastSwitchTime = 0;
// MIN_DELAY = 300;
MIN_DELAY = 0;

function scrollFunction() {
  cur = window.scrollY;
  if (cur <= 200) {
    setNavbarVisibility(false);
    return;
  }

  curTime = Date.now();
  if (curTime - lastSwitchTime < MIN_DELAY) return;

  if (cur < scrollOffset) {
    setNavbarVisibility(true);
  } else {
    setNavbarVisibility(false);
  }
  lastSwitchTime = curTime;
  scrollOffset = cur;
}

function setNavbarVisibility (visible) {
  navbar = document.getElementById("navbar");
  if (visible) {
    navbar.classList.add("navbar-explicit");
    navbar.classList.add("sticky-top");
  }
  else {
    navbar.classList.remove("navbar-explicit");
    navbar.classList.remove("sticky-top");
  }
}