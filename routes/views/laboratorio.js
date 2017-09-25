var keystone = require('keystone');
var Laboratorio = keystone.list('NoticiaLab');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;
	var currentMonth = new Date().getMonth()+1;
	var currentYear = new Date().getFullYear();


	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'laboratorio';
  locals.data = {
    laboratorioNoticia:[],
		laboratorioNoticiaAntiguo:[],
		laboratorioPromo:[],
		laboratorioPromoAntiguo:[]
	};

	view.query('laboratorio', keystone.list('Laboratorio').model.find());

  view.on('init', function(next){
    Laboratorio.paginate({
      page: req.query.pageNoticia || 1,
      perPage: 9,
      maxPages: 10,
			filters:{'month': currentMonth, 'year': currentYear, 'category':'noticia'}

    })

    .sort('-createdAt')
    .exec(function(err, results){
      locals.data.laboratorioNoticia = results;
      next(err);
    });
  });

	view.on('init', function(next){
    Laboratorio.paginate({
      page: req.query.pageNoticia || 1,
      perPage: 9,
      maxPages: 10,
			filters:{'month': currentMonth-1, 'year': currentYear-1,'category':'noticia' }

    })

    .sort('-createdAt')
    .exec(function(err, results){
      locals.data.laboratorioNoticiaAntiguo = results;
      next(err);
    });
  });

	// queries from socio category "promocion"
	view.on('init', function(next){
		Laboratorio.paginate({
			page: req.query.pagePromo || 1,
			perPage: 9,
			maxPages: 10,
			filters:{'month': currentMonth, 'year': currentYear, 'category':'promocion'}

		})

		.sort('-createdAt')
		.exec(function(err, results){
			locals.data.laboratorioPromo = results;
			next(err);
		});
	});

	view.on('init', function(next){
		Laboratorio.paginate({
			page: req.query.pagePromo || 1,
			perPage: 9,
			maxPages: 10,
			filters:{'month': currentMonth-1, 'year': currentYear-1, 'category':'promocion'}

		})

		.sort('-createdAt')
		.exec(function(err, results){
			locals.data.laboratorioPromoAntiguo = results;
			next(err);
		});
	});


	// Render the view
	view.render('laboratorio');
};
