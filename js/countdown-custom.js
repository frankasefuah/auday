(function($) {	
	'use strict';
    
    var year = 2023;
    var month = 8;
    var date = 9;
    var time = 0;
    
    month = month - 1;
    jQuery(function () {
        jQuery('#defaultCountdown').countdown({until: new Date(year, month, date, time)});
    });
})(jQuery);

