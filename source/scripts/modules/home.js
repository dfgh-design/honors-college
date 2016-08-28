/*
 * Title: Example Module
 * Description: Example of a modules with a binded event and a few functions.
 * Author: Gavin Foster
 */

var s,
Home = {

    settings: {
        node: $('.quote-block'),
        slider: $('.main-block__slider'),
        sliderImages: $('.main-block__slider').find('li').length,
        sliderCount: 1
    },

    init: function() {
        // assign all module settings
        s = this.settings;

        // calculate height of quote block and sub elements that will be initally hidden
        s.hoverHeight = Home.getQuoteBlockHeight();
        // calculate initial height of quote block w/ sub blocks hidden
        s.initHeight = s.node.find('h3').outerHeight(true);
        s.node.height(s.initHeight);

        // run slider after 5 seconds
        setTimeout(this.slider, 5000);

        // bind all Module Actions
        this.bindEvents();
    },

    bindEvents: function() {

        s.node.hover(function(e) {
            s.node.animate({height: s.hoverHeight}, 500 );
        }, function(e){
            s.node.animate({height: s.initHeight})
        });
    },

    getQuoteBlockHeight: function(){
        var totalHeight = $('.quote-block h3').outerHeight(true);
        totalHeight += $('.quote-container').outerHeight(true);
        totalHeight += $('.sub-quote').outerHeight(true);

        return totalHeight;
    },

    slider: function(){
        console.log('slider');
        $('.main-block__slider li:nth-child('+s.sliderCount+')').fadeOut(1000);
        if(s.sliderCount < s.sliderImages){
            s.sliderCount++;
        } else {
            s.sliderCount = 1;
        }
        $('.main-block__slider li:nth-child('+s.sliderCount+')').fadeIn(1000);
        setTimeout(Home.slider, 6000);
    }
};

module.exports = Home;
