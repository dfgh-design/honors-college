 // Flickity carousel for home page
 var Slider = {
   init: function(){
     var $carousel = $('.main-block__slider').flickity({
       autoPlay: 3500,
       wrapAround: true,
       cellSelector: 'li',
     });
   }
 }

 module.exports = Slider;
