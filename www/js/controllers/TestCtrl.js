/**
 * Created by jupiterli on 1/02/2017.
 */


(function() {
  TrailsVictoria
    .controller("TestCtrl", function($scope, LogService, WeatherServiceService, MessageBoxService, GeoLocationService) {

      function log(content) {
        LogService.log(formatContent(content));
      }

      function warn(content) {
        LogService.warn(formatContent(content));
      }

      function error(content) {
        LogService.error(formatContent(content));
      }

      function debug(content) {
        LogService.debug(formatContent(content));
      }

      function formatContent (content) {
        return "TestCtrl: " + content;
      }

      /* ***********************************************************************************************
       *
       * public function
       *
       * ************************************************************************************************/
      $scope.init = function() {
        log("Start to init Test");

        $scope.title = "Test";

        log("Finished to init Test");

      };

      // WeatherConditionService
      $scope.getWeatherCondition = function () {
        WeatherServiceService.getWeatherCondition(-37.963517932221293, 144.40516792237759, function (weatherCondition) {
          MessageBoxService.showAlert(JSON.stringify(weatherCondition));
        }, function (errorMsg) {
          MessageBoxService.showAlert(errorMsg);
        });
      };

      // GeoLocationService
      $scope.getGeoLocation = function () {
        GeoLocationService.getGeoLocation(function (position) {
          MessageBoxService.showAlert(JSON.stringify(position))
        }, function (errorMsg) {
          MessageBoxService.showAlert(JSON.stringify(errorMsg))
        });
      }

    });
})();
