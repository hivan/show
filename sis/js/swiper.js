define(function(require, exports, module) {
  var $ = require('seajq')
  require('swiper-3.3.1.jquery.min');
  var s = {};
  s.mySwiper = new Swiper('.swiper-container', {
    direction: 'vertical',
    loop: false,
    nextButton: '.swiper-button-next',
    watchSlidesProgress: true,
    watchSlidesVisibility: true,
    onSlideNextStart: function(swiper) {
      $('.next-page').hide();
    },
    onSlidePrevStart: function(swiper) {
      $('.next-page').hide();
      $('.btn-wrapper').show();
    }
  })

  s.SwiperHeight = function() {
    var height = $(window).height();
    $('.swiper-slide').css('height', height);
    $('.swiper-container').css('height', height);
  }

  module.exports = s;
})
