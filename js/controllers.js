angular.module('starter.controllers', ['quizdata', 'userdata'])

.controller('AppCtrl', function($scope) {
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
})

.controller('ChampionshipCtrl', function($scope, Questions, Users) {

    // Congratulations, Klaus! This is well refactored/trimmed.
    
    $scope.currPlayer = Users.getCurrUser();
    $scope.compPlayer = Users.getCompUser();

    $scope.currQuiz = Questions.getCurrQuiz();
    
    // ng-click on an answer
    $scope.setUserAnswer = function (answerIdx) {
        if (Questions.setCurrQuizAnswer(answerIdx) == true) { //correct answer }
            Users.increaseHighscore($scope.currPlayer);
        }
    }

    // ng-click next button in footer
    $scope.setNextQuiz = function () {
        Questions.setNextQuiz();
        $scope.currQuiz = Questions.getCurrQuiz();
    }
})

.controller('UserselectionCtrl', function($scope, Users) {

    $scope.userSelection = Users.getUserSelection('');
    
    // ng-click on an selection
    $scope.setSelectedUser = function (userIdx) {
        return Users.setCompUser(userIdx);
    };

})
