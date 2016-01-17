$(document).ready(function() {

  'use strict';
  var _winHeight = $( window ).height();
  var _headerHeight = $('#android-header').height();
  $('.gameplan-jumbotron').css('min-height', (_winHeight - _headerHeight) + 'px');
  console.log((_winHeight - _headerHeight));
});