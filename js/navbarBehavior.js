$(document).ready(function () {
    const HIDDEN = '-50px';
    const $navbar = $('.navbar');
    const $window = $(window);
    $window.scroll(function () {
        if ($window.scrollTop() <= 360)
        {
            if ($window.scrollTop() == 0)
                $navbar.css('position', 'relative');
            else
                $navbar.css('position', 'fixed');
            $navbar.css('top', -$window.scrollTop() >> 3);
        }
        else
            $navbar.css('top', HIDDEN);
    });

    $navbar.hover(
        function () {
            if ($navbar.css('top') < '0px')
                $navbar.animate({ top: '0px' }, 500, 'swing');
        },
        function () {
            if ($navbar.css('top') > HIDDEN)
                $navbar.delay("fast").animate({ top: $window.scrollTop() <= 360 ? -$window.scrollTop() >> 3 : HIDDEN }, 500, 'swing');
        }
    );
});