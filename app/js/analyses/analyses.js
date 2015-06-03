'use strict';

define(function (require) {
  var angular = require('angular');
  var dependencies = [];

  return angular.module('gemtc.analyses', dependencies)
    // controllers
    .controller('AnalysesController', require('analyses/analysesController'))
    .controller('AnalysisController', require('analyses/analysisController'))
    .controller('AddAnalysisController', require('analyses/addAnalysisController'))

    // resources
    .factory('AnalysesResource', require('analyses/analysesResource'))

    ;
});
