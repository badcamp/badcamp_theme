(function (Drupal, $) {
  Drupal.behaviors.foundation = {
    attach: function (context) {
      $(context).foundation();
    },
  };

  Drupal.behaviors.sponsorship = {
    attach: function (context) {
      $(context)
        .find(".sponsorship-table td")
        .each(function () {
          if ($(this).is(':contains("•")')) {
            $(this).html("<span class='visually-hidden'>yes</span>");
            $(this).addClass("table-bullet");
          }
        });
    },
  };

  Drupal.behaviors.sponsorLogos = {
    attach: function (context) {
      // Remove link from in-kind sponsor logos.
      var inKindLogo = $(".views-group--sponsors.in-kind-sponsor .sponsors-logo");

      $(context)
        .find(inKindLogo)
        .each(function () {
          $(this).find("img").unwrap();
        });
    },
  };

  Drupal.behaviors.sessionSubmission = {
    attach: function (context) {
      // Hide submit session button from header menu when on session add form.
      var headerButtons = $("#block-header-menu ul.menu li a");

      $(context)
        .find(headerButtons)
        .each(function () {
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
