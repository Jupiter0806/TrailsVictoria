/**
 * Created by jupiterli on 1/02/2017.
 *
 * Geolocation position
 */

(function() {
  TrailsVictoria
    .factory("PositionFactory", ['LogService', PositionFactory]);

  function PositionFactory(LogService) {

    function Position() {
      this._isPositionObject = true;

      this.lat = 0;
      this.lng = 0;
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
      return "PositionFactory: " + content;
    }

    /* ***********************************************************************************************
     *
     * public function
     *
     * ************************************************************************************************/

    return {
      getInstance : function () {
        return new Position();
      }
    }

  }

})();

