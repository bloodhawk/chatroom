var app = angular.module('twitterClone');

app.service('parseService', function($http, $q){
  this.postData = function(data){
    $http.post('https://api.parse.com/1/classes/chat', {text: data});
  };
  this.getData = function(param){
    return $http.get('https://api.parse.com/1/classes/chat?order='+param+'createdAt');
  };  
});