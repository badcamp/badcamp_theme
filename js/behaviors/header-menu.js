(function (Drupal, $) {
  
  Drupal.behaviors.headerMenu = {
    attach: function (context) {
      // Hide submit session button from header menu when on session add form.
      var headerButtons = $("#block-header-menu ul.menu li a");

      $(context).find(headerButtons).each(function () {
          var buttonDest = $(this).attr("href");
          var submitPath = "/node/add/session";
          var currentPath = window.location.pathname;

          if (buttonDest == submitPath && currentPath == submitPath) {
            $(this).parent().hide();
          }
        });
    },
  };
})(Drupal, jQuery);
