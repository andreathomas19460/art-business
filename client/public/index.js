/*----------------------------------------------------*/
/* Hide User Drop Down when click away
------------------------------------------------------ */

$(document).ready(function () {
  let userMenu = $(".header-user-dropdown .header-user-menu");

  userMenu.on("touchend", function (e) {
    userMenu.addClass("show");

    e.preventDefault();
    e.stopPropagation();
  });

  // This code makes the user dropdown work on mobile devices

  $(document).on("touchend", function (e) {
    // If the page is touched anywhere outside the user menu, close it
    userMenu.removeClass("show");
  });
});

/*----------------------------------------------------*/
/* Smooth Scrolling
------------------------------------------------------ */

$(".smoothscroll").on("click", function (e) {
  e.preventDefault();

  var target = this.hash,
    $target = $(target);

  $("html, body")
    .stop()
    .animate(
      {
        scrollTop: $target.offset().top,
      },
      800,
      "swing",
      function () {
        window.location.hash = target;
      }
    );
});
