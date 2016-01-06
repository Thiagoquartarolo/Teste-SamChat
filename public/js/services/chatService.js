angular.module('chatService', []).factory('Chat', ['$http', function($http) {

    return {

        get : function() {
            return $http.get('/api/messages');
        },

        create : function(chatMessage) {
            return $http.post('/api/messages', chatMessage);
        }

    }

}]);
