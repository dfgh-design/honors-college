var s,
Utils = {

    settings: {
        doc: $(document),
        win: $(window),
        size : {
            width : window.innerWidth || document.documentElement.clientWidth,
            height : window.innerHeight || document.documentElement.clientHeight
        },
        minScrollTime : 200,
        lastScrollFireTime : 0,
        scrollTimer : undefined
    },

    init: function() {
        s = this.settings;

        // bind all Module Actions
        this.bindEvents();
    },
    bindEvents: function() {

        // Bind fastclick
        try {
            attachFastClick(document.body);
        } catch (err) {
            console.log('attachFastClick failed');
        }

        // Bind any actions to the window
        s.win.on('resize', function() {
            Utils.resize();
        });
        s.win.on('scroll', function() {
            Utils.scrollThrottle();
        });
    },
    equalHeights: function(selector) {
        $(selector).attr('style', '');

        var h = Math.max.apply(Math, $.map($(selector),function(selector){
            return $(selector).height()
        }));

        $(selector).height(h);
    },
    resize: function() {

        s.size = {
            width : window.innerWidth || document.documentElement.clientWidth,
            height : window.innerHeight || document.documentElement.clientHeight
        };

        // Call other functions that need a resize
        s.win.trigger('carbon-resize');
        // C.SmoothScroll.resize();
    },
    scrollThrottle: function() {
        // throttle function to save performance on scroll
        // adjust settings.minScrollTime value to change how often the scroll event fires
        var now = new Date().getTime();

        if (!s.scrollTimer) {
            if (now - s.lastScrollFireTime > (3 * s.minScrollTime)) {

                Utils.fireScrollEvent();   // fire immediately on first scroll
                s.lastScrollFireTime = now;

            }
            s.scrollTimer = setTimeout(function() {

                s.scrollTimer = null;
                s.lastScrollFireTime = new Date().getTime();
                Utils.fireScrollEvent();

            }, s.minScrollTime);
        }
    },
    fireScrollEvent: function() {
        var scrollTop = s.doc.scrollTop();
        // console.log(scrollTop);

        s.win.trigger({
            type:'carbon-scroll',
            scrollTop: scrollTop
        });
    }
};

module.exports = Utils;
