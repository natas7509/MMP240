$(window).scroll(function() {
  var wScroll = $(this).scrollTop();

  // Landing Elements
  if (wScroll > $(".vendor-pics").offset().top - $(window).height() / 0.8) {
    $(".vendor-pics figure").each(function(i) {
      setTimeout(function() {
        $(".vendor-pics figure")
          .eq(i)
          .addClass("is-showing");
      }, 300 * Math.exp(i * 0.14) - 300);
    });
  }

  // Promoscope
  if (wScroll > $(".large-window").offset().top - $(window).height()) {
    $(".large-window").css({
      "background-position":
        "center " + (wScroll - $(".large-window").offset().top) + "px"
    });

    var opacity =
      (wScroll - $(".large-window").offset().top + 400) / (wScroll / 5);

    $(".window-tint").css({ opacity: opacity });
  }
});
