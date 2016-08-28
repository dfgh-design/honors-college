// Add all plugins at the top
$ = window.jQuery;
_ = require('lodash');
attachFastClick = require('fastclick');  // requires utils.js

// Create 'HC' in the global namespace,
// and wrap all modules in the HC namespace
HC = {
    Utils: require('./utils/utils.js'),
    SmoothScroll : require('./toolbox/smoothscroll.js'),
    Example : require('./modules/example.js'),
    ExampleSimple : require('./modules/example-simple.js'),
    Nav : require('./modules/nav.js'),
    // Home: require('./modules/home.js'),
    StaffGrid: require('./modules/staff-grid.js'),
    Slider: require('./modules/slider.js')
}

function initializeHC() {

    // Initialize Modules
    HC.Utils.init();
    HC.SmoothScroll.init();
    HC.Example.init();
    HC.ExampleSimple.init();
    HC.Nav.init();
    HC.StaffGrid.init();
    // HC.Home.init();
    HC.Slider.init();

};

// Uncomment for  < IE10 Support
$(document).ready(function() {
initializeHC();
});

window.HC = HC;
