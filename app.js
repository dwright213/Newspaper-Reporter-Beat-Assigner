var newsBeats = angular.module('newsBeats', ['ui.router']);

newsBeats.config(function($stateProvider) {
  $stateProvider.state('beats', {
    url: "",
    templateUrl: "partials/beats.html",
    controller: 'BeatsCtrl'
  });

  $stateProvider.state('beats.reporters', {
    url: "/:beatId",
    templateUrl: "partials/beats.reporters.html",
    controller: 'ReportersCtrl'
  });

});
