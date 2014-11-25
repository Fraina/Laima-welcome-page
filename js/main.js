requirejs.config({

  paths: {
    jquery: 'bower/jquery/dist/jquery.min',
    underscore: 'bower/lodash/dist/lodash.underscore.min',
    backbone: 'bower/backbone/backbone',
    i18n: 'bower/requirejs-i18n/i18n',
    text: 'bower/requirejs-text/text',
    backstretch: 'bower/jquery-backstretch/jquery.backstretch.min'
  },

  shim: {
    underscore: {
      exports: '_'
    },

    backbone: {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    },

    backstretch: {
      deps: ['jquery']
    }
  }
});

require([
  'jquery',
  'underscore',
  'backbone',
  'backstretch'
], function ($, _, Backbone) {

  'use strict';

  // -----------------------------------
  //  Welcome page
  // -----------------------------------

  var $bgList = $('.bgChanger-list li'),
    $phoneScreen = $('.content-phoneScreenBg');

  $.ajax('/qrcode', {
    success: function (data) {
      $('.qrcode').html(data);
    },
    error: function() {
       $('.qrcode').html('<img src="img/qrcode_error.jpg">');
    }
  });
  $bgList.click(function(){
    $.backstretch($(this).attr('data-bg'));
    $phoneScreen.backstretch($(this).attr('data-bg'));
  });

  $.backstretch($bgList.first().attr('data-bg'));
  $phoneScreen.backstretch($bgList.first().attr('data-bg'));
  // ----------------------------------

  Backbone.history.start();
});
