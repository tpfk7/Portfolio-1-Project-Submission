/* jshint esversion: 11 */

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function toggleNavbar() {
  let topNav = document.getElementById("myTopnav");
  if (topNav.className === "topnav") {
    topNav.className += " responsive";
  } else {
    topNav.className = "topnav";
  }
}