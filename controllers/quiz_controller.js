var models = require('../models/models.js');

// Autoload - factoriza el código si ruta incluye :quizId
exports.load = function(req, res, next, quizId){
	models.Quiz.find(quizId).then(
		function(quiz){
			if (quiz) {
				req.quiz = quiz;
				next();
			} else  {
<<<<<<< HEAD
				next(new Error('No existe quizId=' + quizId))
			}
		}
	).catch(function(error) { next(error)});
=======
				next(new Error('No existe quizId=' + quizId));
			}
		}
	).catch(function(error) { next(error); });
>>>>>>> 2b79af06844b59e7c4a7cf4a8d2dcea5fc160118
};


// GET quizes
exports.index = function(req, res) {

	if (req.query.search) {
		var p_buscar = (req.query.search||'').replace(" ","%");
		models.Quiz.findAll({where:["pregunta like ?", '%'+p_buscar+'%'],order:'pregunta ASC'}).then(function(quizes){
			res.render('quizes/index', {quizes: quizes});
		}).catch(function(error){ next(error); })
	} else {
		models.Quiz.findAll().then(function(quizes) {
<<<<<<< HEAD
			res.render('quizes/index.ejs', {quizes: quizes, errors: []});
		}).catch(function(error) { next(error)});
=======
			res.render('quizes/index', {quizes: quizes});
		}).catch(function(error) { next(error); })
>>>>>>> 2b79af06844b59e7c4a7cf4a8d2dcea5fc160118
	}
	
};

// GET /quizes/:id
exports.show = function(req, res) {
<<<<<<< HEAD
	res.render('quizes/show', {quiz: req.quiz, errors: []});
=======
	res.render('quizes/show', {quiz: req.quiz});
>>>>>>> 2b79af06844b59e7c4a7cf4a8d2dcea5fc160118
};

// GET /quizes/:id/answer
exports.answer = function(req, res) {
	var resultado = 'Incorrecto';
	if (req.query.respuesta === req.quiz.respuesta){
		resultado = 'Correcto'
	}
<<<<<<< HEAD
	res.render('quizes/answer', {quiz: req.quiz, respuesta: resultado, errors: []});
};
exports.author = function(req, res) {
	res.render('quizes/author', {autores: 'Autores de la práctica', errors: []});
};


// GET /quizes/new
exports.new = function(req, res) {
	var quiz = models.Quiz.build( // crea objeto quiz
		{pregunta: "Pregunta", respuesta:"Respuesta"}
	);

	res.render('quizes/new', {quiz: quiz, errors: []});
};


// POST /quizes/create
exports.create = function(req, res) {
	var quiz = models.Quiz.build(req.body.quiz);

	quiz
	.validate()
	.then(
		function(err){
			if (err) {
				res.render('quizes/new', {quiz: quiz, errors: err.errors});
			} else {
				quiz  // save: guarda en DB campos pregunta y respuesta
				.save({fields: ["pregunta", "respuesta"]})
				.then( function() { res.redirect('/quizes')})
			} // res.redirect: REdirección HTTP a lista de preguntas
		}
	);
};

// GET /quizes/:id/edit
exports.edit = function(req, res) {
	var quiz = req.quiz; // autoload de instancia de quiz

	res.render('quizes/edit', {quiz: quiz, errors: []});
};

// PUT /quizes/:id
exports.update = function(req, res) {
	req.quiz.pregunta = req.body.quiz.pregunta;
	req.quiz.respuesta = req.body.quiz.respuesta;

	req.quiz
	.validate()
	.then(
		function(err){
			if (err) {
				res.render('quizes/edit', {quiz: req.quiz, errors: err.errors});
			} else {
				req.quiz // save: guarda campos pregunta y respuesta
				.save( {fields: ["pregunta", "respuesta"]})
				.then( function() {res.redirect('/quizes'); });
			} // Redireccion HTTP a la lista de preguntas (URL relativo)
		}
	);
};

// DELETE /quizes/:id
exports.destroy = function (req, res) {
	req.quiz.destroy().then( function() {
		res.redirect('/quizes');
	}).catch(function(error){next(error)});
};
=======
	res.render('quizes/answer', {quiz: req.quiz, respuesta: resultado});
};
exports.author = function(req, res) {
	res.render('quizes/author', {autores: 'Autores de la práctica'})
};
>>>>>>> 2b79af06844b59e7c4a7cf4a8d2dcea5fc160118
