var keystone = require('keystone');
var Plan = keystone.list('NoticiaPaciente');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;
	var currentMonth = new Date().getMonth()+1;
	var currentYear = new Date().getFullYear();


	// locals.section is used to set the currently selected
	// item in the header navigation.
	locals.section = 'plan';
  locals.data = {
    planPaciente:[],
		planPacienteAntiguas:[]
  };
	// plan banner details
	view.query('plan', keystone.list('Plan').model.find());

  view.on('init', function(next){
    Plan.paginate({
      page: req.query.page || 1,
      perPage: 9,
      maxPages: 10,
			filters:{'month': currentMonth, 'year': currentYear}

    })

    .sort('-createdAt')
    .exec(function(err, results){
      locals.data.planPaciente = results;
      next(err);
    });
  });

	view.on('init', function(next){
    Plan.paginate({
      page: req.query.page || 1,
      perPage: 9,
      maxPages: 10,
			filters:{'month': currentMonth-1, 'year': currentYear-1}

    })

    .sort('-createdAt')
    .exec(function(err, results){
      locals.data.planPacienteAntiguas = results;
      next(err);
    });
  });

	// Render the view
	view.render('planPaciente');
};
