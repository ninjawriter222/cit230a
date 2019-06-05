function toggleHHam() {
    document.getElementByClassName("hamburger")[0].classList.toggle("responsive");
  }

window.onclick = function(event) {
    if (!event.target.matches('.menu')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('responsive')) {
          openDropdown.classList.remove('responsive');
        }
      }
    }
  }