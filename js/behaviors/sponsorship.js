(function (Drupal, $) {

  Drupal.behaviors.sponsorship = {
    attach: function (context) {

      // Add bullets to sponsorship table.
      $(context)
        .find(".sponsorship-table td")
        .each(function () {
          if ($(this).is(':contains("•")')) {
            $(this).html("<span class='visually-hidden'>yes</span>");
            $(this).addClass("table-bullet");
          }
        });
      
      
      // Remove link from in-kind sponsor logos.
      var inKindLogo = $(".views-group--sponsors.in-kind-sponsor .sponsors-logo");

      $(context).find(inKindLogo).each(function () {
        $(this).find("img").unwrap();
      });
    },
  };

  

  
})(Drupal, jQuery);
