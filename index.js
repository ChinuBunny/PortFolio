const words = document.querySelectorAll('.special-word');

words.forEach((word) => {
  const letters = word.querySelectorAll('.special-letter');
  letters.forEach((letter, index) => {
    setTimeout(() => {
      letter.classList.add('move-up');
    }, index * 1000); // Adjust the delay between each letter's animation (in milliseconds)
  });
});


var typed=new Typed("#dynamic",{
    String:["Programmer","Designer","Front-end Developer","Student"],
    typeSpeed:150,
    backSpeed:150,
    loop:true
});


// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
   


// navbar
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className.indexOf("responsive") === -1) {
    x.className += " responsive"; // Adds the "responsive" class
  } else {
    x.className = x.className.replace(" responsive", ""); // Removes the "responsive" class
  }
}

//for top button
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

// When the user clicks on the button, scroll smoothly to the top of the document
function topFunction() {
  // Get the current vertical scroll position
  var currentScroll = document.documentElement.scrollTop || document.body.scrollTop;

  // Calculate the distance to scroll to the top
  var scrollStep = -currentScroll / 20;

  // Define the interval function to scroll every 20 milliseconds
  var scrollInterval = setInterval(function(){
    // If already at the top, clear the interval and return
    if (document.body.scrollTop === 0 && document.documentElement.scrollTop === 0) {
      clearInterval(scrollInterval);
      return;
    }
    // Scroll by the scrollStep amount
    window.scrollBy(0, scrollStep);
  }, 30); // Adjust scroll speed by changing the interval duration
}


function myresume(){
  var ll='https://drive.google.com/file/d/1SBdmCRBcGDcM2KUBrtS8Nm-YMwIwe7Ns/view?usp=sharing';
  window.open(ll,'_blank');
}