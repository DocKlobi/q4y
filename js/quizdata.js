angular.module('quizdata', [])


.factory('Questions', function() {

    var quizCatalog = [
        {id: 1
        ,question: "What does HTML stand for?"
        ,answers: [
            {answer: "Home Tool Markup Language", check: false, sel: false}
            ,{answer: "Hyper Text Markup Language", check: true, sel: false}
            ,{answer: "Hyperlinks and Text Markup Language", check: false, sel: false}
        ]}
        ,{id: 2
        ,question: "Who is making the Web standards?"
        ,answers: [
            {answer: "Mozilla", check: false, sel: false}
            ,{answer: "Google", check: false, sel: false}
            ,{answer: "Microsoft", check: false, sel: false}
            ,{answer: "The World Wide Web Consortium", check: true, sel: false}
        ]}
        ,{id: 3
        ,question: "Choose the correct HTML tag for the largest heading"
        ,answers: [
            {answer: "<heading>", check: false, sel: false}
            ,{answer: "<h1>", check: true, sel: false}
            ,{answer: "<h6>", check: false, sel: false}
            ,{answer: "<head>", check: false, sel: false}
        ]}
        ,{id: 4
        ,question: "Inside which HTML element do we put the JavaScript?"
        ,answers: [
            {answer: "<js>", check: false, sel: false}
            ,{answer: "<javascript>", check: false, sel: false}
            ,{answer: "<script>", check: true, sel: false}
            ,{answer: "<scripting>", check: false, sel: false}
        ]}
        ,{id: 5
        ,question: "How do you write \"Hello World\" in an alert box?"
        ,answers: [
            {answer: "alertBox(\"Hello World\");", check: false, sel: false}
            ,{answer: "msg(\"Hello World\");", check: false, sel: false}
            ,{answer: "msgBox(\"Hello World\");", check: false, sel: false}
            ,{answer: "alert(\"Hello World\");", check: true, sel: false}
        ]}
        ,{id: 6
        ,question: "How do you create a function in JavaScript?"
        ,answers: [
            {answer: "function:myFunction()", check: false, sel: false}
            ,{answer: "function myFunction()", check: true, sel: false}
            ,{answer: "function = myFunction()", check: false, sel: false}
        ]}
        ,{id: 7
        ,question: ""
        ,answers: [
            {answer: "", check: false, sel: false},
            ,{answer: "", check: false, sel: false}
            ,{answer: "", check: false, sel: false}
            ,{answer: "", check: true, sel: false}
        ]}
        ,{id: 8
        ,question: ""
        ,answers: [
            {answer: "", check: false, sel: false},
            ,{answer: "", check: false, sel: false}
            ,{answer: "", check: false, sel: false}
            ,{answer: "", check: true, sel: false}
        ]}
        ,{id: 1111
        ,question: ""
        ,answers: [
            {answer: "", check: false, sel: false},
            ,{answer: "", check: false, sel: false}
            ,{answer: "", check: false, sel: false}
            ,{answer: "", check: true, sel: false}
        ]}
    ];
    
    var currQuizId = 1;
    
    var findQuiz = function (quizId) {
            return quizCatalog.filter(function(quizItem) { return quizItem.id == quizId; })[0];
    };
    
    return {
    
        setNextQuiz: function() {
            ++currQuizId;
        }
    
        ,getCurrQuiz: function () {
            var quizdata = findQuiz(currQuizId);
            angular.forEach(quizdata.answers, function (value, key) { value.sel = false; });
            quizdata.start = Date(); //oder besser "new Date()"?
            //quizdata.answerResultText = "sorry!"
            //quizdata.done = true;
            return quizdata;
        }
        
        ,setCurrQuizAnswer: function (answerIdx) {
            var quizObj = findQuiz(currQuizId);
            var answerObj = quizObj.answers;
         
            // leave if already set
            if (quizObj.done != undefined) {
                return;
            }
         
            // assuming correct answer
            quizObj.answerResultText = "well done!" // could be an array with random selection
            var correctAnswer = true;
         
            quizObj.done = Date();
            answerObj[answerIdx].sel = true;
         
            // check correctness of answer
            for (var i=0; i < answerObj.length; ++i) {
                if (answerObj[i].check == true) {
                    answerObj[i].class = 'goodanswer';
                }
                if ((answerObj[i].check == false) && (i == answerIdx)) {
                    answerObj[i].class = 'bullshit';
                    quizObj.footerClass = ""
                    quizObj.answerResultText = "sorry!" // could be an array with random selection
                    correctAnswer = false;
                }
            }
            return correctAnswer;
        }
    }
});

