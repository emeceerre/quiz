var express = require('express');
var router = express.Router();

var quizController = require('../controllers/quiz_controller');

/* GET home page. */
router.get('/', function(req, res) {
<<<<<<< HEAD
  res.render('index', { title: 'Quiz' , errors: []});
=======
  res.render('index', { title: 'Quiz' });
>>>>>>> 2b79af06844b59e7c4a7cf4a8d2dcea5fc160118
});

// Autoload de comandos con :quizId
router.param('quizId', quizController.load);  // autoload :quizId

router.get('/quizes/author', quizController.author);

//Definicion de rutas de /quizes
router.get('/quizes', quizController.index);
router.get('/quizes/:quizId(\\d+)', quizController.show);
router.get('/quizes/:quizId(\\d+)/answer', quizController.answer);

<<<<<<< HEAD
router.get('/quizes/new', quizController.new);
router.post('/quizes/create', quizController.create);

router.get('/quizes/:quizId(\\d+)/edit', quizController.edit);
router.put('/quizes/:quizId(\\d+)', quizController.update);

router.delete('/quizes/:quizId(\\d+)', quizController.destroy);

=======
>>>>>>> 2b79af06844b59e7c4a7cf4a8d2dcea5fc160118
module.exports = router;
