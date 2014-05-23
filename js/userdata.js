angular.module('userdata', [])


.factory('Users', function() {

    var userList = [{
        id: 1
        ,username: "Honczec"
        ,email: "klaus.reller@web.de"
        ,avatar: "img/Aha-Soft-Free-Large-Boss-Professor.png"
        ,highscore: 54321
        ,timetoanswer: 1.3
        ,correctanswers: 10
        ,wins: 5
    },{
        id: 2
        ,username: "Ugly Guy"
        ,email: "uglyguy@web.de"
        ,avatar: "img/Designbolts-Despicable-Me-2-Minion-Amazed.png"
        ,highscore: 54321
        ,timetoanswer: 3.3
        ,correctanswers: 10
        ,wins: 5
    },{
        id: 3
        ,username: "Doc America"
        ,email: "docamerica@web.de"
        ,avatar: "img/america.png"
        ,highscore: 54321
        ,timetoanswer: 2.3
        ,correctanswers: 10
        ,wins: 5
    },{
        id: 4
        ,username: "Superman"
        ,email: "superman@web.de"
        ,avatar: "img/superman.png"
        ,highscore: 54321
        ,timetoanswer: 2.3
        ,correctanswers: 10
        ,wins: 5
    },{
        id: 5
        ,username: "THE King"
        ,email: "king@web.de"
        ,avatar: "img/king.png"
        ,highscore: 54321
        ,timetoanswer: 2.3
        ,correctanswers: 10
        ,wins: 5
    },{
        id: 6
        ,username: "Just a woman"
        ,email: "woman@web.de"
        ,avatar: "img/woman.png"
        ,highscore: 54321
        ,timetoanswer: 2.3
        ,correctanswers: 10
        ,wins: 5
    },{
        id: 7
        ,username: "Minioooonn!!"
        ,email: "minion@web.de"
        ,avatar: "img/Designbolts-Despicable-Me-2-Minion-Amazed.png"
        ,highscore: 54321
        ,timetoanswer: 2.3
        ,correctanswers: 10
        ,wins: 5
    }];
    
    var currUserId = 1;
    var currCompUserId = 2;
    
    var findUser = function (userId) {
            return userList.filter(function(userItem) { return userItem.id == userId; })[0];
    };
    
    return {
    
        increaseHighscore: function (player) {
            ++player.correctanswers;
        }
        
        ,getUserSelection: function (selParams) {
            return userList;
        }
    
        ,getCurrUser: function () {
            return findUser(currUserId);
        }
        
        ,getCompUser: function () {
            return findUser(currCompUserId);
        }
        
        ,setCompUser: function (userIdx) {
            currCompUserId = userIdx + 1;
        }
    }
});

