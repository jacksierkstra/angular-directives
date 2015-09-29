(function() {
  'use strict';

  angular.module('MyDirectiveApp', [])
  .controller('PersonCardController', ['$scope', function ($scope){

    $scope.person = {
      name : 'Jack Sierkstra',
      description : 'A short description goes here.',
      imgUrl : 'https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/73.jpg',
      twitterUrl : 'https://twitter.com/maridlcrmn',
      backgroundCoverImgUrl : 'https://ununsplash.imgix.net/26/camera-keys.jpg?q=75&fm=jpg&s=b919d3158053cde8e9f0e37b4876c14f'
    };

    $scope.persons = [
      {
        name : 'Jack Sierkstra',
        description : 'A short description goes here.',
        imgUrl : 'https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/73.jpg',
        twitterUrl : 'https://twitter.com/maridlcrmn',
        backgroundCoverImgUrl : 'https://ununsplash.imgix.net/26/camera-keys.jpg?q=75&fm=jpg&s=b919d3158053cde8e9f0e37b4876c14f'
      },
      {
        name : 'Jack Sierkstra',
        description : 'This a boilerplate person',
        imgUrl : 'https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/73.jpg',
        twitterUrl : 'https://twitter.com/maridlcrmn',
        backgroundCoverImgUrl : 'https://ununsplash.imgix.net/19/waves.JPG?q=75&fm=jpg&s=6f316bc8e1dc9887a7cebe0841096e99'
      },
      {
        name : 'Jack Sierkstra',
        description : 'This a boilerplate person',
        imgUrl : 'https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/73.jpg',
        twitterUrl : 'https://twitter.com/maridlcrmn',
        backgroundCoverImgUrl : 'https://unsplash.imgix.net/12/barley.jpg?q=75&fm=jpg&s=f39de5ca1970a13dbe6af6c86b3c47ec'
      },
      {
        name : 'Jack Sierkstra',
        description : 'This a boilerplate person',
        imgUrl : 'https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/73.jpg',
        twitterUrl : 'https://twitter.com/maridlcrmn',
        backgroundCoverImgUrl : 'https://unsplash.imgix.net/41/bXoAlw8gT66vBo1wcFoO_IMG_9181.jpg?q=75&fm=jpg&s=a760fd82863937c841f4b3870cdef011'
      }
    ];

  }])
  .directive('personCard', function(){
    return {
      templateUrl : 'templates/personCard.htm'
    };
  });
})();
