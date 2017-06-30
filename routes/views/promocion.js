var keystone = require('keystone');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;
	var currentMonth = new Date().getMonth();
	var currentYear = new Date().getFullYear();

	var start = new Date(currentYear, currentMonth, 1);
	var end = new Date(currentYear, currentMonth, 30);
	// locals.section is used to set the currently selected
	// item in the header navigation.
	// locals.section = 'promocion';
	locals.section = 'comercio';
	locals.data = {
		promoActuales:[],
		promoAntiguas:[],
		category:"Valores Agregados"
	}

	view.query('comercio', keystone.list('Comercio').model.find());

	view.on('init', function(next){
    var q = keystone.list('Promocion').model.find({
      month: currentMonth,
			year: currentYear
    });

    q.exec(function(err, result){
			locals.data.promoActuales = result
      next(err);
    });

  });

	view.on('init', function(next){
    var q = keystone.list('Promocion').model.find({
      month: currentMonth-1,
			year: currentYear-1
    });

    q.exec(function(err, result){
			locals.data.promoAntiguas = result
      next(err);
    });

  });

	// Render the view
	view.render('promocion');
};
