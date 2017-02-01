/**
 * Created by jupiterli on 1/02/2017.
 */


(function() {

  TrailsVictoria
    .service('WeatherServiceService', ['LogService', '$http', 'WeatherConditionFactory', WeatherServiceService]);

  function WeatherServiceService(LogService, $http, WeatherConditionFactory) {


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
      return "WeatherServiceService: " + content;
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
       * Get weather icon url
       * */
      getWeatherIconUrlByIconID : function (iconID) {
        return "http://openweathermap.org/img/w/" + iconID + ".png";
      },
      /**
       * @description
       *
       * Get weather condition by latitude and longitude
       *
       * http get Sample success callback
       *
       * {
       *    "coord":{
       *      "lon":144.4,
       *      "lat":-38.02
       *    },
       *
       *    "weather":[
       *      {
       *        "id":802,
       *        "main":"Clouds",
       *        "description":"scattered clouds",
       *        "icon":"03n"
       *      }
       *    ],
       *
       *    "base":"stations",
       *
       *    "main":{
       *      "temp":12.8,
       *      "pressure":1010.94,
       *      "humidity":83,
       *      "temp_min":12.8,
       *      "temp_max":12.8,
       *      "sea_level":1027.95,
       *      "grnd_level":1010.94
       *    },
       *
       *    "wind":{
       *      "speed":3.01,
       *      "deg":244.5
       *    },
       *
       *    "clouds":{
       *      "all":32
       *    },
       *
       *    "dt":1485959748,
       *
       *    "sys":{
       *      "message":0.0117,
       *      "country":"AU",
       *      "sunrise":1485891371,
       *      "sunset":1485941718
       *    },
       *
       *    "id":2160560,
       *    "name":"Lara",
       *    "cod":200
       *  }
       * */
      getWeatherCondition : function (lat, lng, onSuccess, onError) {
        $http.get('http://api.openweathermap.org/data/2.5/weather?APPID=4e21edb947657f98fa8634b6823a343a&lat=' + lat + '&lon=' + lng + '&units=metric').success(function(data) {
          if (data && data.main) {
            debug("Get weather condition success callback " + JSON.stringify(data));
            var weatherCondition = WeatherConditionFactory.getInstance();
            weatherCondition.position.lat = lat;
            weatherCondition.position.lng = lng;
            weatherCondition.minTemperature = data.main.temp_min;
            weatherCondition.maxTemperature = data.main.temp_max;
            weatherCondition.description = data.weather[0].description;
            weatherCondition.iconID = data.weather[0].icon;
            onSuccess(weatherCondition);
          } else {
            onError("Error occurred, please try again.");
          }
        });

        }
    }
  }

})();
