// Definición del modelo de Quiz

module.exports = function (sequelize, DataTypes) {
<<<<<<< HEAD
	return sequelize.define(
		'Quiz',
			{ pregunta: {
				type: DataTypes.STRING,
				validate: { notEmpty: {msg: "-> Falta Pregunta"}}
			  },
			  respuesta: {
			  	type: DataTypes.STRING,
			  	validate: { notEmpty: {msg: "-> Falta Respuesta"}}
			  }
			}
	);
=======
	return sequelize.define('Quiz',
				{ pregunta: DataTypes.STRING,
				  respuesta: DataTypes.STRING,
				});
>>>>>>> 2b79af06844b59e7c4a7cf4a8d2dcea5fc160118
}