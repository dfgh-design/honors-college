/*
 * Title: Example Module
 * Description: Example of a modules with a binded event and a few functions.
 * Author: Gavin Foster
 */

var s,
Example = {

    settings: {
        node: $('.js-simple-math'),
        max: 5,
        min: 2
    },

    init: function() {
        // assign all module settings
        s = this.settings;

        // bind all Module Actions
        this.bindEvents();
    },

    bindEvents: function() {

        s.node.on('click', function(e) {
            e.preventDefault();
            Example.calc(s.max);
        });
    },

    calc: function(num) {
        console.log(num - s.min); // 5 - 2 = 3
    }
};

module.exports = Example;
