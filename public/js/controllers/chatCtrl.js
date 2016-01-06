angular.module('chatCtrl', []).controller('chatController', function($scope, Chat) {
  loadList();

  function loadList() {
    Chat.get()
    .then(function(data){
      $scope.chatList = data.data;
    });
  };

  $scope.create = function() {
    if($scope.chatMessage1 != undefined){
      message = {"chatMessage": $scope.chatMessage1, "user": "Usuário 1"};
      $scope.chatMessage1 = undefined;
    }else {
      message = {"chatMessage": $scope.chatMessage2, "user": "Usuário 2"};
      $scope.chatMessage2 = undefined;
    }

    Chat.create(message)
    .then(function() {
      console.log('Sucesso!');
      loadList();
    })
    .catch(function (err) {
      console.log(err);
    });
  };

});
