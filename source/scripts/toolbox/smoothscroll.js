/*
 * Title: Smooth Scroll
 * Description: Animate the scroll to an anchor on the page.
 * Author: Gavin Foster
 */

/**
 * Parameters:
 * - Target: A DOM node to scroll to, no default
 * - Offset: offset in px, default = 0
 * - Speed: speed in ms, default = 500
 * Usage: C.SmoothScroll.scroll(target, Offset, speed );
 */

var s,
SmoothScroll = {

    settings: {
        element : $('.js-smooth-scroll'),
        win : $(window),
        doc : $(document),
        html : $('html'),
        body : $('body'),
        speed : 500,
        offset : 0
    },

    init: function() {
        // assign all module settings
        s = this.settings;

        // bind all Module Events
        this.bindEvents();
    },

    bindEvents: function() {
        s.element.on('click', function(e) {
            e.preventDefault();
            var href = $(this).attr('href');
            SmoothScroll.scroll(href);
        });
    },
    scroll: function(target, offset, speed) {
        // Check if speed/offset is defined,
        // if not, use settings.speed/settings.offset
        speed = speed || s.speed;
        offset = offset || s.offset;

        var distance = parseInt($(target).offset().top);

        $("html, body").animate({
            scrollTop : distance - offset
        }, speed);
    }
};

module.exports = SmoothScroll;
