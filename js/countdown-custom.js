(function ($) {
    'use strict';

    var year = 2023;
    var month = 11;
    var date = 12;
    var time = 0;

    month = month - 1;
    jQuery(function () {
        jQuery('#defaultCountdown').countdown({ until: new Date(year, month, date, time) });
    });
})(jQuery);
