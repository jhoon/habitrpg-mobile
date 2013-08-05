'use strict';

habitrpg.controller('NotificationCtrl',
  ['$scope', 'Notification',
  function ($scope, Notification) {
    $scope.data = Notification.get();

    //FIXME replace with ngSwipe, but I don't know how to bind that
    $('#notification').bind('touchend.swipe', function (event) {
        Notification.clearTimer();
        Notification.hide();
    });

  }
]);
