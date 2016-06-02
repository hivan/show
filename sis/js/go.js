define(function(require, exports, module) {
  var $ = require('seajq');
  require('swiper-3.3.1.jquery.min');
  var e = require('element');
  var media = require('media');
  var swiper = require('swiper')

  myPlay = media;
  mySwiper = swiper.mySwiper;
  
  var g = {};

  g.play = function() {
    $('.play').on('touchend', function() {
      var t = this;
      var video = $(t).parents('.scene-wrapper').find('video');
      $(audio).trigger('play');
      mySwiper.lockSwipes();
      video.oncanplay = setTimeout(function() {
        $(video).trigger('play');
      }, 1800);
      video.on('ended', function() {
        $(t).parents('.scene-move').css({
          'top': 116
        })
        $(t).parents('.scene-move').children('.scene-gear').css({
          'transform': 'rotate(0deg)'
        });
        $(audio).trigger('play');
        $('.next-page').show(200);
        mySwiper.unlockSwipes();
      });

      $(t).parents('.scene-move').css({
        'top': (247 + 116)
      });

      $(t).parents('.scene-move').children('.scene-gear').css({
        'transform': 'rotate(270deg)'
      });

      $(t).parent('.btn-wrapper').hide(200);
      $(audio).trigger('play');
    });
  }

  module.exports = g;
})
