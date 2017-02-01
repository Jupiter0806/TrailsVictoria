/**
 * Created by jupiterli on 28/01/2017.
 */

(function() {

  TrailsVictoria
    .service('MessageBoxService', ['LogService', '$ionicPopup', MessageBoxService]);

  function MessageBoxService(LogService, $ionicPopup) {


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
      return "MessageBoxService: " + content;
    }

    /* ***********************************************************************************************
     *
     * public function
     *
     * ************************************************************************************************/

    return {
      showAlert : function (message, title) {
        $ionicPopup.alert({
          title : title || '',
          template : message || 'Alert!'
        });
      },
      showConfirm : function (message, title) {
        return $ionicPopup.showConfirm({
          title : title || '',
          template : message || 'Confirm?'
        })
      },

      /**
       * @description
       *
       * This function is for testing purpose, only functional when in testing env
       *
       * */
      showTestAlertBox : function (message) {
        if (IS_TEST) {
          $ionicPopup.alert({
            title : 'Test info',
            template : message
          });
        }

      }
    }
  }

})();
