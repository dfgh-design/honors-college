/*
 * Title: Example Module
 * Description: Example of a modules with a binded event and a few functions.
 * Author: Gavin Foster
 */

var hc,
Nav = {

    settings: {
        node: $('.main-nav__node--menu'),
        nav: $('nav'),
        menu: $('.main-nav'),
        site: $('.site'),
        backButton: $('.sub-nav__node.--back'),
        mobileNavItem: '.--mobile-active .main-nav__node',
        mobileMenuClass: '--mobile-active',
        activeMainItem: '--active',
        lockView: 'lock-view',
        mobileSubMenuClass: '--mobile-sub-active',
    },

    init: function() {
        // assign all module settings
        hc = this.settings;

        // bind all Module Actions
        this.bindEvents();
    },

    bindEvents: function() {
        // menu click shows mobile nav
        hc.node.on('click', function(e) {
            e.preventDefault();
            hc.nav.toggleClass(hc.mobileMenuClass);
            hc.nav.removeClass(hc.mobileSubMenuClass);
            hc.site.toggleClass(hc.lockView);
        });
        // click mobile nav item show mobile subnav
        $(document).on('click', hc.mobileNavItem, function(e){
            e.preventDefault();

            // get position of list item clicked to select subnav to show
            var pos = $('.main-nav__node').index(this) + 1;
            // unselect any previously selected subnav
            $('.--selected').removeClass('--selected');
            $('.sub-nav__nodes:nth-child('+ pos +')').addClass('--selected');
            hc.nav.toggleClass(hc.mobileSubMenuClass);
            $('.--active').removeClass('--active');
            $(this).addClass('--active');
        });

        hc.backButton.on('click', function(e){
            hc.nav.removeClass(hc.mobileSubMenuClass);
        });
    },
};

module.exports = Nav;

