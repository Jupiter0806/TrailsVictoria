/**
 * Created by jupiterli on 1/02/2017.
 */

(function() {
  TrailsVictoria
    .factory("WeatherConditionFactory", ['LogService', 'PositionFactory', WeatherConditionFactory]);

  function WeatherConditionFactory(LogService, PositionFactory) {

    function WeatherCondition() {
      this._isWeatherConditionObject = true;

      this.position = PositionFactory.getInstance();

      this.minTemperature = 0;
      this.maxTemperature = 0;
      this.description = ''; // a brief description of this weather condition

      this.iconID = ''; // an id of icon to fetch associated icon
    }

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
      return "WeatherConditionFactory: " + content;
    }

    /* ***********************************************************************************************
     *
     * public function
     *
     * ************************************************************************************************/

    return {
      getInstance : function () {
        return new WeatherCondition();
      }
    }

  }

})();
