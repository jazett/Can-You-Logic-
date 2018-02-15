$(document).ready(function() {
  //Prevent page moving left, right, up, or down with arrow keys.
  window.addEventListener('keydown', function(e) {
    if ((e.keycode >= 37) && (e.keycode <= 40)) {
      e.preventDefault();
    }
  });
  
  //Put code AFTER this line
  
});
