/*
 * Title: Example Module
 * Description: Example of a modules with a binded event and a few functions.
 * Author: Gavin Foster
 */

var s,
StaffGrid = {

    settings: {
        staff: $('.card-staff'),
        info: $('.card-staff__info'),
        header: $('.card-staff__header'),
        headerName: $('.card-staff__header h3')
    },

    init: function() {
        // assign all module settings
        s = this.settings;

        // bind all Module Actions
        this.bindEvents();

        s.staff.each(function(){
          var initHeight = $(this).find('h3').height() + 13;
          var name = $('.card-staff__info h3' , this).text();
          $('.card-staff__info', this).height($('h3' , this).height() + 13);
        });
    },

    bindEvents: function() {

        s.staff.hover(function(e) {
          var hoverHeight = $('.card-staff__info', this).height();
          hoverHeight += $('.card-staff__info p.bio', this).outerHeight();
          hoverHeight += $('.card-staff__info a', this).height();
            e.preventDefault();
            $('.card-staff__info', this).height(hoverHeight);
        }, function(){
          var initHeight = $('h3', this).height() + 13;
          $('.card-staff__info', this).height(initHeight);
        });
        // window.addEventListener("resize", function(){
        //   StaffGrid.init();
        // });
    },

};

module.exports = StaffGrid;
