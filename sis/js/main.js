define(function(require, exports, module) {
  var $ = require('seajq');
  require.async('swiper-3.3.1.jquery.min');

  var index = require.async('index', function(index_callback) {

  });

  var swiper = require.async('swiper', function(swiper_callback) {
    swiper_callback.SwiperHeight();
  });

  var play = require.async('go', function(go_callback) {
    go_callback.play();
  });

  var loded = require.async('loding', function(lod_callback) {
    lod_callback.AllLoaded();
  })
})
