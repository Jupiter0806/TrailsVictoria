/**
 * Created by jupiterli on 1/02/2017.
 */


(function() {

  TrailsVictoria
    .service('GeoLocationService', ['LogService', 'PositionFactory', GeoLocationService]);

  function GeoLocationService(LogService, PositionFactory) {


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
      return "GeoLocationService: " + content;
    }

    /* ***********************************************************************************************
     *
     * public function
     *
     * ************************************************************************************************/

    return {
      /**
       * @description
       *
       * Get current geo location
       *
       * navigator.geolocation.getCurrentPosition Sample success callback
       *
       * {
       *  coords : {
       *    accuracy : 1155531,
       *    altitude : null,
       *    altitudeAccuracy : null,
       *    heading : null,
       *    latitude : 36.204823999999995,
       *    longitude : 138.252924,
       *    speed : null
       *  },
       *  timestamp : 1485961129782
       * }
       *
       * */
      getGeoLocation : function (onSuccess, onError) {
        navigator.geolocation.getCurrentPosition(function (res) {
          debug("getGeoLocation success callback " + JSON.stringify(res));
          var position = PositionFactory.getInstance();
          position.lat = res.coords.latitude;
          position.lng = res.coords.longitude;
          onSuccess(position);
        }, onError)
      }
    }
  }

})();
