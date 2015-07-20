var express = require('express');
var router = express.Router();

var quizControl = require('../controllers/quiz_controller');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index',
    {
        title: 'Quiz',
        text: 'El portal donde podrá crear sus propios juegos!'
    });
});

/* GET quizes and answer pages */
router.get('/quizes/question', quizControl.question);
router.get('/quizes/answer', quizControl.answer);

/* GET author page */
router.get('/author', function(req, res) {
    res.redirect('https://github.com/aleprog/quiz_mod06');
    console.log('---> redirecting to personal page');
});

module.exports = router;
