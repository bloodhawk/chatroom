var app = angular.module('twitterClone');

angular.module('twitterClone').filter('datetime', function($filter){
 return function(input){
  if(input == null){ return ""; } 
 
  var _date = $filter('date')(new Date(input), 'MMM dd yyyy - HH:mm:ss');
  return _date.toUpperCase();
 };
});


app.controller('mainCtrl', function($scope, parseService){
  $scope.getParseData = function(){
     var param;
     param = ($scope.ascDsc) ? '' : '-';
     parseService.getData(param).then(function(data){
        $scope.messages = data.data.results;
     });  
      
     
  };
  $scope.postData = function(){
      parseService.postData($scope.message);
      $scope.message = '';
  };

  $scope.changer = function(){
    $scope.ascDsc = !$scope.ascDsc;
  }

  $scope.ascDsc = false;

  setInterval(function(){
    $scope.getParseData();
  }, 1000);
});