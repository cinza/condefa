var keystone = require('keystone');
var Socio = keystone.list('NoticiaSocio');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;
	var currentMonth = new Date().getMonth()+1;
	var currentYear = new Date().getFullYear();


	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'socio';
  locals.data = {
		socioNoticia:[],
		socioNoticiaAntigua:[],
		socioPromo:[],
		socioPromoAntigua:[]
  };

	view.query('socio', keystone.list('Socio').model.find());


		// queries for socio news from noticia category

		view.on('init', function(next){
	    Socio.paginate({
	      page: req.query.pageNoticia || 1,
	      perPage: 9,
	      maxPages: 10,
				filters:{'month': currentMonth, 'year': currentYear, 'category':'noticia'}

	    })

	    .sort('-createdAt')
	    .exec(function(err, results){
	      locals.data.socioNoticia = results;
	      next(err);
	    });
	  });

		view.on('init', function(next){
	    Socio.paginate({
	      page: req.query.pageNoticia || 1,
	      perPage: 9,
	      maxPages: 10,
				filters:{'month': currentMonth-1, 'year': currentYear-1, 'category':'noticia'}

	    })

    .sort('-createdAt')
    .exec(function(err, results){
      locals.data.socioNoticiaAntigua = results;
      next(err);
    });
  });

	// queries from socio category "promocion"
	view.on('init', function(next){
		Socio.paginate({
			page: req.query.pagePromo || 1,
			perPage: 9,
			maxPages: 10,
			filters:{'month': currentMonth, 'year': currentYear, 'category':'promocion'}

		})

		.sort('-createdAt')
		.exec(function(err, results){
			locals.data.socioPromo = results;
			next(err);
		});
	});

	view.on('init', function(next){
		Socio.paginate({
			page: req.query.pagePromo || 1,
			perPage: 9,
			maxPages: 10,
			filters:{'month': currentMonth-1, 'year': currentYear-1, 'category':'promocion'}

		})

		.sort('-createdAt')
		.exec(function(err, results){
			locals.data.socioPromoAntigua = results;
			next(err);
		});
	});


	//
	// Render the view
	view.render('socio');
};
