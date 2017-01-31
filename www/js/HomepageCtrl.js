/**
 * Created by jupiterli on 31/01/2017.
 */


(function() {
  TrailsVictoria
    .controller("HomepageCtrl", function($scope, LogService) {

      // trail difficulty slider available options
      var TRAIL_DIFFICULTY_OPTIONS = [
        TRAIL_DIFFICULTIES.VERY_EASY,
        TRAIL_DIFFICULTIES.EASY,
        TRAIL_DIFFICULTIES.MODERATE,
        TRAIL_DIFFICULTIES.DIFFICULT,
        TRAIL_DIFFICULTIES.MORE_DIFFICULT,
        TRAIL_DIFFICULTIES.VERY_DIFFICULT
      ];

      // search options
      $scope.inputs = {
        searchOptions : {
          activities : {
            isWalkingSelected : true,
            isCyclingSelected : false,
            isMountainBikingSelected : false,
            isHorseRidingSelected : false
          },
          anotherOptions : {
            sliders : {
              time : {
                from : 2,
                to : 5
              },
              length : {
                from : 10,
                to : 50
              },
              difficulty : {
                from : 2,
                to : 4
              }
            }
          }
        }
      };


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
        return "HomepageCtrl: " + content;
      }

      /* ***********************************************************************************************
       *
       * slider callback function
       *
       * ************************************************************************************************/
      function drivingTimeSliderCallback(data) {
        $scope.inputs.searchOptions.anotherOptions.sliders.time.from = data.from;
        $scope.inputs.searchOptions.anotherOptions.sliders.time.to = data.to;
      }
      function trailLengthSliderCallback(data) {
        $scope.inputs.searchOptions.anotherOptions.sliders.length.from = data.from;
        $scope.inputs.searchOptions.anotherOptions.sliders.length.to = data.to;
      }
      function trailDifficultySliderCallback(data) {
        $scope.inputs.searchOptions.anotherOptions.sliders.difficulty.from = data.from;
        $scope.inputs.searchOptions.anotherOptions.sliders.difficulty.to = data.to;
      }

      /* ***********************************************************************************************
       *
       * searching options collect function
       *
       * ************************************************************************************************/
      /**
       * @description
       *
       * Return an array of selected activity(s)
       * */
      function getSelectedActivities() {
        var activities = [];

        if ($scope.inputs.searchOptions.activities.isWalkingSelected) {
          activities.push(TRAIL_ACTIVITIES.WALKING);
        }
        if ($scope.inputs.searchOptions.activities.isCyclingSelected) {
          activities.push(TRAIL_ACTIVITIES.CYCLING);
        }
        if ($scope.inputs.searchOptions.activities.isMountainBikingSelected) {
          activities.push(TRAIL_ACTIVITIES.MOUNTAIN_BIKING);
        }
        if ($scope.inputs.searchOptions.activities.isHorseRidingSelected) {
          activities.push(TRAIL_ACTIVITIES.HORSE_RIDING);
        }

        return activities
      }

      /**
       * @description
       *
       * Return an array of selected difficulties
       * */
      function getSelecteDifficulties() {
        var difficulties = [];

        for ( var i = $scope.inputs.searchOptions.anotherOptions.sliders.difficulty.from;
              i <= $scope.inputs.searchOptions.anotherOptions.sliders.difficulty.to;
              i++) {
          difficulties.push(TRAIL_DIFFICULTY_OPTIONS[i]);
        }

        return difficulties;
      }

      /* ***********************************************************************************************
       *
       * public function
       *
       * ************************************************************************************************/
      $scope.init = function() {
        log("Start to init Homepage");

        $scope.title = "Home";

        // initialise sliders
        log("Initialise sliders.");
        // Driving Time
        $('#rangeDrivingTime').ionRangeSlider({
          hide_min_max : true,
          min : 0,
          max : 10,
          from : $scope.inputs.searchOptions.anotherOptions.sliders.time.from,
          to : $scope.inputs.searchOptions.anotherOptions.sliders.time.to,
          type : 'double',
          step : 1,
          postfix : 'hrs',
          onStart : drivingTimeSliderCallback,
          onChange : drivingTimeSliderCallback,
          onFinish : drivingTimeSliderCallback
        });

        // Trail Length
        $('#rangeTrailLength').ionRangeSlider({
          hide_min_max : true,
          min : 0,
          max : 250,
          from : $scope.inputs.searchOptions.anotherOptions.sliders.length.from,
          to : $scope.inputs.searchOptions.anotherOptions.sliders.length.to,
          type : 'double',
          step : 1,
          postfix : 'km',
          onStart : trailLengthSliderCallback,
          onChange : trailLengthSliderCallback,
          onFinish : trailLengthSliderCallback
        });

        // Trail Difficulty
        $('#rangeTrailDifficulty').ionRangeSlider({
          hide_min_max : true,
          values : TRAIL_DIFFICULTY_OPTIONS,
          from : $scope.inputs.searchOptions.anotherOptions.sliders.difficulty.from,
          to : $scope.inputs.searchOptions.anotherOptions.sliders.difficulty.to,
          type : 'double',
          step : 1,
          onStart : trailDifficultySliderCallback,
          onChange : trailDifficultySliderCallback,
          onFinish : trailDifficultySliderCallback
        });

        log("Finished to init Homepage");

      };

      // img url
      $scope.ACTIVITY_ICON_CYCLING = ACTIVITY_ICON_CYCLING;
      $scope.ACTIVITY_ICON_HORSE_RIDING = ACTIVITY_ICON_HORSE_RIDING;
      $scope.ACTIVITY_ICON_MOUNTAIN_BIKING = ACTIVITY_ICON_MOUNTAIN_BIKING;
      $scope.ACTIVITY_ICON_WALKING = ACTIVITY_ICON_WALKING;

      // Search function
      $scope.search = function () {
        // About to search, collect searching options
        log("About to search, collect searching options");
        var selectedActivities = getSelectedActivities();
        var selectedDifficulties = getSelecteDifficulties();
        var selectedDrivingTime = $scope.inputs.searchOptions.anotherOptions.sliders.time;
        var selectedTrailLength = $scope.inputs.searchOptions.anotherOptions.sliders.length;

        log("Searching options are: Activities: " + JSON.stringify(selectedActivities)
              + "Difficulties: " + JSON.stringify(selectedDifficulties)
              + " DrivingTime: " + JSON.stringify(selectedDrivingTime)
              + " TrailLength: " + JSON.stringify(selectedTrailLength));
      }

    });
})();
