var newsBeats = angular.module('newsBeats', ['ui.router']);

newsBeats.config(function($stateProvider) {
  $stateProvider.state('home', {
    url: "",
    templateUrl: "partials/beats.html",
    controller: 'BeatsCtrl'
  });
});
