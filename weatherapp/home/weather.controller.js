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

      // use API key to pull in data from Open Weather Map
      vm.fetch = function(search){
        $http.get('http://api.openweathermap.org/data/2.5/weather?q=' + search + '&units=imperial&appid=' + vm.apiKey)
        .then(function(response){
          vm.weather = response.data;

          vm.history.push({
            name: response.data.name,
            timestamp: new Date()
          })
        });
      };
    }
  })();
