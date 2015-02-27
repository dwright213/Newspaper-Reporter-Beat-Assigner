newsBeats.controller('ReportersCtrl', function ReportersCtrl($scope, $stateParams, BeatsFactory, UtilitiesFactory) {
  $scope.beat = UtilitiesFactory.findById(BeatsFactory.beats, $stateParams.beatId)
  $scope.addReporter = function() {
    $scope.beat.reporters.push({ name: $scope.reporterName, tenure: $scope.reporterTenure, birthdate: $scope.reporterBday });
    $scope.reporterName = null;
    $scope.reporterTenure = null;
    $scope.reporterBday = null;
  }
  $scope.clicked = $stateParams.beatId;
});
