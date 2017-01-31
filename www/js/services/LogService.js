/**
 * Created by jupiterli on 28/01/2017.
 */


(function() {

  TrailsVictoria
    .service('LogService', [LogService]);

  function LogService() {

    function formatContent (content) {
      return content + " -- " + moment().format('Do MMMM YYYY, h:mm:ss a');
    }

    /* ***********************************************************************************************
     *
     * public function
     *
     * ************************************************************************************************/

    return {
      log :function (content) {
        console.log(formatContent(content));
      },
      error : function (content) {
        console.error(formatContent(content));
      },
      warn : function (content) {
        console.log("WARN: " + formatContent(content));
      },
      /**
       * @description
       *
       * IOS does not recognise console.debut();
       * */
      debug : function (content) {
        // console.debug(formatContent(content));
        console.log("DEBUG: " + formatContent(content));
      }
    }
  }

})();
