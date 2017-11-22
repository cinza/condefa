var keystone = require('keystone');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;
	var q;
	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'noticia';
	locals.section = 'salud';
	locals.section = 'saludMenu'
	locals.data = {
		noticias:[],
		noticiaEn:[],
		noticiaFeb:[],
		noticaMar:[],
		noticiaAbr:[],
		noticiaMay:[],
		noticiaJun:[],
		noticiaJul:[],
		noticiaAgo:[],
		noticiaSept:[],
		noticiaOct:[],
		noticiaNov:[],
		noticiaDic:[],
	}

	view.query('salud', keystone.list('Salud').model.find());
	view.query('noticia', keystone.list('Noticia').model.find());
	view.on('init', function(next){

		var q = keystone.list('Noticia').model.find({
			month: 1
		});
		q.exec(function(err, result){
			locals.data.noticiaEn = result
			next(err);
		});


	});

	view.on('init', function(next){
		var q2 = keystone.list('Noticia').model.find({
			month:2
		});

		q2.exec(function(err, result){
			locals.data.noticiaFeb = result
			next(err);
		});
	});

	view.on('init', function(next){
		var q3 = keystone.list('Noticia').model.find({
			month:3
		});

		q3.exec(function(err, result){
			locals.data.noticiaMar = result
			next(err);
		});
	});

	view.on('init', function(next){
		var q4 = keystone.list('Noticia').model.find({
			month:4
		});

		q4.exec(function(err, result){
			locals.data.noticiaAbr = result
			next(err);
		});
	});

	view.on('init', function(next){
		var q5 = keystone.list('Noticia').model.find({
			month:5
		});

		q5.exec(function(err, result){
			locals.data.noticiaMay = result
			next(err);
		});
	});

	view.on('init', function(next){
		var q6 = keystone.list('Noticia').model.find({
			month:6
		});

		q6.exec(function(err, result){
			locals.data.noticiaJun = result

			next(err);
		});
	});

	view.on('init', function(next){
		var q7 = keystone.list('Noticia').model.find({
			month:7
		});

		q7.exec(function(err, result){
			locals.data.noticiaJul = result
			next(err);
		});
	});
	view.on('init', function(next){
		var q8 = keystone.list('Noticia').model.find({
			month:8
		});

		q8.exec(function(err, result){
			locals.data.noticiaAgo = result
			next(err);
		});
	});
	view.on('init', function(next){
		var q9 = keystone.list('Noticia').model.find({
			month:9
		});

		q9.exec(function(err, result){
			locals.data.noticiaSept = result
			next(err);
		});
	});
	view.on('init', function(next){
		var q10 = keystone.list('Noticia').model.find({
			month:10
		});

		q10.exec(function(err, result){
			locals.data.noticiaOct = result
			next(err);
		});

	});
	view.on('init', function(next){
		var q11 = keystone.list('Noticia').model.find({
			month:11
		});

		q11.exec(function(err, result){
			locals.data.noticiaNov = result
			next(err);
		});
	});
	view.on('init', function(next){
		var q12 = keystone.list('Noticia').model.find({
			month:12
		});
		q12.exec(function(err, result){
			locals.data.noticiaDic = result
			next(err);
		});
	});

	// Render the view
	view.render('noticia');
};
