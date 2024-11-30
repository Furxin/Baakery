// Highlight the current navigation link
document.addEventListener('DOMContentLoaded', () => {
    // Get all navigation links
    const navLinks = document.querySelectorAll('.topnav a');
  
    // Get the current page's file name
    const currentPage = window.location.pathname.split('/').pop();
  
    // Loop through links to find the matching one
    navLinks.forEach(link => {
      if (link.getAttribute('href') === currentPage) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  });

  $(document).ready(function () {
    $(".contact a").on("click", function (event) {
      event.preventDefault();
      const url = $(this).attr("href");
      if (url) {
        window.location.href = url;
      }
    });
  });
  