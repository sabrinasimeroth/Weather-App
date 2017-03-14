(function() {
    'use strict';

    angular
      .module('app')
      .controller('homeController', homeController);

    homeController.$inject = ['$http'];

    function homeController($http){
      var vm = this;
      vm.history = [];
      vm.apiKey = '519889fb71f27909ea9936375edcae8f';
      vm.search = '';

      vm.fetch = function(){
        $http.get('http://api.openweathermap.org/data/2.5/weather?q=' + vm.search + '&APPID=' + vm.apiKey)
        .then(function(response){
          vm.weather = response.data;
        });
      };

    }
  })();
